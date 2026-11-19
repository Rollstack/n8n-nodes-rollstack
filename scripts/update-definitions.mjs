// Refreshes definitions/ from Rollstack, then run `npm run generate`:
//
// - mcp-tools.json: every tool Rollstack's MCP server lists, with its inputs. The server lists tools only to a client
//   that signs in, and only the tools its key may call, so set ROLLSTACK_API_KEY to a key with every scope. An owner or
//   admin of the organization has to create it, since some scopes are theirs alone (https://rollstack.com/auth.md).
// - groups.json: the part of Rollstack's API each tool belongs to, read from its OpenAPI document, which needs no key.
//
// This script runs on a developer's machine only. It isn't part of the published package.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const MCP_URL = 'https://api.rollstack.com/public/v1/mcp';
const OPENAPI_URL = 'https://api.rollstack.com/public/v1/openapi.json';
const TOOLS = join(ROOT, 'definitions', 'mcp-tools.json');
const GROUPS = join(ROOT, 'definitions', 'groups.json');

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

async function groups(tools) {
	const response = await fetch(OPENAPI_URL, { headers: { Accept: 'application/json' } });
	if (response.status !== 200)
		throw new Error(`Rollstack's OpenAPI document answered HTTP ${response.status}`);
	const api = await response.json();
	const byOperation = {};
	for (const path of Object.values(api.paths ?? {}))
		for (const operation of Object.values(path))
			if (operation?.operationId) byOperation[operation.operationId] = operation.tags?.[0] ?? null;
	return Object.fromEntries(tools.map((tool) => [tool.name, byOperation[tool.name] ?? null]));
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
const byTool = await groups(tools);
writeFileSync(TOOLS, `${JSON.stringify({ source: `${MCP_URL} (tools/list)`, tools }, null, 2)}\n`);
writeFileSync(GROUPS, `${JSON.stringify(byTool, null, 2)}\n`);
console.log(`Saved ${tools.length} tools. Now run npm run generate.`);
