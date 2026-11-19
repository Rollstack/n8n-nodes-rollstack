// Writes the node's resources, operations and parameters from Rollstack's tool definitions.
//
// It reads definitions/mcp-tools.json (every tool Rollstack's MCP server lists) and definitions/groups.json (the part
// of Rollstack's API each tool belongs to), which `npm run update-definitions` refreshes, and writes:
//
// - nodes/Rollstack/generated.ts: the node's properties, one operation per Rollstack tool, and how each operation's
//   parameters map onto the tool's arguments;
// - the tables of operations and of the operations that email people or delete something, in README.md.
//
// Run it with `npm run generate`. `npm run generate:check` writes nothing and fails when the files differ from what it
// would write, which CI runs.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The title case n8n's linter checks display names and option names against
import { titleCase as lintTitleCase } from 'title-case';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TOOLS = join(ROOT, 'definitions', 'mcp-tools.json');
const GROUPS = join(ROOT, 'definitions', 'groups.json');
const OUTPUT = join(ROOT, 'nodes', 'Rollstack', 'generated.ts');
const README = join(ROOT, 'README.md');

// Tools the server lists that the node leaves out, and why. Each is called by a view Rollstack's server shows in
// clients that support MCP Apps, never by a model or a workflow, and n8n shows no such view
const EXCLUDED = JSON.parse(readFileSync(join(ROOT, 'definitions', 'excluded.json'), 'utf8'));

// The group of a tool that Rollstack's OpenAPI document doesn't describe, because only its MCP server has it
const EXTRA_GROUPS = {
	showReport: 'Content',
	showTemplates: 'Templates',
	submitFeedback: 'Feedback',
};

// The n8n resource each group of Rollstack's API becomes: singular, in title case
const RESOURCES = {
	Bursts: 'Burst',
	Chat: 'Chat',
	Comments: 'Comment',
	Connections: 'Connection',
	Content: 'Content',
	Datasheets: 'Datasheet',
	Email: 'Email',
	Exports: 'Export',
	Feedback: 'Feedback',
	Folders: 'Folder',
	Members: 'Member',
	Memories: 'Memory',
	Parameters: 'Parameter',
	Reports: 'Report',
	Runs: 'Run',
	'SMTP connections': 'SMTP Connection',
	Schedules: 'Schedule',
	Sharing: 'Sharing',
	Spreadsheets: 'Spreadsheet',
	Templates: 'Template',
	'Uploaded files': 'Uploaded File',
	Versions: 'Version',
};

// The operations that email people or delete or remove something, and whether Rollstack holds the call until the
// user confirms it in Rollstack. Read from each tool's description on 2026-11-18, as for Rollstack's Dify plugin
const EMAILS_OR_DELETES = {
	approveReportMessageProposal: 'When it sends an email',
	startReportRun: 'When the run would email the report',
	batchStartReportRuns: 'When a run would email a report',
	sendReportEmail: 'Yes',
	startBurstRun: 'When a run would email a variant',
	sendBurstEmailConfig: 'Yes',
	sendBurstVariantEmails: 'Yes',
	deleteBurst: 'Yes',
	removeBurstVariants: 'Yes',
	shareReport: 'No: the member gets an email',
	batchShareReports: 'No: each member gets an email',
	shareFolder: 'No: a member new to the folder gets an email',
	sendReportTestEmail: 'No: it goes to you alone',
	sendBurstEmailConfigTest: 'No: it goes to you alone',
	deleteTemplate: 'No',
	deleteMemory: 'No',
	deleteDataset: 'No',
	removeReportDatasheet: 'No',
	deleteReportParameter: 'No',
	deleteBurstEmailConfig: 'No',
	unshareReport: 'No',
	unshareFolder: 'No',
	arrangeReportSlides: 'No: restoreReportVersion brings removed slides back',
	updateReportSchedules: 'No',
	batchUpdateReportSchedules: 'No',
};

