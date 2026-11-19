import assert from 'node:assert/strict';
import { test } from 'node:test';

import { context, json, require, toolAnswer } from './helpers.mjs';

const { callTool, readEventStream, MCP_URL } = require('../dist/nodes/Rollstack/transport.js');

test('a call is one signed tools/call on the MCP server', async () => {
	const ctx = context({
		responses: [toolAnswer({ content: [], structuredContent: { reports: [], nextCursor: null } })],
	});
	const result = await callTool.call(ctx, 'listReports', { query: { limit: 5 } });
	assert.deepEqual(result.json, { reports: [], nextCursor: null });
	const [{ credential, options }] = ctx.requests;
	assert.equal(credential, 'rollstackApi');
	assert.equal(options.url, MCP_URL);
	assert.equal(options.method, 'POST');
	assert.equal(options.body.method, 'tools/call');
	assert.deepEqual(options.body.params, {
		name: 'listReports',
		arguments: { query: { limit: 5 } },
	});
	assert.equal(options.headers.Accept, 'application/json, text/event-stream');
	assert.equal(options.returnFullResponse, true);
	assert.equal(options.ignoreHttpStatusErrors, true);
});

test('an answer without structured content is read from its JSON text', async () => {
	const ctx = context({
		responses: [toolAnswer({ content: [{ type: 'text', text: '{"id":"r1"}' }] })],
	});
	assert.deepEqual((await callTool.call(ctx, 'getReport', {})).json, { id: 'r1' });
});

test('an answer that comes as an event stream', async () => {
	const ctx = context({
		responses: [
			(options) => ({
				statusCode: 200,
				headers: { 'content-type': 'text/event-stream' },
				body: `event: message\ndata: ${JSON.stringify({ jsonrpc: '2.0', id: options.body.id, result: { structuredContent: { ok: true } } })}\n\n`,
			}),
		],
	});
	assert.deepEqual((await callTool.call(ctx, 'getReport', {})).json, { ok: true });
});

test('readEventStream finds the answer to the request among other events', () => {
	const stream = [
		'data: {"jsonrpc":"2.0","method":"notifications/progress"}',
		'',
		'data: {"jsonrpc":"2.0","id":"other","result":{}}',
		'',
		'data: {"jsonrpc":"2.0","id":"mine",',
		'data: "result":{"a":1}}',
		'',
	].join('\n');
	assert.deepEqual(readEventStream(stream, 'mine'), {
		jsonrpc: '2.0',
		id: 'mine',
		result: { a: 1 },
	});
	assert.equal(readEventStream(stream, 'missing'), undefined);
});

test("a tool's error becomes the node's error, with Rollstack's message and code", async () => {
	const ctx = context({
		responses: [
			toolAnswer({
				isError: true,
				content: [{ type: 'text', text: '{"code":"not-found","message":"No report has this id"}' }],
			}),
		],
	});
	await assert.rejects(callTool.call(ctx, 'getReport', {}), /No report has this id \(not-found\)/);
});

test('a call held for confirmation in Rollstack is not an error', async () => {
	const held = {
		code: 'confirmation-required',
		message: 'Confirm it at https://app.rollstack.com/confirm/1',
	};
	const ctx = context({ responses: [toolAnswer({ isError: true, structuredContent: held })] });
	assert.deepEqual((await callTool.call(ctx, 'sendReportEmail', {})).json, held);
});

test('a key Rollstack refuses says so', async () => {
	const ctx = context({
		responses: [json(401, { code: 'unauthorized', message: 'Invalid API key' })],
	});
	await assert.rejects(
		callTool.call(ctx, 'listReports', {}),
		/did not accept the API key: Invalid API key \(unauthorized\)/,
	);
});

test('a gateway error is tried again, with the same message', async () => {
	const ctx = context({
		responses: [json(503, 'Service Unavailable'), toolAnswer({ structuredContent: { ok: true } })],
	});
	assert.deepEqual((await callTool.call(ctx, 'createReport', { idempotencyKey: 'k' })).json, {
		ok: true,
	});
	assert.equal(ctx.requests.length, 2);
	assert.deepEqual(ctx.requests[0].options.body, ctx.requests[1].options.body);
});

test('when the server asks for a session, the node opens one and sends the call again', async () => {
	const ctx = context({
		responses: [
			(options) =>
				json(400, {
					jsonrpc: '2.0',
					id: options.body.id,
					error: { code: -32000, message: 'No session' },
				}),
			(options) =>
				json(
					200,
					{ jsonrpc: '2.0', id: options.body.id, result: { protocolVersion: '2025-06-18' } },
					{ 'mcp-session-id': 's-1' },
				),
			{ statusCode: 202, headers: {}, body: '' },
			toolAnswer({ structuredContent: { ok: true } }),
		],
	});
	assert.deepEqual((await callTool.call(ctx, 'listReports', {})).json, { ok: true });
	const methods = ctx.requests.map((request) => request.options.body.method);
	assert.deepEqual(methods, [
		'tools/call',
		'initialize',
		'notifications/initialized',
		'tools/call',
	]);
	assert.equal(ctx.requests[3].options.headers['Mcp-Session-Id'], 's-1');
});
