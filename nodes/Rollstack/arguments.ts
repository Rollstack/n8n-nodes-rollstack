import type { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { NodeOperationError, randomString } from 'n8n-workflow';

import type { ToolInput, ToolSpec } from './types';

const IDEMPOTENCY_KEY = 'idempotencyKey';

/** A parameter's value as the Rollstack tool takes it, or why it can't be read. */
export type Converted = { value: unknown } | { problem: string };

function isEmpty(value: unknown): boolean {
	return (
		value === undefined || value === null || (typeof value === 'string' && value.trim() === '')
	);
}

function parseJson(text: string): { value: unknown } | undefined {
	try {
		return { value: JSON.parse(text) as unknown };
	} catch {
		return undefined;
	}
}

/** A parameter's value as the Rollstack tool takes it. A value of undefined means the input is left out. */
export function convert(input: ToolInput, value: unknown): Converted {
	// null from an expression, or the text null, sends null to an input that takes it
	if (
		input.nullable === true &&
		(value === null || (typeof value === 'string' && value.trim() === 'null'))
	)
		return { value: null };
	switch (input.kind) {
		case 'list': {
			if (Array.isArray(value)) return { value: value.map(String) };
			if (isEmpty(value)) return { value: undefined };
			const text = String(value).trim();
			if (!text.startsWith('[')) {
				return {
					value: text
						.split(',')
						.map((item) => item.trim())
						.filter((item) => item !== ''),
				};
			}
			const parsed = parseJson(text);
			if (!parsed || !Array.isArray(parsed.value))
				return { problem: 'enter a JSON array, or values separated by commas' };
			return { value: parsed.value.map(String) };
		}
		case 'json': {
			if (isEmpty(value)) return { value: undefined };
			if (typeof value !== 'string') return { value };
			const parsed = parseJson(value);
			if (!parsed) return { problem: 'enter valid JSON' };
			// A nullable input took null above
			if (parsed.value === null) return { problem: 'enter a value other than null' };
			return parsed;
		}
		case 'integer':
		case 'number': {
			if (isEmpty(value)) return { value: undefined };
			const number = Number(value);
			if (!Number.isFinite(number)) return { problem: 'enter a number' };
			if (input.kind === 'integer' && !Number.isInteger(number))
				return { problem: 'enter a whole number' };
			return { value: number };
		}
		case 'boolean':
			return { value: typeof value === 'string' ? value === 'true' : Boolean(value) };
		default:
			return { value: isEmpty(value) && !input.required ? undefined : value };
	}
}

/**
 * The arguments of the tool an operation calls, from the operation's parameters for item `itemIndex`. A tool that
 * takes an idempotency key gets a new one when the parameter is empty, so that the node's own retries run it once.
 */
export function buildArguments(
	this: IExecuteFunctions,
	spec: ToolSpec,
	itemIndex: number,
): IDataObject {
	const additional = spec.inputs.some((input) => !input.required)
		? (this.getNodeParameter('additionalFields', itemIndex, {}) as IDataObject)
		: {};
	const args: IDataObject = {};
	for (const part of spec.parts) args[part] = {};

	for (const input of spec.inputs) {
		const property = input.property ?? input.name;
		const raw = input.required ? this.getNodeParameter(property, itemIndex) : additional[property];
		const converted = convert(input, raw);
		if ('problem' in converted) {
			throw new NodeOperationError(
				this.getNode(),
				`The parameter ${property} is not valid: ${converted.problem}`,
				{
					itemIndex,
				},
			);
		}
		if (converted.value === undefined) continue;
		const value = converted.value as IDataObject[keyof IDataObject];
		if (input.part === '') {
			args[input.name] = value;
			continue;
		}
		const part = (args[input.part] ??= {}) as IDataObject;
		part[input.name] = value;
	}

	if (spec.inputs.some((input) => input.name === IDEMPOTENCY_KEY) && isEmpty(args[IDEMPOTENCY_KEY]))
		args[IDEMPOTENCY_KEY] = `n8n-${randomString(32)}`;
	return args;
}
