import assert from 'node:assert/strict';
import { test } from 'node:test';

import { context, require } from './helpers.mjs';

const { buildArguments, convert } = require('../dist/nodes/Rollstack/arguments.js');
const { toolSpecs } = require('../dist/nodes/Rollstack/generated.js');

const list = { name: 'slideIds', part: 'query', kind: 'list', required: false };
const structured = { name: 'answers', part: 'body', kind: 'json', required: false };

test('a list takes values separated by commas, a JSON array or an array', () => {
	assert.deepEqual(convert(list, 'a, b ,c,'), { value: ['a', 'b', 'c'] });
	assert.deepEqual(convert(list, '["a", "b"]'), { value: ['a', 'b'] });
	assert.deepEqual(convert(list, ['a', 1]), { value: ['a', '1'] });
	assert.deepEqual(convert(list, '  '), { value: undefined });
	assert.ok('problem' in convert(list, '[not json'));
});

test('a structured input takes JSON text or a value', () => {
	assert.deepEqual(convert(structured, '{"a": 1}'), { value: { a: 1 } });
	assert.deepEqual(convert(structured, [{ a: 1 }]), { value: [{ a: 1 }] });
	assert.deepEqual(convert(structured, ''), { value: undefined });
	assert.ok('problem' in convert(structured, '{'));
});

test('null is sent only to an input that takes it', () => {
	assert.deepEqual(convert({ ...list, nullable: true }, 'null'), { value: null });
	assert.deepEqual(convert(list, 'null'), { value: ['null'] });
});

test('numbers and booleans', () => {
	assert.deepEqual(
		convert({ name: 'limit', part: 'query', kind: 'integer', required: false }, 20),
		{ value: 20 },
	);
	assert.deepEqual(convert({ name: 'x', part: 'body', kind: 'boolean', required: false }, 'true'), {
		value: true,
	});
	assert.deepEqual(convert({ name: 'x', part: 'body', kind: 'boolean', required: false }, false), {
		value: false,
	});
});

test('required inputs come from their parameters, optional ones from Additional Fields', () => {
	const ctx = context({
		params: {
			id: 'report-1',
			schedules: '[{"frequency":"daily","cronExpression":"0 9 * * 1"}]',
			additionalFields: { idempotencyKey: 'key-1' },
		},
	});
	const args = buildArguments.call(ctx, toolSpecs.updateReportSchedules, 0);
	assert.deepEqual(args, {
		params: { id: 'report-1' },
		body: { schedules: [{ frequency: 'daily', cronExpression: '0 9 * * 1' }] },
		idempotencyKey: 'key-1',
	});
});

test('a part the tool needs is sent empty, and a write gets an idempotency key', () => {
	const args = buildArguments.call(
		context({ params: { additionalFields: {} } }),
		toolSpecs.createReport,
		0,
	);
	assert.deepEqual(args.body, {});
	assert.match(args.idempotencyKey, /^n8n-[A-Za-z0-9]{32}$/);
});

test('optional inputs left empty are not sent', () => {
	const args = buildArguments.call(
		context({ params: { additionalFields: { name: 'review', limit: 20, cursor: '' } } }),
		toolSpecs.listReports,
		0,
	);
	assert.deepEqual(args, { query: { name: 'review', limit: 20 } });
});

test('a value that cannot be read names its parameter', () => {
	const ctx = context({ params: { id: 'report-1', schedules: '{', additionalFields: {} } });
	assert.throws(
		() => buildArguments.call(ctx, toolSpecs.updateReportSchedules, 0),
		/schedules is not valid/,
	);
});
