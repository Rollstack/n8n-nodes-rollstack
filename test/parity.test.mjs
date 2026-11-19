// The node has every tool of Rollstack's MCP server, apart from those definitions/excluded.json gives a reason for,
// and its generated files match the definitions
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

import { require } from './helpers.mjs';

const { toolSpecs, properties } = require('../dist/nodes/Rollstack/generated.js');
const { tools } = JSON.parse(
	readFileSync(new URL('../definitions/mcp-tools.json', import.meta.url), 'utf8'),
);
const excluded = JSON.parse(
	readFileSync(new URL('../definitions/excluded.json', import.meta.url), 'utf8'),
);

test('every tool of the server is an operation, apart from the excluded ones', () => {
	const expected = tools.map((tool) => tool.name).filter((name) => !(name in excluded));
	assert.deepEqual(Object.keys(toolSpecs).sort(), expected.sort());
	for (const name of Object.keys(excluded))
		assert.ok(
			tools.some((tool) => tool.name === name),
			`${name} is excluded but the server doesn't list it`,
		);
});

test("every operation calls its tool's REST endpoint, and fills in each of its path parameters", () => {
	const { operations } = JSON.parse(
		readFileSync(new URL('../definitions/rest.json', import.meta.url), 'utf8'),
	);
	for (const [operation, spec] of Object.entries(toolSpecs)) {
		assert.deepEqual(
			{ method: spec.method, path: spec.path },
			{ method: operations[operation].method, path: operations[operation].path },
			operation,
		);
		const placeholders = [...spec.path.matchAll(/\{(\w+)\}/g)].map((match) => match[1]).sort();
		const params = spec.inputs.filter((input) => input.part === 'params');
		assert.deepEqual(params.map((input) => input.name).sort(), placeholders, operation);
		assert.ok(
			params.every((input) => input.required),
			`${operation}: a path parameter is optional`,
		);
	}
});

test('every operation is offered under exactly one resource', () => {
	const offered = properties
		.filter((property) => property.name === 'operation')
		.flatMap((property) => property.options.map((option) => option.value));
	assert.deepEqual([...offered].sort(), Object.keys(toolSpecs).sort());
});

test('every required input has a parameter of its own, shown for its operation only', () => {
	for (const [operation, spec] of Object.entries(toolSpecs)) {
		for (const input of spec.inputs.filter((item) => item.required)) {
			const name = input.property ?? input.name;
			const found = properties.filter(
				(property) =>
					property.name === name && property.displayOptions?.show?.operation?.includes(operation),
			);
			assert.equal(found.length, 1, `${operation}: ${name}`);
			assert.equal(found[0].required, true, `${operation}: ${name}`);
			assert.deepEqual(
				found[0].displayOptions.show.operation,
				[operation],
				`${operation}: ${name}`,
			);
		}
	}
});

test('every optional input is under Additional Fields', () => {
	for (const [operation, spec] of Object.entries(toolSpecs)) {
		const optional = spec.inputs
			.filter((item) => !item.required)
			.map((item) => item.property ?? item.name);
		const collection = properties.find(
			(property) =>
				property.name === 'additionalFields' &&
				property.displayOptions.show.operation.includes(operation),
		);
		assert.deepEqual(
			collection?.options.map((option) => option.name).sort() ?? [],
			optional.sort(),
			operation,
		);
		if (collection)
			assert.deepEqual(collection.displayOptions.show.operation, [operation], operation);
	}
});

test('the generated files are up to date with definitions/', () => {
	const run = spawnSync(process.execPath, ['scripts/generate.mjs', '--check'], {
		encoding: 'utf8',
	});
	assert.equal(run.status, 0, run.stderr);
});
