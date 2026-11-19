import type { IDataObject, IExecuteFunctions, IHttpRequestOptions, JsonObject } from 'n8n-workflow';
import { NodeApiError, randomString, sleep } from 'n8n-workflow';

// Every operation is one `tools/call` on Rollstack's MCP server: a JSON-RPC message sent over HTTPS, signed with the
// credential's API key. Calls go through the MCP server rather than the REST API because there Rollstack makes the
// user confirm, in Rollstack, a call that emails people or deletes reports, whatever the kind of key.
export const MCP_URL = 'https://api.rollstack.com/public/v1/mcp';
const PROTOCOL_VERSION = '2025-06-18';
const CREDENTIAL = 'rollstackApi';
const USER_AGENT = 'n8n-nodes-rollstack/0.1.0';

// A call waits up to 30 seconds on Rollstack's side (waitSeconds) and importing a deck can take a minute, so the time
// allowed for an answer leaves room for both
const TIMEOUT_MS = 90_000;

// Gateway answers worth another try: reads are safe to repeat, and writes carry an idempotency key
const RETRY_STATUSES = new Set([502, 503, 504]);
const RETRY_DELAYS_MS = [1_000, 2_000];

// The code of a call that waits for the user to confirm it in Rollstack, such as a run that emails the report
export const CONFIRMATION_REQUIRED = 'confirmation-required';

interface Reply {
	status: number;
	body: unknown;
	headers: Record<string, string>;
}