// The operation each resource opens on when you pick it: one that only reads, or for Chat and Feedback the step you
// take first. Never one that emails people, deletes something or approves a change, which a test checks. A resource
// missing here opens on its first operation that only reads
const DEFAULT_OPERATIONS = {
	Burst: 'listBursts',
	Chat: 'sendReportMessage',
	Comment: 'listReportComments',
	Connection: 'listConnections',
	Content: 'getReportContent',
	Datasheet: 'listReportDatasheets',
	Email: 'getReportEmailConfig',
	Export: 'exportReport',
	Feedback: 'submitFeedback',
	Folder: 'listFolders',
	Member: 'listMembers',
	Memory: 'listMemories',
	Parameter: 'getReportParameters',
	Report: 'listReports',
	Run: 'listRuns',
	'SMTP Connection': 'listSmtpConnections',
	Schedule: 'getReportSchedules',
	Sharing: 'getReportViews',
	Spreadsheet: 'searchSpreadsheets',
	Template: 'listTemplates',
	'Uploaded File': 'getDataset',
	Version: 'listReportVersions',
};

// What n8n shows under the Tool Description of an operation an AI Agent uses as a tool
const TOOL_DESCRIPTION_HELP =
	"What the agent reads to decide when and how to use this tool. It starts as Rollstack's description of the operation, which you can change.";

// n8n asks a boolean parameter's description to start with "Whether". These inputs' own descriptions don't, so they
// get these openings, and the rest of their description follows
const BOOLEAN_OPENINGS = {
	'duplicateReport.copySchedules':
		"Whether to also give the copy the report's schedules, so it updates on its own at the same times.",
	'duplicateReport.inheritSharing':
		'Whether to also share the copy with everyone the report is shared with directly, at the same permission.',
	'updateReportCloudExport.ignoreFailuresOnArchive':
		'Whether a copy that fails still lets the save go on, with updateMethod archive.',
	'resolveReportComment.resolved':
		'Whether to resolve the thread. Turn it off to open the thread again.',
	'renameBurst.renameFiles':
		"Whether to also rename the burst's folders, for a burst of Google Slides, Google Docs, PowerPoint or Word reports.",
	'updateBurstSettings.archiveVariantsInFolder':
		"Whether each variant's archived copies go in an archive folder next to its file, rather than beside it, with updateMethod archive.",
};

// n8n's own wording for a parameter that limits how many results come back
const LIMIT_DESCRIPTION = 'Max number of results to return';

