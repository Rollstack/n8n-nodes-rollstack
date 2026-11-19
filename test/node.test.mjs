import assert from 'node:assert/strict';
import { test } from 'node:test';

import { context, json, require, toolAnswer } from './helpers.mjs';

const { Rollstack } = require('../dist/nodes/Rollstack/Rollstack.node.js');

test('the node describes itself for n8n, and AI Agents can use it as a tool', () => {
	const { description } = new Rollstack();
	assert.equal(description.name, 'rollstack');
	assert.equal(description.usableAsTool, true);
	assert.deepEqual(description.credentials, [{ name: 'rollstackApi', required: true }]);
});

test('each item becomes one call, and the answer keeps its link to the item', async () => {
	const ctx = context({
		items: [{ json: {} }, { json: {} }],
		params: { operation: 'getReport', id: 'r1' },
		responses: [
			toolAnswer({ structuredContent: { id: 'r1' } }),
			toolAnswer({ structuredContent: { id: 'r1' } }),
		],
	});
	const [output] = await new Rollstack().execute.call(ctx);
	assert.deepEqual(
		output.map((item) => item.pairedItem),
		[{ item: 0 }, { item: 1 }],
	);
	assert.deepEqual(ctx.requests[0].options.body.params, {
		name: 'getReport',
		arguments: { params: { id: 'r1' } },
	});
});

test('slide images come back as binary data', async () => {
	const ctx = context({
		params: { operation: 'getReportSlideImages', id: 'r1', slideIds: 's1' },
		responses: [
			toolAnswer({
				content: [
					{ type: 'text', text: '{"slides":[{"id":"s1"}]}' },
					{ type: 'image', data: Buffer.from('png').toString('base64'), mimeType: 'image/png' },
				],
			}),
		],
	});
	const [[item]] = await new Rollstack().execute.call(ctx);
	assert.deepEqual(item.json, { slides: [{ id: 's1' }] });
	assert.equal(item.binary.image1.mimeType, 'image/png');
	assert.equal(item.binary.image1.fileName, 'getReportSlideImages-1.png');
	assert.equal(item.binary.image1.data, Buffer.from('png').toString('base64'));
});

test("an error keeps Rollstack's message and HTTP code, and the item it failed on", async () => {
	const ctx = context({
		items: [{ json: {} }, { json: {} }],
		params: { operation: 'getReport', id: 'r1' },
		responses: [
			toolAnswer({ structuredContent: { id: 'r1' } }),
			json(401, { message: 'Invalid API key' }),
		],
	});
	await assert.rejects(new Rollstack().execute.call(ctx), (error) => {
		assert.match(error.message, /did not accept the API key/);
		assert.equal(error.httpCode, '401');
		assert.equal(error.context.itemIndex, 1);
		return true;
	});
});

test('with Continue On Fail, an error becomes the item', async () => {
	const ctx = context({
		continueOnFail: true,
		params: { operation: 'getReport', id: 'r1' },
		responses: [json(401, { message: 'Invalid API key' })],
	});
	const [[item]] = await new Rollstack().execute.call(ctx);
	assert.match(item.json.error, /did not accept the API key/);
	assert.deepEqual(item.pairedItem, { item: 0 });
});
