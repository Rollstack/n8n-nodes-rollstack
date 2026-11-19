import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	JsonObject,
} from 'n8n-workflow';
import { NodeApiError, NodeConnectionTypes, NodeOperationError } from 'n8n-workflow';

import { buildArguments } from './arguments';
import { properties, toolSpecs } from './generated';
import { callEndpoint } from './transport';

// A programmatic node, not a declarative one: its 118 operations are generated from Rollstack's tool definitions, and
// the node retries a request with the same idempotency key, tells an error from a call held for confirmation, and
// returns slide images as binary data. Declarative routing can't express that.
export class Rollstack implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Rollstack',
		name: 'rollstack',
		icon: { light: 'file:../../icons/rollstack.svg', dark: 'file:../../icons/rollstack.dark.svg' },
		group: ['transform'],
		version: [1],
		subtitle: '={{$parameter["operation"]}}',
		description:
			'Build polished presentations using AI, with advanced charts and data connections built in',
		defaults: {
			name: 'Rollstack',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'rollstackApi',
				required: true,
			},
		],
		properties,
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
			try {
				const operation = this.getNodeParameter('operation', itemIndex) as string;
				const spec = toolSpecs[operation];
				if (!spec) {
					throw new NodeOperationError(
						this.getNode(),
						`The operation "${operation}" is not known`,
						{ itemIndex },
					);
				}
				const args = buildArguments.call(this, spec, itemIndex);
				const result = await callEndpoint.call(this, spec, args);

				const item: INodeExecutionData = { json: result.json, pairedItem: { item: itemIndex } };
				if (result.images.length) {
					item.binary = {};
					for (const [index, image] of result.images.entries()) {
						const subtype = image.mimeType.split('/')[1] ?? 'png';
						const extension = subtype === 'jpeg' ? 'jpg' : subtype;
						item.binary[`image${index + 1}`] = await this.helpers.prepareBinaryData(
							Buffer.from(image.data, 'base64'),
							`${spec.tool}-${index + 1}.${extension}`,
							image.mimeType,
						);
					}
				}
				returnData.push(item);
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: { error: (error as Error).message },
						pairedItem: { item: itemIndex },
					});
					continue;
				}
				// An error the node already raised keeps its message and HTTP code, and gets the item it failed on
				if (error instanceof NodeApiError) {
					error.context.itemIndex = itemIndex;
					throw new NodeApiError(this.getNode(), error as unknown as JsonObject, { itemIndex });
				}
				if (error instanceof NodeOperationError) {
					error.context.itemIndex = itemIndex;
					throw new NodeOperationError(this.getNode(), error, { itemIndex });
				}
				throw new NodeApiError(this.getNode(), error as JsonObject, { itemIndex });
			}
		}

		return [returnData];
	}
}
