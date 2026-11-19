/** Where an input goes in a Rollstack tool's arguments: one of its parts, or beside them for `idempotencyKey`. */
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

/** One operation of the node: the Rollstack tool it calls, and how its parameters become the tool's arguments. */
export interface ToolSpec {
	tool: string;
	/** The parts the tool needs even when none of their inputs is set. */
	parts: Array<'params' | 'query' | 'body'>;
	inputs: ToolInput[];
}