const PARTS = ['params', 'query', 'body'];
const IDEMPOTENCY_KEY = 'idempotencyKey';
// Names the node's own parameters use, which a tool's input can't take
const RESERVED = new Set(['resource', 'operation', 'additionalFields']);
const ACRONYMS = {
	id: 'ID',
	ids: 'IDs',
	url: 'URL',
	urls: 'URLs',
	csv: 'CSV',
	sql: 'SQL',
	smtp: 'SMTP',
	html: 'HTML',
	cc: 'CC',
	bcc: 'BCC',
	api: 'API',
	llm: 'LLM',
	pdf: 'PDF',
	ppt: 'PPT',
	pptx: 'PPTX',
	ai: 'AI',
	bi: 'BI',
};
const ARTICLES = new Set(['a', 'an', 'the']);
const SENTENCE_END = /(?<=[.!?])\s+(?=[A-Z0-9"'(\[])/;
// The words n8n's linter wants as ID or IDs, in descriptions
const MISCASED_ID = /\b([iI])d(s?)\b/g;
const LONG_TEXT = new Set(['content', 'html']);

const README_MARKS = {
	operations: ['<!-- operations:start -->', '<!-- operations:end -->'],
	careful: ['<!-- careful:start -->', '<!-- careful:end -->'],
};

function load() {
	const { tools } = JSON.parse(readFileSync(TOOLS, 'utf8'));
	const groups = JSON.parse(readFileSync(GROUPS, 'utf8'));
	return { tools: tools.filter((tool) => !(tool.name in EXCLUDED)), groups };
}

function groupOf(tool, groups) {
	const group = groups[tool.name] ?? EXTRA_GROUPS[tool.name];
	if (!group)
		throw new Error(`${tool.name}: no group in definitions/groups.json, and none in EXTRA_GROUPS`);
	if (!(group in RESOURCES))
		throw new Error(`${tool.name}: the group "${group}" has no resource in RESOURCES`);
	return RESOURCES[group];
}

function camel(words) {
	const parts = words.split(/\s+/);
	return parts
		.map((word, index) =>
			index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase(),
		)
		.join('');
}

// Title case as n8n's linter checks it, with acronyms in capitals: datasheet ids is Datasheet IDs
function titleCase(text) {
	return lintTitleCase(
		text
			.split(/\s+/)
			.map((word) => ACRONYMS[word.toLowerCase()] ?? word)
			.join(' '),
	);
}

function sentenceCase(text) {
	return text[0].toUpperCase() + text.slice(1);
}

// A parameter's label from its name: datasheetIds is Datasheet IDs, and a tool's id is its resource's ID
function label(name, idOf) {
	if (name === 'id' && idOf) return `${idOf} ID`;
	const words = name.replace(/(?<=[a-z0-9])(?=[A-Z])/g, ' ').split(' ');
	return titleCase(words.join(' '));
}

// What a tool's id names, from the tool's own words: "The report to act on" is a report
function idName(tool) {
	const schema = tool.inputSchema;
	const id = resolve(schema.properties?.params?.properties?.id ?? {}, schema.$defs ?? {});
	const described = id.description ?? '';
	const found =
		/^The ([a-z]+(?: [a-z]+)?) (?:to |the tool |by |from |whose )/.exec(described) ??
		/^Unique identifier for the ([a-z]+)/.exec(described);
	return found ? titleCase(found[1]) : undefined;
}

function resolve(field, definitions) {
	while (field?.$ref?.startsWith('#/$defs/') && definitions[field.$ref.slice(8)]) {
		const { $ref, ...own } = field;
		field = { ...definitions[$ref.slice(8)], ...own };
	}
	return field;
}

// The kind of n8n parameter a Rollstack input becomes, and the schema its options and bounds come from
function classify(field) {
	if (field.$ref) return ['json', field];
	const options = (field.anyOf ?? field.oneOf ?? []).filter((option) => option.type !== 'null');
	if (options.length) {
		if (options.length === 1 && !options[0].$ref)
			return classify({ ...options[0], description: field.description });
		const types = new Set(options.map((option) => option.type));
		const lists = options.filter((option) => option.type === 'array');
		if (
			types.size === 2 &&
			types.has('string') &&
			types.has('array') &&
			lists.every((option) => option.items?.type === 'string')
		)
			return ['list', lists[0].items];
		return ['json', field];
	}
	let kind = field.type;
	if (Array.isArray(kind)) {
		kind = kind.filter((value) => value !== 'null');
		if (kind.length !== 1) return ['json', field];
		kind = kind[0];
	}
	if (kind === 'string')
		return [field.enum?.every((value) => typeof value === 'string') ? 'select' : 'text', field];
	if (kind === 'integer' || kind === 'number' || kind === 'boolean') return [kind, field];
	if (kind === 'array' && field.items?.type === 'string') return ['list', field.items];
	return ['json', field];
}

function nullable(field) {
	const kinds = field.type;
	const options = field.anyOf ?? field.oneOf ?? [];
	return (
		(Array.isArray(kinds) && kinds.includes('null')) ||
		options.some((option) => option.type === 'null')
	);
}

// A JSON Schema with its own descriptions written as n8n shows text, to sit inside a parameter's description
function cleanSchema(value) {
	if (Array.isArray(value)) return value.map(cleanSchema);
	if (!value || typeof value !== 'object') return value;
	return Object.fromEntries(
		Object.entries(value).map(([key, item]) => [
			key,
			key === 'description' && typeof item === 'string' ? prose(item) : cleanSchema(item),
		]),
	);
}

// The compact JSON Schema of a structured input, with the shared definitions it refers to. Angle brackets, and the
// names id and ids where they are keys or values, are written as JSON escapes: the JSON reads the same, and n8n's
// linter, which wants ID in descriptions and encoded angle brackets, accepts it
function jsonSchema(field, definitions) {
	const text = rawSchema(cleanSchema(field), cleanSchema(definitions));
	return text
		.replace(/</g, '\\u003c')
		.replace(/>/g, '\\u003e')
		.replace(
			MISCASED_ID,
			(_, initial, plural) => `${initial === 'i' ? '\\u0069' : '\\u0049'}d${plural}`,
		);
}

function rawSchema(field, definitions) {
	const { description, ...schema } = field;
	const used = {};
	const pending = [...JSON.stringify(schema).matchAll(/"#\/\$defs\/([^"]+)"/g)].map(
		(match) => match[1],
	);
	while (pending.length) {
		const name = pending.pop();
		if (name in used || !(name in definitions)) continue;
		used[name] = definitions[name];
		pending.push(
			...[...JSON.stringify(definitions[name]).matchAll(/"#\/\$defs\/([^"]+)"/g)].map(
				(match) => match[1],
			),
		);
	}
	if (Object.keys(used).length)
		schema.$defs = Object.fromEntries(Object.entries(used).sort(([a], [b]) => a.localeCompare(b)));
	return JSON.stringify(schema);
}

