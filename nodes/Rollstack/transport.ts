import type { IDataObject, IExecuteFunctions, IHttpRequestOptions, JsonObject } from 'n8n-workflow';
import { NodeApiError, NodeOperationError, sleep } from 'n8n-workflow';

import type { ToolSpec } from './types';

// Every operation is one request to Rollstack's REST API (https://docs.rollstack.com/api), signed with the credential's
// API key
export const API_URL = 'https://api.rollstack.com/public/v1';
const CREDENTIAL = 'rollstackApi';
export const USER_AGENT = 'n8n-nodes-rollstack/0.2.1';

// A request waits up to 30 seconds on Rollstack's side (waitSeconds) and importing a deck can take a minute, so the
// time allowed for an answer leaves room for both
const TIMEOUT_MS = 90_000;

// Gateway answers worth another try: reads are safe to repeat, and writes carry an idempotency key
const RETRY_STATUSES = new Set([502, 503, 504]);
const RETRY_DELAYS_MS = [1_000, 2_000];

// The code of a call that waits for the user to confirm it in Rollstack. With an API key, Rollstack runs every call at
// once, but should it ask for a confirmation, the answer carries the link to confirm at, and isn't an error
export const CONFIRMATION_REQUIRED = 'confirmation-required';

// Endpoints that answer images as base64 data in a list of their answer, which the node returns as binary data
const IMAGE_LISTS: Record<string, string> = { getReportSlideImages: 'slides' };

interface Reply {
	status: number;
	body: unknown;
	headers: Record<string, string>;
}

/** What an endpoint answered: its JSON, and the images it sent, as base64 data with their MIME type. */
export interface Result {
	json: IDataObject;
	images: Array<{ data: string; mimeType: string }>;
}

