// Each resource opens on an operation that is safe to run by mistake, and an AI Agent that uses an operation as a tool
// reads Rollstack's whole description of it, as n8n itself works it out
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

import { require } from './helpers.mjs';

const { NodeHelpers } = require('n8n-workflow');
const { Rollstack } = require('../dist/nodes/Rollstack/Rollstack.node.js');
const { toolSpecs } = require('../dist/nodes/Rollstack/generated.js');
const { tools } = JSON.parse(
	readFileSync(new URL('../definitions/mcp-tools.json', import.meta.url), 'utf8'),
);

const byName = Object.fromEntries(tools.map((tool) => [tool.name, tool]));
const node = new Rollstack().description;
const operations = node.properties.filter((property) => property.name === 'operation');
// The node as n8n wraps it for an AI Agent, as convertNodeToAiTool does: only the name ends in Tool
const asTool = { ...node, name: `${node.name}Tool`, displayName: `${node.displayName} Tool` };
const toolNames = new RegExp(`\\b(${Object.keys(toolSpecs).join('|')})\\b`, 'g');
const aToolName = new RegExp(toolNames.source);

// The steps a user takes first on a resource, which email nobody and delete nothing
const FIRST_STEPS = new Set(['sendReportMessage', 'submitFeedback']);

// The node's parameters with their defaults, as n8n fills them in when it loads a workflow
function withDefaults(description, parameters) {
	const placed = {
		name: 'Rollstack',
		type: description.name,
		typeVersion: 1,
		position: [0, 0],
		parameters,
	};
	return NodeHelpers.getNodeParameters(
		description.properties,
		parameters,
		true,
		false,
		placed,
		description,
	);
}

// What n8n tells the agent about the tool, as createNodeAsTool works it out
function agentReads(parameters) {
	const placed = { parameters: withDefaults(asTool, parameters) };
	return NodeHelpers.getToolDescriptionForNode(placed, { description: asTool });
}

test('every resource opens on an operation that only reads, or on its first step', () => {
	for (const property of operations) {
		const resource = property.displayOptions.show.resource[0];
		const chosen = byName[property.default];
		assert.ok(
			property.options.some((option) => option.value === property.default),
			`${resource} opens on ${property.default}, which it doesn't offer`,
		);
		const scopes = chosen._meta.securitySchemes.flatMap((scheme) => scheme.scopes);
		assert.ok(
			FIRST_STEPS.has(chosen.name) ||
				(scopes.length > 0 && scopes.every((scope) => scope.endsWith(':read'))),
			`${resource} opens on ${chosen.name}, which changes something`,
		);
	}
});

test("an AI Agent reads Rollstack's whole description of each operation", () => {
	for (const property of operations)
		for (const option of property.options) {
			const resource = property.displayOptions.show.resource[0];
			const read = agentReads({ resource, operation: option.value });
			const description = byName[option.value].description
				.replace(/`/g, '')
				.replace(/\s+/g, ' ')
				.trim();
			// The same text, with the names of other tools written as operations, in quotes
			assert.equal(
				read.replace(/"[^"]*"/g, 'X'),
				description.replace(toolNames, '"X"').replace(/"[^"]*"/g, 'X'),
				`${option.value}: the agent reads something else`,
			);
			assert.doesNotMatch(
				read,
				aToolName,
				`${option.value}: names a tool rather than an operation`,
			);
		}
});

test('a tool description written in n8n replaces Rollstack’s', () => {
	assert.equal(
		agentReads({
			resource: 'chat',
			operation: 'sendReportMessage',
			toolDescription: 'Asks the slides agent for a deck',
		}),
		'Asks the slides agent for a deck',
	);
});

test('a workflow step, which no agent reads, has no tool description', () => {
	const parameters = withDefaults(node, { resource: 'chat', operation: 'sendReportMessage' });
	assert.ok(!('toolDescription' in parameters));
	assert.ok(
		'toolDescription' in withDefaults(asTool, { resource: 'chat', operation: 'sendReportMessage' }),
	);
});