// Text as n8n shows it: no Markdown code marks, one space between words, angle brackets encoded and ID in capitals
function prose(text) {
	return sentenceCase(
		text
			.replace(/`/g, '')
			.replace(/\s+/g, ' ')
			.trim()
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(MISCASED_ID, (_, initial, plural) => `ID${plural}`),
	);
}

// A description as n8n's linter wants it: prose, with a final period only when it has more than one sentence. The
// linter counts sentences by the ". " between them, leaving out the first "e.g."
function finalPeriod(text) {
	const sentences = text.replace('e.g.', '').split('. ').length;
	if (sentences === 1) return text.replace(/\.$/, '');
	return /[.!?]$/.test(text) ? text : `${text}.`;
}

function described(text) {
	return finalPeriod(prose(text));
}

function firstSentence(text) {
	return text.trim().split('\n')[0].split(SENTENCE_END)[0];
}

// Every input of a tool, in order: the inputs of params, query and body, then idempotencyKey
function inputs(tool) {
	const schema = tool.inputSchema;
	const found = [];
	for (const part of PARTS) {
		const partSchema = schema.properties?.[part];
		if (!partSchema) continue;
		const partRequired = (schema.required ?? []).includes(part);
		for (const [name, field] of Object.entries(partSchema.properties ?? {}))
			found.push({
				part,
				name,
				field,
				required: partRequired && (partSchema.required ?? []).includes(name),
			});
	}
	if (schema.properties?.[IDEMPOTENCY_KEY])
		found.push({
			part: '',
			name: IDEMPOTENCY_KEY,
			field: schema.properties[IDEMPOTENCY_KEY],
			required: false,
		});
	return found;
}

function parameter(tool, input, idOf) {
	const definitions = tool.inputSchema.$defs ?? {};
	const field = resolve(input.field, definitions);
	const [kind, source] = classify(field);
	const name = RESERVED.has(input.name) ? `${input.name}Value` : input.name;
	const key = `${tool.name}.${input.name}`;
	let text = field.description ?? source.description ?? label(input.name);
	if (kind === 'boolean' && !/^Whether\b/.test(text)) {
		const opening = BOOLEAN_OPENINGS[key];
		if (!opening)
			throw new Error(
				`${key}: a boolean whose description doesn't start with "Whether" needs an opening in BOOLEAN_OPENINGS`,
			);
		const rest = text.split(SENTENCE_END).slice(1).join(' ');
		text = rest ? `${opening} ${rest}` : opening;
	}
	if (kind === 'list') {
		text += ' Separate several with commas, or enter a JSON array.';
		if (source.enum) text += ` Each one of: ${source.enum.join(', ')}.`;
	}
	if (nullable(field)) text += ' To send null, enter null.';
	if (kind === 'json')
		text = `${prose(text).replace(/\.?$/, '.')} Enter it as JSON, as this JSON Schema describes: ${jsonSchema(field, definitions)}.`;
	let description = kind === 'json' ? finalPeriod(text) : described(text);

	const property = {
		displayName: label(input.name, input.part === 'params' ? idOf : undefined),
		name,
	};
	if (input.required) property.required = true;
	if (kind === 'select') {
		property.type = 'options';
		property.options = sortByName(
			source.enum.map((value) => ({ name: titleCase(value), value })),
			'name',
		);
		property.default = source.enum.includes(field.default)
			? field.default
			: property.options[0].value;
	} else if (kind === 'integer' || kind === 'number') {
		property.type = 'number';
		const typeOptions = {};
		if (input.name === 'limit') {
			typeOptions.minValue = 1;
			if (source.maximum !== undefined) typeOptions.maxValue = source.maximum;
			description = LIMIT_DESCRIPTION;
			property.default = 50;
		} else {
			if (source.minimum !== undefined) typeOptions.minValue = source.minimum;
			if (source.maximum !== undefined) typeOptions.maxValue = source.maximum;
			property.default = typeof field.default === 'number' ? field.default : (source.minimum ?? 0);
		}
		if (kind === 'integer') typeOptions.numberPrecision = 0;
		property.typeOptions = typeOptions;
	} else if (kind === 'boolean') {
		property.type = 'boolean';
		property.default = typeof field.default === 'boolean' ? field.default : false;
	} else if (kind === 'json') {
		property.type = 'json';
		property.default = '';
	} else {
		property.type = 'string';
		property.default = kind === 'text' && typeof field.default === 'string' ? field.default : '';
		if (LONG_TEXT.has(input.name)) property.typeOptions = { rows: 4 };
		// n8n's linter asks an email parameter for this placeholder
		if (input.name === 'email') property.placeholder = 'name@email.com';
	}
	property.description = description;

	const spec = { name: input.name, part: input.part, kind, required: input.required };
	if (name !== input.name) spec.property = name;
	if (nullable(field)) spec.nullable = true;
	return { property, spec };
}

