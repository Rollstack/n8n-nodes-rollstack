// A stand-in for n8n's IExecuteFunctions: it answers getNodeParameter from `params`, and httpRequestWithAuthentication
// with `responses` in order, recording each request
import { createRequire } from 'node:module';

export const require = createRequire(import.meta.url);

export function context({
	params = {},
	responses = [],
	items = [{ json: {} }],
	continueOnFail = false,
} = {}) {
	const requests = [];
	return {
		requests,
		getInputData: () => items,
		getNodeParameter(name, _itemIndex, fallback) {
			if (name in params) return params[name];
			if (fallback !== undefined) return fallback;
			throw new Error(`No value for the parameter ${name}`);
		},
		getNode: () => ({
			id: 'test',
			name: 'Rollstack',
			type: '@rollstack/n8n-nodes-rollstack.rollstack',
			typeVersion: 1,
			position: [0, 0],
			parameters: {},
		}),
		continueOnFail: () => continueOnFail,
		helpers: {
			async httpRequestWithAuthentication(credential, options) {
				requests.push({ credential, options });
				const next = responses.shift();
				if (next === undefined) throw new Error('No response left for this request');
				if (next instanceof Error) throw next;
				return typeof next === 'function' ? next(options) : next;
			},
			async prepareBinaryData(buffer, fileName, mimeType) {
				return { data: buffer.toString('base64'), fileName, mimeType };
			},
		},
	};
}

/** A JSON answer as httpRequestWithAuthentication returns it with returnFullResponse and encoding text. */
export function json(status, body, headers = {}) {
	return {
		statusCode: status,
		headers: { 'content-type': 'application/json', ...headers },
		body: typeof body === 'string' ? body : JSON.stringify(body),
	};
}
