/**
 * Where an input goes in a request: the path (params), the query string or the JSON body, or for `idempotencyKey`,
 * which has no part, the Idempotency-Key header.
 */
export type InputPart = 'params' | 'query' | 'body' | '';

/** How the node reads a parameter's value before it sends it to Rollstack. */
export type InputKind = 'text' | 'select' | 'integer' | 'number' | 'boolean' | 'list' | 'json';

/** One input of a Rollstack tool, and the node parameter it comes from. */
export interface ToolInput {
	/** The input's name in the tool's arguments. */
	name: string;
	part: InputPart;
	kind: InputKind;
	/** Required inputs are parameters of their own. Optional ones are under Additional Fields. */
	required: boolean;
	/** Set when the node parameter has another name than the input, because n8n uses that name itself. */
	property?: string;
	/** Whether the input takes null, which a parameter sends when its value is the text null. */
	nullable?: boolean;
}

/**
 * One operation of the node: the Rollstack REST endpoint it calls, named after the tool of Rollstack's MCP server that
 * calls the same endpoint, and how its parameters become the endpoint's path, query and body.
 */
export interface ToolSpec {
	tool: string;
	method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	/** The endpoint's path under https://api.rollstack.com/public/v1, with its path parameters in braces. */
	path: string;
	/** The parts the endpoint needs even when none of their inputs is set. */
	parts: Array<'params' | 'query' | 'body'>;
	inputs: ToolInput[];
}