// An operation's name, without the resource n8n shows above it: "List reports" under Report is List
function operationName(title, resource) {
	const name = titleCase(title);
	const [verb, ...rest] = name.split(' ');
	const object = rest
		.filter((word, index) => index > 0 || !ARTICLES.has(word.toLowerCase()))
		.join(' ')
		.toLowerCase();
	const singular = resource.toLowerCase();
	const plurals = [`${singular}s`, singular.replace(/y$/, 'ies')];
	return object === singular || plurals.includes(object) ? verb : name;
}

function sortByName(options, key) {
	return options.sort((a, b) => a[key].localeCompare(b[key], 'en', { sensitivity: 'base' }));
}

function readsOnly(tool) {
	const scopes = (tool._meta?.securitySchemes ?? []).flatMap((scheme) => scheme.scopes ?? []);
	return scopes.length > 0 && scopes.every((scope) => scope.endsWith(':read'));
}

function defaultOperation(resource, members) {
	const reading = members.filter(readsOnly);
	const chosen =
		DEFAULT_OPERATIONS[resource] ??
		(reading.find((tool) => tool.name.startsWith('list')) ?? reading[0])?.name;
	if (!chosen)
		throw new Error(
			`${resource}: no operation only reads, so name its default in DEFAULT_OPERATIONS`,
		);
	if (!members.some((tool) => tool.name === chosen))
		throw new Error(`DEFAULT_OPERATIONS: ${resource} has no operation ${chosen}`);
	if (chosen in EMAILS_OR_DELETES)
		throw new Error(
			`DEFAULT_OPERATIONS: ${resource} can't open on ${chosen}, which emails or deletes`,
		);
	return chosen;
}

