// Each operation is one request to Rollstack's REST API, built from the arguments buildArguments makes
import assert from 'node:assert/strict';
import { test } from 'node:test';

import { context, json, require } from './helpers.mjs';

const { callEndpoint, API_URL, USER_AGENT } = require('../dist/nodes/Rollstack/transport.js');
const { toolSpecs } = require('../dist/nodes/Rollstack/generated.js');
const { version } = require('../package.json');

test('a read is one signed GET, with its query', async () => {
	const ctx = context({ responses: [json(200, { reports: [], nextCursor: null })] });
	const result = await callEndpoint.call(ctx, toolSpecs.listReports, { query: { limit: 5 } });
	assert.deepEqual(result.json, { reports: [], nextCursor: null });
	const [{ credential, options }] = ctx.requests;
	assert.equal(credential, 'rollstackApi');
	assert.equal(options.method, 'GET');
	assert.equal(options.url, `${API_URL}/reports`);
	assert.deepEqual(options.qs, { limit: 5 });
	assert.equal(options.body, undefined);
	assert.equal(options.headers.Accept, 'application/json');
	assert.equal(options.returnFullResponse, true);
	assert.equal(options.ignoreHttpStatusErrors, true);
});

test('a write fills in its path, sends its body as JSON, and its idempotency key as a header', async () => {
	const ctx = context({ responses: [json(202, { messageId: 'm1', chatId: 'c1' })] });
	const result = await callEndpoint.call(ctx, toolSpecs.sendReportMessage, {
		params: { id: 'r 1/2' },
		body: { content: 'Build a deck' },
		idempotencyKey: 'n8n-key',
	});
	assert.deepEqual(result.json, { messageId: 'm1', chatId: 'c1' });
	const [{ options }] = ctx.requests;
	assert.equal(options.method, 'POST');
	assert.equal(options.url, `${API_URL}/reports/r%201%2F2/messages`);
	assert.equal(options.headers['Content-Type'], 'application/json');
	assert.equal(options.headers['Idempotency-Key'], 'n8n-key');
	assert.deepEqual(JSON.parse(options.body), { content: 'Build a deck' });
});

test('a list in the query repeats its parameter', async () => {
	const ctx = context({ responses: [json(200, { slides: [] })] });
	await callEndpoint.call(ctx, toolSpecs.getReportContent, {
		params: { id: 'r1' },
		query: { slideIds: ['a', 'b'] },
	});
	const [{ options }] = ctx.requests;
	assert.deepEqual(options.qs, { slideIds: ['a', 'b'] });
	assert.equal(options.arrayFormat, 'repeat');
});

test('an answer with no content, or a list, still becomes one item', async () => {
	const empty = context({ responses: [{ statusCode: 204, headers: {}, body: '' }] });
	const removed = await callEndpoint.call(empty, toolSpecs.deleteMemory, {
		params: { memoryId: 'm1' },
	});
	assert.deepEqual(removed.json, { success: true });
	const listed = context({ responses: [json(200, [{ id: 'c1' }])] });
	assert.deepEqual((await callEndpoint.call(listed, toolSpecs.listConnections, {})).json, {
		items: [{ id: 'c1' }],
	});
});

test('an empty path parameter is a parameter error, before any request', async () => {
	const ctx = context();
	await assert.rejects(
		callEndpoint.call(ctx, toolSpecs.getReport, { params: { id: ' ' } }),
		/The parameter id is empty/,
	);
	assert.equal(ctx.requests.length, 0);
});

test("an error answer becomes the node's error, with Rollstack's message and code", async () => {
	const ctx = context({
		responses: [json(404, { code: 'report-not-found', message: 'No report has this ID' })],
	});
	await assert.rejects(
		callEndpoint.call(ctx, toolSpecs.getReport, { params: { id: 'r1' } }),
		(error) => {
			assert.equal(error.message, 'No report has this ID (report-not-found)');
			assert.equal(error.httpCode, '404');
			return true;
		},
	);
});

test('a call held for confirmation in Rollstack is not an error', async () => {
	const held = {
		code: 'confirmation-required',
		message: 'Confirm it at https://app.rollstack.com/x',
	};
	const ctx = context({ responses: [json(428, held)] });
	const result = await callEndpoint.call(ctx, toolSpecs.sendReportEmail, { params: { id: 'r1' } });
	assert.deepEqual(result.json, held);
});

test('a key Rollstack refuses says so', async () => {
	const ctx = context({
		responses: [
			json(401, { code: 'missing-or-invalid-token', message: 'Missing or invalid token' }),
		],
	});
	await assert.rejects(callEndpoint.call(ctx, toolSpecs.listReports, {}), (error) => {
		assert.match(error.message, /did not accept the API key/);
		assert.equal(error.httpCode, '401');
		return true;
	});
});

test('too many requests says how long to wait', async () => {
	const ctx = context({
		responses: [
			json(
				429,
				{ code: 'rate-limit-exceeded', message: 'Too many requests' },
				{ 'retry-after': '12' },
			),
		],
	});
	await assert.rejects(callEndpoint.call(ctx, toolSpecs.listReports, {}), (error) => {
		assert.equal(error.description, 'Wait 12 seconds before you run it again.');
		return true;
	});
});

test('a gateway error is tried again, with the same request', async () => {
	const ctx = context({ responses: [json(503, 'Service Unavailable'), json(200, { id: 'r1' })] });
	const result = await callEndpoint.call(ctx, toolSpecs.createReport, {
		body: { name: 'Q3' },
		idempotencyKey: 'n8n-key',
	});
	assert.deepEqual(result.json, { id: 'r1' });
	assert.equal(ctx.requests.length, 2);
	assert.deepEqual(ctx.requests[0].options, ctx.requests[1].options);
});

test('slide images come out of the JSON, to be returned as binary data', async () => {
	const data = Buffer.from('jpg').toString('base64');
	const ctx = context({
		responses: [json(200, { slides: [{ id: 's1', mimeType: 'image/jpeg', data }] })],
	});
	const result = await callEndpoint.call(ctx, toolSpecs.getReportSlideImages, {
		params: { id: 'r1' },
		query: { slideIds: ['s1'] },
	});
	assert.deepEqual(result.json, {
		slides: [{ id: 's1', mimeType: 'image/jpeg', binaryProperty: 'image1' }],
	});
	assert.deepEqual(result.images, [{ data, mimeType: 'image/jpeg' }]);
});

test("the user agent names the package's version", () => {
	assert.equal(USER_AGENT, `n8n-nodes-rollstack/${version}`);
});