/** What a tool answered: its JSON, and the images it sent, as base64 data with their MIME type. */
export interface ToolResult {
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

function request(method: string, params: IDataObject): IDataObject {
	return { jsonrpc: '2.0', id: randomString(16), method, params };
}

function answers(message: unknown, id: unknown): message is IDataObject {
	return isObject(message) && message.id === id && ('result' in message || 'error' in message);
}

/** The JSON-RPC answer to `id` in a stream of server-sent events, or undefined when it has none. */
export function readEventStream(text: string, id: unknown): unknown {
	let data: string[] = [];
	for (const line of `${text}\n\n`.split(/\r?\n/)) {
		if (line.startsWith('data:')) {
			data.push(line.slice(5).replace(/^ /, ''));
			continue;
		}
		if (line !== '') continue;
		// A blank line ends an event
		const message = parseJson(data.join('\n'));
		data = [];
		if (answers(message, id)) return message;
	}
	return undefined;
}

function header(headers: Record<string, unknown>, name: string): string {
	const found = Object.entries(headers).find(([key]) => key.toLowerCase() === name.toLowerCase());
	return found ? String(found[1]) : '';
}

/** Whether `body` is an error of the MCP transport itself, rather than one of Rollstack's API. */
function isRpcError(body: unknown): boolean {
	return isObject(body) && 'jsonrpc' in body && isObject(body.error);
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

async function postOnce(
	this: IExecuteFunctions,
	message: IDataObject,
	headers: Record<string, string>,
): Promise<Reply> {
	const options: IHttpRequestOptions = {
		method: 'POST',
		url: MCP_URL,
		headers: {
			// The server answers a call as JSON or as an event stream, and refuses a client that doesn't accept both
			Accept: 'application/json, text/event-stream',
			'Content-Type': 'application/json',
			'User-Agent': USER_AGENT,
			...headers,
		},
		body: message,
		encoding: 'text',
		json: false,
		returnFullResponse: true,
		ignoreHttpStatusErrors: true,
		timeout: TIMEOUT_MS,
	};
	const response = (await this.helpers.httpRequestWithAuthentication.call(
		this,
		CREDENTIAL,
		options,
	)) as {
		body: unknown;
		headers: Record<string, string>;
		statusCode: number;
	};
	const responseHeaders = response.headers ?? {};
	let body = response.body;
	if (typeof body === 'string') {
		body = header(responseHeaders, 'content-type').startsWith('text/event-stream')
			? readEventStream(body, message.id)
			: parseJson(body);
	}
	return { status: response.statusCode, body, headers: responseHeaders };
}

async function post(
	this: IExecuteFunctions,
	message: IDataObject,
	headers: Record<string, string>,
): Promise<Reply> {
	for (let attempt = 0; ; attempt++) {
		const delay = RETRY_DELAYS_MS[attempt];
		try {
			const reply = await postOnce.call(this, message, headers);
			if (delay === undefined || !RETRY_STATUSES.has(reply.status)) return reply;
		} catch (error) {
			if (isTimeout(error)) {
				// Not sent again: the call may be running, and waiting another 90 seconds helps nobody
				throw new NodeApiError(this.getNode(), error as JsonObject, {
					message: `Rollstack did not answer within ${TIMEOUT_MS / 1000} seconds`,
					description: 'The call may still have run: check in Rollstack before you run it again.',
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

/** Starts an MCP session and returns the headers that continue it. */
async function openSession(this: IExecuteFunctions): Promise<Record<string, string>> {
	const opening = {
		protocolVersion: PROTOCOL_VERSION,
		capabilities: {},
		clientInfo: { name: 'n8n-nodes-rollstack', version: '0.1.0' },
	};
	const reply = await post.call(this, request('initialize', opening), {});
	const result = isObject(reply.body) ? reply.body.result : undefined;
	if (reply.status !== 200 || !isObject(result)) throw httpError.call(this, reply);
	const headers: Record<string, string> = {
		'MCP-Protocol-Version': String(result.protocolVersion ?? PROTOCOL_VERSION),
	};
	const session = header(reply.headers, 'mcp-session-id');
	if (session) headers['Mcp-Session-Id'] = session;
	await post.call(this, { jsonrpc: '2.0', method: 'notifications/initialized' }, headers);
	return headers;
}

/** Runs one Rollstack tool and returns what it answered. Throws a NodeApiError when it failed. */
export async function callTool(
	this: IExecuteFunctions,
	name: string,
	args: IDataObject,
): Promise<ToolResult> {
	const message = request('tools/call', { name, arguments: args });
	let reply = await post.call(this, message, { 'MCP-Protocol-Version': PROTOCOL_VERSION });
	if ((reply.status === 400 || reply.status === 404) && isRpcError(reply.body)) {
		// Rollstack's server answers each call on its own, without a session. Should it start to ask for one, which a
		// server does with this answer, open a session and send the call again
		reply = await post.call(this, message, await openSession.call(this));
	}
	return toolResult.call(this, reply);
}

export function toolResult(this: IExecuteFunctions, reply: Reply): ToolResult {
	const result = isObject(reply.body) ? reply.body.result : undefined;
	if (reply.status !== 200 || !isObject(result)) throw httpError.call(this, reply);

	const blocks = Array.isArray(result.content) ? (result.content as unknown[]) : [];
	const texts: string[] = [];
	const images: ToolResult['images'] = [];
	for (const block of blocks) {
		if (!isObject(block)) continue;
		if (block.type === 'text' && typeof block.text === 'string') texts.push(block.text);
		if (
			block.type === 'image' &&
			typeof block.data === 'string' &&
			typeof block.mimeType === 'string'
		)
			images.push({ data: block.data, mimeType: block.mimeType });
	}
	let json: IDataObject | undefined = isObject(result.structuredContent)
		? result.structuredContent
		: undefined;
	if (!json) {
		for (const text of texts) {
			const value = parseJson(text);
			if (isObject(value)) {
				json = value;
				break;
			}
			if (Array.isArray(value)) {
				json = { items: value };
				break;
			}
		}
	}
	json ??= texts.length ? { text: texts.join('\n') } : {};

	// A call that waits for the user's confirmation didn't fail: its answer carries the link they confirm it at
	if (result.isError === true && json.code !== CONFIRMATION_REQUIRED) {
		const text =
			typeof json.message === 'string' && json.message ? json.message : texts.join('\n').trim();
		throw new NodeApiError(this.getNode(), json as JsonObject, {
			message: withCode(text || 'Rollstack answered an error without a message', json.code),
			httpCode: String(reply.status),
		});
	}
	return { json, images };
}

/** The error for an answer that isn't a tool result: Rollstack's `{ code, message }` or a JSON-RPC error. */
function httpError(this: IExecuteFunctions, reply: Reply): NodeApiError {
	const body = isObject(reply.body) ? reply.body : {};
	const source = isObject(body.error) ? body.error : body;
	const described =
		typeof source.message === 'string' && source.message ? source.message : undefined;
	const code =
		typeof source.code === 'string' || typeof source.code === 'number' ? source.code : undefined;
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