// What an AI Agent reads about an operation it uses as a tool: Rollstack's whole description of the tool, with the
// names of other tools written as the operations n8n shows. Without it, n8n describes the tool by its name alone, such
// as "Send message to slides agent in Rollstack", and the agent never learns that it has to wait for the reply
function toolDescription(tool, actions, mentions) {
	return tool.description
		.replace(/`/g, '')
		.replace(/\s+/g, ' ')
		.trim()
		.replace(mentions, (name) => `"${actions[name]}"`);
}

function build() {
	const { tools, groups } = load();
	const resources = new Map();
	for (const tool of tools) {
		const resource = groupOf(tool, groups);
		if (!resources.has(resource)) resources.set(resource, []);
		resources.get(resource).push(tool);
	}

	const resourceValues = new Map(
		[...resources.keys()].map((resource) => [resource, camel(resource)]),
	);
	const properties = [
		{
			displayName: 'Resource',
			name: 'resource',
			type: 'options',
			noDataExpression: true,
			options: sortByName(
				[...resources.keys()].map((resource) => ({
					name: resource,
					value: resourceValues.get(resource),
				})),
				'name',
			),
			default: 'report',
		},
	];
	const specs = {};
	const fields = [];
	const actions = Object.fromEntries(
		tools.map((tool) => [tool.name, sentenceCase(tool.title ?? tool.name)]),
	);
	const mentions = new RegExp(`\\b(${Object.keys(actions).join('|')})\\b`, 'g');

	for (const [resource, members] of resources) {
		const value = resourceValues.get(resource);
		const named = members.map((tool) => ({
			tool,
			name: operationName(tool.title ?? tool.name, resource),
		}));
		const counts = named.reduce(
			(seen, { name }) => seen.set(name, (seen.get(name) ?? 0) + 1),
			new Map(),
		);
		const options = named.map(({ tool, name }) => ({
			name: counts.get(name) > 1 ? titleCase(tool.title) : name,
			value: tool.name,
			description: described(firstSentence(tool.description)),
			action: sentenceCase(tool.title ?? tool.name),
		}));
		sortByName(options, 'name');
		properties.push({
			displayName: 'Operation',
			name: 'operation',
			type: 'options',
			noDataExpression: true,
			displayOptions: { show: { resource: [value] } },
			options,
			default: defaultOperation(resource, members),
		});

		for (const tool of members) {
			const show = { show: { resource: [value], operation: [tool.name] } };
			fields.push({
				displayName: 'Tool Description',
				name: 'toolDescription',
				type: 'string',
				typeOptions: { rows: 4 },
				default: toolDescription(tool, actions, mentions),
				description: described(TOOL_DESCRIPTION_HELP),
				displayOptions: { show: { '@tool': [true], ...show.show } },
			});
			const idOf = idName(tool);
			const required = [];
			const optional = [];
			const mapped = [];
			for (const input of inputs(tool)) {
				const { property, spec } = parameter(tool, input, idOf);
				(input.required ? required : optional).push(property);
				mapped.push(spec);
			}
			const seen = new Set();
			for (const { name } of mapped) {
				if (seen.has(name)) throw new Error(`${tool.name}: two inputs are named ${name}`);
				seen.add(name);
			}
			for (const property of required) fields.push({ ...property, displayOptions: show });
			if (optional.length)
				fields.push({
					displayName: 'Additional Fields',
					name: 'additionalFields',
					type: 'collection',
					placeholder: 'Add Field',
					default: {},
					displayOptions: show,
					options: sortByName(optional, 'displayName'),
				});
			const parts = PARTS.filter((part) => (tool.inputSchema.required ?? []).includes(part));
			specs[tool.name] = { tool: tool.name, parts, inputs: mapped };
		}
	}
	return { tools, resources, properties: [...properties, ...fields], specs };
}

// A value as TypeScript source: object keys without quotes where they can, and strings in single quotes
function source(value, indent = '') {
	const inner = `${indent}\t`;
	if (Array.isArray(value)) {
		if (!value.length) return '[]';
		return `[\n${value.map((item) => `${inner}${source(item, inner)},`).join('\n')}\n${indent}]`;
	}
	if (value && typeof value === 'object') {
		const entries = Object.entries(value);
		if (!entries.length) return '{}';
		const key = (name) =>
			/^[A-Za-z_$][\w$]*$/.test(name)
				? name
				: `'${name.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
		return `{\n${entries.map(([name, item]) => `${inner}${key(name)}: ${source(item, inner)},`).join('\n')}\n${indent}}`;
	}
	if (typeof value === 'string')
		return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n')}'`;
	return JSON.stringify(value);
}

function renderTypeScript({ properties, specs }) {
	return [
		'// Written by scripts/generate.mjs from definitions/mcp-tools.json and definitions/groups.json: run',
		'// `npm run generate` rather than editing it.',
		"import type { INodeProperties } from 'n8n-workflow';",
		"import type { ToolSpec } from './types';",
		'',
		`export const toolSpecs: Record<string, ToolSpec> = ${source(specs)};`,
		'',
		`export const properties: INodeProperties[] = ${source(properties)};`,
		'',
	].join('\n');
}

function cell(text) {
	return text.replace(/\|/g, '\\|');
}

// Scopes only the organization's owners and admins can give a key (https://rollstack.com/auth.md)
const ADMIN_SCOPES = new Set(['organization:write', 'users:read', 'users:write']);

function scopeOf(tool) {
	const scopes = (tool._meta?.securitySchemes ?? []).flatMap((scheme) => scheme.scopes ?? []);
	if (!scopes.length) return 'Any key';
	const shown = scopes.map((scope) => `\`${scope}\``).join(', ');
	return scopes.some((scope) => ADMIN_SCOPES.has(scope)) ? `${shown} (owners and admins)` : shown;
}

