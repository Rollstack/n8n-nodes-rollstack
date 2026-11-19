// Refreshes definitions/ from Rollstack, then run `npm run generate`:
//
// - mcp-tools.json: every tool Rollstack's MCP server lists, with its inputs. The server lists tools only to a client
//   that signs in, and only the tools its key may call, so set ROLLSTACK_API_KEY to a key with every scope. An owner or
//   admin of the organization has to create it, since some scopes are theirs alone (https://rollstack.com/auth.md).
// - rest.json: the REST endpoint each tool calls, its method and path, and the part of Rollstack's API it belongs to,
//   read from Rollstack's OpenAPI document, which needs no key. The node calls these endpoints.
//
// `npm run update-definitions -- --rest-only` refreshes rest.json alone, for the tools mcp-tools.json already has,
// without a key.
//
// This script runs on a developer's machine only. It isn't part of the published package.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const MCP_URL = 'https://api.rollstack.com/public/v1/mcp';
const OPENAPI_URL = 'https://api.rollstack.com/public/v1/openapi.json';
const TOOLS = join(ROOT, 'definitions', 'mcp-tools.json');
const REST = join(ROOT, 'definitions', 'rest.json');

async function listTools(key) {
	const response = await fetch(MCP_URL, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${key}`,
			Accept: 'application/json, text/event-stream',
			'Content-Type': 'application/json',
			'MCP-Protocol-Version': '2025-06-18',
		},
		body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'tools/list', params: {} }),
	});
	const text = await response.text();
	if (response.status !== 200)
		throw new Error(`tools/list answered HTTP ${response.status}: ${text.slice(0, 300)}`);
	const body = response.headers.get('content-type')?.startsWith('text/event-stream')
		? JSON.parse(
				text
					.split(/\r?\n/)
					.filter((line) => line.startsWith('data:'))
					.map((line) => line.slice(5).trim())
					.join(''),
			)
		: JSON.parse(text);
	const tools = body.result?.tools;
	if (!Array.isArray(tools)) throw new Error('tools/list answered no tools');
	return tools.map(({ name, title, description, inputSchema, annotations, _meta }) => ({
		name,
		title,
		description,
		inputSchema,
		annotations,
		_meta,
	}));
}

// The endpoint each tool calls: Rollstack names each tool after the operationId of its endpoint. A tool only Rollstack's
// MCP server has gets null
async function restOperations(tools) {
	const response = await fetch(OPENAPI_URL, { headers: { Accept: 'application/json' } });
	if (response.status !== 200)
		throw new Error(`Rollstack's OpenAPI document answered HTTP ${response.status}`);
	const api = await response.json();
	const byOperation = {};
	for (const [path, item] of Object.entries(api.paths ?? {}))
		for (const [method, operation] of Object.entries(item))
			if (operation?.operationId)
				byOperation[operation.operationId] = {
					method: method.toUpperCase(),
					path,
					group: operation.tags?.[0] ?? null,
				};
	return {
		source: OPENAPI_URL,
		operations: Object.fromEntries(
			tools.map((tool) => [tool.name, byOperation[tool.name] ?? null]),
		),
	};
}

function save(path, value) {
	writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
}

if (process.argv.includes('--rest-only')) {
	const { tools } = JSON.parse(readFileSync(TOOLS, 'utf8'));
	save(REST, await restOperations(tools));
	console.log(`Saved the REST endpoints of ${tools.length} tools. Now run npm run generate.`);
	process.exit(0);
}

const key = process.env.ROLLSTACK_API_KEY?.trim();
if (!key) {
	console.error(
		'Set ROLLSTACK_API_KEY to a Rollstack API key with every scope, created by an owner or admin.',
	);
	process.exit(1);
}
const tools = await listTools(key);
const previous = JSON.parse(readFileSync(TOOLS, 'utf8')).tools.map((tool) => tool.name);
const missing = previous.filter((name) => !tools.some((tool) => tool.name === name));
if (missing.length) {
	console.error(
		`The server no longer lists ${missing.join(', ')}. Either the key lacks a scope, or Rollstack renamed or removed them: see https://docs.rollstack.com/api/mcp-server.`,
	);
	process.exit(1);
}
// Fetched before either file is written, so a failure leaves both as they were
const rest = await restOperations(tools);
save(TOOLS, { source: `${MCP_URL} (tools/list)`, tools });
save(REST, rest);
console.log(`Saved ${tools.length} tools. Now run npm run generate.`);