function isObject(value: unknown): value is IDataObject {
	return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function parseJson(text: string): unknown {
	try {
		return JSON.parse(text);
	} catch {
		return undefined;
	}
}

function header(headers: Record<string, unknown>, name: string): string {
	const found = Object.entries(headers).find(([key]) => key.toLowerCase() === name.toLowerCase());
	return found ? String(found[1]) : '';
}

function isTimeout(error: unknown): boolean {
	const { code, message } = (isObject(error) ? error : {}) as { code?: unknown; message?: unknown };
	return (
		code === 'ECONNABORTED' ||
		code === 'ETIMEDOUT' ||
		(typeof message === 'string' && /timeout/i.test(message))
	);
}

function isConnectionError(error: unknown): boolean {
	const { code } = (isObject(error) ? error : {}) as { code?: unknown };
	return (
		typeof code === 'string' &&
		['ECONNRESET', 'ECONNREFUSED', 'ENOTFOUND', 'EAI_AGAIN', 'EPIPE'].includes(code)
	);
}

/** The endpoint's path with its path parameters filled in. */
function pathOf(this: IExecuteFunctions, spec: ToolSpec, params: IDataObject): string {
	return spec.path.replace(/\{(\w+)\}/g, (_, name: string) => {
		const value = params[name];
		if (value === undefined || value === null || String(value).trim() === '')
			throw new NodeOperationError(this.getNode(), `The parameter ${name} is empty`);
		return encodeURIComponent(String(value));
	});
}

/** The request an operation sends, from the arguments buildArguments made. */
export function requestOf(
	this: IExecuteFunctions,
	spec: ToolSpec,
	args: IDataObject,
): IHttpRequestOptions {
	const params = isObject(args.params) ? args.params : {};
	const query = isObject(args.query) ? args.query : undefined;
	const body = isObject(args.body) ? args.body : undefined;
	const headers: Record<string, string> = { Accept: 'application/json', 'User-Agent': USER_AGENT };
	if (typeof args.idempotencyKey === 'string' && args.idempotencyKey)
		headers['Idempotency-Key'] = args.idempotencyKey;
	const options: IHttpRequestOptions = {
		method: spec.method,
		url: `${API_URL}${pathOf.call(this, spec, params)}`,
		headers,
		encoding: 'text',
		json: false,
		returnFullResponse: true,
		ignoreHttpStatusErrors: true,
		timeout: TIMEOUT_MS,
	};
	if (query && Object.keys(query).length) {
		options.qs = query;
		// A list in the query repeats its parameter, as in ?slideIds=a&slideIds=b
		options.arrayFormat = 'repeat';
	}
	if (body && spec.method !== 'GET') {
		headers['Content-Type'] = 'application/json';
		options.body = JSON.stringify(body);
	}
	return options;
}

async function sendOnce(this: IExecuteFunctions, options: IHttpRequestOptions): Promise<Reply> {
	const response = (await this.helpers.httpRequestWithAuthentication.call(
		this,
		CREDENTIAL,
		options,
	)) as {
		body: unknown;
		headers: Record<string, string>;
		statusCode: number;
	};
	const body = response.body;
	return {
		status: response.statusCode,
		body: typeof body === 'string' ? (body.trim() === '' ? undefined : parseJson(body)) : body,
		headers: response.headers ?? {},
	};
}

async function send(this: IExecuteFunctions, options: IHttpRequestOptions): Promise<Reply> {
	for (let attempt = 0; ; attempt++) {
		const delay = RETRY_DELAYS_MS[attempt];
		try {
			const reply = await sendOnce.call(this, options);
			if (delay === undefined || !RETRY_STATUSES.has(reply.status)) return reply;
		} catch (error) {
			if (isTimeout(error)) {
				// Not sent again: the request may be running, and waiting another 90 seconds helps nobody
				throw new NodeApiError(this.getNode(), error as JsonObject, {
					message: `Rollstack did not answer within ${TIMEOUT_MS / 1000} seconds`,
					description:
						'The request may still have run: check in Rollstack before you run it again.',
				});
			}
			if (!isConnectionError(error)) throw new NodeApiError(this.getNode(), error as JsonObject);
			if (delay === undefined) {
				throw new NodeApiError(this.getNode(), error as JsonObject, {
					message: 'Could not reach Rollstack',
					description: 'Check that this n8n instance can make HTTPS requests to api.rollstack.com.',
				});
			}
		}
		await sleep(delay);
	}
}

/** Calls the endpoint of an operation and returns what it answered. Throws a NodeApiError when it failed. */
export async function callEndpoint(
	this: IExecuteFunctions,
	spec: ToolSpec,
	args: IDataObject,
): Promise<Result> {
	const reply = await send.call(this, requestOf.call(this, spec, args));
	return resultOf.call(this, spec, reply);
}

export function resultOf(this: IExecuteFunctions, spec: ToolSpec, reply: Reply): Result {
	const { status, body } = reply;
	if (status === 428 && isObject(body) && body.code === CONFIRMATION_REQUIRED)
		return { json: body, images: [] };
	if (status < 200 || status >= 300) throw httpError.call(this, reply);

	// Only a 204 answers no content. Any other success must answer JSON the node can read
	let json: IDataObject;
	if (status === 204) json = { success: true };
	else if (isObject(body)) json = body;
	else if (Array.isArray(body)) json = { items: body as IDataObject[] };
	else throw httpError.call(this, reply);

	const images: Result['images'] = [];
	const list = IMAGE_LISTS[spec.tool];
	if (list && Array.isArray(json[list])) {
		json = {
			...json,
			[list]: (json[list] as unknown[]).map((entry) => {
				if (
					!isObject(entry) ||
					typeof entry.data !== 'string' ||
					typeof entry.mimeType !== 'string'
				)
					return entry;
				images.push({ data: entry.data, mimeType: entry.mimeType });
				const rest: IDataObject = { ...entry };
				delete rest.data;
				return { ...rest, binaryProperty: `image${images.length}` };
			}),
		};
	}
	return { json, images };
}

/** The error for an answer that failed: Rollstack's `{ code, message }`, or what the status says. */
function httpError(this: IExecuteFunctions, reply: Reply): NodeApiError {
	const body = isObject(reply.body) ? reply.body : {};
	const described = typeof body.message === 'string' && body.message ? body.message : undefined;
	const code =
		typeof body.code === 'string' || typeof body.code === 'number' ? body.code : undefined;
	let message: string;
	let description: string | undefined;
	if (reply.status === 401) {
		message = described
			? `Rollstack did not accept the API key: ${described}`
			: 'Rollstack did not accept the API key';
		description =
			'Check the key in the Rollstack API credential, or create a new one in Rollstack under Settings > Connected apps.';
	} else if (described) {
		message = described;
	} else if (reply.status >= 500) {
		message = `Rollstack is unavailable right now (HTTP ${reply.status})`;
		description = 'Try again in a moment.';
	} else if (reply.status < 300) {
		message = 'Rollstack sent an answer this node cannot read';
	} else {
		message = `Rollstack answered HTTP ${reply.status} without a message`;
	}
	const retryAfter = header(reply.headers, 'retry-after');
	if (reply.status === 429 && retryAfter)
		description = `Wait ${retryAfter} seconds before you run it again.`;
	return new NodeApiError(this.getNode(), body as JsonObject, {
		message: withCode(message, code),
		description,
		httpCode: String(reply.status),
	});
}

function withCode(text: string, code: unknown): string {
	return code !== undefined && code !== null && code !== '' ? `${text} (${String(code)})` : text;
}