function renderReadme(readme, { tools, resources }) {
	const operations = [
		`The node has ${tools.length} operations, one for each tool of Rollstack's MCP server, under the resources of Rollstack's API reference.`,
		'',
	];
	for (const resource of [...resources.keys()].sort((a, b) => a.localeCompare(b))) {
		operations.push(
			`#### ${resource}`,
			'',
			'| Operation | Rollstack tool | What it does | Scope of the key |',
			'| --- | --- | --- | --- |',
		);
		for (const tool of resources.get(resource))
			operations.push(
				`| ${cell(sentenceCase(tool.title ?? tool.name))} | \`${tool.name}\` | ${cell(firstSentence(tool.description))} | ${scopeOf(tool)} |`,
			);
		operations.push('');
	}
	const careful = [
		'| Operation | What it does | Held until you confirm it in Rollstack |',
		'| --- | --- | --- |',
	];
	for (const tool of tools)
		if (tool.name in EMAILS_OR_DELETES)
			careful.push(
				`| \`${tool.name}\` | ${cell(firstSentence(tool.description))} | ${EMAILS_OR_DELETES[tool.name]} |`,
			);
	return between(
		between(readme, README_MARKS.operations, operations.join('\n').trimEnd()),
		README_MARKS.careful,
		careful.join('\n'),
	);
}

function between(text, [start, end], block) {
	const from = text.indexOf(start);
	const to = text.indexOf(end);
	if (from < 0 || to < from) throw new Error(`README.md: no ${start} … ${end} block`);
	return `${text.slice(0, from + start.length)}\n\n${block}\n\n${text.slice(to)}`;
}

function main() {
	const built = build();
	const missing = Object.keys(EMAILS_OR_DELETES).filter((name) => !built.specs[name]);
	if (missing.length)
		throw new Error(`EMAILS_OR_DELETES names tools the node doesn't have: ${missing.join(', ')}`);
	const files = new Map([
		[OUTPUT, renderTypeScript(built)],
		[README, renderReadme(readFileSync(README, 'utf8'), built)],
	]);
	if (process.argv.includes('--check')) {
		const stale = [...files].filter(([path, text]) => {
			try {
				return readFileSync(path, 'utf8') !== text;
			} catch {
				return true;
			}
		});
		if (stale.length) {
			console.error(
				`Out of date: ${stale.map(([path]) => path.slice(ROOT.length + 1)).join(', ')}. Run npm run generate.`,
			);
			process.exit(1);
		}
		console.log(`Generated files are up to date (${Object.keys(built.specs).length} operations)`);
		return;
	}
	for (const [path, text] of files) writeFileSync(path, text);
	console.log(
		`Wrote ${Object.keys(built.specs).length} operations under ${built.resources.size} resources`,
	);
}

main();
