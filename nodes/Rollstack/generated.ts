// Written by scripts/generate.mjs from definitions/mcp-tools.json and definitions/rest.json: run
// `npm run generate` rather than editing it.
import type { INodeProperties } from 'n8n-workflow';
import type { ToolSpec } from './types';

export const toolSpecs: Record<string, ToolSpec> = {
	listReports: {
		tool: 'listReports',
		method: 'GET',
		path: '/reports',
		parts: [],
		inputs: [
			{
				name: 'folderId',
				part: 'query',
				kind: 'text',
				required: false,
			},
			{
				name: 'name',
				part: 'query',
				kind: 'text',
				required: false,
			},
			{
				name: 'type',
				part: 'query',
				kind: 'select',
				required: false,
			},
			{
				name: 'limit',
				part: 'query',
				kind: 'integer',
				required: false,
			},
			{
				name: 'cursor',
				part: 'query',
				kind: 'text',
				required: false,
			},
		],
	},
	getReport: {
		tool: 'getReport',
		method: 'GET',
		path: '/reports/{id}',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
		],
	},
	convertReport: {
		tool: 'convertReport',
		method: 'POST',
		path: '/reports/{id}/conversions',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'name',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'folderId',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	createReport: {
		tool: 'createReport',
		method: 'POST',
		path: '/reports',
		parts: [
			'body',
		],
		inputs: [
			{
				name: 'name',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'folderId',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'templateDeckId',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'templateId',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'link',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	duplicateReport: {
		tool: 'duplicateReport',
		method: 'POST',
		path: '/reports/{id}/duplicates',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'name',
				part: 'body',
				kind: 'text',
				required: true,
			},
			{
				name: 'folderId',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'copySchedules',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'inheritSharing',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	updateReport: {
		tool: 'updateReport',
		method: 'PATCH',
		path: '/reports/{id}',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'name',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'folderId',
				part: 'body',
				kind: 'text',
				required: false,
				nullable: true,
			},
			{
				name: 'timezone',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'notifyOnFailure',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'notificationMailingList',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	batchGetReports: {
		tool: 'batchGetReports',
		method: 'POST',
		path: '/reports/batch-get',
		parts: [
			'body',
		],
		inputs: [
			{
				name: 'ids',
				part: 'body',
				kind: 'list',
				required: true,
			},
		],
	},
	listTemplates: {
		tool: 'listTemplates',
		method: 'GET',
		path: '/templates',
		parts: [],
		inputs: [],
	},
	createTemplate: {
		tool: 'createTemplate',
		method: 'POST',
		path: '/templates',
		parts: [
			'body',
		],
		inputs: [
			{
				name: 'name',
				part: 'body',
				kind: 'text',
				required: true,
			},
			{
				name: 'googleSlidesId',
				part: 'body',
				kind: 'text',
				required: true,
			},
			{
				name: 'sharedWithOrganization',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	updateTemplate: {
		tool: 'updateTemplate',
		method: 'PATCH',
		path: '/templates/{templateId}',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'templateId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'name',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'sharedWithOrganization',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	deleteTemplate: {
		tool: 'deleteTemplate',
		method: 'DELETE',
		path: '/templates/{templateId}',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'templateId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	applyReportTemplate: {
		tool: 'applyReportTemplate',
		method: 'POST',
		path: '/reports/{id}/template',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'templateId',
				part: 'body',
				kind: 'text',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	listReportVersions: {
		tool: 'listReportVersions',
		method: 'GET',
		path: '/reports/{id}/versions',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'limit',
				part: 'query',
				kind: 'integer',
				required: false,
			},
			{
				name: 'cursor',
				part: 'query',
				kind: 'text',
				required: false,
			},
		],
	},
	saveReportVersion: {
		tool: 'saveReportVersion',
		method: 'POST',
		path: '/reports/{id}/versions',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'name',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	restoreReportVersion: {
		tool: 'restoreReportVersion',
		method: 'POST',
		path: '/reports/{id}/versions/{versionId}/restore',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'versionId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	getReportMessage: {
		tool: 'getReportMessage',
		method: 'GET',
		path: '/reports/{id}/messages/{messageId}',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'messageId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'waitSeconds',
				part: 'query',
				kind: 'integer',
				required: false,
			},
		],
	},
	sendReportMessage: {
		tool: 'sendReportMessage',
		method: 'POST',
		path: '/reports/{id}/messages',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'content',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'chatId',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'slideIds',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'datasheetIds',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'documentIds',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'answers',
				part: 'body',
				kind: 'json',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	approveReportMessageProposal: {
		tool: 'approveReportMessageProposal',
		method: 'POST',
		path: '/reports/{id}/messages/{messageId}/replies/{replyId}/approve',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'messageId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'replyId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	cancelReportMessage: {
		tool: 'cancelReportMessage',
		method: 'POST',
		path: '/reports/{id}/messages/{messageId}/cancel',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'messageId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	rejectReportMessageProposal: {
		tool: 'rejectReportMessageProposal',
		method: 'POST',
		path: '/reports/{id}/messages/{messageId}/replies/{replyId}/reject',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'messageId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'replyId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	listMemories: {
		tool: 'listMemories',
		method: 'GET',
		path: '/memories',
		parts: [],
		inputs: [],
	},
	createMemory: {
		tool: 'createMemory',
		method: 'POST',
		path: '/memories',
		parts: [
			'body',
		],
		inputs: [
			{
				name: 'text',
				part: 'body',
				kind: 'text',
				required: true,
			},
			{
				name: 'reportId',
				part: 'body',
				kind: 'text',
				required: false,
				nullable: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	updateMemory: {
		tool: 'updateMemory',
		method: 'PATCH',
		path: '/memories/{memoryId}',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'memoryId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'text',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'reportId',
				part: 'body',
				kind: 'text',
				required: false,
				nullable: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	deleteMemory: {
		tool: 'deleteMemory',
		method: 'DELETE',
		path: '/memories/{memoryId}',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'memoryId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	listReportRuns: {
		tool: 'listReportRuns',
		method: 'GET',
		path: '/reports/{id}/runs',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'limit',
				part: 'query',
				kind: 'integer',
				required: false,
			},
			{
				name: 'cursor',
				part: 'query',
				kind: 'text',
				required: false,
			},
		],
	},
	getReportRun: {
		tool: 'getReportRun',
		method: 'GET',
		path: '/reports/{id}/runs/{runId}',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'runId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'waitSeconds',
				part: 'query',
				kind: 'integer',
				required: false,
			},
		],
	},
	listReportSyncs: {
		tool: 'listReportSyncs',
		method: 'GET',
		path: '/reports/{id}/syncs',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
		],
	},
	listRuns: {
		tool: 'listRuns',
		method: 'GET',
		path: '/runs',
		parts: [],
		inputs: [
			{
				name: 'limit',
				part: 'query',
				kind: 'integer',
				required: false,
			},
			{
				name: 'cursor',
				part: 'query',
				kind: 'text',
				required: false,
			},
			{
				name: 'status',
				part: 'query',
				kind: 'select',
				required: false,
			},
			{
				name: 'since',
				part: 'query',
				kind: 'text',
				required: false,
			},
		],
	},
	startReportRun: {
		tool: 'startReportRun',
		method: 'POST',
		path: '/reports/{id}/runs',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'datasheetIds',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'syncIds',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'repairSlides',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	batchStartReportRuns: {
		tool: 'batchStartReportRuns',
		method: 'POST',
		path: '/reports/batch-run',
		parts: [
			'body',
		],
		inputs: [
			{
				name: 'ids',
				part: 'body',
				kind: 'list',
				required: true,
			},
			{
				name: 'repairSlides',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	cancelReportRun: {
		tool: 'cancelReportRun',
		method: 'POST',
		path: '/reports/{id}/runs/{runId}/cancel',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'runId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	getReportCloudExport: {
		tool: 'getReportCloudExport',
		method: 'GET',
		path: '/reports/{id}/cloud-export',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
		],
	},
	updateReportCloudExport: {
		tool: 'updateReportCloudExport',
		method: 'PUT',
		path: '/reports/{id}/cloud-export',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'provider',
				part: 'body',
				kind: 'select',
				required: true,
			},
			{
				name: 'folderUrl',
				part: 'body',
				kind: 'text',
				required: true,
			},
			{
				name: 'fileName',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'trigger',
				part: 'body',
				kind: 'select',
				required: true,
			},
			{
				name: 'updateMethod',
				part: 'body',
				kind: 'select',
				required: false,
			},
			{
				name: 'datestampSuffix',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'ignoreFailuresOnArchive',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	exportReport: {
		tool: 'exportReport',
		method: 'POST',
		path: '/reports/{id}/exports',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'format',
				part: 'body',
				kind: 'select',
				required: true,
			},
			{
				name: 'slideIds',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	getReportContent: {
		tool: 'getReportContent',
		method: 'GET',
		path: '/reports/{id}/content',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'slideIds',
				part: 'query',
				kind: 'list',
				required: false,
			},
		],
	},
	getReportDesign: {
		tool: 'getReportDesign',
		method: 'GET',
		path: '/reports/{id}/design',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'layoutIds',
				part: 'query',
				kind: 'list',
				required: false,
			},
		],
	},
	getReportSlideHtml: {
		tool: 'getReportSlideHtml',
		method: 'GET',
		path: '/reports/{id}/slides/html',
		parts: [
			'params',
			'query',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'slideIds',
				part: 'query',
				kind: 'list',
				required: true,
			},
		],
	},
	getReportSlideImages: {
		tool: 'getReportSlideImages',
		method: 'GET',
		path: '/reports/{id}/slides/images',
		parts: [
			'params',
			'query',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'slideIds',
				part: 'query',
				kind: 'list',
				required: true,
			},
		],
	},
	arrangeReportSlides: {
		tool: 'arrangeReportSlides',
		method: 'PATCH',
		path: '/reports/{id}/slides',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'order',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'remove',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'hide',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'show',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	updateReportTheme: {
		tool: 'updateReportTheme',
		method: 'PATCH',
		path: '/reports/{id}/theme',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'colors',
				part: 'body',
				kind: 'json',
				required: false,
			},
			{
				name: 'headingFont',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'bodyFont',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	renderReportSlides: {
		tool: 'renderReportSlides',
		method: 'POST',
		path: '/reports/{id}/slides/render',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'slides',
				part: 'body',
				kind: 'json',
				required: true,
			},
			{
				name: 'datasheetChanges',
				part: 'body',
				kind: 'json',
				required: false,
			},
		],
	},
	saveReportSlides: {
		tool: 'saveReportSlides',
		method: 'POST',
		path: '/reports/{id}/slides',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'slides',
				part: 'body',
				kind: 'json',
				required: true,
			},
			{
				name: 'afterSlideId',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	getDataset: {
		tool: 'getDataset',
		method: 'GET',
		path: '/datasets/{id}',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'sheetId',
				part: 'query',
				kind: 'text',
				required: false,
			},
			{
				name: 'range',
				part: 'query',
				kind: 'text',
				required: false,
			},
		],
	},
	createDatasetUpload: {
		tool: 'createDatasetUpload',
		method: 'POST',
		path: '/datasets/uploads',
		parts: [
			'body',
		],
		inputs: [
			{
				name: 'datasetId',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	createDocument: {
		tool: 'createDocument',
		method: 'POST',
		path: '/documents',
		parts: [
			'body',
		],
		inputs: [
			{
				name: 'name',
				part: 'body',
				kind: 'text',
				required: true,
			},
			{
				name: 'text',
				part: 'body',
				kind: 'text',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	createDataset: {
		tool: 'createDataset',
		method: 'POST',
		path: '/datasets',
		parts: [
			'body',
		],
		inputs: [
			{
				name: 'name',
				part: 'body',
				kind: 'text',
				required: true,
			},
			{
				name: 'csv',
				part: 'body',
				kind: 'text',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	replaceDataset: {
		tool: 'replaceDataset',
		method: 'PUT',
		path: '/datasets/{id}',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'csv',
				part: 'body',
				kind: 'text',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	deleteDataset: {
		tool: 'deleteDataset',
		method: 'DELETE',
		path: '/datasets/{id}',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	getReportDataGuide: {
		tool: 'getReportDataGuide',
		method: 'GET',
		path: '/data-guide',
		parts: [],
		inputs: [],
	},
	listReportDatasheets: {
		tool: 'listReportDatasheets',
		method: 'GET',
		path: '/reports/{id}/datasheets',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
		],
	},
	getReportDatasheet: {
		tool: 'getReportDatasheet',
		method: 'GET',
		path: '/reports/{id}/datasheets/{datasheetId}',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'datasheetId',
				part: 'params',
				kind: 'text',
				required: true,
			},
		],
	},
	getReportDatasheetData: {
		tool: 'getReportDatasheetData',
		method: 'GET',
		path: '/reports/{id}/datasheets/{datasheetId}/data',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'datasheetId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'limit',
				part: 'query',
				kind: 'integer',
				required: false,
			},
		],
	},
	addReportDatasheets: {
		tool: 'addReportDatasheets',
		method: 'POST',
		path: '/reports/{id}/datasheets',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'sources',
				part: 'body',
				kind: 'json',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	removeReportDatasheet: {
		tool: 'removeReportDatasheet',
		method: 'DELETE',
		path: '/reports/{id}/datasheets/{datasheetId}',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'datasheetId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	addReportDashboardElements: {
		tool: 'addReportDashboardElements',
		method: 'POST',
		path: '/reports/{id}/datasheets/{datasheetId}/elements',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'datasheetId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'elements',
				part: 'body',
				kind: 'json',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	previewReportDatasheetChanges: {
		tool: 'previewReportDatasheetChanges',
		method: 'POST',
		path: '/reports/{id}/datasheets/changes/preview',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'changes',
				part: 'body',
				kind: 'json',
				required: true,
			},
		],
	},
	queryReportData: {
		tool: 'queryReportData',
		method: 'POST',
		path: '/reports/{id}/data/query',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'sql',
				part: 'body',
				kind: 'text',
				required: true,
			},
		],
	},
	saveReportDatasheetChanges: {
		tool: 'saveReportDatasheetChanges',
		method: 'POST',
		path: '/reports/{id}/datasheets/changes',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'changes',
				part: 'body',
				kind: 'json',
				required: true,
			},
			{
				name: 'revisions',
				part: 'body',
				kind: 'json',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	getReportParameters: {
		tool: 'getReportParameters',
		method: 'GET',
		path: '/reports/{id}/parameters',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
		],
	},
	createReportParameter: {
		tool: 'createReportParameter',
		method: 'POST',
		path: '/reports/{id}/parameters',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'name',
				part: 'body',
				kind: 'text',
				required: true,
			},
			{
				name: 'filterIds',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'columns',
				part: 'body',
				kind: 'json',
				required: false,
			},
			{
				name: 'value',
				part: 'body',
				kind: 'json',
				required: false,
				nullable: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	updateReportParameter: {
		tool: 'updateReportParameter',
		method: 'PATCH',
		path: '/reports/{id}/parameters/{parameterId}',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'parameterId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'name',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'filterIds',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'columns',
				part: 'body',
				kind: 'json',
				required: false,
			},
			{
				name: 'value',
				part: 'body',
				kind: 'json',
				required: false,
				nullable: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	deleteReportParameter: {
		tool: 'deleteReportParameter',
		method: 'DELETE',
		path: '/reports/{id}/parameters/{parameterId}',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'parameterId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	getReportViews: {
		tool: 'getReportViews',
		method: 'GET',
		path: '/reports/{id}/views',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
		],
	},
	shareReport: {
		tool: 'shareReport',
		method: 'PUT',
		path: '/reports/{id}/shares/{userId}',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'userId',
				part: 'params',
				kind: 'integer',
				required: true,
			},
			{
				name: 'permission',
				part: 'body',
				kind: 'select',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	unshareReport: {
		tool: 'unshareReport',
		method: 'DELETE',
		path: '/reports/{id}/shares/{userId}',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'userId',
				part: 'params',
				kind: 'integer',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	batchShareReports: {
		tool: 'batchShareReports',
		method: 'POST',
		path: '/reports/batch-share',
		parts: [
			'body',
		],
		inputs: [
			{
				name: 'ids',
				part: 'body',
				kind: 'list',
				required: true,
			},
			{
				name: 'userIds',
				part: 'body',
				kind: 'json',
				required: true,
			},
			{
				name: 'permission',
				part: 'body',
				kind: 'select',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	listReportComments: {
		tool: 'listReportComments',
		method: 'GET',
		path: '/reports/{id}/comments',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
		],
	},
	createReportComment: {
		tool: 'createReportComment',
		method: 'POST',
		path: '/reports/{id}/comments',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'text',
				part: 'body',
				kind: 'text',
				required: true,
			},
			{
				name: 'slideId',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'threadId',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	resolveReportComment: {
		tool: 'resolveReportComment',
		method: 'POST',
		path: '/reports/{id}/comments/{commentId}/resolve',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'commentId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'resolved',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	getReportSchedules: {
		tool: 'getReportSchedules',
		method: 'GET',
		path: '/reports/{id}/schedules',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
		],
	},
	updateReportSchedules: {
		tool: 'updateReportSchedules',
		method: 'PUT',
		path: '/reports/{id}/schedules',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'schedules',
				part: 'body',
				kind: 'json',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	batchUpdateReportSchedules: {
		tool: 'batchUpdateReportSchedules',
		method: 'POST',
		path: '/reports/batch-update-schedules',
		parts: [
			'body',
		],
		inputs: [
			{
				name: 'ids',
				part: 'body',
				kind: 'list',
				required: true,
			},
			{
				name: 'schedules',
				part: 'body',
				kind: 'json',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	listEmails: {
		tool: 'listEmails',
		method: 'GET',
		path: '/emails',
		parts: [],
		inputs: [
			{
				name: 'limit',
				part: 'query',
				kind: 'integer',
				required: false,
			},
			{
				name: 'cursor',
				part: 'query',
				kind: 'text',
				required: false,
			},
			{
				name: 'status',
				part: 'query',
				kind: 'select',
				required: false,
			},
			{
				name: 'since',
				part: 'query',
				kind: 'text',
				required: false,
			},
			{
				name: 'burstId',
				part: 'query',
				kind: 'text',
				required: false,
			},
		],
	},
	getReportEmailConfig: {
		tool: 'getReportEmailConfig',
		method: 'GET',
		path: '/reports/{id}/email-config',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
		],
	},
	listReportEmails: {
		tool: 'listReportEmails',
		method: 'GET',
		path: '/reports/{id}/emails',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'limit',
				part: 'query',
				kind: 'integer',
				required: false,
			},
			{
				name: 'cursor',
				part: 'query',
				kind: 'text',
				required: false,
			},
		],
	},
	updateReportEmailConfig: {
		tool: 'updateReportEmailConfig',
		method: 'PUT',
		path: '/reports/{id}/email-config',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'to',
				part: 'body',
				kind: 'list',
				required: true,
			},
			{
				name: 'cc',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'bcc',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'replyTo',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'groupRecipients',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'smtpServerId',
				part: 'body',
				kind: 'text',
				required: false,
				nullable: true,
			},
			{
				name: 'sharingFormat',
				part: 'body',
				kind: 'select',
				required: false,
			},
			{
				name: 'sendAttachmentAsLink',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'trigger',
				part: 'body',
				kind: 'select',
				required: false,
			},
			{
				name: 'ignoredFailureStatusMessages',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'emailAnalyticsEnabled',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	sendReportEmail: {
		tool: 'sendReportEmail',
		method: 'POST',
		path: '/reports/{id}/emails',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	sendReportTestEmail: {
		tool: 'sendReportTestEmail',
		method: 'POST',
		path: '/reports/{id}/emails/test',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	listBursts: {
		tool: 'listBursts',
		method: 'GET',
		path: '/bursts',
		parts: [],
		inputs: [
			{
				name: 'name',
				part: 'query',
				kind: 'text',
				required: false,
			},
			{
				name: 'limit',
				part: 'query',
				kind: 'integer',
				required: false,
			},
			{
				name: 'cursor',
				part: 'query',
				kind: 'text',
				required: false,
			},
		],
	},
	listBurstEmailConfigs: {
		tool: 'listBurstEmailConfigs',
		method: 'GET',
		path: '/bursts/{id}/email-configs',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
		],
	},
	getBurstRun: {
		tool: 'getBurstRun',
		method: 'GET',
		path: '/bursts/{id}/runs',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'waitSeconds',
				part: 'query',
				kind: 'integer',
				required: false,
			},
		],
	},
	getBurstSettings: {
		tool: 'getBurstSettings',
		method: 'GET',
		path: '/bursts/{id}/settings',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
		],
	},
	listBurstVariants: {
		tool: 'listBurstVariants',
		method: 'GET',
		path: '/bursts/{id}/variants',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'limit',
				part: 'query',
				kind: 'integer',
				required: false,
			},
			{
				name: 'cursor',
				part: 'query',
				kind: 'text',
				required: false,
			},
		],
	},
	getBurstVariantBatch: {
		tool: 'getBurstVariantBatch',
		method: 'GET',
		path: '/bursts/{id}/variants/batches/{batchId}',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'batchId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'waitSeconds',
				part: 'query',
				kind: 'integer',
				required: false,
			},
		],
	},
	listReportSyncFilters: {
		tool: 'listReportSyncFilters',
		method: 'GET',
		path: '/reports/{id}/syncs/{syncId}/filters',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'syncId',
				part: 'params',
				kind: 'text',
				required: true,
			},
		],
	},
	addBurstVariants: {
		tool: 'addBurstVariants',
		method: 'POST',
		path: '/bursts/{id}/variants',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'variants',
				part: 'body',
				kind: 'json',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	convertBurst: {
		tool: 'convertBurst',
		method: 'POST',
		path: '/bursts/{id}/conversions',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'name',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'folderId',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	createBurst: {
		tool: 'createBurst',
		method: 'POST',
		path: '/bursts',
		parts: [
			'body',
		],
		inputs: [
			{
				name: 'templateReportId',
				part: 'body',
				kind: 'text',
				required: true,
			},
			{
				name: 'parameterIds',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'filters',
				part: 'body',
				kind: 'json',
				required: false,
			},
			{
				name: 'parentFolderId',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'driveId',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'variantNaming',
				part: 'body',
				kind: 'select',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	createBurstEmailConfig: {
		tool: 'createBurstEmailConfig',
		method: 'POST',
		path: '/bursts/{id}/email-configs',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'name',
				part: 'body',
				kind: 'text',
				required: false,
				nullable: true,
			},
			{
				name: 'variantIds',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'sharingFormat',
				part: 'body',
				kind: 'select',
				required: false,
			},
			{
				name: 'sendAttachmentAsLink',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'zipAttachments',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'emailAnalyticsEnabled',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'smtpServerId',
				part: 'body',
				kind: 'text',
				required: false,
				nullable: true,
			},
			{
				name: 'to',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'cc',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'bcc',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'replyTo',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	startBurstRun: {
		tool: 'startBurstRun',
		method: 'POST',
		path: '/bursts/{id}/runs',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'variantIds',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	sendBurstEmailConfig: {
		tool: 'sendBurstEmailConfig',
		method: 'POST',
		path: '/bursts/{id}/email-configs/{configId}/send',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'configId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	sendBurstVariantEmails: {
		tool: 'sendBurstVariantEmails',
		method: 'POST',
		path: '/bursts/{id}/variants/emails',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'variantIds',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	renameBurst: {
		tool: 'renameBurst',
		method: 'PATCH',
		path: '/bursts/{id}',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'name',
				part: 'body',
				kind: 'text',
				required: true,
			},
			{
				name: 'renameVariants',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'renameFiles',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	updateBurstVariantEmailSettings: {
		tool: 'updateBurstVariantEmailSettings',
		method: 'PATCH',
		path: '/bursts/{id}/variants/email-settings',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'variantIds',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'smtpServerId',
				part: 'body',
				kind: 'text',
				required: false,
				nullable: true,
			},
			{
				name: 'sharingFormat',
				part: 'body',
				kind: 'select',
				required: false,
			},
			{
				name: 'sendAttachmentAsLink',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'trigger',
				part: 'body',
				kind: 'select',
				required: false,
			},
			{
				name: 'groupRecipients',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'ignoredFailureStatusMessages',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'emailAnalyticsEnabled',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	updateBurstEmailConfig: {
		tool: 'updateBurstEmailConfig',
		method: 'PATCH',
		path: '/bursts/{id}/email-configs/{configId}',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'configId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'name',
				part: 'body',
				kind: 'text',
				required: false,
				nullable: true,
			},
			{
				name: 'variantIds',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'sharingFormat',
				part: 'body',
				kind: 'select',
				required: false,
			},
			{
				name: 'sendAttachmentAsLink',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'zipAttachments',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'emailAnalyticsEnabled',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'smtpServerId',
				part: 'body',
				kind: 'text',
				required: false,
				nullable: true,
			},
			{
				name: 'to',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'cc',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'bcc',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'replyTo',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	updateBurstSettings: {
		tool: 'updateBurstSettings',
		method: 'PATCH',
		path: '/bursts/{id}/settings',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'variantNaming',
				part: 'body',
				kind: 'select',
				required: false,
			},
			{
				name: 'updateMethod',
				part: 'body',
				kind: 'select',
				required: false,
			},
			{
				name: 'variantEmptyVisualizations',
				part: 'body',
				kind: 'select',
				required: false,
			},
			{
				name: 'archiveVariantsInFolder',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'datestampSuffix',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'caseInsensitiveFilters',
				part: 'body',
				kind: 'boolean',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	updateBurstVariantRecipients: {
		tool: 'updateBurstVariantRecipients',
		method: 'PUT',
		path: '/bursts/{id}/variants/recipients',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'variants',
				part: 'body',
				kind: 'json',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	updateBurstFilters: {
		tool: 'updateBurstFilters',
		method: 'PUT',
		path: '/bursts/{id}/filters',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'primaryIds',
				part: 'body',
				kind: 'list',
				required: true,
			},
			{
				name: 'secondaryIds',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'replace',
				part: 'body',
				kind: 'json',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	deleteBurst: {
		tool: 'deleteBurst',
		method: 'DELETE',
		path: '/bursts/{id}',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	deleteBurstEmailConfig: {
		tool: 'deleteBurstEmailConfig',
		method: 'DELETE',
		path: '/bursts/{id}/email-configs/{configId}',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'configId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	reapplyBurstFilters: {
		tool: 'reapplyBurstFilters',
		method: 'POST',
		path: '/bursts/{id}/filters/reapply',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'variantIds',
				part: 'body',
				kind: 'list',
				required: false,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	removeBurstVariants: {
		tool: 'removeBurstVariants',
		method: 'POST',
		path: '/bursts/{id}/variants/remove',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'variantIds',
				part: 'body',
				kind: 'list',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	sendBurstEmailConfigTest: {
		tool: 'sendBurstEmailConfigTest',
		method: 'POST',
		path: '/bursts/{id}/email-configs/{configId}/test',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'configId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	listConnections: {
		tool: 'listConnections',
		method: 'GET',
		path: '/connections',
		parts: [],
		inputs: [],
	},
	searchDashboards: {
		tool: 'searchDashboards',
		method: 'GET',
		path: '/connections/{type}/{id}/dashboards',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'type',
				part: 'params',
				kind: 'select',
				required: true,
			},
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'query',
				part: 'query',
				kind: 'text',
				required: false,
			},
		],
	},
	getDashboard: {
		tool: 'getDashboard',
		method: 'GET',
		path: '/connections/{type}/{id}/dashboards/{dashboardId}',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'type',
				part: 'params',
				kind: 'select',
				required: true,
			},
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'dashboardId',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'tabId',
				part: 'query',
				kind: 'text',
				required: false,
			},
		],
	},
	searchModels: {
		tool: 'searchModels',
		method: 'GET',
		path: '/connections/{type}/{id}/models',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'type',
				part: 'params',
				kind: 'select',
				required: true,
			},
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'query',
				part: 'query',
				kind: 'text',
				required: false,
			},
		],
	},
	searchTables: {
		tool: 'searchTables',
		method: 'GET',
		path: '/connections/{type}/{id}/tables',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'type',
				part: 'params',
				kind: 'select',
				required: true,
			},
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'query',
				part: 'query',
				kind: 'text',
				required: false,
			},
		],
	},
	searchSpreadsheets: {
		tool: 'searchSpreadsheets',
		method: 'GET',
		path: '/spreadsheets',
		parts: [],
		inputs: [
			{
				name: 'query',
				part: 'query',
				kind: 'text',
				required: false,
			},
		],
	},
	getSpreadsheet: {
		tool: 'getSpreadsheet',
		method: 'GET',
		path: '/spreadsheets/{id}',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
		],
	},
	listSmtpConnections: {
		tool: 'listSmtpConnections',
		method: 'GET',
		path: '/smtp-connections',
		parts: [],
		inputs: [],
	},
	listFolders: {
		tool: 'listFolders',
		method: 'GET',
		path: '/folders',
		parts: [],
		inputs: [],
	},
	getFolder: {
		tool: 'getFolder',
		method: 'GET',
		path: '/folders/{id}',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
		],
	},
	createFolder: {
		tool: 'createFolder',
		method: 'POST',
		path: '/folders',
		parts: [
			'body',
		],
		inputs: [
			{
				name: 'name',
				part: 'body',
				kind: 'text',
				required: true,
			},
			{
				name: 'parentFolderId',
				part: 'body',
				kind: 'text',
				required: false,
				nullable: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	updateFolder: {
		tool: 'updateFolder',
		method: 'PATCH',
		path: '/folders/{id}',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'name',
				part: 'body',
				kind: 'text',
				required: false,
			},
			{
				name: 'parentFolderId',
				part: 'body',
				kind: 'text',
				required: false,
				nullable: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	shareFolder: {
		tool: 'shareFolder',
		method: 'PUT',
		path: '/folders/{id}/shares/{userId}',
		parts: [
			'params',
			'body',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'userId',
				part: 'params',
				kind: 'integer',
				required: true,
			},
			{
				name: 'permission',
				part: 'body',
				kind: 'select',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	unshareFolder: {
		tool: 'unshareFolder',
		method: 'DELETE',
		path: '/folders/{id}/shares/{userId}',
		parts: [
			'params',
		],
		inputs: [
			{
				name: 'id',
				part: 'params',
				kind: 'text',
				required: true,
			},
			{
				name: 'userId',
				part: 'params',
				kind: 'integer',
				required: true,
			},
			{
				name: 'idempotencyKey',
				part: '',
				kind: 'text',
				required: false,
			},
		],
	},
	listMembers: {
		tool: 'listMembers',
		method: 'GET',
		path: '/members',
		parts: [],
		inputs: [
			{
				name: 'status',
				part: 'query',
				kind: 'select',
				required: false,
			},
			{
				name: 'email',
				part: 'query',
				kind: 'text',
				required: false,
			},
		],
	},
};

export const properties: INodeProperties[] = [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Burst',
				value: 'burst',
			},
			{
				name: 'Chat',
				value: 'chat',
			},
			{
				name: 'Comment',
				value: 'comment',
			},
			{
				name: 'Connection',
				value: 'connection',
			},
			{
				name: 'Content',
				value: 'content',
			},
			{
				name: 'Datasheet',
				value: 'datasheet',
			},
			{
				name: 'Email',
				value: 'email',
			},
			{
				name: 'Export',
				value: 'export',
			},
			{
				name: 'Folder',
				value: 'folder',
			},
			{
				name: 'Member',
				value: 'member',
			},
			{
				name: 'Memory',
				value: 'memory',
			},
			{
				name: 'Parameter',
				value: 'parameter',
			},
			{
				name: 'Report',
				value: 'report',
			},
			{
				name: 'Run',
				value: 'run',
			},
			{
				name: 'Schedule',
				value: 'schedule',
			},
			{
				name: 'Sharing',
				value: 'sharing',
			},
			{
				name: 'SMTP Connection',
				value: 'smtpConnection',
			},
			{
				name: 'Spreadsheet',
				value: 'spreadsheet',
			},
			{
				name: 'Template',
				value: 'template',
			},
			{
				name: 'Uploaded File',
				value: 'uploadedFile',
			},
			{
				name: 'Version',
				value: 'version',
			},
		],
		default: 'report',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'report',
				],
			},
		},
		options: [
			{
				name: 'Convert Report to Slide Deck',
				value: 'convertReport',
				description: 'Turns an older report of type GoogleSlides or MicrosoftPowerPoint, which updates a Google Slides presentation or a PowerPoint file in OneDrive or SharePoint, into a new report of type SlideDeck, as Convert to Rollstack slides in the app does',
				action: 'Convert report to slide deck',
			},
			{
				name: 'Create',
				value: 'createReport',
				description: 'Creates a report of type SlideDeck, in a folder the user can see when folderId is set',
				action: 'Create report',
			},
			{
				name: 'Duplicate',
				value: 'duplicateReport',
				description: 'Copies a report of type SlideDeck with its slides, datasheets and email setup, as Duplicate in the app does, and answers the copy, which you own',
				action: 'Duplicate report',
			},
			{
				name: 'Get',
				value: 'getReport',
				description: 'A report of any type with its schedules, who it is shared with and who is emailed when a run fails. lastRunStatus and running tell how its latest run went and whether one is going, and appUrl opens it in Rollstack. type tells which other endpoints work on it.',
				action: 'Get report',
			},
			{
				name: 'Get Reports in a Batch',
				value: 'batchGetReports',
				description: 'Up to 50 reports of any type at once, each as getReport answers it, with its schedules, who it is shared with, how its latest run went and whether one is going',
				action: 'Get reports in a batch',
			},
			{
				name: 'List',
				value: 'listReports',
				description: 'The reports the user can see, of every type, newest first',
				action: 'List reports',
			},
			{
				name: 'Update',
				value: 'updateReport',
				description: 'Renames a report of any type, moves it, or changes its timezone or failure notifications',
				action: 'Update report',
			},
		],
		default: 'listReports',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'template',
				],
			},
		},
		options: [
			{
				name: 'Apply',
				value: 'applyReportTemplate',
				description: 'Switches a report of type SlideDeck to a template\'s theme, slide masters, layouts and slide size, as the Templates drawer in the app does',
				action: 'Apply template',
			},
			{
				name: 'Delete',
				value: 'deleteTemplate',
				description: 'Deletes a company template, as the app\'s Templates drawer does',
				action: 'Delete template',
			},
			{
				name: 'Import',
				value: 'createTemplate',
				description: 'Imports a company template from a Google Slides presentation, as the app\'s Templates drawer does: its theme, slide masters, layouts and slide size, not its slides',
				action: 'Import template',
			},
			{
				name: 'List',
				value: 'listTemplates',
				description: 'The templates the user can build a slide deck in: their company\'s, with who imported each and whether it is shared with the organization, then Rollstack\'s own',
				action: 'List templates',
			},
			{
				name: 'Update',
				value: 'updateTemplate',
				description: 'Renames a company template, or shares it with the organization or stops sharing it, as the app\'s Templates drawer does',
				action: 'Update template',
			},
		],
		default: 'listTemplates',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'version',
				],
			},
		},
		options: [
			{
				name: 'List Report Versions',
				value: 'listReportVersions',
				description: 'The Version history of a report of type SlideDeck, newest first, as the app lists it: the versions Rollstack saved while it was edited, run or changed by the slides agent, and those saved with saveReportVersion, each with what saved it',
				action: 'List report versions',
			},
			{
				name: 'Restore Report Version',
				value: 'restoreReportVersion',
				description: 'Takes a report of type SlideDeck back to one of its versions, as Restore in the app\'s Version history does: its slides, and the datasheets when the version saved them, become the version\'s, replacing every change made since, and members with the report open see it at once',
				action: 'Restore report version',
			},
			{
				name: 'Save Report Version',
				value: 'saveReportVersion',
				description: 'Saves a report of type SlideDeck as it is now in its Version history, with an optional name, so it can be restored later with restoreReportVersion, for example before a change the user may want to take back',
				action: 'Save report version',
			},
		],
		default: 'listReportVersions',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'chat',
				],
			},
		},
		options: [
			{
				name: 'Approve Slides Agent Proposal',
				value: 'approveReportMessageProposal',
				description: 'Approves the proposal of a settings_proposal or email_send_proposal reply, as its Approve button in the app\'s chat does: Rollstack makes the change, or sends the email',
				action: 'Approve slides agent proposal',
			},
			{
				name: 'Cancel Slides Agent Message',
				value: 'cancelReportMessage',
				description: 'Stops a message to the slides agent: a queued one leaves the queue, and a running one stops',
				action: 'Cancel slides agent message',
			},
			{
				name: 'Get Slides Agent Message',
				value: 'getReportMessage',
				description: 'A message to the slides agent and its replies',
				action: 'Get slides agent message',
			},
			{
				name: 'Reject Slides Agent Proposal',
				value: 'rejectReportMessageProposal',
				description: 'Rejects the proposal of a settings_proposal or email_send_proposal reply, as its Reject button in the app\'s chat does: nothing changes',
				action: 'Reject slides agent proposal',
			},
			{
				name: 'Send Message to Slides Agent',
				value: 'sendReportMessage',
				description: 'Asks the slides agent to build or change a report, or to answer a question about it, as the app\'s chat does',
				action: 'Send message to slides agent',
			},
		],
		default: 'sendReportMessage',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'memory',
				],
			},
		},
		options: [
			{
				name: 'Add',
				value: 'createMemory',
				description: 'Has the slides agent remember something of how the user likes their decks, for all their reports or one of them, as adding a preference in the app\'s Slides settings does',
				action: 'Add memory',
			},
			{
				name: 'Forget',
				value: 'deleteMemory',
				description: 'Has the slides agent forget a memory: its runs stop reading it, as forgetting it in the app\'s Slides settings does',
				action: 'Forget memory',
			},
			{
				name: 'List',
				value: 'listMemories',
				description: 'What the slides agent remembers of how the user likes their decks, as the app\'s Slides settings list it: each memory, the part of a deck it is about, and the report it holds for, if only one',
				action: 'List memories',
			},
			{
				name: 'Update',
				value: 'updateMemory',
				description: 'Rewords a memory of the slides agent, or moves it to one report or all of them',
				action: 'Update memory',
			},
		],
		default: 'listMemories',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'run',
				],
			},
		},
		options: [
			{
				name: 'Cancel Report Run',
				value: 'cancelReportRun',
				description: 'Cancels a run of a report, whoever started it',
				action: 'Cancel report run',
			},
			{
				name: 'Get Report Run',
				value: 'getReportRun',
				description: 'A run\'s status and the datasheets, or visualizations on a report of another type than SlideDeck, it could not refresh',
				action: 'Get report run',
			},
			{
				name: 'List Report Runs',
				value: 'listReportRuns',
				description: 'The runs of a report of any type that ended, newest first, with how each ended, what started it and why it failed, for questions such as why last night\'s update failed',
				action: 'List report runs',
			},
			{
				name: 'List Report Syncs',
				value: 'listReportSyncs',
				description: 'The syncs of a report other than a SlideDeck, such as a Google Slides presentation or an email report: each chart, table or text it pulls from a source, with how it did the last time it updated and why it failed',
				action: 'List report syncs',
			},
			{
				name: 'List Runs of All Reports',
				value: 'listRuns',
				description: 'The runs that ended of every report the user can see, of any type, newest first, each with its report, for questions such as what failed overnight: pass status failed and since',
				action: 'List runs of all reports',
			},
			{
				name: 'Start Report Run',
				value: 'startReportRun',
				description: 'Refreshes a report\'s data, or only some of its datasheets, then repairs failed calculations and the slides with AI',
				action: 'Start report run',
			},
			{
				name: 'Start Report Runs in a Batch',
				value: 'batchStartReportRuns',
				description: 'Starts a run of each of up to 50 reports of any type, as startReportRun does for one: each run updates its whole report, and a run of a report of another type than SlideDeck emails it when its email trigger is all',
				action: 'Start report runs in a batch',
			},
		],
		default: 'listRuns',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'export',
				],
			},
		},
		options: [
			{
				name: 'Export Report',
				value: 'exportReport',
				description: 'Exports a report as PDF or PowerPoint and answers a download link valid for 15 minutes',
				action: 'Export report',
			},
			{
				name: 'Get Cloud Save',
				value: 'getReportCloudExport',
				description: 'Where a report is saved after its runs, in Google Drive, OneDrive or SharePoint, and how its last save went, with a link to the saved file',
				action: 'Get cloud save',
			},
			{
				name: 'Set Cloud Save',
				value: 'updateReportCloudExport',
				description: 'Saves a report to a Google Drive, OneDrive or SharePoint folder after its runs, as the app\'s scheduling panel does, replacing the setting it had',
				action: 'Set cloud save',
			},
		],
		default: 'exportReport',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'content',
				],
			},
		},
		options: [
			{
				name: 'Arrange Slides',
				value: 'arrangeReportSlides',
				description: 'Moves, removes, hides or shows slides of a slide deck, with nothing on them changed',
				action: 'Arrange slides',
			},
			{
				name: 'Change Theme',
				value: 'updateReportTheme',
				description: 'Changes a slide deck\'s theme: its colours, its heading font and its body font',
				action: 'Change theme',
			},
			{
				name: 'Get Report Content',
				value: 'getReportContent',
				description: 'What a viewer sees on a report\'s visible slides: titles, text, and each chart\'s and table\'s values',
				action: 'Get report content',
			},
			{
				name: 'Get Report Design',
				value: 'getReportDesign',
				description: 'Start here to design a slide deck\'s slides yourself, as HTML',
				action: 'Get report design',
			},
			{
				name: 'Get Slide Drafts',
				value: 'getReportSlideHtml',
				description: 'The HTML drafts slides of a slide deck were made from, to change them and save them again with saveReportSlides under the same IDs',
				action: 'Get slide drafts',
			},
			{
				name: 'Get Slide Images',
				value: 'getReportSlideImages',
				description: 'Renders slides of a report as images, as viewers see them, so you can check how they look: text that overflows or overlaps, or a chart too small to read',
				action: 'Get slide images',
			},
			{
				name: 'Render Draft Slides',
				value: 'renderReportSlides',
				description: 'Renders slides you wrote as HTML on a slide deck\'s template, so you can design slides yourself instead of asking the slides agent',
				action: 'Render draft slides',
			},
			{
				name: 'Save Draft Slides',
				value: 'saveReportSlides',
				description: 'Writes slides you wrote as HTML into a slide deck, as the slides agent\'s are: a draft sent under the ID of a slide of the report replaces that slide where it is, any other is added right after the slide named in afterSlideId, or at the end without one, and every other slide stays',
				action: 'Save draft slides',
			},
		],
		default: 'getReportContent',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'uploadedFile',
				],
			},
		},
		options: [
			{
				name: 'Delete',
				value: 'deleteDataset',
				description: 'Deletes an uploaded CSV file or workbook',
				action: 'Delete an uploaded file',
			},
			{
				name: 'Get',
				value: 'getDataset',
				description: 'An uploaded CSV file or Excel workbook',
				action: 'Get an uploaded file',
			},
			{
				name: 'Get a Link to Upload a File',
				value: 'createDatasetUpload',
				description: 'Answers a link to send a CSV file or an Excel workbook (.xlsx) to from a shell, as it is on disk, at most 10 MB: use it when the user gives you a file, in place of writing a CSV into createDataset, and for every workbook',
				action: 'Get a link to upload a file',
			},
			{
				name: 'Replace',
				value: 'replaceDataset',
				description: 'Replaces an uploaded CSV file\'s rows, or a workbook\'s content with a new .xlsx sent as multipart/form-data in the file field',
				action: 'Replace an uploaded file',
			},
			{
				name: 'Upload a Document',
				value: 'createDocument',
				description: 'Stores a document for the slides agent to read, such as a brief, a report or meeting notes, as when you attach one in the chat in the app: pass its ID in documentIds on sendReportMessage',
				action: 'Upload a document',
			},
			{
				name: 'Upload a File',
				value: 'createDataset',
				description: 'Stores a CSV for the slides agent to build slides from: a header row, then at least one data row, at most 10 MB',
				action: 'Upload a file',
			},
		],
		default: 'getDataset',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
			},
		},
		options: [
			{
				name: 'Add Dashboard Charts to Report',
				value: 'addReportDashboardElements',
				description: 'Adds charts of a Tableau view or Power BI page the report holds as a picture, each as a datasheet of its own: its data, to read with getReportDatasheetData or queryReportData and draw on a slide, its picture, or both',
				action: 'Add dashboard charts to report',
			},
			{
				name: 'Add Sources to Report',
				value: 'addReportDatasheets',
				description: 'Adds sources to a report as datasheets, and answers their IDs in the order of the sources',
				action: 'Add sources to report',
			},
			{
				name: 'Get',
				value: 'getReportDatasheet',
				description: 'What a datasheet\'s data is written as: its query, in the shape set-query takes, its one SQL statement, or its join and the steps after it, and its formats',
				action: 'Get a datasheet',
			},
			{
				name: 'Get Datasheet Data',
				value: 'getReportDatasheetData',
				description: 'The table a report\'s chart is drawn from: the datasheet\'s steps run over the copies stored at its sources\' last reads; the source is never queried',
				action: 'Get datasheet data',
			},
			{
				name: 'Get the Data Guide',
				value: 'getReportDataGuide',
				description: 'Read this once before you add or shape the data of a report: how to send a CSV or an Excel workbook and pick the range of a sheet, how to check a figure with queryReportData, how to shape data with previewReportDatasheetChanges, renderReportSlides and saveReportDatasheetChanges, and the query model those changes write',
				action: 'Get the data guide',
			},
			{
				name: 'List Report Datasheets',
				value: 'listReportDatasheets',
				description: 'The datasheets a report\'s charts and tables are built from, with their source and when each was last read',
				action: 'List report datasheets',
			},
			{
				name: 'Preview Datasheet Changes',
				value: 'previewReportDatasheetChanges',
				description: 'Tries changes to a report\'s datasheets, to shape data before it goes on a slide: a new datasheet, a query, steps after a join, a read type, an unpivot',
				action: 'Preview datasheet changes',
			},
			{
				name: 'Query Report Data',
				value: 'queryReportData',
				description: 'Runs one read-only SQL query over the tables of a report\'s datasheets, to check a figure before it goes on a slide or to explore data before shaping it',
				action: 'Query report data',
			},
			{
				name: 'Remove Datasheet From Report',
				value: 'removeReportDatasheet',
				description: 'Removes a datasheet the report\'s slides no longer show, such as a source that was added and not used, or one whose read keeps failing',
				action: 'Remove datasheet from report',
			},
			{
				name: 'Save Datasheet Changes',
				value: 'saveReportDatasheetChanges',
				description: 'Saves changes to a report\'s datasheets that you tried with previewReportDatasheetChanges: send the same changes with the revisions it answered',
				action: 'Save datasheet changes',
			},
		],
		default: 'listReportDatasheets',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'parameter',
				],
			},
		},
		options: [
			{
				name: 'Create Report Parameter',
				value: 'createReportParameter',
				description: 'Creates a parameter of a report, linked to the dashboard filters and datasheet columns given, as the app\'s report parameters editor does',
				action: 'Create report parameter',
			},
			{
				name: 'Delete Report Parameter',
				value: 'deleteReportParameter',
				description: 'Deletes a parameter of a report, as the app\'s report parameters editor does',
				action: 'Delete report parameter',
			},
			{
				name: 'Get Report Parameters',
				value: 'getReportParameters',
				description: 'A report\'s parameters, with which ones a burst can vary by, the dashboard filters and the datasheet columns a parameter can link, with the parameter that already links each',
				action: 'Get report parameters',
			},
			{
				name: 'Update Report Parameter',
				value: 'updateReportParameter',
				description: 'Changes a parameter of a report, such as its value to show the report for another region, as the app\'s report parameters editor does: what you send changes and the rest stays',
				action: 'Update report parameter',
			},
		],
		default: 'getReportParameters',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'sharing',
				],
			},
		},
		options: [
			{
				name: 'Get Report Views',
				value: 'getReportViews',
				description: 'Who opened a report and how they read it, as its editors see under Views in the app: each person\'s visits, time spent and whether they opened it since its last successful run, who it is shared with but hasn\'t opened it since, and how far into it people read, slide by slide',
				action: 'Get report views',
			},
			{
				name: 'Share Report',
				value: 'shareReport',
				description: 'Shares a report of any type with a member of the organization to view or edit it, or changes their permission',
				action: 'Share report',
			},
			{
				name: 'Share Reports in a Batch',
				value: 'batchShareReports',
				description: 'Shares up to 50 reports of any type with the same members, with the same permission, as shareReport does for one',
				action: 'Share reports in a batch',
			},
			{
				name: 'Unshare Report',
				value: 'unshareReport',
				description: 'Removes a user\'s share of a report of any type, and their access to its file when it updates one, as the app does',
				action: 'Unshare report',
			},
		],
		default: 'getReportViews',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'comment',
				],
			},
		},
		options: [
			{
				name: 'Add',
				value: 'createReportComment',
				description: 'Starts a comment thread on a slide of a report, or replies to a thread, as the user',
				action: 'Add comment',
			},
			{
				name: 'List',
				value: 'listReportComments',
				description: 'The comments on a report\'s slides, oldest first: each thread\'s first comment, whose threadId is null and which says whether the thread is resolved, then its replies',
				action: 'List comments',
			},
			{
				name: 'Resolve Comment Thread',
				value: 'resolveReportComment',
				description: 'Resolves a comment thread once what it asked for is done, or opens it again, as the user',
				action: 'Resolve comment thread',
			},
		],
		default: 'listReportComments',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'schedule',
				],
			},
		},
		options: [
			{
				name: 'List',
				value: 'getReportSchedules',
				description: 'The schedules of a report of any type, with the syncs each updates and when each runs next, or null for one that never runs again',
				action: 'List schedules',
			},
			{
				name: 'Replace Report Schedules',
				value: 'updateReportSchedules',
				description: 'Replaces the schedules of a report of any type, at most 10; an empty list removes them all',
				action: 'Replace report schedules',
			},
			{
				name: 'Replace Schedules of Reports in a Batch',
				value: 'batchUpdateReportSchedules',
				description: 'Gives up to 50 reports of any type the same schedules, replacing all of each report\'s current ones, as updateReportSchedules does for one; an empty list removes them all',
				action: 'Replace schedules of reports in a batch',
			},
		],
		default: 'getReportSchedules',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'email',
				],
			},
		},
		options: [
			{
				name: 'Get Email Settings',
				value: 'getReportEmailConfig',
				description: 'Who a report\'s email goes to and how it is sent, for a report of any type',
				action: 'Get email settings',
			},
			{
				name: 'List Sent Emails',
				value: 'listReportEmails',
				description: 'The emails a report of any type sent, newest first: when, how, to whom, and whether each was delivered, failed or opened',
				action: 'List sent emails',
			},
			{
				name: 'List Sent Emails of All Reports',
				value: 'listEmails',
				description: 'The emails every report the user can see sent, of any type, newest first, each with its report, as the app\'s Email sends page lists them: pass status failed and since to find the ones that didn\'t go out, and burstId for one burst\'s',
				action: 'List sent emails of all reports',
			},
			{
				name: 'Replace Email Settings',
				value: 'updateReportEmailConfig',
				description: 'Sets who a report\'s email goes to and how it is sent, for a report of any type, replacing the settings this endpoint covers; Drive sharing, attachment folders and the email\'s subject and body stay as set in the app',
				action: 'Replace email settings',
			},
			{
				name: 'Send',
				value: 'sendReportEmail',
				description: 'Emails a report to its recipients now, as it is',
				action: 'Send email',
			},
			{
				name: 'Send Test Email',
				value: 'sendReportTestEmail',
				description: 'Sends a report\'s email to the user only, and waits until it is sent',
				action: 'Send test email',
			},
		],
		default: 'getReportEmailConfig',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
			},
		},
		options: [
			{
				name: 'Add Burst Variants',
				value: 'addBurstVariants',
				description: 'Adds variants to a burst by their values of its report parameters, or of its filters for an older report\'s burst: each is a copy of the template report with its own values, then runs once to fetch its data',
				action: 'Add burst variants',
			},
			{
				name: 'Convert Burst to Slide Deck Burst',
				value: 'convertBurst',
				description: 'Turns a burst of an older report, a Google Slides or PowerPoint file, into a new burst of Rollstack reports of type SlideDeck, as Convert to Rollstack slides does for one report',
				action: 'Convert burst to slide deck burst',
			},
			{
				name: 'Create',
				value: 'createBurst',
				description: 'Makes a report the template of a new burst, and answers the burst, named after the report and with no variants yet',
				action: 'Create burst',
			},
			{
				name: 'Create Burst Email Configuration',
				value: 'createBurstEmailConfig',
				description: 'Adds an email configuration to a burst and answers it: one email to its recipients with the variants it selects, every variant by default',
				action: 'Create burst email configuration',
			},
			{
				name: 'Delete',
				value: 'deleteBurst',
				description: 'Deletes a burst with every report in it, the template included, as the app does, and can\'t be undone',
				action: 'Delete burst',
			},
			{
				name: 'Delete Burst Email Configuration',
				value: 'deleteBurstEmailConfig',
				description: 'Deletes a burst\'s email configuration',
				action: 'Delete burst email configuration',
			},
			{
				name: 'Get Burst Run',
				value: 'getBurstRun',
				description: 'Where the runs of a burst\'s variants stand, such as those startBurstRun started, with how each variant\'s latest run ended',
				action: 'Get burst run',
			},
			{
				name: 'Get Burst Settings',
				value: 'getBurstSettings',
				description: 'A burst\'s settings, as its Settings tab in the app shows them: how its variants are named, and for an older report\'s burst, how each variant\'s run updates its file, what it does with empty charts, how it archives and how its filters match',
				action: 'Get burst settings',
			},
			{
				name: 'Get Burst Variant Batch',
				value: 'getBurstVariantBatch',
				description: 'A batch of variants being added to a burst, with where each variant stands: copied from the template report, then run once to fetch its data',
				action: 'Get burst variant batch',
			},
			{
				name: 'List',
				value: 'listBursts',
				description: 'The bursts of reports the user can see, newest first: those of Rollstack reports, whose variants differ by report parameters, and those of older reports such as Google Slides or PowerPoint files, whose variants differ by filters, as kind says',
				action: 'List bursts',
			},
			{
				name: 'List Burst Email Configurations',
				value: 'listBurstEmailConfigs',
				description: 'A burst\'s email configurations, as the app\'s Burst email settings show them: each one email to its own recipients that includes every variant it selects, sent only when you send it',
				action: 'List burst email configurations',
			},
			{
				name: 'List Burst Variants',
				value: 'listBurstVariants',
				description: 'A burst\'s variants the user can open, oldest first, each with its values of the burst\'s parameters or filters, how its latest run went, whether one is going, and who its email goes to. adding lists the variants the user is still adding.',
				action: 'List burst variants',
			},
			{
				name: 'List Sync Filters',
				value: 'listReportSyncFilters',
				description: 'The filters of the dashboard an older report\'s sync reads, which a burst of the report can vary by: pass their IDs in filters to createBurst',
				action: 'List sync filters',
			},
			{
				name: 'Reapply Burst Filters',
				value: 'reapplyBurstFilters',
				description: 'Writes each variant\'s filter values into its syncs again, as the app\'s Reapply does: after syncs were added to the template, or a filter changed on its dashboard',
				action: 'Reapply burst filters',
			},
			{
				name: 'Remove Burst Variants',
				value: 'removeBurstVariants',
				description: 'Removes variants of a burst by their IDs, and deletes their reports',
				action: 'Remove burst variants',
			},
			{
				name: 'Rename',
				value: 'renameBurst',
				description: 'Renames a burst and answers it, and with renameVariants its reports too',
				action: 'Rename burst',
			},
			{
				name: 'Run Burst Variants',
				value: 'startBurstRun',
				description: 'Starts a run of every variant of a burst, or of the variants passed, as startReportRun does for each: it refreshes the variant\'s data, and repairs a Rollstack report\'s slides with AI',
				action: 'Run burst variants',
			},
			{
				name: 'Send Burst Email Configuration',
				value: 'sendBurstEmailConfig',
				description: 'Sends a burst\'s email configuration now: one email to its recipients with each variant it selects',
				action: 'Send burst email configuration',
			},
			{
				name: 'Send Burst Email Configuration Test',
				value: 'sendBurstEmailConfigTest',
				description: 'Sends a burst\'s email configuration to you alone, to check how it looks before sending it',
				action: 'Send burst email configuration test',
			},
			{
				name: 'Send Variant Emails',
				value: 'sendBurstVariantEmails',
				description: 'Sends each variant\'s own email now, to its own recipients, as the app\'s Send does: every variant, or those passed',
				action: 'Send variant emails',
			},
			{
				name: 'Set Variant Email Settings',
				value: 'updateBurstVariantEmailSettings',
				description: 'Changes how the variants\' own emails are sent, as the app\'s Burst settings in its Emailing tab do: only the settings passed, on the template, whose settings new variants copy, and on the variants',
				action: 'Set variant email settings',
			},
			{
				name: 'Set Variant Recipients',
				value: 'updateBurstVariantRecipients',
				description: 'Sets who each variant\'s email goes to, replacing its to, cc and bcc',
				action: 'Set variant recipients',
			},
			{
				name: 'Update Burst Email Configuration',
				value: 'updateBurstEmailConfig',
				description: 'Changes the fields passed of a burst\'s email configuration and answers it',
				action: 'Update burst email configuration',
			},
			{
				name: 'Update Burst Filters',
				value: 'updateBurstFilters',
				description: 'Replaces the filters an older report\'s burst varies by, then writes every variant\'s values into its syncs again, which can take a minute, and answers the burst',
				action: 'Update burst filters',
			},
			{
				name: 'Update Burst Settings',
				value: 'updateBurstSettings',
				description: 'Changes the settings passed and answers them all',
				action: 'Update burst settings',
			},
		],
		default: 'listBursts',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'connection',
				],
			},
		},
		options: [
			{
				name: 'Get Dashboard',
				value: 'getDashboard',
				description: 'A dashboard of a Looker, Metabase, Omni, Lightdash, Sigma, Tableau or Power BI connection, read with the user\'s access to the connection (a Salesforce report has no tabs or charts to read, so add it with addReportDatasheets directly): its tabs, and the charts and filters of the tab tabId names, one of the IDs in tabs (else the one the dashboard opens on, a Power BI report\'s or Sigma workbook\'s first page)',
				action: 'Get dashboard',
			},
			{
				name: 'List',
				value: 'listConnections',
				description: 'The data source connections the user can see, without their credentials: each one\'s type, name, settings such as its URL, owner, admins, default user and whether any user\'s access works',
				action: 'List connections',
			},
			{
				name: 'Search Dashboards',
				value: 'searchDashboards',
				description: 'The dashboards of a Looker, Metabase, Omni, Lightdash, Sigma, Tableau or Power BI connection whose name holds any word of query or its singular, in any case, at most 50: those the most of the organization\'s reports read first, copies, old and personal ones last, then most words first, read with the user\'s access to the connection',
				action: 'Search dashboards',
			},
			{
				name: 'Search Models',
				value: 'searchModels',
				description: 'The models of a Looker, Power BI or Tableau connection whose name or group holds any word of query or its singular, in any case, at most 50: Looker explores grouped by LookML model, Power BI semantic models by workspace, Tableau published data sources by project, read with the user\'s access to the connection (on Tableau, their own Tableau user)',
				action: 'Search models',
			},
			{
				name: 'Search Tables',
				value: 'searchTables',
				description: 'The tables and views of a Snowflake, Databricks or BigQuery connection whose full name, database.schema.table (project.dataset.table on BigQuery), holds any word of query, in any case, at most 50, read with the user\'s access to the connection, as its default user when one is set',
				action: 'Search tables',
			},
		],
		default: 'listConnections',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'spreadsheet',
				],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'getSpreadsheet',
				description: 'A Google Sheets or Excel file the user added in the app, with its sheets, read with the user\'s own Google or Microsoft account',
				action: 'Get spreadsheet',
			},
			{
				name: 'Search',
				value: 'searchSpreadsheets',
				description: 'The Google Sheets and Excel files the user added in the app whose name holds any word of query, in any case, most words first, at most 50',
				action: 'Search spreadsheets',
			},
		],
		default: 'searchSpreadsheets',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'smtpConnection',
				],
			},
		},
		options: [
			{
				name: 'List',
				value: 'listSmtpConnections',
				description: 'The user\'s SMTP connections and the ones shared with the organization, without their credentials',
				action: 'List SMTP connections',
			},
		],
		default: 'listSmtpConnections',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'folder',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'createFolder',
				description: 'Creates a folder owned by the user: at the top level, which only owners and admins of the organization may, or inside a folder the user owns or has manage on',
				action: 'Create folder',
			},
			{
				name: 'Get',
				value: 'getFolder',
				description: 'A folder the user can see, with its parent and everyone who has access to it: its owner, the members it is shared with directly, and those who reach it through the folder it is nested in, each with their permission',
				action: 'Get folder',
			},
			{
				name: 'List',
				value: 'listFolders',
				description: 'The folders the user can see, each with its parent, null at the top level, and the user\'s permission on it: null, view, edit or manage',
				action: 'List folders',
			},
			{
				name: 'Share',
				value: 'shareFolder',
				description: 'Shares a folder and everything in it with a member of the organization, or changes their permission, as Share in the app does',
				action: 'Share folder',
			},
			{
				name: 'Unshare',
				value: 'unshareFolder',
				description: 'Removes a member\'s direct share of a folder, and their access to its reports\' files in Drive unless they still reach the folder through a parent folder, as the app does',
				action: 'Unshare folder',
			},
			{
				name: 'Update',
				value: 'updateFolder',
				description: 'Renames a folder, or moves it into another folder or to the top level, with everything in it',
				action: 'Update folder',
			},
		],
		default: 'listFolders',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'member',
				],
			},
		},
		options: [
			{
				name: 'List',
				value: 'listMembers',
				description: 'The members of the organization, with their role, authentication role, insights access and whether they are active',
				action: 'List members',
			},
		],
		default: 'listMembers',
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'The reports the user can see, of every type, newest first. Each report\'s type tells which endpoints work on it: the slides agent, exports, content, datasheets, parameters, templates, duplicating and ownership transfer take SlideDeck reports only, and syncs take the other types only. You can filter by folderId, name and type; when several are set, all must match, and name matching ignores case. Answers up to limit reports, 50 by default and 200 at most, and a nextCursor: pass it as cursor for the next page, until it is null.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'report',
				],
				operation: [
					'listReports',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'report',
				],
				operation: [
					'listReports',
				],
			},
		},
		options: [
			{
				displayName: 'Cursor',
				name: 'cursor',
				type: 'string',
				default: '',
				description: 'Where to continue the list: pass the nextCursor returned with the previous page to get the next one. Omit it for the first page.',
			},
			{
				displayName: 'Folder ID',
				name: 'folderId',
				type: 'string',
				default: '',
				description: 'Only return reports directly in this folder, by its ID from listFolders. Reports in its subfolders aren\'t included.',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 50,
				typeOptions: {
					minValue: 1,
					maxValue: 200,
					numberPrecision: 0,
				},
				description: 'Max number of results to return',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Only return reports whose name contains this text, ignoring case: review matches Q3 Business Review',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{
						name: 'Email',
						value: 'Email',
					},
					{
						name: 'GoogleDocs',
						value: 'GoogleDocs',
					},
					{
						name: 'GoogleSlides',
						value: 'GoogleSlides',
					},
					{
						name: 'MicrosoftPowerPoint',
						value: 'MicrosoftPowerPoint',
					},
					{
						name: 'MicrosoftWord',
						value: 'MicrosoftWord',
					},
					{
						name: 'SlideDeck',
						value: 'SlideDeck',
					},
					{
						name: 'UploadedPPTXFile',
						value: 'UploadedPPTXFile',
					},
				],
				default: 'Email',
				description: 'Only return reports of this type, such as SlideDeck for the reports that the slides agent, exports and datasheets work on',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'A report of any type with its schedules, who it is shared with and who is emailed when a run fails. lastRunStatus and running tell how its latest run went and whether one is going, and appUrl opens it in Rollstack. type tells which other endpoints work on it.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'report',
				],
				operation: [
					'getReport',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, of any type, by its ID from listReports or createReport. You can also copy it from the report\'s link in Rollstack (appUrl): it\'s the part right after /slides/ or /destinations/.',
		displayOptions: {
			show: {
				resource: [
					'report',
				],
				operation: [
					'getReport',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Turns an older report of type GoogleSlides or MicrosoftPowerPoint, which updates a Google Slides presentation or a PowerPoint file in OneDrive or SharePoint, into a new report of type SlideDeck, as Convert to Rollstack slides in the app does. The new report gets the file\'s slides, and each sync that can be converted becomes a datasheet reading the same source, drawn by a tile where the sync\'s chart, table or picture was. The older report and its file stay as they are. The file is read with the older report\'s owner\'s account. Answers the new report and what became of each sync, with the reason for one not converted, such as a burst variant\'s (convert a whole burst with "Convert burst to slide deck burst") or one of a source with no datasheets: the conversion starts the new report\'s update to fill its charts, answered as runId: follow it with "Get report run", or start one with "Start report run" when runId is null. Only the older report\'s editors may. It answers once the conversion ends, which can take a few minutes for a large report: send an Idempotency-Key (MCP: idempotencyKey) so a retry doesn\'t convert it twice. Counts against the 10 imports a minute per user.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'report',
				],
				operation: [
					'convertReport',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, of any type, by its ID from listReports or createReport. You can also copy it from the report\'s link in Rollstack (appUrl): it\'s the part right after /slides/ or /destinations/.',
		displayOptions: {
			show: {
				resource: [
					'report',
				],
				operation: [
					'convertReport',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'report',
				],
				operation: [
					'convertReport',
				],
			},
		},
		options: [
			{
				displayName: 'Folder ID',
				name: 'folderId',
				type: 'string',
				default: '',
				description: 'The folder to put the new report in, by its ID from listFolders; it must be one you can add reports to. If omitted, it goes at the top level, as in the app.',
			},
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name for the new report, as members will see it in Rollstack. Leading and trailing spaces are removed, and it can\'t be blank. If omitted, it takes the older report\'s name.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Creates a report of type SlideDeck, in a folder the user can see when folderId is set. It starts empty, in the look of a saved template from "List templates" when templateId is set, or of another report when templateDeckId is set: its theme, masters and layouts, without its slides. Ask the user which template to use when the organization has company templates. With link, it imports an existing deck instead, with its slides: a PowerPoint file in OneDrive or SharePoint, or a Google Slides presentation, read with the user\'s own Microsoft or Google account. Rollstack can open only the Google Slides presentations the user picked in Rollstack before, so a link to one they never did answers 422. Over REST, it also imports a PowerPoint (.pptx) file sent as multipart/form-data in the file field, with name and folderId as fields beside it; a report imported from a file is named after it unless name is set. An import answers once the deck is in, which can take a minute for a large one: send an Idempotency-Key (MCP: idempotencyKey) so a retry doesn\'t import it twice. At most 10 imports a minute per user.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'report',
				],
				operation: [
					'createReport',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'report',
				],
				operation: [
					'createReport',
				],
			},
		},
		options: [
			{
				displayName: 'Folder ID',
				name: 'folderId',
				type: 'string',
				default: '',
				description: 'The folder to create the report in, by its ID from listFolders; it must be one you can see. Members with access to the folder can then open the report too, with the access the folder gives them. If omitted, the report is created at the top level, outside any folder.',
			},
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Link',
				name: 'link',
				type: 'string',
				default: '',
				description: 'A link to an existing deck to import, as its Share or Copy link button gives it: a PowerPoint (.pptx) file in OneDrive or SharePoint, or a Google Slides presentation. The report starts with its slides and look: a PowerPoint file\'s charts come in as charts with their data, and a Google Slides presentation\'s as pictures. The file stays as it is. It is read with the user\'s own Microsoft or Google account, connected in the app, so they must be able to open it, and Rollstack can open only the Google Slides presentations the user picked in Rollstack before. The report keeps the deck\'s look, so leave out templateId and templateDeckId.',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name for the report, as members will see it in Rollstack. Leading and trailing spaces are removed, and it can\'t be blank. If omitted, a report imported with link takes its file\'s name, and an empty report is named Untitled report until the slides agent names it as it builds the deck, as in the app.',
			},
			{
				displayName: 'Template Deck ID',
				name: 'templateDeckId',
				type: 'string',
				default: '',
				description: 'An existing report whose design the new report starts with, by its ID from listReports: its theme, slide masters, layouts and slide size, but none of its slides or data. Its type must be SlideDeck, and you need at least view access to it. If neither this, templateId nor link is set, the report starts with no slides and Rollstack\'s default theme and layouts.',
			},
			{
				displayName: 'Template ID',
				name: 'templateId',
				type: 'string',
				default: '',
				description: 'A saved template the new report starts with, by its ID from listTemplates: a company template or Rollstack\'s own. The report gets its theme, slide masters, layouts and slide size, with no slides. Leave out templateDeckId when you set it.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Copies a report of type SlideDeck with its slides, datasheets and email setup, as Duplicate in the app does, and answers the copy, which you own. Its schedules and direct shares are copied only when asked. Only members who may duplicate the report may: view access is enough. Each call makes another copy.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'report',
				],
				operation: [
					'duplicateReport',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'report',
				],
				operation: [
					'duplicateReport',
				],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		required: true,
		type: 'string',
		default: '',
		description: 'Name for the copy, as members will see it in Rollstack. Leading and trailing spaces are removed, and it can\'t be blank.',
		displayOptions: {
			show: {
				resource: [
					'report',
				],
				operation: [
					'duplicateReport',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'report',
				],
				operation: [
					'duplicateReport',
				],
			},
		},
		options: [
			{
				displayName: 'Copy Schedules',
				name: 'copySchedules',
				type: 'boolean',
				default: false,
				description: 'Whether to also give the copy the report\'s schedules, so it updates on its own at the same times. Defaults to false.',
			},
			{
				displayName: 'Folder ID',
				name: 'folderId',
				type: 'string',
				default: '',
				description: 'The folder to put the copy in, by its ID from listFolders; it must be one you can add reports to. If omitted, the copy goes in the report\'s own folder, or for a burst\'s variant, in the burst\'s folder.',
			},
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Inherit Sharing',
				name: 'inheritSharing',
				type: 'boolean',
				default: false,
				description: 'Whether to also share the copy with everyone the report is shared with directly, at the same permission. Defaults to false, so only you can open it until you share it.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Renames a report of any type, moves it, or changes its timezone or failure notifications. Renaming a report that updates a file, such as a Google Slides presentation, also renames the file, as the app does. Only its editors may.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'report',
				],
				operation: [
					'updateReport',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, of any type, by its ID from listReports or createReport. You can also copy it from the report\'s link in Rollstack (appUrl): it\'s the part right after /slides/ or /destinations/.',
		displayOptions: {
			show: {
				resource: [
					'report',
				],
				operation: [
					'updateReport',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'report',
				],
				operation: [
					'updateReport',
				],
			},
		},
		options: [
			{
				displayName: 'Folder ID',
				name: 'folderId',
				type: 'string',
				default: '',
				description: 'The folder to move the report to, by its ID from listFolders; it must be one you can see. Pass null to move it to the top level, outside any folder. Members then get access to the report through the new folder, and the folders it\'s in, instead of the old one. To send null, enter null.',
			},
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'New name for the report, as members will see it in Rollstack. Leading and trailing spaces are removed, and it can\'t be blank.',
			},
			{
				displayName: 'Notification Mailing List',
				name: 'notificationMailingList',
				type: 'string',
				default: '',
				description: 'Email addresses to copy when Rollstack emails the owner about a failed scheduled run, while notifyOnFailure is true. The list you send replaces the current one; send [] to clear it. Each address must belong to an active member of the organization, ignoring case. Up to 100 addresses, with no duplicates. Separate several with commas, or enter a JSON array.',
			},
			{
				displayName: 'Notify On Failure',
				name: 'notifyOnFailure',
				type: 'boolean',
				default: false,
				description: 'Whether Rollstack should email the report\'s owner when a scheduled run fails or some of its datasheets fail to refresh, copying everyone in notificationMailingList. Set it to false to stop these emails. Runs started in the app or with startReportRun never send them.',
			},
			{
				displayName: 'Timezone',
				name: 'timezone',
				type: 'string',
				default: '',
				description: 'The report\'s new timezone. The slides agent uses it to tell today\'s date, and the report\'s emails show the time of its last successful update ({{last_updated_at}}) in it. On a report that updates a file, it\'s also the timezone of the file\'s date variables, unless the organization\'s timezone replaces it. It doesn\'t change the report\'s schedules, which each have their own timezone: change those with updateReportSchedules. An IANA timezone name, such as America/New_York.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Up to 50 reports of any type at once, each as "Get report" answers it, with its schedules, who it is shared with, how its latest run went and whether one is going. Answers one result per report, each naming its id: a report you can\'t see fails on its own, with the error "Get report" would answer, and the others still answer.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'report',
				],
				operation: [
					'batchGetReports',
				],
			},
		},
	},
	{
		displayName: 'IDs',
		name: 'ids',
		required: true,
		type: 'string',
		default: '',
		description: 'The reports to act on, of any type, by their ID from listReports. From 1 to 50 IDs; an ID listed twice is acted on once. Separate several with commas, or enter a JSON array.',
		displayOptions: {
			show: {
				resource: [
					'report',
				],
				operation: [
					'batchGetReports',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'The templates the user can build a slide deck in: their company\'s, with who imported each and whether it is shared with the organization, then Rollstack\'s own. Pass a template\'s id as templateId to "Create report" or "Apply template".',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'template',
				],
				operation: [
					'listTemplates',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Imports a company template from a Google Slides presentation, as the app\'s Templates drawer does: its theme, slide masters, layouts and slide size, not its slides. The presentation is read with the user\'s Google account connected to Rollstack. Over REST, you can instead send a PowerPoint file as multipart/form-data in the file field: a .pptx of at most 100 MB, named after the file and kept to the user until shared with "Update template". Answers the template as "List templates" lists it, to pass as templateId to "Create report" or "Apply template".',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'template',
				],
				operation: [
					'createTemplate',
				],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		required: true,
		type: 'string',
		default: '',
		description: 'The template\'s name, as members will see it in Rollstack',
		displayOptions: {
			show: {
				resource: [
					'template',
				],
				operation: [
					'createTemplate',
				],
			},
		},
	},
	{
		displayName: 'Google Slides ID',
		name: 'googleSlidesId',
		required: true,
		type: 'string',
		default: '',
		description: 'The Google Slides presentation to import the look of, by its link or its ID: the part after /presentation/d/ in the link. It\'s read with your Google account connected to Rollstack, so you must be able to open it.',
		displayOptions: {
			show: {
				resource: [
					'template',
				],
				operation: [
					'createTemplate',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'template',
				],
				operation: [
					'createTemplate',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Shared With Organization',
				name: 'sharedWithOrganization',
				type: 'boolean',
				default: false,
				description: 'Whether everyone in the organization can use the template, or only you. Only admins can share a template with the organization; a template\'s creator can stop sharing it. Defaults to false.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Renames a company template, or shares it with the organization or stops sharing it, as the app\'s Templates drawer does. Its creator can rename it and stop sharing it, only an admin can share their own template with the organization, and admins can also rename any shared one. Reports already built in it keep their look. Answers the template as "List templates" lists it.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'template',
				],
				operation: [
					'updateTemplate',
				],
			},
		},
	},
	{
		displayName: 'Template ID',
		name: 'templateId',
		required: true,
		type: 'string',
		default: '',
		description: 'The company template to act on, by its ID from listTemplates. Rollstack\'s own template can\'t be changed.',
		displayOptions: {
			show: {
				resource: [
					'template',
				],
				operation: [
					'updateTemplate',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'template',
				],
				operation: [
					'updateTemplate',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The template\'s new name, as members see it in Rollstack',
			},
			{
				displayName: 'Shared With Organization',
				name: 'sharedWithOrganization',
				type: 'boolean',
				default: false,
				description: 'Whether everyone in the organization can use the template, or only you. Only admins can share a template with the organization; a template\'s creator can stop sharing it.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Deletes a company template, as the app\'s Templates drawer does. Reports already built in it keep their look; new ones can no longer start in it. Its creator, or an admin for a shared one, may.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'template',
				],
				operation: [
					'deleteTemplate',
				],
			},
		},
	},
	{
		displayName: 'Template ID',
		name: 'templateId',
		required: true,
		type: 'string',
		default: '',
		description: 'The company template to act on, by its ID from listTemplates. Rollstack\'s own template can\'t be changed.',
		displayOptions: {
			show: {
				resource: [
					'template',
				],
				operation: [
					'deleteTemplate',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'template',
				],
				operation: [
					'deleteTemplate',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Switches a report of type SlideDeck to a template\'s theme, slide masters, layouts and slide size, as the Templates drawer in the app does. Its slides keep their content and move to the template\'s matching layouts; the answer names the slides that had no match, and the version saved just before as versionBeforeId: restore it with "Restore report version" to undo the change. Only its editors may, and not while the report is running or the slides agent is working on it.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'template',
				],
				operation: [
					'applyReportTemplate',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'template',
				],
				operation: [
					'applyReportTemplate',
				],
			},
		},
	},
	{
		displayName: 'Template ID',
		name: 'templateId',
		required: true,
		type: 'string',
		default: '',
		description: 'The template, by its ID from listTemplates. Rollstack\'s own template has the fixed ID rollstack-signature.',
		displayOptions: {
			show: {
				resource: [
					'template',
				],
				operation: [
					'applyReportTemplate',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'template',
				],
				operation: [
					'applyReportTemplate',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'The Version history of a report of type SlideDeck, newest first, as the app lists it: the versions Rollstack saved while it was edited, run or changed by the slides agent, and those saved with "Save report version", each with what saved it. Answers up to limit versions, 20 by default and 100 at most, and a nextCursor: pass it as cursor for the next page, until it is null. Pass a version\'s id to "Restore report version" to take the report back to it.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'version',
				],
				operation: [
					'listReportVersions',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'version',
				],
				operation: [
					'listReportVersions',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'version',
				],
				operation: [
					'listReportVersions',
				],
			},
		},
		options: [
			{
				displayName: 'Cursor',
				name: 'cursor',
				type: 'string',
				default: '',
				description: 'Where to continue the list: pass the nextCursor returned with the previous page to get the next one. Omit it for the first page.',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 50,
				typeOptions: {
					minValue: 1,
					maxValue: 100,
					numberPrecision: 0,
				},
				description: 'Max number of results to return',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Saves a report of type SlideDeck as it is now in its Version history, with an optional name, so it can be restored later with "Restore report version", for example before a change the user may want to take back. Rollstack already saves one before each change of the slides agent, each run and each template apply. Only its editors may. Each call saves another version.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'version',
				],
				operation: [
					'saveReportVersion',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'version',
				],
				operation: [
					'saveReportVersion',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'version',
				],
				operation: [
					'saveReportVersion',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'A name for the version, as members will see it in the report\'s Version history, from 1 to 100 characters. Without one, the app names it after the time it was saved.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Takes a report of type SlideDeck back to one of its versions, as Restore in the app\'s Version history does: its slides, and the datasheets when the version saved them, become the version\'s, replacing every change made since, and members with the report open see it at once. Find the version with "List report versions", or take a slides agent reply\'s versionBeforeId to undo that reply. The report as it was is saved first, and the answer names that version as versionBeforeId. Only its editors may, and not while the report is running or the slides agent is working on it.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'version',
				],
				operation: [
					'restoreReportVersion',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'version',
				],
				operation: [
					'restoreReportVersion',
				],
			},
		},
	},
	{
		displayName: 'Version ID',
		name: 'versionId',
		required: true,
		type: 'string',
		default: '',
		description: 'The version to restore: an ID from listReportVersions, or a reply\'s versionBeforeId',
		displayOptions: {
			show: {
				resource: [
					'version',
				],
				operation: [
					'restoreReportVersion',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'version',
				],
				operation: [
					'restoreReportVersion',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'A message to the slides agent and its replies. Waits up to waitSeconds for the message to finish and answers as soon as it does, so call it again while the status is queued or running. A clarification reply asks questions: ask the user, then send the options they pick as answers in a new message on the same chat. A proposal reply changes nothing until it is approved: show the user what its proposal changes, then approve or reject it as they decide. Only the user who sent the message may read it, while they can edit the report.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'chat',
				],
				operation: [
					'getReportMessage',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'chat',
				],
				operation: [
					'getReportMessage',
				],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		required: true,
		type: 'string',
		default: '',
		description: 'The message to the slides agent: the messageId that sendReportMessage returned. Only the user who sent the message can read, cancel or decide its proposals, and only while they can edit the report.',
		displayOptions: {
			show: {
				resource: [
					'chat',
				],
				operation: [
					'getReportMessage',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'chat',
				],
				operation: [
					'getReportMessage',
				],
			},
		},
		options: [
			{
				displayName: 'Wait Seconds',
				name: 'waitSeconds',
				type: 'number',
				default: 20,
				typeOptions: {
					minValue: 0,
					maxValue: 30,
					numberPrecision: 0,
				},
				description: 'How long this call waits for the work to finish, in seconds: the message to the slides agent on getReportMessage, the run on getReportRun, the batch of variants being added on getBurstVariantBatch, the runs of a burst\'s variants on getBurstRun. It returns as soon as the work is done, or as things stand once the time is up, so call it again while status is still queued or running. 0 returns at once. Defaults to 20; at most 30.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Asks the slides agent to build or change a report, or to answer a question about it, as the app\'s chat does. Answers the message\'s id at once: follow it with "Get slides agent message". When the client can show one, a view shows the user the slides as the agent drafts them. Without chatId the message starts a new chat, which shows in the user\'s chat history in the app. With it, the message continues that chat and waits its turn while a reply is still generating. Several chats on a report can generate at once; an agent working on a part of the report another chat is editing works on something else or says so. For slides built from your own data, a connected dashboard, a warehouse table or a spreadsheet, upload the data with "Upload a file", find the dashboard or Salesforce report with "Search dashboards", the Snowflake, Databricks or BigQuery table with "Search tables" or the spreadsheet with "Search spreadsheets", add any of them with "Add sources to report" and pass the datasheet ids as datasheetIds. For a brief, a report or notes to build from, upload it with "Upload a document" and pass its id in documentIds. Only its editors may. At most 6 messages a minute per user. To write the slides yourself instead, start with "Get report design".',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'chat',
				],
				operation: [
					'sendReportMessage',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'chat',
				],
				operation: [
					'sendReportMessage',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'chat',
				],
				operation: [
					'sendReportMessage',
				],
			},
		},
		options: [
			{
				displayName: 'Answers',
				name: 'answers',
				type: 'json',
				default: '',
				description: 'Your answers to the questions of a clarification reply, as when you pick options in the chat in the app: one entry per question you answer. Send them as the next message on the same chat, by passing its chatId. When a picked option offers a dashboard, table or spreadsheet, Rollstack adds it to the report as a datasheet before the agent goes on. To add a note, send it in content with the answers. Enter it as JSON, as this JSON Schema describes: {"minItems":1,"type":"array","items":{"type":"object","properties":{"header":{"type":"string","description":"The header of the question you\'re answering, copied unchanged from the clarification reply\'s questions.","examples":["Chart type"]},"question":{"type":"string","description":"The question you\'re answering, copied unchanged from the clarification reply\'s questions. With header, it tells Rollstack which question your picks are for.","examples":["Which chart should show revenue by region?"]},"answers":{"minItems":1,"type":"array","items":{"type":"string","examples":["Bar chart"]},"description":"The label of each option picked: one for a question whose multiSelect is false, one or more when it\'s true."}},"required":["header","question","answers"]}}.',
			},
			{
				displayName: 'Chat ID',
				name: 'chatId',
				type: 'string',
				default: '',
				description: 'The chat to continue: the chatId returned for an earlier message. The agent reads the chat\'s earlier messages as context, and if it\'s still replying in that chat, your message waits its turn (queued). If omitted, the message starts a new chat, which shows in your chat history on the report in the app. Must be one of your own chats on this report.',
			},
			{
				displayName: 'Content',
				name: 'content',
				type: 'string',
				default: '',
				typeOptions: {
					rows: 4,
				},
				description: 'Your message to the slides agent, as you would write it in the chat in the app: for example, slides to build or change, or a question about the report. On a report with no slides yet, the agent takes it as a request to build the report. A link to a picture in the message, such as a logo or a photo to place, is downloaded and given to the agent. Required unless you send answers; with them, it\'s sent after your answers as a note. At most 10,000 characters: send a longer text, such as a brief, as a document with createDocument.',
			},
			{
				displayName: 'Datasheet IDs',
				name: 'datasheetIds',
				type: 'string',
				default: '',
				description: 'Datasheets of this report for the agent to work from, on top of those on the slides in slideIds, as when you pick data in the chat in the app. To have the agent build slides from data you just added, pass the IDs addReportDatasheets returned; for data already on the report, take them from listReportDatasheets. 1 to 100 datasheets of this report. Separate several with commas, or enter a JSON array.',
			},
			{
				displayName: 'Document IDs',
				name: 'documentIds',
				type: 'string',
				default: '',
				description: 'Documents for the agent to read, as when you attach documents in the chat in the app: the IDs createDocument returned. The agent reads their text and looks at their pages, for example to build slides from a brief or to rebuild a report as slides. 1 to 5 documents your organization can read. Separate several with commas, or enter a JSON array.',
			},
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Slide IDs',
				name: 'slideIds',
				type: 'string',
				default: '',
				description: 'The slides your message is about, as when you select slides in the app before writing in the chat. The agent knows you selected them and uses the datasheets on them for your request. Slide IDs come from getReportContent. 1 to 100 slides of this report. Separate several with commas, or enter a JSON array.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Approves the proposal of a settings_proposal or email_send_proposal reply, as its Approve button in the app\'s chat does: Rollstack makes the change, or sends the email. Only approve what the user approved after seeing the reply\'s proposal. Answers the reply with the proposal\'s status: applied once the change is made, and queued for a send, which "Get slides agent message" then follows through sending to sent, partially_sent, failed or unconfirmed, with its counts. Needs also slide_decks:email for an email change or send, and slide_decks:write for the rest. Approving a send answers 409 while the report is updating, such as after a filter change the same message asked for, and counts against the 5 email sends a minute, as "Send email" does. Only the user who sent the message may, while they can edit the report. A proposal already decided answers 409. From an AI client, approving a send only asks the user to confirm it in Rollstack: it answers confirmation-required and runs once they confirm.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'chat',
				],
				operation: [
					'approveReportMessageProposal',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'chat',
				],
				operation: [
					'approveReportMessageProposal',
				],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		required: true,
		type: 'string',
		default: '',
		description: 'The message to the slides agent: the messageId that sendReportMessage returned. Only the user who sent the message can read, cancel or decide its proposals, and only while they can edit the report.',
		displayOptions: {
			show: {
				resource: [
					'chat',
				],
				operation: [
					'approveReportMessageProposal',
				],
			},
		},
	},
	{
		displayName: 'Reply ID',
		name: 'replyId',
		required: true,
		type: 'string',
		default: '',
		description: 'The reply that makes the proposal: the ID of a settings_proposal or email_send_proposal reply that getReportMessage lists for the message',
		displayOptions: {
			show: {
				resource: [
					'chat',
				],
				operation: [
					'approveReportMessageProposal',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'chat',
				],
				operation: [
					'approveReportMessageProposal',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Stops a message to the slides agent: a queued one leaves the queue, and a running one stops. A finished one stays as it is. Only the user who sent it may.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'chat',
				],
				operation: [
					'cancelReportMessage',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'chat',
				],
				operation: [
					'cancelReportMessage',
				],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		required: true,
		type: 'string',
		default: '',
		description: 'The message to the slides agent: the messageId that sendReportMessage returned. Only the user who sent the message can read, cancel or decide its proposals, and only while they can edit the report.',
		displayOptions: {
			show: {
				resource: [
					'chat',
				],
				operation: [
					'cancelReportMessage',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'chat',
				],
				operation: [
					'cancelReportMessage',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Rejects the proposal of a settings_proposal or email_send_proposal reply, as its Reject button in the app\'s chat does: nothing changes. Answers the reply with the proposal\'s status, rejected for a change and cancelled for an email send. Only the user who sent the message may, while they can edit the report. A proposal already decided answers 409.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'chat',
				],
				operation: [
					'rejectReportMessageProposal',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'chat',
				],
				operation: [
					'rejectReportMessageProposal',
				],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		required: true,
		type: 'string',
		default: '',
		description: 'The message to the slides agent: the messageId that sendReportMessage returned. Only the user who sent the message can read, cancel or decide its proposals, and only while they can edit the report.',
		displayOptions: {
			show: {
				resource: [
					'chat',
				],
				operation: [
					'rejectReportMessageProposal',
				],
			},
		},
	},
	{
		displayName: 'Reply ID',
		name: 'replyId',
		required: true,
		type: 'string',
		default: '',
		description: 'The reply that makes the proposal: the ID of a settings_proposal or email_send_proposal reply that getReportMessage lists for the message',
		displayOptions: {
			show: {
				resource: [
					'chat',
				],
				operation: [
					'rejectReportMessageProposal',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'chat',
				],
				operation: [
					'rejectReportMessageProposal',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'What the slides agent remembers of how the user likes their decks, as the app\'s Slides settings list it: each memory, the part of a deck it is about, and the report it holds for, if only one. Read them before adding one, so as not to repeat one.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'memory',
				],
				operation: [
					'listMemories',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Has the slides agent remember something of how the user likes their decks, for all their reports or one of them, as adding a preference in the app\'s Slides settings does. Only add what the user asked to be remembered. Answers the memory.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'memory',
				],
				operation: [
					'createMemory',
				],
			},
		},
	},
	{
		displayName: 'Text',
		name: 'text',
		required: true,
		type: 'string',
		default: '',
		description: 'What the slides agent should remember, as one plain sentence, at most 300 characters',
		displayOptions: {
			show: {
				resource: [
					'memory',
				],
				operation: [
					'createMemory',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'memory',
				],
				operation: [
					'createMemory',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Report ID',
				name: 'reportId',
				type: 'string',
				default: '',
				description: 'The report the memory holds for, by its ID from listReports, which you must be able to edit. null for all your reports. Defaults to null. To send null, enter null.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Rewords a memory of the slides agent, or moves it to one report or all of them. What you send changes and the rest stays. Answers the memory.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'memory',
				],
				operation: [
					'updateMemory',
				],
			},
		},
	},
	{
		displayName: 'Memory ID',
		name: 'memoryId',
		required: true,
		type: 'string',
		default: '',
		description: 'The memory to act on, by its ID from listMemories',
		displayOptions: {
			show: {
				resource: [
					'memory',
				],
				operation: [
					'updateMemory',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'memory',
				],
				operation: [
					'updateMemory',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Report ID',
				name: 'reportId',
				type: 'string',
				default: '',
				description: 'The report the memory holds for, by its ID from listReports, which you must be able to edit. null for all your reports. If omitted, it stays. To send null, enter null.',
			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				description: 'What the slides agent should remember, as one plain sentence, at most 300 characters',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Has the slides agent forget a memory: its runs stop reading it, as forgetting it in the app\'s Slides settings does.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'memory',
				],
				operation: [
					'deleteMemory',
				],
			},
		},
	},
	{
		displayName: 'Memory ID',
		name: 'memoryId',
		required: true,
		type: 'string',
		default: '',
		description: 'The memory to act on, by its ID from listMemories',
		displayOptions: {
			show: {
				resource: [
					'memory',
				],
				operation: [
					'deleteMemory',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'memory',
				],
				operation: [
					'deleteMemory',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'The runs of a report of any type that ended, newest first, with how each ended, what started it and why it failed, for questions such as why last night\'s update failed. Answers up to limit runs, 20 by default and 200 at most, and a nextCursor: pass it as cursor for the next page, until it is null.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'run',
				],
				operation: [
					'listReportRuns',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, of any type, by its ID from listReports or createReport. You can also copy it from the report\'s link in Rollstack (appUrl): it\'s the part right after /slides/ or /destinations/.',
		displayOptions: {
			show: {
				resource: [
					'run',
				],
				operation: [
					'listReportRuns',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'run',
				],
				operation: [
					'listReportRuns',
				],
			},
		},
		options: [
			{
				displayName: 'Cursor',
				name: 'cursor',
				type: 'string',
				default: '',
				description: 'Where to continue the list: pass the nextCursor returned with the previous page to get the next one. Omit it for the first page.',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 50,
				typeOptions: {
					minValue: 1,
					maxValue: 200,
					numberPrecision: 0,
				},
				description: 'Max number of results to return',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'A run\'s status and the datasheets, or visualizations on a report of another type than SlideDeck, it could not refresh. Waits up to waitSeconds for the run to end and answers as soon as it does, so call it again while the status is running. A user\'s later run of the report reuses the id, so this describes the latest one.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'run',
				],
				operation: [
					'getReportRun',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, of any type, by its ID from listReports or createReport. You can also copy it from the report\'s link in Rollstack (appUrl): it\'s the part right after /slides/ or /destinations/.',
		displayOptions: {
			show: {
				resource: [
					'run',
				],
				operation: [
					'getReportRun',
				],
			},
		},
	},
	{
		displayName: 'Run ID',
		name: 'runId',
		required: true,
		type: 'string',
		default: '',
		description: 'The run, by the runId that startReportRun returned. Runs of a report started by the same member share one ID, so it always refers to that member\'s latest run of the report.',
		displayOptions: {
			show: {
				resource: [
					'run',
				],
				operation: [
					'getReportRun',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'run',
				],
				operation: [
					'getReportRun',
				],
			},
		},
		options: [
			{
				displayName: 'Wait Seconds',
				name: 'waitSeconds',
				type: 'number',
				default: 20,
				typeOptions: {
					minValue: 0,
					maxValue: 30,
					numberPrecision: 0,
				},
				description: 'How long this call waits for the work to finish, in seconds: the message to the slides agent on getReportMessage, the run on getReportRun, the batch of variants being added on getBurstVariantBatch, the runs of a burst\'s variants on getBurstRun. It returns as soon as the work is done, or as things stand once the time is up, so call it again while status is still queued or running. 0 returns at once. Defaults to 20; at most 30.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'The syncs of a report other than a SlideDeck, such as a Google Slides presentation or an email report: each chart, table or text it pulls from a source, with how it did the last time it updated and why it failed. Pass the failed ones\' ids as syncIds to "Start report run" to update only those. A SlideDeck report has datasheets instead and returns 400.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'run',
				],
				operation: [
					'listReportSyncs',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, of any type, by its ID from listReports or createReport. You can also copy it from the report\'s link in Rollstack (appUrl): it\'s the part right after /slides/ or /destinations/.',
		displayOptions: {
			show: {
				resource: [
					'run',
				],
				operation: [
					'listReportSyncs',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'The runs that ended of every report the user can see, of any type, newest first, each with its report, for questions such as what failed overnight: pass status failed and since. Same fields as "List report runs". Answers up to limit runs, 20 by default and 200 at most, and a nextCursor: pass it as cursor for the next page, until it is null.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'run',
				],
				operation: [
					'listRuns',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'run',
				],
				operation: [
					'listRuns',
				],
			},
		},
		options: [
			{
				displayName: 'Cursor',
				name: 'cursor',
				type: 'string',
				default: '',
				description: 'Where to continue the list: pass the nextCursor returned with the previous page to get the next one. Omit it for the first page.',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 50,
				typeOptions: {
					minValue: 1,
					maxValue: 200,
					numberPrecision: 0,
				},
				description: 'Max number of results to return',
			},
			{
				displayName: 'Since',
				name: 'since',
				type: 'string',
				default: '',
				description: 'Only what happened at or after this time, as an ISO 8601 date and time in UTC, such as 2026-11-08T18:00:00Z. If omitted, from the start.',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Cancelled',
						value: 'cancelled',
					},
					{
						name: 'Failed',
						value: 'failed',
					},
					{
						name: 'Inactive',
						value: 'inactive',
					},
					{
						name: 'partiallySucceeded',
						value: 'partiallySucceeded',
					},
					{
						name: 'Skipped',
						value: 'skipped',
					},
					{
						name: 'Succeeded',
						value: 'succeeded',
					},
				],
				default: 'cancelled',
				description: 'Only the runs that ended this way, such as failed, as status in the runs. If omitted, every run.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Refreshes a report\'s data, or only some of its datasheets, then repairs failed calculations and the slides with AI. On a report of another type than SlideDeck, such as a Google Slides presentation, refreshes every sync, or only the syncIds given, instead, as Update in the app does, updating its file when it has one (an Email report has none). A run of the whole report then emails it when its email trigger is all; a run of only some syncIds never does. Answers the run\'s id at once; while a run of the report is already going, from the API, the app or its schedule, it answers that run\'s id with started false and starts nothing. Pass repairSlides false to leave the slides as they are, when you wrote them yourself and will check and fix them. From an AI client, a run that emails the report only asks the user to confirm it in Rollstack: it answers confirmation-required and runs once they confirm.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'run',
				],
				operation: [
					'startReportRun',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, of any type, by its ID from listReports or createReport. You can also copy it from the report\'s link in Rollstack (appUrl): it\'s the part right after /slides/ or /destinations/.',
		displayOptions: {
			show: {
				resource: [
					'run',
				],
				operation: [
					'startReportRun',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'run',
				],
				operation: [
					'startReportRun',
				],
			},
		},
		options: [
			{
				displayName: 'Datasheet IDs',
				name: 'datasheetIds',
				type: 'string',
				default: '',
				description: 'The datasheets to update, from listReportDatasheets, instead of the whole report. Each must be a datasheet of this report. Unlike a run of the whole report, which reads every source again, a run of only some datasheets reuses the data last read from their sources: it reads a source again only if that data is missing or expired, or what the datasheet reads has changed, such as its source, its filters or the connection it reads with, as when you replace an uploaded file with replaceDataset. If omitted, the run updates the whole report. 1 to 500 IDs. Only on reports whose type is SlideDeck: a report of another type has syncs instead, so passing it returns 400. Separate several with commas, or enter a JSON array.',
			},
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Repair Slides',
				name: 'repairSlides',
				type: 'boolean',
				default: false,
				description: 'Whether Rollstack repairs the slides with AI once the data is in: failed calculations, and text the new data made wrong. Pass false to read the data only, when you check and fix the slides yourself. If omitted, the slides are repaired. Only on reports whose type is SlideDeck.',
			},
			{
				displayName: 'Sync IDs',
				name: 'syncIds',
				type: 'string',
				default: '',
				description: 'The syncs to update, from listReportSyncs, instead of the whole report, such as the ones whose status is failed. Each must be a sync of this report. A paused sync is skipped, as in the app. A run of only some syncs never emails the report. If omitted, the run updates the whole report. 1 to 500 IDs. Only on reports other than SlideDeck, which has datasheets instead, so passing it on a slide deck returns 400. Separate several with commas, or enter a JSON array.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Starts a run of each of up to 50 reports of any type, as "Start report run" does for one: each run updates its whole report, and a run of a report of another type than SlideDeck emails it when its email trigger is all. To update only some datasheets or syncs of a report, call "Start report run". Answers one result per report, each naming its id, with its run\'s id at once: follow each run with "Get report run". A report already running answers that run with started false, and a report you can\'t run fails on its own while the others still start. From an AI client, a batch of runs that emails any of the reports only asks the user to confirm it in Rollstack: it answers confirmation-required and runs once they confirm.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'run',
				],
				operation: [
					'batchStartReportRuns',
				],
			},
		},
	},
	{
		displayName: 'IDs',
		name: 'ids',
		required: true,
		type: 'string',
		default: '',
		description: 'The reports to act on, of any type, by their ID from listReports. From 1 to 50 IDs; an ID listed twice is acted on once. Separate several with commas, or enter a JSON array.',
		displayOptions: {
			show: {
				resource: [
					'run',
				],
				operation: [
					'batchStartReportRuns',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'run',
				],
				operation: [
					'batchStartReportRuns',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Repair Slides',
				name: 'repairSlides',
				type: 'boolean',
				default: false,
				description: 'Whether Rollstack repairs the slides with AI once the data is in: failed calculations, and text the new data made wrong. Pass false to read the data only, when you check and fix the slides yourself. If omitted, the slides are repaired. Only on reports whose type is SlideDeck.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Cancels a run of a report, whoever started it. Only its editors may. A run that already ended stays as it is.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'run',
				],
				operation: [
					'cancelReportRun',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, of any type, by its ID from listReports or createReport. You can also copy it from the report\'s link in Rollstack (appUrl): it\'s the part right after /slides/ or /destinations/.',
		displayOptions: {
			show: {
				resource: [
					'run',
				],
				operation: [
					'cancelReportRun',
				],
			},
		},
	},
	{
		displayName: 'Run ID',
		name: 'runId',
		required: true,
		type: 'string',
		default: '',
		description: 'The run, by the runId that startReportRun returned. Runs of a report started by the same member share one ID, so it always refers to that member\'s latest run of the report.',
		displayOptions: {
			show: {
				resource: [
					'run',
				],
				operation: [
					'cancelReportRun',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'run',
				],
				operation: [
					'cancelReportRun',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Where a report is saved after its runs, in Google Drive, OneDrive or SharePoint, and how its last save went, with a link to the saved file. Answers 404 until it is set up with "Set cloud save" or in the app\'s scheduling panel.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'export',
				],
				operation: [
					'getReportCloudExport',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'export',
				],
				operation: [
					'getReportCloudExport',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Saves a report to a Google Drive, OneDrive or SharePoint folder after its runs, as the app\'s scheduling panel does, replacing the setting it had. Each save replaces the same file, or archives a dated copy first with archive. The folder is opened with the user\'s own Google or Microsoft account, which saves the report from then on. To save it now, start a run with "Start report run": a run that doesn\'t fail then tries to save it when trigger is all, and "Get cloud save" tells whether the save worked, since a failed save doesn\'t fail the run. Set trigger to none to stop saving it. Only its editors may.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'export',
				],
				operation: [
					'updateReportCloudExport',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'export',
				],
				operation: [
					'updateReportCloudExport',
				],
			},
		},
	},
	{
		displayName: 'Provider',
		name: 'provider',
		required: true,
		type: 'options',
		options: [
			{
				name: 'Google',
				value: 'google',
			},
			{
				name: 'Microsoft',
				value: 'microsoft',
			},
		],
		default: 'google',
		description: 'Where the report is saved: google saves it to Google Drive as a Google Slides presentation, with its charts as linked Google Sheets charts, and microsoft saves it to OneDrive or SharePoint as a PowerPoint file with native charts',
		displayOptions: {
			show: {
				resource: [
					'export',
				],
				operation: [
					'updateReportCloudExport',
				],
			},
		},
	},
	{
		displayName: 'Folder URL',
		name: 'folderUrl',
		required: true,
		type: 'string',
		default: '',
		description: 'The folder to save the report in, by its link: a Google Drive folder\'s link (or its ID) with google, or a OneDrive or SharePoint folder\'s link with microsoft. It\'s opened with your own Google or Microsoft account connected to Rollstack, which then saves the report, so you must be able to add files to it.',
		displayOptions: {
			show: {
				resource: [
					'export',
				],
				operation: [
					'updateReportCloudExport',
				],
			},
		},
	},
	{
		displayName: 'Trigger',
		name: 'trigger',
		required: true,
		type: 'options',
		options: [
			{
				name: 'All',
				value: 'all',
			},
			{
				name: 'None',
				value: 'none',
			},
			{
				name: 'Scheduled',
				value: 'scheduled',
			},
		],
		default: 'all',
		description: 'Which runs save it: all after every run that doesn\'t fail, scheduled only after the report\'s scheduled runs, and none never, which stops saving it and keeps the setting',
		displayOptions: {
			show: {
				resource: [
					'export',
				],
				operation: [
					'updateReportCloudExport',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'export',
				],
				operation: [
					'updateReportCloudExport',
				],
			},
		},
		options: [
			{
				displayName: 'Datestamp Suffix',
				name: 'datestampSuffix',
				type: 'string',
				default: 'MM/DD/YYYY',
				description: 'How archive dates the copies it keeps, as a moment.js format such as MM/DD/YYYY or YYYY-MM-DD. Defaults to MM/DD/YYYY.',
			},
			{
				displayName: 'File Name',
				name: 'fileName',
				type: 'string',
				default: '',
				description: 'The saved file\'s name. If omitted, the report\'s name.',
			},
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Ignore Failures On Archive',
				name: 'ignoreFailuresOnArchive',
				type: 'boolean',
				default: false,
				description: 'Whether a copy that fails still lets the save go on, with updateMethod archive. Defaults to false.',
			},
			{
				displayName: 'Update Method',
				name: 'updateMethod',
				type: 'options',
				options: [
					{
						name: 'Archive',
						value: 'archive',
					},
					{
						name: 'Update',
						value: 'update',
					},
				],
				default: 'update',
				description: 'Update replaces the saved file with the new version. archive first copies the saved file, named with the date of its last save in datestampSuffix, then replaces it. Defaults to update.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Exports a report as PDF or PowerPoint and answers a download link valid for 15 minutes. At most 10 exports a minute per user.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'export',
				],
				operation: [
					'exportReport',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'export',
				],
				operation: [
					'exportReport',
				],
			},
		},
	},
	{
		displayName: 'Format',
		name: 'format',
		required: true,
		type: 'options',
		options: [
			{
				name: 'PDF',
				value: 'pdf',
			},
			{
				name: 'PPTX',
				value: 'pptx',
			},
		],
		default: 'pdf',
		description: 'The kind of file to create. pdf is a PDF of the report\'s visible slides; hidden slides are left out. pptx is a PowerPoint file in which hidden slides are included but stay hidden, speaker notes are kept, and charts are images rather than editable charts.',
		displayOptions: {
			show: {
				resource: [
					'export',
				],
				operation: [
					'exportReport',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'export',
				],
				operation: [
					'exportReport',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Slide IDs',
				name: 'slideIds',
				type: 'string',
				default: '',
				description: 'The slides to export, from getReportContent or a reply\'s changedSlideIds. The file keeps the report\'s slide order whatever order you list them in. IDs that are not slides of the report are ignored, and so are hidden slides in a PDF. If omitted, the whole report is exported. Separate several with commas, or enter a JSON array.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'What a viewer sees on a report\'s visible slides: titles, text, and each chart\'s and table\'s values. On a long report, pass slideIds for only the slides you need, such as a reply\'s changedSlideIds.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'content',
				],
				operation: [
					'getReportContent',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'content',
				],
				operation: [
					'getReportContent',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'content',
				],
				operation: [
					'getReportContent',
				],
			},
		},
		options: [
			{
				displayName: 'Slide IDs',
				name: 'slideIds',
				type: 'string',
				default: '',
				description: 'The slides to return, from a reply\'s changedSlideIds or an earlier getReportContent call. If omitted, every visible slide is returned. Hidden slides and IDs that are not slides of the report are ignored. Up to 20 IDs: repeat the parameter for each one, as in ?slideIds=a&slideIds=b. Separate several with commas, or enter a JSON array.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Start here to design a slide deck\'s slides yourself, as HTML. A call without layoutIds answers the guide to writing a slide for this report, which you follow, and what a slide is drawn on: the canvas size, the theme colours and, when the report has a template, its layouts by name. Call it again with layoutIds for the layouts you will use, to get the box each one\'s title goes in and the areas to keep clear.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'content',
				],
				operation: [
					'getReportDesign',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'content',
				],
				operation: [
					'getReportDesign',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'content',
				],
				operation: [
					'getReportDesign',
				],
			},
		},
		options: [
			{
				displayName: 'Layout IDs',
				name: 'layoutIds',
				type: 'string',
				default: '',
				description: 'The layouts to describe in full, by their ID from a first call without it. At most 10: repeat the parameter for each one, as in ?layoutIds=a&layoutIds=b. Left out, only the template\'s style is described. Separate several with commas, or enter a JSON array.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'The HTML drafts slides of a slide deck were made from, to change them and save them again with "Save draft slides" under the same ids. A slide changed in Rollstack since its draft was saved, by a person in the editor or by Rollstack\'s agent, answers the draft as it was saved with changedInRollstack, the list of what was changed since: make every one of those changes in the draft first, so the work done there is kept, then make your own. A slide made by hand in the editor has no draft (html is null): a draft sent under its id rewrites the whole slide, dropping what was done there, so look at it with "Get slide images" and ask the user first. At most 10 slides a call.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'content',
				],
				operation: [
					'getReportSlideHtml',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'content',
				],
				operation: [
					'getReportSlideHtml',
				],
			},
		},
	},
	{
		displayName: 'Slide IDs',
		name: 'slideIds',
		required: true,
		type: 'string',
		default: '',
		description: 'The slides whose drafts to read, by their ID from getReportContent or a reply\'s changedSlideIds, hidden ones included. IDs that are not slides of the report are ignored. 1 to 10 IDs: repeat the parameter for each one, as in ?slideIds=a&slideIds=b. Separate several with commas, or enter a JSON array.',
		displayOptions: {
			show: {
				resource: [
					'content',
				],
				operation: [
					'getReportSlideHtml',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Renders slides of a report as images, as viewers see them, so you can check how they look: text that overflows or overlaps, or a chart too small to read. After a message\'s turn, pass its replies\' changedSlideIds. At most 10 slides a call; hidden slides are left out. Counts against the 10 exports a minute per user.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'content',
				],
				operation: [
					'getReportSlideImages',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'content',
				],
				operation: [
					'getReportSlideImages',
				],
			},
		},
	},
	{
		displayName: 'Slide IDs',
		name: 'slideIds',
		required: true,
		type: 'string',
		default: '',
		description: 'The slides to render, from getReportContent or a reply\'s changedSlideIds. Hidden slides and IDs that are not slides of the report are ignored. 1 to 10 IDs: repeat the parameter for each one, as in ?slideIds=a&slideIds=b. Separate several with commas, or enter a JSON array.',
		displayOptions: {
			show: {
				resource: [
					'content',
				],
				operation: [
					'getReportSlideImages',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Moves, removes, hides or shows slides of a slide deck, with nothing on them changed. Read the slides\' ids with "Get report content". order puts the slides in a new order and names every slide that stays, once each; remove takes slides out of the report; hide keeps a slide in the report but out of what is presented and exported, and show brings it back. Take the change back by restoring versionBeforeId with "Restore report version". Called with nothing to change, it answers every slide in order with whether it is hidden: "Get report content" leaves hidden slides out. Only the report\'s editors may.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'content',
				],
				operation: [
					'arrangeReportSlides',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'content',
				],
				operation: [
					'arrangeReportSlides',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'content',
				],
				operation: [
					'arrangeReportSlides',
				],
			},
		},
		options: [
			{
				displayName: 'Hide',
				name: 'hide',
				type: 'string',
				default: '',
				description: 'The slides to hide, by their IDs: they stay in the report and are left out when it is presented or exported. Separate several with commas, or enter a JSON array.',
			},
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Order',
				name: 'order',
				type: 'string',
				default: '',
				description: 'The report\'s slides in their new order, by their ID from getReportContent: every slide that stays, once each. Leave it out to keep the order. Separate several with commas, or enter a JSON array.',
			},
			{
				displayName: 'Remove',
				name: 'remove',
				type: 'string',
				default: '',
				description: 'The slides to remove from the report, by their IDs. Separate several with commas, or enter a JSON array.',
			},
			{
				displayName: 'Show',
				name: 'show',
				type: 'string',
				default: '',
				description: 'The hidden slides to show again, by their IDs. Separate several with commas, or enter a JSON array.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Changes a slide deck\'s theme: its colours, its heading font and its body font. This is how a deck takes a brand\'s colours, such as the ones the user names or the ones of a presentation they gave you: read the colours yourself and send each in the slot whose job it does. Every slide follows wherever it uses the theme\'s colours, and so do the template\'s layouts and the slides you write next, which keep using the theme variables that "Get report design" lists. Call it before you write slides, then call "Get report design" again for the colours as they are now. A slot sent with a colour another slot already has is saved one step of blue away from it (#2D6A4F and #2D6A50), which looks the same: saved slides tell theme colours apart by their value, so the answer can differ from what you sent by that step. A change that would leave text unreadable on its background changes nothing and answers the pair to fix, and so does a font the editor does not have. A new font sets text wider or narrower than the old one: on a deck that already has slides, look at each with "Get slide images" afterwards and save again the ones whose text no longer fits. It changes colours and fonts only: for a presentation\'s layouts and logo, the user imports it as a template in Rollstack, which answers in "List templates". Only the report\'s editors may. Answers the theme after the change and the version saved before it.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'content',
				],
				operation: [
					'updateReportTheme',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'content',
				],
				operation: [
					'updateReportTheme',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'content',
				],
				operation: [
					'updateReportTheme',
				],
			},
		},
		options: [
			{
				displayName: 'Body Font',
				name: 'bodyFont',
				type: 'string',
				default: '',
				description: 'The font family for all other text, by its published name',
			},
			{
				displayName: 'Colors',
				name: 'colors',
				type: 'json',
				default: '',
				description: 'The theme colours to change, each as #RRGGBB. The ones left out stay as they are. Each has a job on the slides, so put a brand\'s colours where they belong: its dark text colour in dark1, its background in light1, its main brand colour in accent1. Enter it as JSON, as this JSON Schema describes: {"type":"object","properties":{"dark1":{"type":"string","pattern":"^#[0-9A-Fa-f]{6}$","description":"Main text: titles and body text on the slide background."},"dark2":{"type":"string","pattern":"^#[0-9A-Fa-f]{6}$","description":"Secondary text: captions, sources and muted labels, quieter than dark1 but readable."},"light1":{"type":"string","pattern":"^#[0-9A-Fa-f]{6}$","description":"The slide background."},"light2":{"type":"string","pattern":"^#[0-9A-Fa-f]{6}$","description":"The second surface: cards, panels and table header rows. Close to light1 but visibly different from it."},"accent1":{"type":"string","pattern":"^#[0-9A-Fa-f]{6}$","description":"The main highlight: key numbers, accent bars and rules, the first chart series."},"accent2":{"type":"string","pattern":"^#[0-9A-Fa-f]{6}$","description":"The second chart series and highlight."},"accent3":{"type":"string","pattern":"^#[0-9A-Fa-f]{6}$","description":"The third chart series and highlight."},"accent4":{"type":"string","pattern":"^#[0-9A-Fa-f]{6}$","description":"The fourth chart series and highlight."},"accent5":{"type":"string","pattern":"^#[0-9A-Fa-f]{6}$","description":"The fifth chart series and highlight."},"accent6":{"type":"string","pattern":"^#[0-9A-Fa-f]{6}$","description":"The sixth chart series and highlight."},"hyperlink":{"type":"string","pattern":"^#[0-9A-Fa-f]{6}$","description":"Link text, readable on light1."},"followedHyperlink":{"type":"string","pattern":"^#[0-9A-Fa-f]{6}$","description":"Visited link text, readable on light1."}},"additionalProperties":false}.',
			},
			{
				displayName: 'Heading Font',
				name: 'headingFont',
				type: 'string',
				default: '',
				description: 'The font family for titles and headings, by its published name, such as Inter. A font the editor does not have is refused.',
			},
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Renders slides you wrote as HTML on a slide deck\'s template, so you can design slides yourself instead of asking the slides agent. It saves nothing. Each draft answers its image, the issues to fix and notes to check by eye: fix the issues and render again until none are left. Call "Get report design" first and follow the guide it answers. A chart or table a draft places is drawn with its datasheet\'s data, or with the data of datasheetChanges you tried with "Preview datasheet changes" and have not saved yet: save them with "Save datasheet changes" before you save the slides. A render that carries datasheetChanges runs one at a time with your "Query report data", "Preview datasheet changes" and "Save datasheet changes" calls: send it only once those have answered. Only the report\'s editors may. At most 10 drafts a call, and 20 renders and saves a minute per user.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'content',
				],
				operation: [
					'renderReportSlides',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'content',
				],
				operation: [
					'renderReportSlides',
				],
			},
		},
	},
	{
		displayName: 'Slides',
		name: 'slides',
		required: true,
		type: 'json',
		default: '',
		description: 'The draft slides to render, 1 to 10 a call, each under an ID of its own. Enter it as JSON, as this JSON Schema describes: {"minItems":1,"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema2"},"$defs":{"__schema2":{"type":"object","properties":{"\\u0069d":{"type":"string","pattern":"^[A-Za-z0-9_-]{1,64}$","description":"The ID you give the slide: letters, digits, _ and -, at most 64 characters. Pass an existing slide\'s ID to redraw that slide."},"html":{"type":"string","minLength":1,"maxLength":200000,"description":"The slide as one &lt;section&gt; of HTML, as large as the report\'s canvas. No scripts, embedded pages, event attributes or anything loaded from outside it."}},"required":["\\u0069d","html"],"additionalProperties":false}}}.',
		displayOptions: {
			show: {
				resource: [
					'content',
				],
				operation: [
					'renderReportSlides',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'content',
				],
				operation: [
					'renderReportSlides',
				],
			},
		},
		options: [
			{
				displayName: 'Datasheet Changes',
				name: 'datasheetChanges',
				type: 'json',
				default: '',
				description: 'Changes to the report\'s datasheets that aren\'t saved yet, the ones you tried with previewReportDatasheetChanges: the drafts draw their charts and tables with the data they give, and a new datasheet is placed by the ID the preview answered. Save them with saveReportDatasheetChanges before you save the slides. Enter it as JSON, as this JSON Schema describes: {"minItems":1,"type":"array","items":{"$ref":"#/$defs/__schema5"},"$defs":{"__schema10":{"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema8"}},"__schema100":{"anyOf":[{"type":"string","minLength":1},{"type":"null"}]},"__schema101":{"anyOf":[{"oneOf":[{"type":"object","properties":{"fn":{"type":"string","const":"select"},"params":{"type":"object","properties":{"mode":{"type":"string","enum":["keep","drop"],"description":"Keep: exactly these columns, in this order. drop: every column but these"},"columns":{"minItems":1,"maxItems":500,"type":"array","items":{"$ref":"#/$defs/__schema17"}},"optional":{"description":"In drop mode, skip a named column that isn\'t there, as a split\'s column is once its value is gone","$ref":"#/$defs/__schema102"}},"required":["mode","columns"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"rename"},"params":{"type":"object","properties":{"renames":{"$ref":"#/$defs/__schema73"}},"required":["renames"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"filter"},"params":{"type":"object","properties":{"match":{"type":"string","enum":["all","any"]},"conditions":{"minItems":1,"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema32"}}},"required":["match","conditions"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"sort"},"params":{"type":"object","properties":{"keys":{"minItems":1,"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema103"}}},"required":["keys"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"limit"},"params":{"type":"object","properties":{"count":{"oneOf":[{"type":"object","properties":{"type":{"type":"string","const":"number"},"value":{"type":"integer","minimum":1,"maximum":100000}},"required":["type","value"],"additionalProperties":false},{"$ref":"#/$defs/__schema39"}]},"from":{"type":"string","enum":["start","end"]}},"required":["count","from"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"aggregate"},"params":{"type":"object","properties":{"groupBy":{"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema105"},"description":"Empty gives one row, e.g. a KPI"},"metrics":{"minItems":1,"maxItems":50,"type":"array","items":{"$ref":"#/$defs/__schema106"}},"totals":{"$ref":"#/$defs/__schema81"}},"required":["groupBy","metrics"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"pivot"},"params":{"type":"object","properties":{"rows":{"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema17"},"description":"Columns kept as rows, one row per combination"},"column":{"description":"Column whose values become output columns","$ref":"#/$defs/__schema17"},"values":{"minItems":1,"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema108"}},"columns":{"$ref":"#/$defs/__schema65"},"nullLabel":{"$ref":"#/$defs/__schema67"},"fill":{"$ref":"#/$defs/__schema69"},"thenBy":{"description":"Columns split under column, outer to inner, discover mode only: one output column per combination the data has","$ref":"#/$defs/__schema109"}},"required":["rows","column","values","columns","nullLabel","fill"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"window"},"params":{"type":"object","properties":{"columns":{"minItems":1,"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema110"},"description":"Columns added after the input columns, each over all the rows this step receives"}},"required":["columns"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"join"},"params":{"type":"object","properties":{"keys":{"minItems":1,"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema17"},"description":"Columns every input has, whose values name one row of each input, such as a region and a month"}},"required":["keys"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false}]},{"type":"null"}]},"__schema102":{"type":"boolean"},"__schema103":{"type":"object","properties":{"column":{"$ref":"#/$defs/__schema17"},"direction":{"type":"string","enum":["asc","desc"]},"nulls":{"type":"string","enum":["first","last"]},"optional":{"description":"Skip this key when its column is missing, as a split\'s column is once its value is gone","$ref":"#/$defs/__schema104"}},"required":["column","direction","nulls"],"additionalProperties":false},"__schema104":{"type":"boolean"},"__schema105":{"type":"object","properties":{"column":{"$ref":"#/$defs/__schema17"},"bucket":{"anyOf":[{"$ref":"#/$defs/__schema20"},{"type":"null"}]},"as":{"anyOf":[{"$ref":"#/$defs/__schema17"},{"type":"null"}]},"groups":{"$ref":"#/$defs/__schema21"},"fill":{"$ref":"#/$defs/__schema25"}},"required":["column","bucket","as"],"additionalProperties":false},"__schema106":{"type":"object","properties":{"fn":{"$ref":"#/$defs/__schema29"},"column":{"$ref":"#/$defs/__schema107"},"as":{"$ref":"#/$defs/__schema17"},"filters":{"$ref":"#/$defs/__schema30"}},"required":["fn","column","as"],"additionalProperties":false},"__schema107":{"anyOf":[{"$ref":"#/$defs/__schema17"},{"type":"null"}],"description":"Null only with count, which then counts rows"},"__schema108":{"type":"object","properties":{"fn":{"$ref":"#/$defs/__schema29"},"column":{"$ref":"#/$defs/__schema107"},"label":{"type":"string","minLength":1,"maxLength":255}},"required":["fn","column","label"],"additionalProperties":false},"__schema109":{"minItems":1,"maxItems":2,"type":"array","items":{"$ref":"#/$defs/__schema17"}},"__schema11":{"anyOf":[{"$ref":"#/$defs/__schema12"},{"type":"null"}]},"__schema110":{"oneOf":[{"type":"object","properties":{"fn":{"type":"string","const":"rank"},"column":{"$ref":"#/$defs/__schema17"},"direction":{"type":"string","enum":["asc","desc"],"description":"Desc: the largest value ranks 1"},"as":{"$ref":"#/$defs/__schema17"}},"required":["fn","column","direction","as"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"percent_of_total"},"column":{"$ref":"#/$defs/__schema17"},"as":{"$ref":"#/$defs/__schema17"}},"required":["fn","column","as"],"additionalProperties":false},{"type":"object","properties":{"fn":{"$ref":"#/$defs/__schema58"},"column":{"description":"A number column","$ref":"#/$defs/__schema17"},"orderBy":{"description":"Column the rows are ordered by, oldest first, such as a month","$ref":"#/$defs/__schema17"},"offset":{"$ref":"#/$defs/__schema59"},"as":{"$ref":"#/$defs/__schema17"}},"required":["fn","column","orderBy","as"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"formula"},"formula":{"$ref":"#/$defs/__schema16"},"as":{"$ref":"#/$defs/__schema17"}},"required":["fn","formula","as"],"additionalProperties":false},{"type":"object","properties":{"fn":{"$ref":"#/$defs/__schema29"},"column":{"$ref":"#/$defs/__schema107"},"as":{"$ref":"#/$defs/__schema17"}},"required":["fn","column","as"],"additionalProperties":false}]},"__schema111":{"anyOf":[{"$ref":"#/$defs/__schema112"},{"type":"null"}]},"__schema112":{"description":"Numfmt formats by output column: give each renamed or computed number or date column one","$ref":"#/$defs/__schema84"},"__schema113":{"anyOf":[{"type":"string","minLength":1},{"type":"null"}]},"__schema114":{"type":"string","minLength":1,"description":"An existing datasheet ID, or the temporaryId of a datasheet created earlier in this patch"},"__schema115":{"description":"Replaces the datasheet\'s complete parameter set; omit to keep it","$ref":"#/$defs/__schema116"},"__schema116":{"anyOf":[{"$ref":"#/$defs/__schema10"},{"type":"null"}]},"__schema117":{"anyOf":[{"$ref":"#/$defs/__schema112"},{"type":"null"}]},"__schema118":{"anyOf":[{"type":"object","properties":{"rows":{"minItems":1,"maxItems":500,"type":"array","items":{"$ref":"#/$defs/__schema119"},"description":"One output row per input row and entry, in this order; the input columns no entry names repeat on each"},"name":{"description":"The column that holds each row\'s label, such as \\"Year\\"","$ref":"#/$defs/__schema17"},"values":{"minItems":1,"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema17"},"description":"The columns the values go in: one, such as \\"Value\\", or one per measure"}},"required":["rows","name","values"],"additionalProperties":false},{"type":"null"}]},"__schema119":{"type":"object","properties":{"label":{"type":"string","minLength":1,"maxLength":255,"description":"What the name column says on this row, such as the column\'s name or \\"2022\\""},"columns":{"minItems":1,"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema120"},"description":"The input column for each of values, in order; null leaves that value empty on this row"}},"required":["label","columns"],"additionalProperties":false},"__schema12":{"type":"object","properties":{"customFields":{"$ref":"#/$defs/__schema13"},"dimensions":{"$ref":"#/$defs/__schema18"},"measures":{"$ref":"#/$defs/__schema27"},"pivots":{"$ref":"#/$defs/__schema52"},"calculations":{"$ref":"#/$defs/__schema53"},"columnOrder":{"$ref":"#/$defs/__schema61"},"pivotLayout":{"$ref":"#/$defs/__schema63"},"filters":{"$ref":"#/$defs/__schema71"},"renames":{"$ref":"#/$defs/__schema72"},"sorts":{"$ref":"#/$defs/__schema75"},"limit":{"$ref":"#/$defs/__schema77"},"limitFrom":{"$ref":"#/$defs/__schema79"},"totals":{"$ref":"#/$defs/__schema80"},"formats":{"$ref":"#/$defs/__schema83"},"removedColumns":{"$ref":"#/$defs/__schema86"},"keepGroupsWhere":{"$ref":"#/$defs/__schema88"},"keepRowsBeforeLimit":{"$ref":"#/$defs/__schema90"},"keepRowsWhere":{"$ref":"#/$defs/__schema92"}},"required":["dimensions","measures","pivots","filters","sorts","limit"],"additionalProperties":false},"__schema120":{"anyOf":[{"$ref":"#/$defs/__schema17"},{"type":"null"}]},"__schema121":{"anyOf":[{"type":"object","properties":{"column":{"description":"The column holding the row labels, headings included","$ref":"#/$defs/__schema17"},"into":{"description":"The new column the headings fill, such as \\"Section\\"","$ref":"#/$defs/__schema17"}},"required":["column","into"],"additionalProperties":false},{"type":"null"}]},"__schema122":{"anyOf":[{"minItems":1,"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema32"}},{"type":"null"}]},"__schema13":{"description":"Columns worked out on each source row before the filters and the grouping, which filters, dimensions, splits and measures can then name like a source column. A formula reads one row only and may name an earlier custom field. Examples: price times quantity, summed by region; deal-size bands with if(); diff_days between two dates, then averaged","$ref":"#/$defs/__schema14"},"__schema14":{"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema15"}},"__schema15":{"type":"object","properties":{"formula":{"description":"A formula over one source row: ${Column} names a source column or an earlier custom field. No sum(), mean(), min(), max(), median(), count(), offset(), index() or running_total(), which read other rows","$ref":"#/$defs/__schema16"},"as":{"description":"The column\'s name","$ref":"#/$defs/__schema17"}},"required":["formula","as"],"additionalProperties":false},"__schema16":{"type":"string","minLength":1,"maxLength":2000,"description":"A formula: ${Column} names a dimension or measure by its name before renames; numbers, \\"text\\", yes, no, null; + - * / (dividing by 0 gives empty); = != &lt; &lt;= &gt; &gt;=; AND, OR, NOT; if(condition, then, else), coalesce(a, b), round(x, digits), abs(x), concat(a, b), is_null(x), to_string(x); sum(x), mean(x), min(x) and max(x) of a column over the rows shown, after the row limit, such as ${Sales} / sum(${Sales}) for each row\'s share of the rows shown; offset(x, n), the value n rows below in the rows shown (-1 the row above, empty past the first or last), and index(x, n), the value in row n of the rows shown (counting from 1), such as ${Sales} - offset(${Sales}, 1) for the lead over the next row; median(x), and count(x) of its values that aren\'t empty, over the rows shown; running_total(x), the sum of x from the first row shown down to this one, in the rows\' order; power(x, y), x to the power y (empty for a negative x with a fractional y); diff_days(start, end), the whole days from the start date to the end date, negative when the end is earlier, empty when either is empty"},"__schema17":{"type":"string","minLength":1,"maxLength":255,"description":"A column name, exact and case-sensitive"},"__schema18":{"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema19"},"description":"The columns to group by"},"__schema19":{"type":"object","properties":{"column":{"$ref":"#/$defs/__schema17"},"bucket":{"anyOf":[{"$ref":"#/$defs/__schema20"},{"type":"null"}],"description":"A date unit to group a date or timestamp column by (month: each month of each year), a part of the date over every year (month_of_year: Jan to Dec, quarter_of_year: 1 to 4, day_of_week: Mon to Sun), else null. This year beside last year by month is month_of_year split by the year"},"as":{"description":"Omit for the default name","$ref":"#/$defs/__schema17"},"groups":{"$ref":"#/$defs/__schema21"},"fill":{"$ref":"#/$defs/__schema25"}},"required":["column","bucket"],"additionalProperties":false},"__schema20":{"type":"string","enum":["day","week","month","quarter","year","month_of_year","quarter_of_year","day_of_week"]},"__schema21":{"description":"A text column only: values shown under one name, e.g. Email and Telephone as \\"Email & Tel\\"; the others keep theirs","$ref":"#/$defs/__schema22"},"__schema22":{"maxItems":50,"type":"array","items":{"$ref":"#/$defs/__schema23"}},"__schema23":{"type":"object","properties":{"name":{"type":"string","minLength":1,"maxLength":255},"values":{"minItems":1,"maxItems":200,"type":"array","items":{"$ref":"#/$defs/__schema24"}}},"required":["name","values"],"additionalProperties":false},"__schema24":{"type":"string","minLength":1},"__schema25":{"description":"A date grouped by a unit or a part only, one key at most: every period between the first and the last (every month, quarter or weekday of a part), for each combination of the other keys, a count or sum of no rows as 0. Omit to show only the periods the rows have","$ref":"#/$defs/__schema26"},"__schema26":{"type":"boolean"},"__schema27":{"maxItems":50,"type":"array","items":{"$ref":"#/$defs/__schema28"}},"__schema28":{"type":"object","properties":{"fn":{"$ref":"#/$defs/__schema29"},"column":{"anyOf":[{"$ref":"#/$defs/__schema17"},{"type":"null"}],"description":"Null only with count, which counts rows"},"as":{"description":"Omit for the default name, such as \\"Sum of Sales\\"","$ref":"#/$defs/__schema17"},"filters":{"$ref":"#/$defs/__schema30"}},"required":["fn","column"],"additionalProperties":false},"__schema29":{"type":"string","enum":["sum","avg","min","max","median","count","count_distinct","first","last"]},"__schema30":{"description":"Only the rows these all match, beside measures of every row: e.g. a count of the mortgages that are Buy to Let. Omit for every row","$ref":"#/$defs/__schema31"},"__schema31":{"minItems":1,"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema32"}},"__schema32":{"oneOf":[{"type":"object","properties":{"kind":{"type":"string","const":"compare"},"column":{"$ref":"#/$defs/__schema17"},"op":{"type":"string","enum":["eq","neq","gt","gte","lt","lte"]},"value":{"$ref":"#/$defs/__schema33"}},"required":["kind","column","op","value"],"additionalProperties":false},{"type":"object","properties":{"kind":{"type":"string","const":"in"},"column":{"$ref":"#/$defs/__schema17"},"values":{"minItems":1,"maxItems":1000,"type":"array","items":{"$ref":"#/$defs/__schema33"}},"negate":{"type":"boolean"}},"required":["kind","column","values","negate"],"additionalProperties":false},{"type":"object","properties":{"kind":{"type":"string","const":"between"},"column":{"$ref":"#/$defs/__schema17"},"from":{"$ref":"#/$defs/__schema33"},"to":{"$ref":"#/$defs/__schema33"}},"required":["kind","column","from","to"],"additionalProperties":false},{"type":"object","properties":{"kind":{"type":"string","const":"text"},"column":{"$ref":"#/$defs/__schema17"},"op":{"type":"string","enum":["equals","contains","starts_with","ends_with"]},"value":{"$ref":"#/$defs/__schema33"},"caseSensitive":{"type":"boolean"},"negate":{"type":"boolean"}},"required":["kind","column","op","value","caseSensitive","negate"],"additionalProperties":false},{"type":"object","properties":{"kind":{"type":"string","const":"is_blank"},"column":{"$ref":"#/$defs/__schema17"},"negate":{"type":"boolean"}},"required":["kind","column","negate"],"additionalProperties":false},{"type":"object","properties":{"kind":{"$ref":"#/$defs/__schema40"},"column":{"$ref":"#/$defs/__schema17"},"range":{"$ref":"#/$defs/__schema41"},"count":{"$ref":"#/$defs/__schema42"},"unit":{"$ref":"#/$defs/__schema43"},"complete":{"$ref":"#/$defs/__schema44"},"includeCurrent":{"$ref":"#/$defs/__schema46"},"toDate":{"$ref":"#/$defs/__schema48"},"earlier":{"$ref":"#/$defs/__schema50"}},"required":["kind","column","range","count","unit"],"additionalProperties":false}]},"__schema33":{"oneOf":[{"$ref":"#/$defs/__schema34"},{"$ref":"#/$defs/__schema35"},{"$ref":"#/$defs/__schema36"},{"$ref":"#/$defs/__schema37"},{"$ref":"#/$defs/__schema38"},{"$ref":"#/$defs/__schema39"}]},"__schema34":{"type":"object","properties":{"type":{"type":"string","const":"string"},"value":{"type":"string","maxLength":10000}},"required":["type","value"],"additionalProperties":false},"__schema35":{"type":"object","properties":{"type":{"type":"string","const":"number"},"value":{"type":"number"}},"required":["type","value"],"additionalProperties":false},"__schema36":{"type":"object","properties":{"type":{"type":"string","const":"boolean"},"value":{"type":"boolean"}},"required":["type","value"],"additionalProperties":false},"__schema37":{"type":"object","properties":{"type":{"type":"string","const":"date"},"value":{"type":"string","format":"date","pattern":"^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))$"}},"required":["type","value"],"additionalProperties":false},"__schema38":{"type":"object","properties":{"type":{"type":"string","const":"timestamp"},"value":{"type":"string","format":"date-time","pattern":"^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"}},"required":["type","value"],"additionalProperties":false},"__schema39":{"type":"object","properties":{"type":{"type":"string","const":"parameter"},"key":{"type":"string","minLength":1}},"required":["type","key"],"additionalProperties":false},"__schema40":{"type":"string","const":"relative_date"},"__schema41":{"type":"string","enum":["current","last","next"]},"__schema42":{"anyOf":[{"type":"integer","minimum":1,"maximum":1000},{"type":"null"}]},"__schema43":{"type":"string","enum":["day","week","month","quarter","year"]},"__schema44":{"description":"Last/next only: whole units, leaving out the current one, e.g. the last 3 complete months on Oct 21 are Jul, Aug and Sep. Omit for the window through today","$ref":"#/$defs/__schema45"},"__schema45":{"type":"boolean"},"__schema46":{"description":"With complete only: the current unit too, e.g. the last 1 complete year with the current one is last year and this year. Omit to leave it out","$ref":"#/$defs/__schema47"},"__schema47":{"type":"boolean"},"__schema48":{"description":"Current only: the unit so far, through today, e.g. this year to date. Omit for the whole unit","$ref":"#/$defs/__schema49"},"__schema49":{"type":"boolean"},"__schema5":{"oneOf":[{"type":"object","properties":{"type":{"type":"string","const":"create"},"temporaryId":{"type":"string","pattern":"^[A-Za-z][A-Za-z0-9_-]{0,63}$","description":"A stable ID for the new datasheet, which later changes in this patch reference it by"},"name":{"type":"string","minLength":1,"description":"The datasheet\'s name"},"reads":{"minItems":1,"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema6"},"description":"The elements it reads, each once: the one a query reads, or those a join reads"},"parameters":{"description":"User-controlled periods, limits, thresholds and selections: SQL reads them as columns of the params input, a step as {\\"type\\":\\"parameter\\",\\"key\\":\\"&lt;key&gt;\\"}","$ref":"#/$defs/__schema10"},"query":{"description":"The data as the Edit data editor builds it, over the one read; give query, or ops over several reads","$ref":"#/$defs/__schema11"},"ops":{"description":"Only over several reads: a join step over every read first, naming each read in its inputs (from op, ref the read alias), then steps","$ref":"#/$defs/__schema94"},"formats":{"description":"With ops; a query has its own formats","$ref":"#/$defs/__schema111"},"sql":{"description":"In place of a query or ops: one DuckDB SELECT over the reads, each a table named by its alias, with its formats in formats. Only for what a query can\'t do, such as a date stored as text (CAST(\\"Month\\" AS DATE) AS \\"Month\\") or a figure from two datasheets that read one row each (SELECT won.\\"Revenue\\" / goal.\\"Goal\\" AS \\"Share of goal\\" FROM won, goal)","$ref":"#/$defs/__schema113"}},"required":["type","temporaryId","name","reads","parameters"],"additionalProperties":false},{"type":"object","properties":{"type":{"type":"string","const":"set-query"},"datasheetRef":{"$ref":"#/$defs/__schema114"},"parameters":{"$ref":"#/$defs/__schema115"},"query":{"description":"The data as the Edit data editor builds it, replacing all the datasheet\'s ops but its read: getReportDatasheet gives its current query to start from","$ref":"#/$defs/__schema12"}},"required":["type","datasheetRef","query"],"additionalProperties":false},{"type":"object","properties":{"type":{"type":"string","const":"set-ops"},"datasheetRef":{"$ref":"#/$defs/__schema114"},"parameters":{"$ref":"#/$defs/__schema115"},"ops":{"maxItems":50,"type":"array","items":{"$ref":"#/$defs/__schema95"},"description":"The complete op list after the reads, in run order: an op whose ref is an existing op ID keeps that op, and existing ops left out are removed. Only on a datasheet with a join step: keep the join first with steps after it; on any other, use set-query"},"formats":{"description":"Replaces the datasheet\'s formats; omit to keep them","$ref":"#/$defs/__schema117"}},"required":["type","datasheetRef","ops"],"additionalProperties":false},{"type":"object","properties":{"type":{"type":"string","const":"set-read-type"},"datasheetRef":{"$ref":"#/$defs/__schema114"},"readType":{"type":"string","enum":["aggregated","raw","image"],"description":"Aggregated: its data, as the tool displays it; raw: its tidy read, to transform; image: its picture"}},"required":["type","datasheetRef","readType"],"additionalProperties":false},{"type":"object","properties":{"type":{"type":"string","const":"set-unpivot"},"datasheetRef":{"$ref":"#/$defs/__schema114"},"unpivot":{"description":"The columns of the range this datasheet reads to turn into rows, which every datasheet reading the range raw gets, and this one then reads it raw. Null takes it out; omit to keep the range\'s current one","$ref":"#/$defs/__schema118"},"fillDown":{"description":"Run first, as Power Query fills down: each heading row, a label with every other cell empty, becomes the value of a new column on the rows under it, and the heading row is left out. Null takes it out; omit to keep the range\'s current one","$ref":"#/$defs/__schema121"},"removeRows":{"description":"Run after fillDown: rows matching any of these are left out, such as the sheet\'s own totals that add up the rows above them. Null takes them out; omit to keep the range\'s current ones","$ref":"#/$defs/__schema122"}},"required":["type","datasheetRef"],"additionalProperties":false}]},"__schema50":{"description":"Current/last only: the same window, this many units earlier: this year to date 1 year earlier is the same dates last year, and the last 3 complete months 3 months earlier are the 3 months before them. Omit for the window itself","$ref":"#/$defs/__schema51"},"__schema51":{"type":"object","properties":{"count":{"type":"integer","minimum":1,"maximum":1000},"unit":{"$ref":"#/$defs/__schema43"}},"required":["count","unit"],"additionalProperties":false},"__schema52":{"maxItems":3,"type":"array","items":{"$ref":"#/$defs/__schema19"},"description":"Dimensions whose values become columns, outer first: each level splits the one above; empty for none"},"__schema53":{"description":"Columns beside each row over every row the aggregate gives: a rank, a percent of total, a difference or percent difference from the previous row ordered by the only dimension, a total/average/min/max of a measure, or a formula over the row\'s dimensions and measures, such as a rate. A formula with sum(), mean(), min() or max() reads only the rows the limit keeps, such as each top 10 row\'s share of the 10. Need a dimension or measure and no split","$ref":"#/$defs/__schema54"},"__schema54":{"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema55"}},"__schema55":{"oneOf":[{"type":"object","properties":{"fn":{"type":"string","const":"rank"},"column":{"$ref":"#/$defs/__schema56"},"direction":{"type":"string","enum":["asc","desc"],"description":"Desc: the largest ranks 1"},"as":{"$ref":"#/$defs/__schema57"}},"required":["fn","column","direction"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"percent_of_total"},"column":{"$ref":"#/$defs/__schema56"},"as":{"$ref":"#/$defs/__schema57"}},"required":["fn","column"],"additionalProperties":false},{"type":"object","properties":{"fn":{"$ref":"#/$defs/__schema58"},"column":{"$ref":"#/$defs/__schema56"},"orderBy":{"description":"The query\'s only dimension, such as a month, by its name before renames: the rows are ordered by it, oldest first","$ref":"#/$defs/__schema17"},"offset":{"$ref":"#/$defs/__schema59"},"as":{"$ref":"#/$defs/__schema57"}},"required":["fn","column","orderBy"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","enum":["sum","avg","min","max"]},"column":{"$ref":"#/$defs/__schema56"},"as":{"$ref":"#/$defs/__schema57"}},"required":["fn","column"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"formula"},"formula":{"$ref":"#/$defs/__schema16"},"as":{"description":"The column\'s name","$ref":"#/$defs/__schema17"}},"required":["fn","formula","as"],"additionalProperties":false}]},"__schema56":{"description":"A measure, by its name before renames","$ref":"#/$defs/__schema17"},"__schema57":{"description":"The new column\'s name. Omit for the default name","$ref":"#/$defs/__schema17"},"__schema58":{"type":"string","enum":["difference","percent_difference"]},"__schema59":{"description":"How many rows back to compare with; omit for 1, the previous row","$ref":"#/$defs/__schema60"},"__schema6":{"type":"object","properties":{"alias":{"type":"string","pattern":"^[A-Za-z_][A-Za-z0-9_]*$","description":"The name SQL reads this element by in FROM/JOIN, and ops name it by as a ref"},"datasheetRef":{"type":"string","format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","description":"An existing datasheet that reads one element: the new datasheet reads that element, with its filters"},"readType":{"description":"Omit to read it as that datasheet does","$ref":"#/$defs/__schema7"}},"required":["alias","datasheetRef"],"additionalProperties":false},"__schema60":{"type":"integer","minimum":1,"maximum":1000},"__schema61":{"description":"Every column once, by its name before renames, in the order to show them, removed columns optional; omit for dimensions, measures, then calculations","$ref":"#/$defs/__schema62"},"__schema62":{"maxItems":500,"type":"array","items":{"$ref":"#/$defs/__schema17"}},"__schema63":{"description":"Omit for the default: columns in the order their values first appear","$ref":"#/$defs/__schema64"},"__schema64":{"type":"object","properties":{"columns":{"$ref":"#/$defs/__schema65"},"nullLabel":{"$ref":"#/$defs/__schema67"},"fill":{"$ref":"#/$defs/__schema69"}},"required":["columns","nullLabel","fill"],"additionalProperties":false},"__schema65":{"oneOf":[{"type":"object","properties":{"mode":{"type":"string","const":"fixed"},"values":{"minItems":1,"maxItems":200,"type":"array","items":{"$ref":"#/$defs/__schema66"},"description":"One column per value, each under its own name: two values never share a column"}},"required":["mode","values"],"additionalProperties":false},{"type":"object","properties":{"mode":{"type":"string","const":"discover"},"order":{"type":"string","enum":["asc","desc","first_seen"]},"limit":{"type":"integer","minimum":1,"maximum":200}},"required":["mode","order","limit"],"additionalProperties":false}]},"__schema66":{"type":"object","properties":{"value":{"oneOf":[{"$ref":"#/$defs/__schema34"},{"$ref":"#/$defs/__schema35"},{"$ref":"#/$defs/__schema36"},{"$ref":"#/$defs/__schema37"},{"$ref":"#/$defs/__schema38"}]},"as":{"$ref":"#/$defs/__schema17"}},"required":["value","as"],"additionalProperties":false},"__schema67":{"anyOf":[{"$ref":"#/$defs/__schema68"},{"type":"null"}],"description":"Column name for NULL values; null drops them"},"__schema68":{"type":"string","minLength":1,"maxLength":255},"__schema69":{"anyOf":[{"$ref":"#/$defs/__schema70"},{"type":"null"}],"description":"Value for empty cells; null leaves them empty"},"__schema7":{"anyOf":[{"type":"string","enum":["aggregated","raw"]},{"type":"null"}]},"__schema70":{"type":"number"},"__schema71":{"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema32"},"description":"All must hold"},"__schema72":{"description":"Output columns under another name","$ref":"#/$defs/__schema73"},"__schema73":{"minItems":1,"maxItems":200,"type":"array","items":{"$ref":"#/$defs/__schema74"}},"__schema74":{"type":"object","properties":{"from":{"$ref":"#/$defs/__schema17"},"to":{"description":"The column\'s new name","$ref":"#/$defs/__schema17"}},"required":["from","to"],"additionalProperties":false},"__schema75":{"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema76"},"description":"Columns to sort by, the first first, each next one breaking ties; empty for none"},"__schema76":{"type":"object","properties":{"column":{"description":"A column, by its name before renames; a split\'s cell by its values","$ref":"#/$defs/__schema17"},"direction":{"type":"string","enum":["asc","desc"]},"nulls":{"type":"string","enum":["first","last"]}},"required":["column","direction"],"additionalProperties":false},"__schema77":{"anyOf":[{"$ref":"#/$defs/__schema78"},{"type":"null"}],"description":"Rows to keep: a number, an integer parameter, or null for all"},"__schema78":{"anyOf":[{"type":"integer","minimum":1,"maximum":100000},{"$ref":"#/$defs/__schema39"}]},"__schema79":{"type":"string","enum":["start","end"]},"__schema8":{"type":"object","properties":{"key":{"type":"string","pattern":"^[A-Za-z_][A-Za-z0-9_]*$"},"parameter":{"oneOf":[{"type":"object","properties":{"label":{"$ref":"#/$defs/__schema9"},"type":{"type":"string","const":"string"},"value":{"anyOf":[{"type":"string"},{"type":"null"}]}},"required":["label","type","value"],"additionalProperties":false},{"type":"object","properties":{"label":{"$ref":"#/$defs/__schema9"},"type":{"type":"string","const":"integer"},"value":{"anyOf":[{"type":"integer","minimum":-9007199254740991,"maximum":9007199254740991},{"type":"null"}]}},"required":["label","type","value"],"additionalProperties":false},{"type":"object","properties":{"label":{"$ref":"#/$defs/__schema9"},"type":{"type":"string","const":"number"},"value":{"anyOf":[{"type":"number"},{"type":"null"}]}},"required":["label","type","value"],"additionalProperties":false},{"type":"object","properties":{"label":{"$ref":"#/$defs/__schema9"},"type":{"type":"string","const":"boolean"},"value":{"anyOf":[{"type":"boolean"},{"type":"null"}]}},"required":["label","type","value"],"additionalProperties":false},{"type":"object","properties":{"label":{"$ref":"#/$defs/__schema9"},"type":{"type":"string","const":"date"},"value":{"anyOf":[{"type":"string","format":"date","pattern":"^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))$"},{"type":"null"}]}},"required":["label","type","value"],"additionalProperties":false},{"type":"object","properties":{"label":{"$ref":"#/$defs/__schema9"},"type":{"type":"string","const":"timestamp"},"value":{"anyOf":[{"type":"string","format":"date-time","pattern":"^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"},{"type":"null"}]}},"required":["label","type","value"],"additionalProperties":false}]}},"required":["key","parameter"],"additionalProperties":false},"__schema80":{"description":"A table\'s total row, its subtotal rows and, with a split, its Total column, each measure over the rows shown (under a limit, only those). Omit for none","$ref":"#/$defs/__schema81"},"__schema81":{"type":"object","properties":{"row":{"type":"boolean","description":"A last row with the total of each column; charts leave it out"},"column":{"type":"boolean","description":"With a pivot after the aggregate: a Total column with each row across the pivot"},"subtotals":{"description":"Grouped by two or more columns: a subtotal row above each group of every group-by column but the last, as a pivot table\'s subtotals, with each measure over the group\'s rows; charts leave them out","$ref":"#/$defs/__schema82"}},"required":["row","column"],"additionalProperties":false},"__schema82":{"type":"boolean"},"__schema83":{"description":"Numfmt patterns by output column","$ref":"#/$defs/__schema84"},"__schema84":{"maxItems":200,"type":"array","items":{"$ref":"#/$defs/__schema85"}},"__schema85":{"type":"object","properties":{"column":{"description":"An output column, by the name it is shown under, after any rename","$ref":"#/$defs/__schema17"},"format":{"type":"string","minLength":1,"maxLength":255,"description":"Numfmt pattern, e.g. #,##0.00, $#,##0, 0.0%, yyyy-mm-dd"}},"required":["column","format"],"additionalProperties":false},"__schema86":{"description":"Columns, by their name before renames, to leave out of the rows while keeping the grouping, e.g. group by region and month but show no region column; a split\'s column is named by its values","$ref":"#/$defs/__schema87"},"__schema87":{"maxItems":500,"type":"array","items":{"$ref":"#/$defs/__schema17"}},"__schema88":{"description":"Conditions on the grouped rows\' dimensions and measures (by their name before renames), all of which must hold, right after the grouping and before the calculations, the sort and the limit, as SQL\'s HAVING does, so the calculations and the limit only see the rows kept: each region\'s share among the regions with more than 20 deals. To keep rows by a measure or a calculation while the calculations still cover every group, as for the top 10 of the customers over 1,000,000, use keepRowsBeforeLimit. Needs a dimension or measure and no split","$ref":"#/$defs/__schema89"},"__schema89":{"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema32"}},"__schema9":{"type":"string","minLength":1},"__schema90":{"description":"Conditions on the grouped rows\' dimensions, measures and before-limit calculations (by their name before renames), all of which must hold, after the calculations and before the column order, the sort and the limit, so the limit counts only the rows kept while the calculations still cover every group: the top 10 customers of those over 1,000,000, the regions with over 5% of the total. A condition on a calculation that reads the rows the limit keeps (sum(), offset()) goes in keepRowsWhere. Needs a dimension or measure and no split","$ref":"#/$defs/__schema91"},"__schema91":{"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema32"}},"__schema92":{"description":"Conditions on the rows\' own columns (dimensions, measures and calculations by their name before renames), all of which must hold, after the sort, the limit and every calculation: keep the rank 1 row of the top 10, with its share of the 10. To keep rows before the limit, use keepRowsBeforeLimit. Needs a dimension or measure and no split","$ref":"#/$defs/__schema93"},"__schema93":{"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema32"}},"__schema94":{"anyOf":[{"minItems":1,"maxItems":50,"type":"array","items":{"$ref":"#/$defs/__schema95"}},{"type":"null"}]},"__schema95":{"type":"object","properties":{"ref":{"type":"string","minLength":1,"maxLength":64,"description":"An existing op ID to keep that op, or a new short name"},"title":{"description":"Omit to keep a kept op\'s title; a step op without one shows its step summary","$ref":"#/$defs/__schema96"},"inputs":{"description":"Omit to keep a kept op wired as it is (one that read the op above reads its new op above). A new op reads the op above, which SQL reads as input; a new first op reads the datasheet\'s one read, as source or the read\'s alias","$ref":"#/$defs/__schema97"},"step":{"description":"A step op\'s call; on a kept op, send it only to change it","$ref":"#/$defs/__schema101"}},"required":["ref"],"additionalProperties":false},"__schema96":{"anyOf":[{"type":"string","minLength":1},{"type":"null"}]},"__schema97":{"anyOf":[{"minItems":1,"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema98"}},{"type":"null"}]},"__schema98":{"type":"object","properties":{"alias":{"description":"SQL ops: the name the statement reads this input by","$ref":"#/$defs/__schema99"},"from":{"type":"string","enum":["previous","op"],"description":"Previous: the op above (above the first op, the datasheet\'s one read); op: the one ref names"},"ref":{"description":"Op: the ref of an earlier op in this list, or a read\'s operation ID or alias","$ref":"#/$defs/__schema100"}},"required":["from"],"additionalProperties":false},"__schema99":{"anyOf":[{"type":"string","pattern":"^[A-Za-z_][A-Za-z0-9_]*$"},{"type":"null"}]}}}.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Writes slides you wrote as HTML into a slide deck, as the slides agent\'s are: a draft sent under the id of a slide of the report replaces that slide where it is, any other is added right after the slide named in afterSlideId, or at the end without one, and every other slide stays. To move, remove or hide slides, use "Arrange slides". Render them with "Render draft slides" first: nothing is saved while a draft still has an issue, and the issues come back instead. A chart or table a draft places is filled with its datasheet\'s data as part of the save, with no change to the slides. Take the save back by restoring versionBeforeId with "Restore report version". Only the report\'s editors may. At most 10 drafts a call, and 20 renders and saves a minute per user.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'content',
				],
				operation: [
					'saveReportSlides',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'content',
				],
				operation: [
					'saveReportSlides',
				],
			},
		},
	},
	{
		displayName: 'Slides',
		name: 'slides',
		required: true,
		type: 'json',
		default: '',
		description: 'The draft slides to save, 1 to 10 a call, each under an ID of its own. Enter it as JSON, as this JSON Schema describes: {"minItems":1,"maxItems":10,"type":"array","items":{"type":"object","properties":{"\\u0069d":{"type":"string","pattern":"^[A-Za-z0-9_-]{1,64}$","description":"The ID you give the slide: letters, digits, _ and -, at most 64 characters. Pass an existing slide\'s ID to redraw that slide."},"html":{"type":"string","minLength":1,"maxLength":200000,"description":"The slide as one &lt;section&gt; of HTML, as large as the report\'s canvas. No scripts, embedded pages, event attributes or anything loaded from outside it."}},"required":["\\u0069d","html"],"additionalProperties":false}}.',
		displayOptions: {
			show: {
				resource: [
					'content',
				],
				operation: [
					'saveReportSlides',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'content',
				],
				operation: [
					'saveReportSlides',
				],
			},
		},
		options: [
			{
				displayName: 'After Slide ID',
				name: 'afterSlideId',
				type: 'string',
				default: '',
				description: 'The slide of the report the new slides go right after, by its ID from getReportContent. Without it they are added at the end. A draft sent under the ID of a slide of the report replaces that slide where it is.',
			},
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'An uploaded CSV file or Excel workbook. A workbook comes with its sheets, the range each one uses and its named ranges: pass a sheet\'s id as sheetId to also read its cells as text, which shows where a table\'s header row is. Then add the sheet, or a range of it that starts at the header row, to a report with "Add sources to report". Cells show what the workbook saved: nothing is recalculated.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'uploadedFile',
				],
				operation: [
					'getDataset',
				],
			},
		},
	},
	{
		displayName: 'Uploaded File ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The uploaded file to read: the ID returned by createDataset, or a datasheet\'s datasetId in listReportDatasheets. It can be any uploaded file of your organization, including one another member uploaded.',
		displayOptions: {
			show: {
				resource: [
					'uploadedFile',
				],
				operation: [
					'getDataset',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'uploadedFile',
				],
				operation: [
					'getDataset',
				],
			},
		},
		options: [
			{
				displayName: 'Range',
				name: 'range',
				type: 'string',
				default: '',
				description: 'The cells to read from the sheet, in A1 notation without the sheet\'s name, such as A1:H40. Omit it to read from the start of the range the sheet uses. Only with sheetId.',
			},
			{
				displayName: 'Sheet ID',
				name: 'sheetId',
				type: 'string',
				default: '',
				description: 'A sheet of an uploaded workbook whose cells to read: one of the sheets[].ID values of an earlier call. The answer\'s cells then holds them. Omit it to list the workbook\'s sheets only.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Answers a link to send a CSV file or an Excel workbook (.xlsx) to from a shell, as it is on disk, at most 10 MB: use it when the user gives you a file, in place of writing a CSV into "Upload a file", and for every workbook. Run the command it answers with the path of the file. The upload answers the uploaded file with its id, as "Upload a file" does: add it to a report with "Add sources to report", a workbook after reading its sheets with "Get an uploaded file". With datasetId, the file replaces the content of that uploaded file. The link works for 10 minutes and for one file: a file that is refused uses it up, so ask for another. Without a shell, write the CSV into "Upload a file". At most 20 links a minute per user.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'uploadedFile',
				],
				operation: [
					'createDatasetUpload',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'uploadedFile',
				],
				operation: [
					'createDatasetUpload',
				],
			},
		},
		options: [
			{
				displayName: 'Dataset ID',
				name: 'datasetId',
				type: 'string',
				default: '',
				description: 'An uploaded file to replace the content of: its ID from createDataset, or a datasheet\'s datasetId in listReportDatasheets. The file sent must be of its kind, a CSV for a CSV and a workbook for a workbook, and it keeps its ID and name. Only the user who uploaded it may. Omit it to upload a new file.',
			},
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Stores a document for the slides agent to read, such as a brief, a report or meeting notes, as when you attach one in the chat in the app: pass its id in documentIds on "Send message to slides agent". Over MCP, send the document\'s whole text as Markdown in text. Over REST, you can instead send the file as multipart/form-data in the file field: a .docx, .doc, .odt, .rtf, .pptx, .pdf, .txt or .md file of at most 100 MB and 100 pages, whose pages the agent can also look at. It joins your document library when you and your organization keep one.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'uploadedFile',
				],
				operation: [
					'createDocument',
				],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		required: true,
		type: 'string',
		default: '',
		description: 'The document\'s name, without an extension: it is stored as a Markdown file named after it. The slides agent and the app\'s chat show it. From 1 to 200 characters.',
		displayOptions: {
			show: {
				resource: [
					'uploadedFile',
				],
				operation: [
					'createDocument',
				],
			},
		},
	},
	{
		displayName: 'Text',
		name: 'text',
		required: true,
		type: 'string',
		default: '',
		description: 'The document\'s whole text, in Markdown: headings, lists and tables keep their structure for the agent. Send what the document says, not a summary of it.',
		displayOptions: {
			show: {
				resource: [
					'uploadedFile',
				],
				operation: [
					'createDocument',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'uploadedFile',
				],
				operation: [
					'createDocument',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Stores a CSV for the slides agent to build slides from: a header row, then at least one data row, at most 10 MB. Add it to a report with "Add sources to report". Over MCP the CSV is written into the tool call, so send large files to this REST endpoint instead. Or send an Excel workbook (.xlsx, at most 10 MB) as multipart/form-data in the file field: it is stored as it is, with all its sheets, formatting and charts, and the user picks its sheets and ranges for a report in the app\'s editor. Legacy .xls, macro-enabled and password-protected workbooks are rejected. A workbook is read as saved: formulas show their saved results, and nothing is recalculated. When you have the file and a shell, send the file itself with "Get a link to upload a file" instead of writing it into the tool call. List the sheets of a workbook with "Get an uploaded file", then add a sheet or a range of one to a report with "Add sources to report".',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'uploadedFile',
				],
				operation: [
					'createDataset',
				],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		required: true,
		type: 'string',
		default: '',
		description: 'A name for the uploaded file, which its datasheet takes when you add the file to a report with addReportDatasheets. Leading and trailing spaces are removed, and a name containing a / keeps only its last part: exports/Q3 pipeline is stored as Q3 pipeline. From 1 to 255 characters.',
		displayOptions: {
			show: {
				resource: [
					'uploadedFile',
				],
				operation: [
					'createDataset',
				],
			},
		},
	},
	{
		displayName: 'CSV',
		name: 'csv',
		required: true,
		type: 'string',
		default: '',
		description: 'The file\'s data, as CSV text: a header row naming the columns, then at least one row of data. With replaceDataset, it replaces the file\'s whole content, header included, and the uploaded file must be a CSV file. The header\'s names become the column names of the datasheets made from the file: a blank one becomes Column N, after the column\'s position, and a repeated one gets a _2, _3 suffix. Values can be separated by commas, semicolons or tabs, detected from the header row. At most 10 MB.',
		displayOptions: {
			show: {
				resource: [
					'uploadedFile',
				],
				operation: [
					'createDataset',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'uploadedFile',
				],
				operation: [
					'createDataset',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Replaces an uploaded CSV file\'s rows, or a workbook\'s content with a new .xlsx sent as multipart/form-data in the file field. It keeps its id, and a CSV is never replaced by a workbook or the other way round. Reports built on it show the new content after their next run or message to the slides agent. An invalid file leaves the current one in place, and a sheet or range the new workbook no longer has fails its datasheets\' reads. Only the user who created it may. From an MCP client, send a workbook with "Get a link to upload a file" and this file\'s id.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'uploadedFile',
				],
				operation: [
					'replaceDataset',
				],
			},
		},
	},
	{
		displayName: 'Uploaded File ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The uploaded file to replace or delete: the ID returned by createDataset. Only the user who uploaded the file can replace or delete it; for anyone else, the request fails with a 404, as if the file did not exist.',
		displayOptions: {
			show: {
				resource: [
					'uploadedFile',
				],
				operation: [
					'replaceDataset',
				],
			},
		},
	},
	{
		displayName: 'CSV',
		name: 'csv',
		required: true,
		type: 'string',
		default: '',
		description: 'The file\'s data, as CSV text: a header row naming the columns, then at least one row of data. With replaceDataset, it replaces the file\'s whole content, header included, and the uploaded file must be a CSV file. The header\'s names become the column names of the datasheets made from the file: a blank one becomes Column N, after the column\'s position, and a repeated one gets a _2, _3 suffix. Values can be separated by commas, semicolons or tabs, detected from the header row. At most 10 MB.',
		displayOptions: {
			show: {
				resource: [
					'uploadedFile',
				],
				operation: [
					'replaceDataset',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'uploadedFile',
				],
				operation: [
					'replaceDataset',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Deletes an uploaded CSV file or workbook. Reports built on it keep what they last showed, and their datasheets fail on the next read. Only the user who created it may.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'uploadedFile',
				],
				operation: [
					'deleteDataset',
				],
			},
		},
	},
	{
		displayName: 'Uploaded File ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The uploaded file to replace or delete: the ID returned by createDataset. Only the user who uploaded the file can replace or delete it; for anyone else, the request fails with a 404, as if the file did not exist.',
		displayOptions: {
			show: {
				resource: [
					'uploadedFile',
				],
				operation: [
					'deleteDataset',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'uploadedFile',
				],
				operation: [
					'deleteDataset',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Read this once before you add or shape the data of a report: how to send a CSV or an Excel workbook and pick the range of a sheet, how to check a figure with "Query report data", how to shape data with "Preview datasheet changes", "Render draft slides" and "Save datasheet changes", and the query model those changes write. It needs no report.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'datasheet',
				],
				operation: [
					'getReportDataGuide',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'The datasheets a report\'s charts and tables are built from, with their source and when each was last read. An entry whose copyOf is set repeats that datasheet for one more element of a slide: it shows the same data and is read together with it, so count each piece of data once by skipping the entries with a copyOf. Only a datasheet a slide shows has a lastBuiltAt.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'datasheet',
				],
				operation: [
					'listReportDatasheets',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'listReportDatasheets',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'What a datasheet\'s data is written as: its query, in the shape set-query takes, its one SQL statement, or its join and the steps after it, and its formats. Read it before you change a datasheet with "Preview datasheet changes": set-query replaces the whole query, so start from this one. For the picture of a Tableau view or Power BI page added with "Add sources to report", it also lists the charts on it, which "Add dashboard charts to report" adds as data. Only the report\'s editors may.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'datasheet',
				],
				operation: [
					'getReportDatasheet',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'getReportDatasheet',
				],
			},
		},
	},
	{
		displayName: 'Datasheet ID',
		name: 'datasheetId',
		required: true,
		type: 'string',
		default: '',
		description: 'One of this report\'s datasheets, by its ID in listReportDatasheets',
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'getReportDatasheet',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'The table a report\'s chart is drawn from: the datasheet\'s steps run over the copies stored at its sources\' last reads; the source is never queried. Only the report\'s editors may: the table was read with an editor\'s credentials, can hold columns and rows the slides never show, and skips the source\'s row-level security. Fails for a picture datasheet (its kind in "List report datasheets"), which has no table. Also fails until every source it reads has been read, after a source\'s latest read failed, and once a stored copy expires, 30 days after its read. At most 30 reads a minute per user.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'datasheet',
				],
				operation: [
					'getReportDatasheetData',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'getReportDatasheetData',
				],
			},
		},
	},
	{
		displayName: 'Datasheet ID',
		name: 'datasheetId',
		required: true,
		type: 'string',
		default: '',
		description: 'The datasheet whose table to read: an ID from listReportDatasheets, or one of the datasheetIds returned by addReportDatasheets. It must be one of this report\'s datasheets. A datasheet that reads a picture, such as a dashboard tab added with addReportDatasheets, has no table, so the request fails: add the tab\'s charts as data with addReportDashboardElements.',
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'getReportDatasheetData',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'getReportDatasheetData',
				],
			},
		},
		options: [
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 50,
				typeOptions: {
					minValue: 1,
					maxValue: 1000,
					numberPrecision: 0,
				},
				description: 'Max number of results to return',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Adds sources to a report as datasheets, and answers their ids in the order of the sources. A source is a CSV file uploaded with "Upload a file", or a dashboard of a Looker, Metabase, Omni, Lightdash, Sigma, Tableau or Power BI connection: find it with "Search dashboards", confirm it with the user, optionally check its tabs and charts with "Get dashboard", and add it by its connection, id and tabId from "Get dashboard"\'s tabs, or from "Search dashboards" for a Sigma workbook found by a link (else the tab it opens on, a Power BI report\'s or Sigma workbook\'s first page). A dashboard comes in as one picture of the tab, read with the user\'s access to the connection, from which the slides agent can add its charts. To draw a Tableau or Power BI dashboard\'s figures yourself, list its charts with "Get a datasheet" on that picture and add the ones you need as data with "Add dashboard charts to report". A source can also be a tabular or summary report of a Salesforce connection, found with "Search dashboards" and added by its connection and reportId: it comes in as a table of its rows, read with the user\'s access to the connection; a matrix or joined report is rejected. A source can also be a table or view of a Snowflake, Databricks or BigQuery connection, found with "Search tables" and added by its connection, database, schema and table: it stays in the warehouse, where the slides agent queries it with SQL with the user\'s access to the connection, as its default user when one is set, and the queries the agent saves run again on every update. A source can also be a range of a Google Sheets or Excel file the user added in the app: find the file with "Search spreadsheets", take the sheet\'s id from "Get spreadsheet", and pass the range inside the sheet in A1 notation, like A1:F20. A range comes in as a table, read with the user\'s own Google or Microsoft account on every run. A source can also be a sheet or a range of an uploaded Excel workbook, whose sheets "Get an uploaded file" lists. Pass the ids as datasheetIds on "Send message to slides agent" for the slides agent to build slides from them. Only the report\'s editors may.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'datasheet',
				],
				operation: [
					'addReportDatasheets',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'addReportDatasheets',
				],
			},
		},
	},
	{
		displayName: 'Sources',
		name: 'sources',
		required: true,
		type: 'json',
		default: '',
		description: 'The data to add to the report, each source becoming one of its datasheets: an uploaded CSV file (datasetId), a sheet or range of an uploaded workbook (datasetId, sheetId and optionally range), a dashboard tab (connectionType, connectionId, dashboardId and optionally tabId), a Salesforce report (connectionType, connectionId and reportId), a Snowflake, Databricks or BigQuery table (connectionType, connectionId, database, schema and table), a Looker explore, Power BI semantic model or Tableau data source (connectionType, connectionId and modelId), or a range of a spreadsheet (spreadsheetId, sheetId and range). An uploaded file, a Salesforce report or a range comes in as a table, a warehouse table stays in the warehouse and a model in its BI tool for the slides agent to query, and a dashboard tab comes in as a picture of the tab. If any source can\'t be added, none is. From 1 to 100 sources. Enter it as JSON, as this JSON Schema describes: {"minItems":1,"maxItems":100,"type":"array","items":{"anyOf":[{"type":"object","properties":{"datasetId":{"type":"string","description":"The uploaded file to add: the ID returned by createDataset. A CSV file comes in whole, as one table named after the file. An Excel workbook comes in one sheet at a time, so pass sheetId with it. It can be any uploaded file of the report\'s organization, including one another member uploaded.","examples":["b2c4d6e8-f0a1-4b3c-9d5e-7f9a1b3c5d7e"]},"sheetId":{"description":"For an uploaded workbook, the sheet to read: one of the sheets[].ID values from getDataset. Required for a workbook, and rejected for a CSV file.","type":"string"},"range":{"description":"For an uploaded workbook, the cells to read from the sheet, in A1 notation without the sheet\'s name, such as A3:H40. The datasheet contains them as a table and is named after the range. Start it at the header row so the columns take its names; without a header, they are named Column 1, Column 2 and so on. Omit it to read everything the sheet uses, in a datasheet named after the sheet: do that only when the sheet\'s first row is the header. Whole columns such as A:F aren\'t accepted.","examples":["A3:H40"],"type":"string"}},"required":["datasetId"],"additionalProperties":false},{"type":"object","properties":{"connectionType":{"type":"string","enum":["Looker","Metabase","Omni","Lightdash","Tableau","PowerBI","Sigma"],"description":"The type of the connection the dashboard is on: Looker, Metabase, Omni, Lightdash, Sigma, Tableau or PowerBI. It must match the connection\'s type in listConnections."},"connectionId":{"type":"string","description":"The connection the dashboard is on: the ID of a connection from listConnections. You must have access to the connection in Rollstack.","examples":["c8e0a2b4-d6f8-4a0b-8c2d-4e6f8a0b2c4d"]},"dashboardId":{"type":"string","description":"The dashboard to add: the ID of a dashboard from searchDashboards on this connection. For Tableau and Sigma, it is a workbook, and for Power BI, a report.","examples":["128"]},"tabId":{"description":"The tab to add: one of the tabs[].ID values from getDashboard, which for Tableau are a workbook\'s views, for Power BI a report\'s pages and for Sigma a workbook\'s pages, or the tabId of a Sigma workbook searchDashboards found by a link. The datasheet is a picture of that tab, named after it. If omitted, Rollstack adds the tab the dashboard opens on (the first view or page for Tableau, Power BI and Sigma), or, for a dashboard without tabs such as an Omni dashboard, the whole dashboard, named after it. A tab the dashboard doesn\'t have is rejected.","examples":["12-overview"],"type":"string"}},"required":["connectionType","connectionId","dashboardId"],"additionalProperties":false},{"type":"object","properties":{"connectionType":{"type":"string","const":"Salesforce","description":"Salesforce. It must match the connection\'s type in listConnections."},"connectionId":{"type":"string","description":"The Salesforce connection the report is on: the ID of a connection from listConnections. You must have access to the connection in Rollstack.","examples":["c8e0a2b4-d6f8-4a0b-8c2d-4e6f8a0b2c4d"]},"reportId":{"type":"string","description":"The report to add: the ID of a tabular or summary report from searchDashboards on this connection. The datasheet contains the report\'s rows as a table, a summary report\'s with its groupings as their first columns, and is named after the report. A matrix or joined report is rejected.","examples":["00O5e000008abcdEAA"]}},"required":["connectionType","connectionId","reportId"],"additionalProperties":false},{"type":"object","properties":{"connectionType":{"type":"string","enum":["Snowflake","Databricks","BigQuery"],"description":"The type of the connection the table is on: Snowflake, Databricks or BigQuery. It must match the connection\'s type in listConnections."},"connectionId":{"type":"string","description":"The data warehouse connection the table is on: the ID of a connection from listConnections. You must have your own access to the connection in Rollstack.","examples":["c8e0a2b4-d6f8-4a0b-8c2d-4e6f8a0b2c4d"]},"database":{"type":"string","minLength":1,"description":"The database the table is in, as database in searchTables."},"schema":{"type":"string","minLength":1,"description":"The schema the table is in, as schema in searchTables."},"table":{"type":"string","minLength":1,"description":"The table or view to add, as table in searchTables. The datasheet is named database.schema.table, and the slides agent queries it in the warehouse with SQL over all its rows.","examples":["ORDERS"]}},"required":["connectionType","connectionId","database","schema","table"],"additionalProperties":false},{"type":"object","properties":{"connectionType":{"type":"string","enum":["Looker","PowerBI","Tableau"],"description":"The type of the connection the model is on: Looker, PowerBI or Tableau. It must match the connection\'s type in listConnections."},"connectionId":{"type":"string","description":"The connection the model is on: the ID of a connection from listConnections. You must have access to the connection in Rollstack, and for Tableau your own Tableau user on it.","examples":["c8e0a2b4-d6f8-4a0b-8c2d-4e6f8a0b2c4d"]},"modelId":{"type":"string","description":"The model to add: the ID of a Looker explore, Power BI semantic model or Tableau data source from searchModels on this connection. The datasheet is named after it and holds no rows: pass its ID as datasheetIds on sendReportMessage, and the slides agent queries the model in its BI tool for the data its slides need. A model the connection doesn\'t have is rejected.","examples":["ecommerce.order_items"]}},"required":["connectionType","connectionId","modelId"],"additionalProperties":false},{"type":"object","properties":{"spreadsheetId":{"type":"string","description":"The Google Sheets or Excel file to read from: the ID of a file from searchSpreadsheets. It must be a file you added in the app yourself.","examples":["e6f8a0b2-c4d6-4e8f-9a0b-2c4d6e8f0a1b"]},"sheetId":{"type":"string","description":"The sheet the range is on: one of the sheets[].ID values from getSpreadsheet. A sheet the file doesn\'t have is rejected.","examples":["0"]},"range":{"type":"string","description":"The cells to read from the sheet, in A1 notation without the sheet\'s name, such as A1:F20, or B2 for a single cell. The datasheet contains them as a table and is named after the range. Start the range at the header row so the columns take its names; without a header, they are named Column 1, Column 2 and so on. Hidden rows and columns are left out, and whole columns such as A:F aren\'t accepted.","examples":["A1:F20"]}},"required":["spreadsheetId","sheetId","range"],"additionalProperties":false}]}}.',
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'addReportDatasheets',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'addReportDatasheets',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Removes a datasheet the report\'s slides no longer show, such as a source that was added and not used, or one whose read keeps failing. A datasheet a chart, table, picture or sentence still shows is refused: change or remove that slide first. The source itself, such as the dashboard or the uploaded file, is not touched. Only the report\'s editors may.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'datasheet',
				],
				operation: [
					'removeReportDatasheet',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'removeReportDatasheet',
				],
			},
		},
	},
	{
		displayName: 'Datasheet ID',
		name: 'datasheetId',
		required: true,
		type: 'string',
		default: '',
		description: 'One of this report\'s datasheets, by its ID in listReportDatasheets',
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'removeReportDatasheet',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'removeReportDatasheet',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Adds charts of a Tableau view or Power BI page the report holds as a picture, each as a datasheet of its own: its data, to read with "Get datasheet data" or "Query report data" and draw on a slide, its picture, or both. Pass the picture\'s datasheet id, from "Add sources to report" or "List report datasheets", and the refs of the charts "Get a datasheet" lists for it. Each chart is read with the dashboard\'s filters and the user\'s access to the connection, and a chart the report already reads that way is reused. Reading a dashboard can take a minute: past the wait the call answers that the source is still being read, so send the same call again, which reuses what the first one added. It runs one at a time with your "Query report data", "Preview datasheet changes" and "Save datasheet changes" calls: send it once they answer. Only the report\'s editors may.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'datasheet',
				],
				operation: [
					'addReportDashboardElements',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'addReportDashboardElements',
				],
			},
		},
	},
	{
		displayName: 'Datasheet ID',
		name: 'datasheetId',
		required: true,
		type: 'string',
		default: '',
		description: 'One of this report\'s datasheets, by its ID in listReportDatasheets',
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'addReportDashboardElements',
				],
			},
		},
	},
	{
		displayName: 'Elements',
		name: 'elements',
		required: true,
		type: 'json',
		default: '',
		description: 'The charts to add, only the ones the slides need, at most 12 a call. Enter it as JSON, as this JSON Schema describes: {"minItems":1,"maxItems":12,"type":"array","items":{"type":"object","properties":{"ref":{"type":"string","minLength":1,"description":"A chart\'s ref from the elements getReportDatasheet lists for this dashboard. For a table Tableau builds from several worksheets side by side, the refs of those worksheets joined by commas, like 12,15,18, add it as one."},"as":{"type":"string","enum":["data","picture","both"],"description":"Data for its table, to read with getReportDatasheetData and draw as a chart, table or figure on a slide; picture for its image, to place on a slide as it looks; both for the two. Ask only for a read the element lists in its reads."}},"required":["ref","as"],"additionalProperties":false}}.',
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'addReportDashboardElements',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'addReportDashboardElements',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Tries changes to a report\'s datasheets, to shape data before it goes on a slide: a new datasheet, a query, steps after a join, a read type, an unpivot. It runs every datasheet the changes touch over the data stored at the sources\' last reads and saves nothing, not even a new datasheet. Answers each datasheet\'s columns and five sample rows, the ids a new datasheet gets, and the revisions to send to "Save datasheet changes". A change that fails answers valid false with its reason, naming the datasheet and step: fix it and preview again. Draw a slide with the same changes by sending them to "Render draft slides". Only the report\'s editors may. Your previews run one at a time, together with your "Query report data" and "Save datasheet changes" calls and the "Render draft slides" calls that carry datasheetChanges: send the next only once this one answers, never several at once, and try several datasheets\' changes in one preview. At most 30 previews and "Query report data" calls a minute per user, counted together.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'datasheet',
				],
				operation: [
					'previewReportDatasheetChanges',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'previewReportDatasheetChanges',
				],
			},
		},
	},
	{
		displayName: 'Changes',
		name: 'changes',
		required: true,
		type: 'json',
		default: '',
		description: 'The changes to the report\'s datasheets, applied in order: create for a datasheet the report doesn\'t have yet (a query, one SQL statement, or a join and steps over elements that datasheets of the report read already, under a temporaryId you choose), set-query or set-ops for the data of one it has (getReportDatasheet gives what it is now), set-read-type and set-unpivot. Each datasheet is its reads followed by the ops over them: call getReportDataGuide for the query model, SQL and joins. A temporaryId can be used once: after a save, create the next datasheet under another. Enter it as JSON, as this JSON Schema describes: {"minItems":1,"type":"array","items":{"$ref":"#/$defs/__schema2"},"$defs":{"__schema10":{"description":"Columns worked out on each source row before the filters and the grouping, which filters, dimensions, splits and measures can then name like a source column. A formula reads one row only and may name an earlier custom field. Examples: price times quantity, summed by region; deal-size bands with if(); diff_days between two dates, then averaged","$ref":"#/$defs/__schema11"},"__schema100":{"type":"object","properties":{"column":{"$ref":"#/$defs/__schema14"},"direction":{"type":"string","enum":["asc","desc"]},"nulls":{"type":"string","enum":["first","last"]},"optional":{"description":"Skip this key when its column is missing, as a split\'s column is once its value is gone","$ref":"#/$defs/__schema101"}},"required":["column","direction","nulls"],"additionalProperties":false},"__schema101":{"type":"boolean"},"__schema102":{"type":"object","properties":{"column":{"$ref":"#/$defs/__schema14"},"bucket":{"anyOf":[{"$ref":"#/$defs/__schema17"},{"type":"null"}]},"as":{"anyOf":[{"$ref":"#/$defs/__schema14"},{"type":"null"}]},"groups":{"$ref":"#/$defs/__schema18"},"fill":{"$ref":"#/$defs/__schema22"}},"required":["column","bucket","as"],"additionalProperties":false},"__schema103":{"type":"object","properties":{"fn":{"$ref":"#/$defs/__schema26"},"column":{"$ref":"#/$defs/__schema104"},"as":{"$ref":"#/$defs/__schema14"},"filters":{"$ref":"#/$defs/__schema27"}},"required":["fn","column","as"],"additionalProperties":false},"__schema104":{"anyOf":[{"$ref":"#/$defs/__schema14"},{"type":"null"}],"description":"Null only with count, which then counts rows"},"__schema105":{"type":"object","properties":{"fn":{"$ref":"#/$defs/__schema26"},"column":{"$ref":"#/$defs/__schema104"},"label":{"type":"string","minLength":1,"maxLength":255}},"required":["fn","column","label"],"additionalProperties":false},"__schema106":{"minItems":1,"maxItems":2,"type":"array","items":{"$ref":"#/$defs/__schema14"}},"__schema107":{"oneOf":[{"type":"object","properties":{"fn":{"type":"string","const":"rank"},"column":{"$ref":"#/$defs/__schema14"},"direction":{"type":"string","enum":["asc","desc"],"description":"Desc: the largest value ranks 1"},"as":{"$ref":"#/$defs/__schema14"}},"required":["fn","column","direction","as"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"percent_of_total"},"column":{"$ref":"#/$defs/__schema14"},"as":{"$ref":"#/$defs/__schema14"}},"required":["fn","column","as"],"additionalProperties":false},{"type":"object","properties":{"fn":{"$ref":"#/$defs/__schema55"},"column":{"description":"A number column","$ref":"#/$defs/__schema14"},"orderBy":{"description":"Column the rows are ordered by, oldest first, such as a month","$ref":"#/$defs/__schema14"},"offset":{"$ref":"#/$defs/__schema56"},"as":{"$ref":"#/$defs/__schema14"}},"required":["fn","column","orderBy","as"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"formula"},"formula":{"$ref":"#/$defs/__schema13"},"as":{"$ref":"#/$defs/__schema14"}},"required":["fn","formula","as"],"additionalProperties":false},{"type":"object","properties":{"fn":{"$ref":"#/$defs/__schema26"},"column":{"$ref":"#/$defs/__schema104"},"as":{"$ref":"#/$defs/__schema14"}},"required":["fn","column","as"],"additionalProperties":false}]},"__schema108":{"anyOf":[{"$ref":"#/$defs/__schema109"},{"type":"null"}]},"__schema109":{"description":"Numfmt formats by output column: give each renamed or computed number or date column one","$ref":"#/$defs/__schema81"},"__schema11":{"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema12"}},"__schema110":{"anyOf":[{"type":"string","minLength":1},{"type":"null"}]},"__schema111":{"type":"string","minLength":1,"description":"An existing datasheet ID, or the temporaryId of a datasheet created earlier in this patch"},"__schema112":{"description":"Replaces the datasheet\'s complete parameter set; omit to keep it","$ref":"#/$defs/__schema113"},"__schema113":{"anyOf":[{"$ref":"#/$defs/__schema7"},{"type":"null"}]},"__schema114":{"anyOf":[{"$ref":"#/$defs/__schema109"},{"type":"null"}]},"__schema115":{"anyOf":[{"type":"object","properties":{"rows":{"minItems":1,"maxItems":500,"type":"array","items":{"$ref":"#/$defs/__schema116"},"description":"One output row per input row and entry, in this order; the input columns no entry names repeat on each"},"name":{"description":"The column that holds each row\'s label, such as \\"Year\\"","$ref":"#/$defs/__schema14"},"values":{"minItems":1,"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema14"},"description":"The columns the values go in: one, such as \\"Value\\", or one per measure"}},"required":["rows","name","values"],"additionalProperties":false},{"type":"null"}]},"__schema116":{"type":"object","properties":{"label":{"type":"string","minLength":1,"maxLength":255,"description":"What the name column says on this row, such as the column\'s name or \\"2022\\""},"columns":{"minItems":1,"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema117"},"description":"The input column for each of values, in order; null leaves that value empty on this row"}},"required":["label","columns"],"additionalProperties":false},"__schema117":{"anyOf":[{"$ref":"#/$defs/__schema14"},{"type":"null"}]},"__schema118":{"anyOf":[{"type":"object","properties":{"column":{"description":"The column holding the row labels, headings included","$ref":"#/$defs/__schema14"},"into":{"description":"The new column the headings fill, such as \\"Section\\"","$ref":"#/$defs/__schema14"}},"required":["column","into"],"additionalProperties":false},{"type":"null"}]},"__schema119":{"anyOf":[{"minItems":1,"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema29"}},{"type":"null"}]},"__schema12":{"type":"object","properties":{"formula":{"description":"A formula over one source row: ${Column} names a source column or an earlier custom field. No sum(), mean(), min(), max(), median(), count(), offset(), index() or running_total(), which read other rows","$ref":"#/$defs/__schema13"},"as":{"description":"The column\'s name","$ref":"#/$defs/__schema14"}},"required":["formula","as"],"additionalProperties":false},"__schema13":{"type":"string","minLength":1,"maxLength":2000,"description":"A formula: ${Column} names a dimension or measure by its name before renames; numbers, \\"text\\", yes, no, null; + - * / (dividing by 0 gives empty); = != &lt; &lt;= &gt; &gt;=; AND, OR, NOT; if(condition, then, else), coalesce(a, b), round(x, digits), abs(x), concat(a, b), is_null(x), to_string(x); sum(x), mean(x), min(x) and max(x) of a column over the rows shown, after the row limit, such as ${Sales} / sum(${Sales}) for each row\'s share of the rows shown; offset(x, n), the value n rows below in the rows shown (-1 the row above, empty past the first or last), and index(x, n), the value in row n of the rows shown (counting from 1), such as ${Sales} - offset(${Sales}, 1) for the lead over the next row; median(x), and count(x) of its values that aren\'t empty, over the rows shown; running_total(x), the sum of x from the first row shown down to this one, in the rows\' order; power(x, y), x to the power y (empty for a negative x with a fractional y); diff_days(start, end), the whole days from the start date to the end date, negative when the end is earlier, empty when either is empty"},"__schema14":{"type":"string","minLength":1,"maxLength":255,"description":"A column name, exact and case-sensitive"},"__schema15":{"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema16"},"description":"The columns to group by"},"__schema16":{"type":"object","properties":{"column":{"$ref":"#/$defs/__schema14"},"bucket":{"anyOf":[{"$ref":"#/$defs/__schema17"},{"type":"null"}],"description":"A date unit to group a date or timestamp column by (month: each month of each year), a part of the date over every year (month_of_year: Jan to Dec, quarter_of_year: 1 to 4, day_of_week: Mon to Sun), else null. This year beside last year by month is month_of_year split by the year"},"as":{"description":"Omit for the default name","$ref":"#/$defs/__schema14"},"groups":{"$ref":"#/$defs/__schema18"},"fill":{"$ref":"#/$defs/__schema22"}},"required":["column","bucket"],"additionalProperties":false},"__schema17":{"type":"string","enum":["day","week","month","quarter","year","month_of_year","quarter_of_year","day_of_week"]},"__schema18":{"description":"A text column only: values shown under one name, e.g. Email and Telephone as \\"Email & Tel\\"; the others keep theirs","$ref":"#/$defs/__schema19"},"__schema19":{"maxItems":50,"type":"array","items":{"$ref":"#/$defs/__schema20"}},"__schema2":{"oneOf":[{"type":"object","properties":{"type":{"type":"string","const":"create"},"temporaryId":{"type":"string","pattern":"^[A-Za-z][A-Za-z0-9_-]{0,63}$","description":"A stable ID for the new datasheet, which later changes in this patch reference it by"},"name":{"type":"string","minLength":1,"description":"The datasheet\'s name"},"reads":{"minItems":1,"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema3"},"description":"The elements it reads, each once: the one a query reads, or those a join reads"},"parameters":{"description":"User-controlled periods, limits, thresholds and selections: SQL reads them as columns of the params input, a step as {\\"type\\":\\"parameter\\",\\"key\\":\\"&lt;key&gt;\\"}","$ref":"#/$defs/__schema7"},"query":{"description":"The data as the Edit data editor builds it, over the one read; give query, or ops over several reads","$ref":"#/$defs/__schema8"},"ops":{"description":"Only over several reads: a join step over every read first, naming each read in its inputs (from op, ref the read alias), then steps","$ref":"#/$defs/__schema91"},"formats":{"description":"With ops; a query has its own formats","$ref":"#/$defs/__schema108"},"sql":{"description":"In place of a query or ops: one DuckDB SELECT over the reads, each a table named by its alias, with its formats in formats. Only for what a query can\'t do, such as a date stored as text (CAST(\\"Month\\" AS DATE) AS \\"Month\\") or a figure from two datasheets that read one row each (SELECT won.\\"Revenue\\" / goal.\\"Goal\\" AS \\"Share of goal\\" FROM won, goal)","$ref":"#/$defs/__schema110"}},"required":["type","temporaryId","name","reads","parameters"],"additionalProperties":false},{"type":"object","properties":{"type":{"type":"string","const":"set-query"},"datasheetRef":{"$ref":"#/$defs/__schema111"},"parameters":{"$ref":"#/$defs/__schema112"},"query":{"description":"The data as the Edit data editor builds it, replacing all the datasheet\'s ops but its read: getReportDatasheet gives its current query to start from","$ref":"#/$defs/__schema9"}},"required":["type","datasheetRef","query"],"additionalProperties":false},{"type":"object","properties":{"type":{"type":"string","const":"set-ops"},"datasheetRef":{"$ref":"#/$defs/__schema111"},"parameters":{"$ref":"#/$defs/__schema112"},"ops":{"maxItems":50,"type":"array","items":{"$ref":"#/$defs/__schema92"},"description":"The complete op list after the reads, in run order: an op whose ref is an existing op ID keeps that op, and existing ops left out are removed. Only on a datasheet with a join step: keep the join first with steps after it; on any other, use set-query"},"formats":{"description":"Replaces the datasheet\'s formats; omit to keep them","$ref":"#/$defs/__schema114"}},"required":["type","datasheetRef","ops"],"additionalProperties":false},{"type":"object","properties":{"type":{"type":"string","const":"set-read-type"},"datasheetRef":{"$ref":"#/$defs/__schema111"},"readType":{"type":"string","enum":["aggregated","raw","image"],"description":"Aggregated: its data, as the tool displays it; raw: its tidy read, to transform; image: its picture"}},"required":["type","datasheetRef","readType"],"additionalProperties":false},{"type":"object","properties":{"type":{"type":"string","const":"set-unpivot"},"datasheetRef":{"$ref":"#/$defs/__schema111"},"unpivot":{"description":"The columns of the range this datasheet reads to turn into rows, which every datasheet reading the range raw gets, and this one then reads it raw. Null takes it out; omit to keep the range\'s current one","$ref":"#/$defs/__schema115"},"fillDown":{"description":"Run first, as Power Query fills down: each heading row, a label with every other cell empty, becomes the value of a new column on the rows under it, and the heading row is left out. Null takes it out; omit to keep the range\'s current one","$ref":"#/$defs/__schema118"},"removeRows":{"description":"Run after fillDown: rows matching any of these are left out, such as the sheet\'s own totals that add up the rows above them. Null takes them out; omit to keep the range\'s current ones","$ref":"#/$defs/__schema119"}},"required":["type","datasheetRef"],"additionalProperties":false}]},"__schema20":{"type":"object","properties":{"name":{"type":"string","minLength":1,"maxLength":255},"values":{"minItems":1,"maxItems":200,"type":"array","items":{"$ref":"#/$defs/__schema21"}}},"required":["name","values"],"additionalProperties":false},"__schema21":{"type":"string","minLength":1},"__schema22":{"description":"A date grouped by a unit or a part only, one key at most: every period between the first and the last (every month, quarter or weekday of a part), for each combination of the other keys, a count or sum of no rows as 0. Omit to show only the periods the rows have","$ref":"#/$defs/__schema23"},"__schema23":{"type":"boolean"},"__schema24":{"maxItems":50,"type":"array","items":{"$ref":"#/$defs/__schema25"}},"__schema25":{"type":"object","properties":{"fn":{"$ref":"#/$defs/__schema26"},"column":{"anyOf":[{"$ref":"#/$defs/__schema14"},{"type":"null"}],"description":"Null only with count, which counts rows"},"as":{"description":"Omit for the default name, such as \\"Sum of Sales\\"","$ref":"#/$defs/__schema14"},"filters":{"$ref":"#/$defs/__schema27"}},"required":["fn","column"],"additionalProperties":false},"__schema26":{"type":"string","enum":["sum","avg","min","max","median","count","count_distinct","first","last"]},"__schema27":{"description":"Only the rows these all match, beside measures of every row: e.g. a count of the mortgages that are Buy to Let. Omit for every row","$ref":"#/$defs/__schema28"},"__schema28":{"minItems":1,"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema29"}},"__schema29":{"oneOf":[{"type":"object","properties":{"kind":{"type":"string","const":"compare"},"column":{"$ref":"#/$defs/__schema14"},"op":{"type":"string","enum":["eq","neq","gt","gte","lt","lte"]},"value":{"$ref":"#/$defs/__schema30"}},"required":["kind","column","op","value"],"additionalProperties":false},{"type":"object","properties":{"kind":{"type":"string","const":"in"},"column":{"$ref":"#/$defs/__schema14"},"values":{"minItems":1,"maxItems":1000,"type":"array","items":{"$ref":"#/$defs/__schema30"}},"negate":{"type":"boolean"}},"required":["kind","column","values","negate"],"additionalProperties":false},{"type":"object","properties":{"kind":{"type":"string","const":"between"},"column":{"$ref":"#/$defs/__schema14"},"from":{"$ref":"#/$defs/__schema30"},"to":{"$ref":"#/$defs/__schema30"}},"required":["kind","column","from","to"],"additionalProperties":false},{"type":"object","properties":{"kind":{"type":"string","const":"text"},"column":{"$ref":"#/$defs/__schema14"},"op":{"type":"string","enum":["equals","contains","starts_with","ends_with"]},"value":{"$ref":"#/$defs/__schema30"},"caseSensitive":{"type":"boolean"},"negate":{"type":"boolean"}},"required":["kind","column","op","value","caseSensitive","negate"],"additionalProperties":false},{"type":"object","properties":{"kind":{"type":"string","const":"is_blank"},"column":{"$ref":"#/$defs/__schema14"},"negate":{"type":"boolean"}},"required":["kind","column","negate"],"additionalProperties":false},{"type":"object","properties":{"kind":{"$ref":"#/$defs/__schema37"},"column":{"$ref":"#/$defs/__schema14"},"range":{"$ref":"#/$defs/__schema38"},"count":{"$ref":"#/$defs/__schema39"},"unit":{"$ref":"#/$defs/__schema40"},"complete":{"$ref":"#/$defs/__schema41"},"includeCurrent":{"$ref":"#/$defs/__schema43"},"toDate":{"$ref":"#/$defs/__schema45"},"earlier":{"$ref":"#/$defs/__schema47"}},"required":["kind","column","range","count","unit"],"additionalProperties":false}]},"__schema3":{"type":"object","properties":{"alias":{"type":"string","pattern":"^[A-Za-z_][A-Za-z0-9_]*$","description":"The name SQL reads this element by in FROM/JOIN, and ops name it by as a ref"},"datasheetRef":{"type":"string","format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","description":"An existing datasheet that reads one element: the new datasheet reads that element, with its filters"},"readType":{"description":"Omit to read it as that datasheet does","$ref":"#/$defs/__schema4"}},"required":["alias","datasheetRef"],"additionalProperties":false},"__schema30":{"oneOf":[{"$ref":"#/$defs/__schema31"},{"$ref":"#/$defs/__schema32"},{"$ref":"#/$defs/__schema33"},{"$ref":"#/$defs/__schema34"},{"$ref":"#/$defs/__schema35"},{"$ref":"#/$defs/__schema36"}]},"__schema31":{"type":"object","properties":{"type":{"type":"string","const":"string"},"value":{"type":"string","maxLength":10000}},"required":["type","value"],"additionalProperties":false},"__schema32":{"type":"object","properties":{"type":{"type":"string","const":"number"},"value":{"type":"number"}},"required":["type","value"],"additionalProperties":false},"__schema33":{"type":"object","properties":{"type":{"type":"string","const":"boolean"},"value":{"type":"boolean"}},"required":["type","value"],"additionalProperties":false},"__schema34":{"type":"object","properties":{"type":{"type":"string","const":"date"},"value":{"type":"string","format":"date","pattern":"^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))$"}},"required":["type","value"],"additionalProperties":false},"__schema35":{"type":"object","properties":{"type":{"type":"string","const":"timestamp"},"value":{"type":"string","format":"date-time","pattern":"^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"}},"required":["type","value"],"additionalProperties":false},"__schema36":{"type":"object","properties":{"type":{"type":"string","const":"parameter"},"key":{"type":"string","minLength":1}},"required":["type","key"],"additionalProperties":false},"__schema37":{"type":"string","const":"relative_date"},"__schema38":{"type":"string","enum":["current","last","next"]},"__schema39":{"anyOf":[{"type":"integer","minimum":1,"maximum":1000},{"type":"null"}]},"__schema4":{"anyOf":[{"type":"string","enum":["aggregated","raw"]},{"type":"null"}]},"__schema40":{"type":"string","enum":["day","week","month","quarter","year"]},"__schema41":{"description":"Last/next only: whole units, leaving out the current one, e.g. the last 3 complete months on Oct 21 are Jul, Aug and Sep. Omit for the window through today","$ref":"#/$defs/__schema42"},"__schema42":{"type":"boolean"},"__schema43":{"description":"With complete only: the current unit too, e.g. the last 1 complete year with the current one is last year and this year. Omit to leave it out","$ref":"#/$defs/__schema44"},"__schema44":{"type":"boolean"},"__schema45":{"description":"Current only: the unit so far, through today, e.g. this year to date. Omit for the whole unit","$ref":"#/$defs/__schema46"},"__schema46":{"type":"boolean"},"__schema47":{"description":"Current/last only: the same window, this many units earlier: this year to date 1 year earlier is the same dates last year, and the last 3 complete months 3 months earlier are the 3 months before them. Omit for the window itself","$ref":"#/$defs/__schema48"},"__schema48":{"type":"object","properties":{"count":{"type":"integer","minimum":1,"maximum":1000},"unit":{"$ref":"#/$defs/__schema40"}},"required":["count","unit"],"additionalProperties":false},"__schema49":{"maxItems":3,"type":"array","items":{"$ref":"#/$defs/__schema16"},"description":"Dimensions whose values become columns, outer first: each level splits the one above; empty for none"},"__schema5":{"type":"object","properties":{"key":{"type":"string","pattern":"^[A-Za-z_][A-Za-z0-9_]*$"},"parameter":{"oneOf":[{"type":"object","properties":{"label":{"$ref":"#/$defs/__schema6"},"type":{"type":"string","const":"string"},"value":{"anyOf":[{"type":"string"},{"type":"null"}]}},"required":["label","type","value"],"additionalProperties":false},{"type":"object","properties":{"label":{"$ref":"#/$defs/__schema6"},"type":{"type":"string","const":"integer"},"value":{"anyOf":[{"type":"integer","minimum":-9007199254740991,"maximum":9007199254740991},{"type":"null"}]}},"required":["label","type","value"],"additionalProperties":false},{"type":"object","properties":{"label":{"$ref":"#/$defs/__schema6"},"type":{"type":"string","const":"number"},"value":{"anyOf":[{"type":"number"},{"type":"null"}]}},"required":["label","type","value"],"additionalProperties":false},{"type":"object","properties":{"label":{"$ref":"#/$defs/__schema6"},"type":{"type":"string","const":"boolean"},"value":{"anyOf":[{"type":"boolean"},{"type":"null"}]}},"required":["label","type","value"],"additionalProperties":false},{"type":"object","properties":{"label":{"$ref":"#/$defs/__schema6"},"type":{"type":"string","const":"date"},"value":{"anyOf":[{"type":"string","format":"date","pattern":"^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))$"},{"type":"null"}]}},"required":["label","type","value"],"additionalProperties":false},{"type":"object","properties":{"label":{"$ref":"#/$defs/__schema6"},"type":{"type":"string","const":"timestamp"},"value":{"anyOf":[{"type":"string","format":"date-time","pattern":"^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"},{"type":"null"}]}},"required":["label","type","value"],"additionalProperties":false}]}},"required":["key","parameter"],"additionalProperties":false},"__schema50":{"description":"Columns beside each row over every row the aggregate gives: a rank, a percent of total, a difference or percent difference from the previous row ordered by the only dimension, a total/average/min/max of a measure, or a formula over the row\'s dimensions and measures, such as a rate. A formula with sum(), mean(), min() or max() reads only the rows the limit keeps, such as each top 10 row\'s share of the 10. Need a dimension or measure and no split","$ref":"#/$defs/__schema51"},"__schema51":{"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema52"}},"__schema52":{"oneOf":[{"type":"object","properties":{"fn":{"type":"string","const":"rank"},"column":{"$ref":"#/$defs/__schema53"},"direction":{"type":"string","enum":["asc","desc"],"description":"Desc: the largest ranks 1"},"as":{"$ref":"#/$defs/__schema54"}},"required":["fn","column","direction"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"percent_of_total"},"column":{"$ref":"#/$defs/__schema53"},"as":{"$ref":"#/$defs/__schema54"}},"required":["fn","column"],"additionalProperties":false},{"type":"object","properties":{"fn":{"$ref":"#/$defs/__schema55"},"column":{"$ref":"#/$defs/__schema53"},"orderBy":{"description":"The query\'s only dimension, such as a month, by its name before renames: the rows are ordered by it, oldest first","$ref":"#/$defs/__schema14"},"offset":{"$ref":"#/$defs/__schema56"},"as":{"$ref":"#/$defs/__schema54"}},"required":["fn","column","orderBy"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","enum":["sum","avg","min","max"]},"column":{"$ref":"#/$defs/__schema53"},"as":{"$ref":"#/$defs/__schema54"}},"required":["fn","column"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"formula"},"formula":{"$ref":"#/$defs/__schema13"},"as":{"description":"The column\'s name","$ref":"#/$defs/__schema14"}},"required":["fn","formula","as"],"additionalProperties":false}]},"__schema53":{"description":"A measure, by its name before renames","$ref":"#/$defs/__schema14"},"__schema54":{"description":"The new column\'s name. Omit for the default name","$ref":"#/$defs/__schema14"},"__schema55":{"type":"string","enum":["difference","percent_difference"]},"__schema56":{"description":"How many rows back to compare with; omit for 1, the previous row","$ref":"#/$defs/__schema57"},"__schema57":{"type":"integer","minimum":1,"maximum":1000},"__schema58":{"description":"Every column once, by its name before renames, in the order to show them, removed columns optional; omit for dimensions, measures, then calculations","$ref":"#/$defs/__schema59"},"__schema59":{"maxItems":500,"type":"array","items":{"$ref":"#/$defs/__schema14"}},"__schema6":{"type":"string","minLength":1},"__schema60":{"description":"Omit for the default: columns in the order their values first appear","$ref":"#/$defs/__schema61"},"__schema61":{"type":"object","properties":{"columns":{"$ref":"#/$defs/__schema62"},"nullLabel":{"$ref":"#/$defs/__schema64"},"fill":{"$ref":"#/$defs/__schema66"}},"required":["columns","nullLabel","fill"],"additionalProperties":false},"__schema62":{"oneOf":[{"type":"object","properties":{"mode":{"type":"string","const":"fixed"},"values":{"minItems":1,"maxItems":200,"type":"array","items":{"$ref":"#/$defs/__schema63"},"description":"One column per value, each under its own name: two values never share a column"}},"required":["mode","values"],"additionalProperties":false},{"type":"object","properties":{"mode":{"type":"string","const":"discover"},"order":{"type":"string","enum":["asc","desc","first_seen"]},"limit":{"type":"integer","minimum":1,"maximum":200}},"required":["mode","order","limit"],"additionalProperties":false}]},"__schema63":{"type":"object","properties":{"value":{"oneOf":[{"$ref":"#/$defs/__schema31"},{"$ref":"#/$defs/__schema32"},{"$ref":"#/$defs/__schema33"},{"$ref":"#/$defs/__schema34"},{"$ref":"#/$defs/__schema35"}]},"as":{"$ref":"#/$defs/__schema14"}},"required":["value","as"],"additionalProperties":false},"__schema64":{"anyOf":[{"$ref":"#/$defs/__schema65"},{"type":"null"}],"description":"Column name for NULL values; null drops them"},"__schema65":{"type":"string","minLength":1,"maxLength":255},"__schema66":{"anyOf":[{"$ref":"#/$defs/__schema67"},{"type":"null"}],"description":"Value for empty cells; null leaves them empty"},"__schema67":{"type":"number"},"__schema68":{"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema29"},"description":"All must hold"},"__schema69":{"description":"Output columns under another name","$ref":"#/$defs/__schema70"},"__schema7":{"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema5"}},"__schema70":{"minItems":1,"maxItems":200,"type":"array","items":{"$ref":"#/$defs/__schema71"}},"__schema71":{"type":"object","properties":{"from":{"$ref":"#/$defs/__schema14"},"to":{"description":"The column\'s new name","$ref":"#/$defs/__schema14"}},"required":["from","to"],"additionalProperties":false},"__schema72":{"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema73"},"description":"Columns to sort by, the first first, each next one breaking ties; empty for none"},"__schema73":{"type":"object","properties":{"column":{"description":"A column, by its name before renames; a split\'s cell by its values","$ref":"#/$defs/__schema14"},"direction":{"type":"string","enum":["asc","desc"]},"nulls":{"type":"string","enum":["first","last"]}},"required":["column","direction"],"additionalProperties":false},"__schema74":{"anyOf":[{"$ref":"#/$defs/__schema75"},{"type":"null"}],"description":"Rows to keep: a number, an integer parameter, or null for all"},"__schema75":{"anyOf":[{"type":"integer","minimum":1,"maximum":100000},{"$ref":"#/$defs/__schema36"}]},"__schema76":{"type":"string","enum":["start","end"]},"__schema77":{"description":"A table\'s total row, its subtotal rows and, with a split, its Total column, each measure over the rows shown (under a limit, only those). Omit for none","$ref":"#/$defs/__schema78"},"__schema78":{"type":"object","properties":{"row":{"type":"boolean","description":"A last row with the total of each column; charts leave it out"},"column":{"type":"boolean","description":"With a pivot after the aggregate: a Total column with each row across the pivot"},"subtotals":{"description":"Grouped by two or more columns: a subtotal row above each group of every group-by column but the last, as a pivot table\'s subtotals, with each measure over the group\'s rows; charts leave them out","$ref":"#/$defs/__schema79"}},"required":["row","column"],"additionalProperties":false},"__schema79":{"type":"boolean"},"__schema8":{"anyOf":[{"$ref":"#/$defs/__schema9"},{"type":"null"}]},"__schema80":{"description":"Numfmt patterns by output column","$ref":"#/$defs/__schema81"},"__schema81":{"maxItems":200,"type":"array","items":{"$ref":"#/$defs/__schema82"}},"__schema82":{"type":"object","properties":{"column":{"description":"An output column, by the name it is shown under, after any rename","$ref":"#/$defs/__schema14"},"format":{"type":"string","minLength":1,"maxLength":255,"description":"Numfmt pattern, e.g. #,##0.00, $#,##0, 0.0%, yyyy-mm-dd"}},"required":["column","format"],"additionalProperties":false},"__schema83":{"description":"Columns, by their name before renames, to leave out of the rows while keeping the grouping, e.g. group by region and month but show no region column; a split\'s column is named by its values","$ref":"#/$defs/__schema84"},"__schema84":{"maxItems":500,"type":"array","items":{"$ref":"#/$defs/__schema14"}},"__schema85":{"description":"Conditions on the grouped rows\' dimensions and measures (by their name before renames), all of which must hold, right after the grouping and before the calculations, the sort and the limit, as SQL\'s HAVING does, so the calculations and the limit only see the rows kept: each region\'s share among the regions with more than 20 deals. To keep rows by a measure or a calculation while the calculations still cover every group, as for the top 10 of the customers over 1,000,000, use keepRowsBeforeLimit. Needs a dimension or measure and no split","$ref":"#/$defs/__schema86"},"__schema86":{"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema29"}},"__schema87":{"description":"Conditions on the grouped rows\' dimensions, measures and before-limit calculations (by their name before renames), all of which must hold, after the calculations and before the column order, the sort and the limit, so the limit counts only the rows kept while the calculations still cover every group: the top 10 customers of those over 1,000,000, the regions with over 5% of the total. A condition on a calculation that reads the rows the limit keeps (sum(), offset()) goes in keepRowsWhere. Needs a dimension or measure and no split","$ref":"#/$defs/__schema88"},"__schema88":{"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema29"}},"__schema89":{"description":"Conditions on the rows\' own columns (dimensions, measures and calculations by their name before renames), all of which must hold, after the sort, the limit and every calculation: keep the rank 1 row of the top 10, with its share of the 10. To keep rows before the limit, use keepRowsBeforeLimit. Needs a dimension or measure and no split","$ref":"#/$defs/__schema90"},"__schema9":{"type":"object","properties":{"customFields":{"$ref":"#/$defs/__schema10"},"dimensions":{"$ref":"#/$defs/__schema15"},"measures":{"$ref":"#/$defs/__schema24"},"pivots":{"$ref":"#/$defs/__schema49"},"calculations":{"$ref":"#/$defs/__schema50"},"columnOrder":{"$ref":"#/$defs/__schema58"},"pivotLayout":{"$ref":"#/$defs/__schema60"},"filters":{"$ref":"#/$defs/__schema68"},"renames":{"$ref":"#/$defs/__schema69"},"sorts":{"$ref":"#/$defs/__schema72"},"limit":{"$ref":"#/$defs/__schema74"},"limitFrom":{"$ref":"#/$defs/__schema76"},"totals":{"$ref":"#/$defs/__schema77"},"formats":{"$ref":"#/$defs/__schema80"},"removedColumns":{"$ref":"#/$defs/__schema83"},"keepGroupsWhere":{"$ref":"#/$defs/__schema85"},"keepRowsBeforeLimit":{"$ref":"#/$defs/__schema87"},"keepRowsWhere":{"$ref":"#/$defs/__schema89"}},"required":["dimensions","measures","pivots","filters","sorts","limit"],"additionalProperties":false},"__schema90":{"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema29"}},"__schema91":{"anyOf":[{"minItems":1,"maxItems":50,"type":"array","items":{"$ref":"#/$defs/__schema92"}},{"type":"null"}]},"__schema92":{"type":"object","properties":{"ref":{"type":"string","minLength":1,"maxLength":64,"description":"An existing op ID to keep that op, or a new short name"},"title":{"description":"Omit to keep a kept op\'s title; a step op without one shows its step summary","$ref":"#/$defs/__schema93"},"inputs":{"description":"Omit to keep a kept op wired as it is (one that read the op above reads its new op above). A new op reads the op above, which SQL reads as input; a new first op reads the datasheet\'s one read, as source or the read\'s alias","$ref":"#/$defs/__schema94"},"step":{"description":"A step op\'s call; on a kept op, send it only to change it","$ref":"#/$defs/__schema98"}},"required":["ref"],"additionalProperties":false},"__schema93":{"anyOf":[{"type":"string","minLength":1},{"type":"null"}]},"__schema94":{"anyOf":[{"minItems":1,"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema95"}},{"type":"null"}]},"__schema95":{"type":"object","properties":{"alias":{"description":"SQL ops: the name the statement reads this input by","$ref":"#/$defs/__schema96"},"from":{"type":"string","enum":["previous","op"],"description":"Previous: the op above (above the first op, the datasheet\'s one read); op: the one ref names"},"ref":{"description":"Op: the ref of an earlier op in this list, or a read\'s operation ID or alias","$ref":"#/$defs/__schema97"}},"required":["from"],"additionalProperties":false},"__schema96":{"anyOf":[{"type":"string","pattern":"^[A-Za-z_][A-Za-z0-9_]*$"},{"type":"null"}]},"__schema97":{"anyOf":[{"type":"string","minLength":1},{"type":"null"}]},"__schema98":{"anyOf":[{"oneOf":[{"type":"object","properties":{"fn":{"type":"string","const":"select"},"params":{"type":"object","properties":{"mode":{"type":"string","enum":["keep","drop"],"description":"Keep: exactly these columns, in this order. drop: every column but these"},"columns":{"minItems":1,"maxItems":500,"type":"array","items":{"$ref":"#/$defs/__schema14"}},"optional":{"description":"In drop mode, skip a named column that isn\'t there, as a split\'s column is once its value is gone","$ref":"#/$defs/__schema99"}},"required":["mode","columns"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"rename"},"params":{"type":"object","properties":{"renames":{"$ref":"#/$defs/__schema70"}},"required":["renames"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"filter"},"params":{"type":"object","properties":{"match":{"type":"string","enum":["all","any"]},"conditions":{"minItems":1,"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema29"}}},"required":["match","conditions"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"sort"},"params":{"type":"object","properties":{"keys":{"minItems":1,"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema100"}}},"required":["keys"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"limit"},"params":{"type":"object","properties":{"count":{"oneOf":[{"type":"object","properties":{"type":{"type":"string","const":"number"},"value":{"type":"integer","minimum":1,"maximum":100000}},"required":["type","value"],"additionalProperties":false},{"$ref":"#/$defs/__schema36"}]},"from":{"type":"string","enum":["start","end"]}},"required":["count","from"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"aggregate"},"params":{"type":"object","properties":{"groupBy":{"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema102"},"description":"Empty gives one row, e.g. a KPI"},"metrics":{"minItems":1,"maxItems":50,"type":"array","items":{"$ref":"#/$defs/__schema103"}},"totals":{"$ref":"#/$defs/__schema78"}},"required":["groupBy","metrics"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"pivot"},"params":{"type":"object","properties":{"rows":{"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema14"},"description":"Columns kept as rows, one row per combination"},"column":{"description":"Column whose values become output columns","$ref":"#/$defs/__schema14"},"values":{"minItems":1,"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema105"}},"columns":{"$ref":"#/$defs/__schema62"},"nullLabel":{"$ref":"#/$defs/__schema64"},"fill":{"$ref":"#/$defs/__schema66"},"thenBy":{"description":"Columns split under column, outer to inner, discover mode only: one output column per combination the data has","$ref":"#/$defs/__schema106"}},"required":["rows","column","values","columns","nullLabel","fill"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"window"},"params":{"type":"object","properties":{"columns":{"minItems":1,"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema107"},"description":"Columns added after the input columns, each over all the rows this step receives"}},"required":["columns"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"join"},"params":{"type":"object","properties":{"keys":{"minItems":1,"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema14"},"description":"Columns every input has, whose values name one row of each input, such as a region and a month"}},"required":["keys"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false}]},{"type":"null"}]},"__schema99":{"type":"boolean"}}}.',
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'previewReportDatasheetChanges',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Runs one read-only SQL query over the tables of a report\'s datasheets, to check a figure before it goes on a slide or to explore data before shaping it. It reads the copies stored at the sources\' last reads, never a source, and saves nothing: a datasheet\'s table is the one "Get datasheet data" answers. Only the report\'s editors may. At most 200 rows and 30 seconds a query. Your queries run one at a time, together with your "Preview datasheet changes" and "Save datasheet changes" calls and the "Render draft slides" calls that carry datasheetChanges: send the next only once this one answers, never several at once, and check several figures in one query, as columns of one row or rows of a UNION ALL. At most 30 queries and "Preview datasheet changes" calls a minute per user, counted together.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'datasheet',
				],
				operation: [
					'queryReportData',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'queryReportData',
				],
			},
		},
	},
	{
		displayName: 'SQL',
		name: 'sql',
		required: true,
		type: 'string',
		default: '',
		description: 'One read-only DuckDB query (SELECT or WITH). Its tables are the report\'s datasheets, named by their ID from listReportDatasheets in double quotes, as in SELECT region, SUM(revenue) AS revenue FROM "&lt;ID&gt;" GROUP BY region. A column is a number when every value is one, else text, dates included: CAST an ISO date (YYYY-MM-DD) to DATE before year(), date_trunc() or date arithmetic. Give every computed column a name with AS.',
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'queryReportData',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Saves changes to a report\'s datasheets that you tried with "Preview datasheet changes": send the same changes with the revisions it answered. Nothing is saved when a datasheet they edit changed since, or when they fail: the answer says why, and you preview again. The charts and tables on slides that show a changed datasheet are read again, and a new datasheet is placed by the id it answers and the slides saved with "Save draft slides". Take the save back by restoring versionBeforeId with "Restore report version". It runs one at a time with your "Query report data" and "Preview datasheet changes" calls and the "Render draft slides" calls that carry datasheetChanges: send it only once those have answered. Only the report\'s editors may. Counts against the 20 renders and saves a minute per user.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'datasheet',
				],
				operation: [
					'saveReportDatasheetChanges',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'saveReportDatasheetChanges',
				],
			},
		},
	},
	{
		displayName: 'Changes',
		name: 'changes',
		required: true,
		type: 'json',
		default: '',
		description: 'The changes to the report\'s datasheets, applied in order: create for a datasheet the report doesn\'t have yet (a query, one SQL statement, or a join and steps over elements that datasheets of the report read already, under a temporaryId you choose), set-query or set-ops for the data of one it has (getReportDatasheet gives what it is now), set-read-type and set-unpivot. Each datasheet is its reads followed by the ops over them: call getReportDataGuide for the query model, SQL and joins. A temporaryId can be used once: after a save, create the next datasheet under another. Enter it as JSON, as this JSON Schema describes: {"minItems":1,"type":"array","items":{"$ref":"#/$defs/__schema2"},"$defs":{"__schema10":{"description":"Columns worked out on each source row before the filters and the grouping, which filters, dimensions, splits and measures can then name like a source column. A formula reads one row only and may name an earlier custom field. Examples: price times quantity, summed by region; deal-size bands with if(); diff_days between two dates, then averaged","$ref":"#/$defs/__schema11"},"__schema100":{"type":"object","properties":{"column":{"$ref":"#/$defs/__schema14"},"direction":{"type":"string","enum":["asc","desc"]},"nulls":{"type":"string","enum":["first","last"]},"optional":{"description":"Skip this key when its column is missing, as a split\'s column is once its value is gone","$ref":"#/$defs/__schema101"}},"required":["column","direction","nulls"],"additionalProperties":false},"__schema101":{"type":"boolean"},"__schema102":{"type":"object","properties":{"column":{"$ref":"#/$defs/__schema14"},"bucket":{"anyOf":[{"$ref":"#/$defs/__schema17"},{"type":"null"}]},"as":{"anyOf":[{"$ref":"#/$defs/__schema14"},{"type":"null"}]},"groups":{"$ref":"#/$defs/__schema18"},"fill":{"$ref":"#/$defs/__schema22"}},"required":["column","bucket","as"],"additionalProperties":false},"__schema103":{"type":"object","properties":{"fn":{"$ref":"#/$defs/__schema26"},"column":{"$ref":"#/$defs/__schema104"},"as":{"$ref":"#/$defs/__schema14"},"filters":{"$ref":"#/$defs/__schema27"}},"required":["fn","column","as"],"additionalProperties":false},"__schema104":{"anyOf":[{"$ref":"#/$defs/__schema14"},{"type":"null"}],"description":"Null only with count, which then counts rows"},"__schema105":{"type":"object","properties":{"fn":{"$ref":"#/$defs/__schema26"},"column":{"$ref":"#/$defs/__schema104"},"label":{"type":"string","minLength":1,"maxLength":255}},"required":["fn","column","label"],"additionalProperties":false},"__schema106":{"minItems":1,"maxItems":2,"type":"array","items":{"$ref":"#/$defs/__schema14"}},"__schema107":{"oneOf":[{"type":"object","properties":{"fn":{"type":"string","const":"rank"},"column":{"$ref":"#/$defs/__schema14"},"direction":{"type":"string","enum":["asc","desc"],"description":"Desc: the largest value ranks 1"},"as":{"$ref":"#/$defs/__schema14"}},"required":["fn","column","direction","as"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"percent_of_total"},"column":{"$ref":"#/$defs/__schema14"},"as":{"$ref":"#/$defs/__schema14"}},"required":["fn","column","as"],"additionalProperties":false},{"type":"object","properties":{"fn":{"$ref":"#/$defs/__schema55"},"column":{"description":"A number column","$ref":"#/$defs/__schema14"},"orderBy":{"description":"Column the rows are ordered by, oldest first, such as a month","$ref":"#/$defs/__schema14"},"offset":{"$ref":"#/$defs/__schema56"},"as":{"$ref":"#/$defs/__schema14"}},"required":["fn","column","orderBy","as"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"formula"},"formula":{"$ref":"#/$defs/__schema13"},"as":{"$ref":"#/$defs/__schema14"}},"required":["fn","formula","as"],"additionalProperties":false},{"type":"object","properties":{"fn":{"$ref":"#/$defs/__schema26"},"column":{"$ref":"#/$defs/__schema104"},"as":{"$ref":"#/$defs/__schema14"}},"required":["fn","column","as"],"additionalProperties":false}]},"__schema108":{"anyOf":[{"$ref":"#/$defs/__schema109"},{"type":"null"}]},"__schema109":{"description":"Numfmt formats by output column: give each renamed or computed number or date column one","$ref":"#/$defs/__schema81"},"__schema11":{"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema12"}},"__schema110":{"anyOf":[{"type":"string","minLength":1},{"type":"null"}]},"__schema111":{"type":"string","minLength":1,"description":"An existing datasheet ID, or the temporaryId of a datasheet created earlier in this patch"},"__schema112":{"description":"Replaces the datasheet\'s complete parameter set; omit to keep it","$ref":"#/$defs/__schema113"},"__schema113":{"anyOf":[{"$ref":"#/$defs/__schema7"},{"type":"null"}]},"__schema114":{"anyOf":[{"$ref":"#/$defs/__schema109"},{"type":"null"}]},"__schema115":{"anyOf":[{"type":"object","properties":{"rows":{"minItems":1,"maxItems":500,"type":"array","items":{"$ref":"#/$defs/__schema116"},"description":"One output row per input row and entry, in this order; the input columns no entry names repeat on each"},"name":{"description":"The column that holds each row\'s label, such as \\"Year\\"","$ref":"#/$defs/__schema14"},"values":{"minItems":1,"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema14"},"description":"The columns the values go in: one, such as \\"Value\\", or one per measure"}},"required":["rows","name","values"],"additionalProperties":false},{"type":"null"}]},"__schema116":{"type":"object","properties":{"label":{"type":"string","minLength":1,"maxLength":255,"description":"What the name column says on this row, such as the column\'s name or \\"2022\\""},"columns":{"minItems":1,"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema117"},"description":"The input column for each of values, in order; null leaves that value empty on this row"}},"required":["label","columns"],"additionalProperties":false},"__schema117":{"anyOf":[{"$ref":"#/$defs/__schema14"},{"type":"null"}]},"__schema118":{"anyOf":[{"type":"object","properties":{"column":{"description":"The column holding the row labels, headings included","$ref":"#/$defs/__schema14"},"into":{"description":"The new column the headings fill, such as \\"Section\\"","$ref":"#/$defs/__schema14"}},"required":["column","into"],"additionalProperties":false},{"type":"null"}]},"__schema119":{"anyOf":[{"minItems":1,"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema29"}},{"type":"null"}]},"__schema12":{"type":"object","properties":{"formula":{"description":"A formula over one source row: ${Column} names a source column or an earlier custom field. No sum(), mean(), min(), max(), median(), count(), offset(), index() or running_total(), which read other rows","$ref":"#/$defs/__schema13"},"as":{"description":"The column\'s name","$ref":"#/$defs/__schema14"}},"required":["formula","as"],"additionalProperties":false},"__schema13":{"type":"string","minLength":1,"maxLength":2000,"description":"A formula: ${Column} names a dimension or measure by its name before renames; numbers, \\"text\\", yes, no, null; + - * / (dividing by 0 gives empty); = != &lt; &lt;= &gt; &gt;=; AND, OR, NOT; if(condition, then, else), coalesce(a, b), round(x, digits), abs(x), concat(a, b), is_null(x), to_string(x); sum(x), mean(x), min(x) and max(x) of a column over the rows shown, after the row limit, such as ${Sales} / sum(${Sales}) for each row\'s share of the rows shown; offset(x, n), the value n rows below in the rows shown (-1 the row above, empty past the first or last), and index(x, n), the value in row n of the rows shown (counting from 1), such as ${Sales} - offset(${Sales}, 1) for the lead over the next row; median(x), and count(x) of its values that aren\'t empty, over the rows shown; running_total(x), the sum of x from the first row shown down to this one, in the rows\' order; power(x, y), x to the power y (empty for a negative x with a fractional y); diff_days(start, end), the whole days from the start date to the end date, negative when the end is earlier, empty when either is empty"},"__schema14":{"type":"string","minLength":1,"maxLength":255,"description":"A column name, exact and case-sensitive"},"__schema15":{"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema16"},"description":"The columns to group by"},"__schema16":{"type":"object","properties":{"column":{"$ref":"#/$defs/__schema14"},"bucket":{"anyOf":[{"$ref":"#/$defs/__schema17"},{"type":"null"}],"description":"A date unit to group a date or timestamp column by (month: each month of each year), a part of the date over every year (month_of_year: Jan to Dec, quarter_of_year: 1 to 4, day_of_week: Mon to Sun), else null. This year beside last year by month is month_of_year split by the year"},"as":{"description":"Omit for the default name","$ref":"#/$defs/__schema14"},"groups":{"$ref":"#/$defs/__schema18"},"fill":{"$ref":"#/$defs/__schema22"}},"required":["column","bucket"],"additionalProperties":false},"__schema17":{"type":"string","enum":["day","week","month","quarter","year","month_of_year","quarter_of_year","day_of_week"]},"__schema18":{"description":"A text column only: values shown under one name, e.g. Email and Telephone as \\"Email & Tel\\"; the others keep theirs","$ref":"#/$defs/__schema19"},"__schema19":{"maxItems":50,"type":"array","items":{"$ref":"#/$defs/__schema20"}},"__schema2":{"oneOf":[{"type":"object","properties":{"type":{"type":"string","const":"create"},"temporaryId":{"type":"string","pattern":"^[A-Za-z][A-Za-z0-9_-]{0,63}$","description":"A stable ID for the new datasheet, which later changes in this patch reference it by"},"name":{"type":"string","minLength":1,"description":"The datasheet\'s name"},"reads":{"minItems":1,"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema3"},"description":"The elements it reads, each once: the one a query reads, or those a join reads"},"parameters":{"description":"User-controlled periods, limits, thresholds and selections: SQL reads them as columns of the params input, a step as {\\"type\\":\\"parameter\\",\\"key\\":\\"&lt;key&gt;\\"}","$ref":"#/$defs/__schema7"},"query":{"description":"The data as the Edit data editor builds it, over the one read; give query, or ops over several reads","$ref":"#/$defs/__schema8"},"ops":{"description":"Only over several reads: a join step over every read first, naming each read in its inputs (from op, ref the read alias), then steps","$ref":"#/$defs/__schema91"},"formats":{"description":"With ops; a query has its own formats","$ref":"#/$defs/__schema108"},"sql":{"description":"In place of a query or ops: one DuckDB SELECT over the reads, each a table named by its alias, with its formats in formats. Only for what a query can\'t do, such as a date stored as text (CAST(\\"Month\\" AS DATE) AS \\"Month\\") or a figure from two datasheets that read one row each (SELECT won.\\"Revenue\\" / goal.\\"Goal\\" AS \\"Share of goal\\" FROM won, goal)","$ref":"#/$defs/__schema110"}},"required":["type","temporaryId","name","reads","parameters"],"additionalProperties":false},{"type":"object","properties":{"type":{"type":"string","const":"set-query"},"datasheetRef":{"$ref":"#/$defs/__schema111"},"parameters":{"$ref":"#/$defs/__schema112"},"query":{"description":"The data as the Edit data editor builds it, replacing all the datasheet\'s ops but its read: getReportDatasheet gives its current query to start from","$ref":"#/$defs/__schema9"}},"required":["type","datasheetRef","query"],"additionalProperties":false},{"type":"object","properties":{"type":{"type":"string","const":"set-ops"},"datasheetRef":{"$ref":"#/$defs/__schema111"},"parameters":{"$ref":"#/$defs/__schema112"},"ops":{"maxItems":50,"type":"array","items":{"$ref":"#/$defs/__schema92"},"description":"The complete op list after the reads, in run order: an op whose ref is an existing op ID keeps that op, and existing ops left out are removed. Only on a datasheet with a join step: keep the join first with steps after it; on any other, use set-query"},"formats":{"description":"Replaces the datasheet\'s formats; omit to keep them","$ref":"#/$defs/__schema114"}},"required":["type","datasheetRef","ops"],"additionalProperties":false},{"type":"object","properties":{"type":{"type":"string","const":"set-read-type"},"datasheetRef":{"$ref":"#/$defs/__schema111"},"readType":{"type":"string","enum":["aggregated","raw","image"],"description":"Aggregated: its data, as the tool displays it; raw: its tidy read, to transform; image: its picture"}},"required":["type","datasheetRef","readType"],"additionalProperties":false},{"type":"object","properties":{"type":{"type":"string","const":"set-unpivot"},"datasheetRef":{"$ref":"#/$defs/__schema111"},"unpivot":{"description":"The columns of the range this datasheet reads to turn into rows, which every datasheet reading the range raw gets, and this one then reads it raw. Null takes it out; omit to keep the range\'s current one","$ref":"#/$defs/__schema115"},"fillDown":{"description":"Run first, as Power Query fills down: each heading row, a label with every other cell empty, becomes the value of a new column on the rows under it, and the heading row is left out. Null takes it out; omit to keep the range\'s current one","$ref":"#/$defs/__schema118"},"removeRows":{"description":"Run after fillDown: rows matching any of these are left out, such as the sheet\'s own totals that add up the rows above them. Null takes them out; omit to keep the range\'s current ones","$ref":"#/$defs/__schema119"}},"required":["type","datasheetRef"],"additionalProperties":false}]},"__schema20":{"type":"object","properties":{"name":{"type":"string","minLength":1,"maxLength":255},"values":{"minItems":1,"maxItems":200,"type":"array","items":{"$ref":"#/$defs/__schema21"}}},"required":["name","values"],"additionalProperties":false},"__schema21":{"type":"string","minLength":1},"__schema22":{"description":"A date grouped by a unit or a part only, one key at most: every period between the first and the last (every month, quarter or weekday of a part), for each combination of the other keys, a count or sum of no rows as 0. Omit to show only the periods the rows have","$ref":"#/$defs/__schema23"},"__schema23":{"type":"boolean"},"__schema24":{"maxItems":50,"type":"array","items":{"$ref":"#/$defs/__schema25"}},"__schema25":{"type":"object","properties":{"fn":{"$ref":"#/$defs/__schema26"},"column":{"anyOf":[{"$ref":"#/$defs/__schema14"},{"type":"null"}],"description":"Null only with count, which counts rows"},"as":{"description":"Omit for the default name, such as \\"Sum of Sales\\"","$ref":"#/$defs/__schema14"},"filters":{"$ref":"#/$defs/__schema27"}},"required":["fn","column"],"additionalProperties":false},"__schema26":{"type":"string","enum":["sum","avg","min","max","median","count","count_distinct","first","last"]},"__schema27":{"description":"Only the rows these all match, beside measures of every row: e.g. a count of the mortgages that are Buy to Let. Omit for every row","$ref":"#/$defs/__schema28"},"__schema28":{"minItems":1,"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema29"}},"__schema29":{"oneOf":[{"type":"object","properties":{"kind":{"type":"string","const":"compare"},"column":{"$ref":"#/$defs/__schema14"},"op":{"type":"string","enum":["eq","neq","gt","gte","lt","lte"]},"value":{"$ref":"#/$defs/__schema30"}},"required":["kind","column","op","value"],"additionalProperties":false},{"type":"object","properties":{"kind":{"type":"string","const":"in"},"column":{"$ref":"#/$defs/__schema14"},"values":{"minItems":1,"maxItems":1000,"type":"array","items":{"$ref":"#/$defs/__schema30"}},"negate":{"type":"boolean"}},"required":["kind","column","values","negate"],"additionalProperties":false},{"type":"object","properties":{"kind":{"type":"string","const":"between"},"column":{"$ref":"#/$defs/__schema14"},"from":{"$ref":"#/$defs/__schema30"},"to":{"$ref":"#/$defs/__schema30"}},"required":["kind","column","from","to"],"additionalProperties":false},{"type":"object","properties":{"kind":{"type":"string","const":"text"},"column":{"$ref":"#/$defs/__schema14"},"op":{"type":"string","enum":["equals","contains","starts_with","ends_with"]},"value":{"$ref":"#/$defs/__schema30"},"caseSensitive":{"type":"boolean"},"negate":{"type":"boolean"}},"required":["kind","column","op","value","caseSensitive","negate"],"additionalProperties":false},{"type":"object","properties":{"kind":{"type":"string","const":"is_blank"},"column":{"$ref":"#/$defs/__schema14"},"negate":{"type":"boolean"}},"required":["kind","column","negate"],"additionalProperties":false},{"type":"object","properties":{"kind":{"$ref":"#/$defs/__schema37"},"column":{"$ref":"#/$defs/__schema14"},"range":{"$ref":"#/$defs/__schema38"},"count":{"$ref":"#/$defs/__schema39"},"unit":{"$ref":"#/$defs/__schema40"},"complete":{"$ref":"#/$defs/__schema41"},"includeCurrent":{"$ref":"#/$defs/__schema43"},"toDate":{"$ref":"#/$defs/__schema45"},"earlier":{"$ref":"#/$defs/__schema47"}},"required":["kind","column","range","count","unit"],"additionalProperties":false}]},"__schema3":{"type":"object","properties":{"alias":{"type":"string","pattern":"^[A-Za-z_][A-Za-z0-9_]*$","description":"The name SQL reads this element by in FROM/JOIN, and ops name it by as a ref"},"datasheetRef":{"type":"string","format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","description":"An existing datasheet that reads one element: the new datasheet reads that element, with its filters"},"readType":{"description":"Omit to read it as that datasheet does","$ref":"#/$defs/__schema4"}},"required":["alias","datasheetRef"],"additionalProperties":false},"__schema30":{"oneOf":[{"$ref":"#/$defs/__schema31"},{"$ref":"#/$defs/__schema32"},{"$ref":"#/$defs/__schema33"},{"$ref":"#/$defs/__schema34"},{"$ref":"#/$defs/__schema35"},{"$ref":"#/$defs/__schema36"}]},"__schema31":{"type":"object","properties":{"type":{"type":"string","const":"string"},"value":{"type":"string","maxLength":10000}},"required":["type","value"],"additionalProperties":false},"__schema32":{"type":"object","properties":{"type":{"type":"string","const":"number"},"value":{"type":"number"}},"required":["type","value"],"additionalProperties":false},"__schema33":{"type":"object","properties":{"type":{"type":"string","const":"boolean"},"value":{"type":"boolean"}},"required":["type","value"],"additionalProperties":false},"__schema34":{"type":"object","properties":{"type":{"type":"string","const":"date"},"value":{"type":"string","format":"date","pattern":"^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))$"}},"required":["type","value"],"additionalProperties":false},"__schema35":{"type":"object","properties":{"type":{"type":"string","const":"timestamp"},"value":{"type":"string","format":"date-time","pattern":"^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"}},"required":["type","value"],"additionalProperties":false},"__schema36":{"type":"object","properties":{"type":{"type":"string","const":"parameter"},"key":{"type":"string","minLength":1}},"required":["type","key"],"additionalProperties":false},"__schema37":{"type":"string","const":"relative_date"},"__schema38":{"type":"string","enum":["current","last","next"]},"__schema39":{"anyOf":[{"type":"integer","minimum":1,"maximum":1000},{"type":"null"}]},"__schema4":{"anyOf":[{"type":"string","enum":["aggregated","raw"]},{"type":"null"}]},"__schema40":{"type":"string","enum":["day","week","month","quarter","year"]},"__schema41":{"description":"Last/next only: whole units, leaving out the current one, e.g. the last 3 complete months on Oct 21 are Jul, Aug and Sep. Omit for the window through today","$ref":"#/$defs/__schema42"},"__schema42":{"type":"boolean"},"__schema43":{"description":"With complete only: the current unit too, e.g. the last 1 complete year with the current one is last year and this year. Omit to leave it out","$ref":"#/$defs/__schema44"},"__schema44":{"type":"boolean"},"__schema45":{"description":"Current only: the unit so far, through today, e.g. this year to date. Omit for the whole unit","$ref":"#/$defs/__schema46"},"__schema46":{"type":"boolean"},"__schema47":{"description":"Current/last only: the same window, this many units earlier: this year to date 1 year earlier is the same dates last year, and the last 3 complete months 3 months earlier are the 3 months before them. Omit for the window itself","$ref":"#/$defs/__schema48"},"__schema48":{"type":"object","properties":{"count":{"type":"integer","minimum":1,"maximum":1000},"unit":{"$ref":"#/$defs/__schema40"}},"required":["count","unit"],"additionalProperties":false},"__schema49":{"maxItems":3,"type":"array","items":{"$ref":"#/$defs/__schema16"},"description":"Dimensions whose values become columns, outer first: each level splits the one above; empty for none"},"__schema5":{"type":"object","properties":{"key":{"type":"string","pattern":"^[A-Za-z_][A-Za-z0-9_]*$"},"parameter":{"oneOf":[{"type":"object","properties":{"label":{"$ref":"#/$defs/__schema6"},"type":{"type":"string","const":"string"},"value":{"anyOf":[{"type":"string"},{"type":"null"}]}},"required":["label","type","value"],"additionalProperties":false},{"type":"object","properties":{"label":{"$ref":"#/$defs/__schema6"},"type":{"type":"string","const":"integer"},"value":{"anyOf":[{"type":"integer","minimum":-9007199254740991,"maximum":9007199254740991},{"type":"null"}]}},"required":["label","type","value"],"additionalProperties":false},{"type":"object","properties":{"label":{"$ref":"#/$defs/__schema6"},"type":{"type":"string","const":"number"},"value":{"anyOf":[{"type":"number"},{"type":"null"}]}},"required":["label","type","value"],"additionalProperties":false},{"type":"object","properties":{"label":{"$ref":"#/$defs/__schema6"},"type":{"type":"string","const":"boolean"},"value":{"anyOf":[{"type":"boolean"},{"type":"null"}]}},"required":["label","type","value"],"additionalProperties":false},{"type":"object","properties":{"label":{"$ref":"#/$defs/__schema6"},"type":{"type":"string","const":"date"},"value":{"anyOf":[{"type":"string","format":"date","pattern":"^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))$"},{"type":"null"}]}},"required":["label","type","value"],"additionalProperties":false},{"type":"object","properties":{"label":{"$ref":"#/$defs/__schema6"},"type":{"type":"string","const":"timestamp"},"value":{"anyOf":[{"type":"string","format":"date-time","pattern":"^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"},{"type":"null"}]}},"required":["label","type","value"],"additionalProperties":false}]}},"required":["key","parameter"],"additionalProperties":false},"__schema50":{"description":"Columns beside each row over every row the aggregate gives: a rank, a percent of total, a difference or percent difference from the previous row ordered by the only dimension, a total/average/min/max of a measure, or a formula over the row\'s dimensions and measures, such as a rate. A formula with sum(), mean(), min() or max() reads only the rows the limit keeps, such as each top 10 row\'s share of the 10. Need a dimension or measure and no split","$ref":"#/$defs/__schema51"},"__schema51":{"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema52"}},"__schema52":{"oneOf":[{"type":"object","properties":{"fn":{"type":"string","const":"rank"},"column":{"$ref":"#/$defs/__schema53"},"direction":{"type":"string","enum":["asc","desc"],"description":"Desc: the largest ranks 1"},"as":{"$ref":"#/$defs/__schema54"}},"required":["fn","column","direction"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"percent_of_total"},"column":{"$ref":"#/$defs/__schema53"},"as":{"$ref":"#/$defs/__schema54"}},"required":["fn","column"],"additionalProperties":false},{"type":"object","properties":{"fn":{"$ref":"#/$defs/__schema55"},"column":{"$ref":"#/$defs/__schema53"},"orderBy":{"description":"The query\'s only dimension, such as a month, by its name before renames: the rows are ordered by it, oldest first","$ref":"#/$defs/__schema14"},"offset":{"$ref":"#/$defs/__schema56"},"as":{"$ref":"#/$defs/__schema54"}},"required":["fn","column","orderBy"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","enum":["sum","avg","min","max"]},"column":{"$ref":"#/$defs/__schema53"},"as":{"$ref":"#/$defs/__schema54"}},"required":["fn","column"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"formula"},"formula":{"$ref":"#/$defs/__schema13"},"as":{"description":"The column\'s name","$ref":"#/$defs/__schema14"}},"required":["fn","formula","as"],"additionalProperties":false}]},"__schema53":{"description":"A measure, by its name before renames","$ref":"#/$defs/__schema14"},"__schema54":{"description":"The new column\'s name. Omit for the default name","$ref":"#/$defs/__schema14"},"__schema55":{"type":"string","enum":["difference","percent_difference"]},"__schema56":{"description":"How many rows back to compare with; omit for 1, the previous row","$ref":"#/$defs/__schema57"},"__schema57":{"type":"integer","minimum":1,"maximum":1000},"__schema58":{"description":"Every column once, by its name before renames, in the order to show them, removed columns optional; omit for dimensions, measures, then calculations","$ref":"#/$defs/__schema59"},"__schema59":{"maxItems":500,"type":"array","items":{"$ref":"#/$defs/__schema14"}},"__schema6":{"type":"string","minLength":1},"__schema60":{"description":"Omit for the default: columns in the order their values first appear","$ref":"#/$defs/__schema61"},"__schema61":{"type":"object","properties":{"columns":{"$ref":"#/$defs/__schema62"},"nullLabel":{"$ref":"#/$defs/__schema64"},"fill":{"$ref":"#/$defs/__schema66"}},"required":["columns","nullLabel","fill"],"additionalProperties":false},"__schema62":{"oneOf":[{"type":"object","properties":{"mode":{"type":"string","const":"fixed"},"values":{"minItems":1,"maxItems":200,"type":"array","items":{"$ref":"#/$defs/__schema63"},"description":"One column per value, each under its own name: two values never share a column"}},"required":["mode","values"],"additionalProperties":false},{"type":"object","properties":{"mode":{"type":"string","const":"discover"},"order":{"type":"string","enum":["asc","desc","first_seen"]},"limit":{"type":"integer","minimum":1,"maximum":200}},"required":["mode","order","limit"],"additionalProperties":false}]},"__schema63":{"type":"object","properties":{"value":{"oneOf":[{"$ref":"#/$defs/__schema31"},{"$ref":"#/$defs/__schema32"},{"$ref":"#/$defs/__schema33"},{"$ref":"#/$defs/__schema34"},{"$ref":"#/$defs/__schema35"}]},"as":{"$ref":"#/$defs/__schema14"}},"required":["value","as"],"additionalProperties":false},"__schema64":{"anyOf":[{"$ref":"#/$defs/__schema65"},{"type":"null"}],"description":"Column name for NULL values; null drops them"},"__schema65":{"type":"string","minLength":1,"maxLength":255},"__schema66":{"anyOf":[{"$ref":"#/$defs/__schema67"},{"type":"null"}],"description":"Value for empty cells; null leaves them empty"},"__schema67":{"type":"number"},"__schema68":{"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema29"},"description":"All must hold"},"__schema69":{"description":"Output columns under another name","$ref":"#/$defs/__schema70"},"__schema7":{"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema5"}},"__schema70":{"minItems":1,"maxItems":200,"type":"array","items":{"$ref":"#/$defs/__schema71"}},"__schema71":{"type":"object","properties":{"from":{"$ref":"#/$defs/__schema14"},"to":{"description":"The column\'s new name","$ref":"#/$defs/__schema14"}},"required":["from","to"],"additionalProperties":false},"__schema72":{"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema73"},"description":"Columns to sort by, the first first, each next one breaking ties; empty for none"},"__schema73":{"type":"object","properties":{"column":{"description":"A column, by its name before renames; a split\'s cell by its values","$ref":"#/$defs/__schema14"},"direction":{"type":"string","enum":["asc","desc"]},"nulls":{"type":"string","enum":["first","last"]}},"required":["column","direction"],"additionalProperties":false},"__schema74":{"anyOf":[{"$ref":"#/$defs/__schema75"},{"type":"null"}],"description":"Rows to keep: a number, an integer parameter, or null for all"},"__schema75":{"anyOf":[{"type":"integer","minimum":1,"maximum":100000},{"$ref":"#/$defs/__schema36"}]},"__schema76":{"type":"string","enum":["start","end"]},"__schema77":{"description":"A table\'s total row, its subtotal rows and, with a split, its Total column, each measure over the rows shown (under a limit, only those). Omit for none","$ref":"#/$defs/__schema78"},"__schema78":{"type":"object","properties":{"row":{"type":"boolean","description":"A last row with the total of each column; charts leave it out"},"column":{"type":"boolean","description":"With a pivot after the aggregate: a Total column with each row across the pivot"},"subtotals":{"description":"Grouped by two or more columns: a subtotal row above each group of every group-by column but the last, as a pivot table\'s subtotals, with each measure over the group\'s rows; charts leave them out","$ref":"#/$defs/__schema79"}},"required":["row","column"],"additionalProperties":false},"__schema79":{"type":"boolean"},"__schema8":{"anyOf":[{"$ref":"#/$defs/__schema9"},{"type":"null"}]},"__schema80":{"description":"Numfmt patterns by output column","$ref":"#/$defs/__schema81"},"__schema81":{"maxItems":200,"type":"array","items":{"$ref":"#/$defs/__schema82"}},"__schema82":{"type":"object","properties":{"column":{"description":"An output column, by the name it is shown under, after any rename","$ref":"#/$defs/__schema14"},"format":{"type":"string","minLength":1,"maxLength":255,"description":"Numfmt pattern, e.g. #,##0.00, $#,##0, 0.0%, yyyy-mm-dd"}},"required":["column","format"],"additionalProperties":false},"__schema83":{"description":"Columns, by their name before renames, to leave out of the rows while keeping the grouping, e.g. group by region and month but show no region column; a split\'s column is named by its values","$ref":"#/$defs/__schema84"},"__schema84":{"maxItems":500,"type":"array","items":{"$ref":"#/$defs/__schema14"}},"__schema85":{"description":"Conditions on the grouped rows\' dimensions and measures (by their name before renames), all of which must hold, right after the grouping and before the calculations, the sort and the limit, as SQL\'s HAVING does, so the calculations and the limit only see the rows kept: each region\'s share among the regions with more than 20 deals. To keep rows by a measure or a calculation while the calculations still cover every group, as for the top 10 of the customers over 1,000,000, use keepRowsBeforeLimit. Needs a dimension or measure and no split","$ref":"#/$defs/__schema86"},"__schema86":{"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema29"}},"__schema87":{"description":"Conditions on the grouped rows\' dimensions, measures and before-limit calculations (by their name before renames), all of which must hold, after the calculations and before the column order, the sort and the limit, so the limit counts only the rows kept while the calculations still cover every group: the top 10 customers of those over 1,000,000, the regions with over 5% of the total. A condition on a calculation that reads the rows the limit keeps (sum(), offset()) goes in keepRowsWhere. Needs a dimension or measure and no split","$ref":"#/$defs/__schema88"},"__schema88":{"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema29"}},"__schema89":{"description":"Conditions on the rows\' own columns (dimensions, measures and calculations by their name before renames), all of which must hold, after the sort, the limit and every calculation: keep the rank 1 row of the top 10, with its share of the 10. To keep rows before the limit, use keepRowsBeforeLimit. Needs a dimension or measure and no split","$ref":"#/$defs/__schema90"},"__schema9":{"type":"object","properties":{"customFields":{"$ref":"#/$defs/__schema10"},"dimensions":{"$ref":"#/$defs/__schema15"},"measures":{"$ref":"#/$defs/__schema24"},"pivots":{"$ref":"#/$defs/__schema49"},"calculations":{"$ref":"#/$defs/__schema50"},"columnOrder":{"$ref":"#/$defs/__schema58"},"pivotLayout":{"$ref":"#/$defs/__schema60"},"filters":{"$ref":"#/$defs/__schema68"},"renames":{"$ref":"#/$defs/__schema69"},"sorts":{"$ref":"#/$defs/__schema72"},"limit":{"$ref":"#/$defs/__schema74"},"limitFrom":{"$ref":"#/$defs/__schema76"},"totals":{"$ref":"#/$defs/__schema77"},"formats":{"$ref":"#/$defs/__schema80"},"removedColumns":{"$ref":"#/$defs/__schema83"},"keepGroupsWhere":{"$ref":"#/$defs/__schema85"},"keepRowsBeforeLimit":{"$ref":"#/$defs/__schema87"},"keepRowsWhere":{"$ref":"#/$defs/__schema89"}},"required":["dimensions","measures","pivots","filters","sorts","limit"],"additionalProperties":false},"__schema90":{"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema29"}},"__schema91":{"anyOf":[{"minItems":1,"maxItems":50,"type":"array","items":{"$ref":"#/$defs/__schema92"}},{"type":"null"}]},"__schema92":{"type":"object","properties":{"ref":{"type":"string","minLength":1,"maxLength":64,"description":"An existing op ID to keep that op, or a new short name"},"title":{"description":"Omit to keep a kept op\'s title; a step op without one shows its step summary","$ref":"#/$defs/__schema93"},"inputs":{"description":"Omit to keep a kept op wired as it is (one that read the op above reads its new op above). A new op reads the op above, which SQL reads as input; a new first op reads the datasheet\'s one read, as source or the read\'s alias","$ref":"#/$defs/__schema94"},"step":{"description":"A step op\'s call; on a kept op, send it only to change it","$ref":"#/$defs/__schema98"}},"required":["ref"],"additionalProperties":false},"__schema93":{"anyOf":[{"type":"string","minLength":1},{"type":"null"}]},"__schema94":{"anyOf":[{"minItems":1,"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema95"}},{"type":"null"}]},"__schema95":{"type":"object","properties":{"alias":{"description":"SQL ops: the name the statement reads this input by","$ref":"#/$defs/__schema96"},"from":{"type":"string","enum":["previous","op"],"description":"Previous: the op above (above the first op, the datasheet\'s one read); op: the one ref names"},"ref":{"description":"Op: the ref of an earlier op in this list, or a read\'s operation ID or alias","$ref":"#/$defs/__schema97"}},"required":["from"],"additionalProperties":false},"__schema96":{"anyOf":[{"type":"string","pattern":"^[A-Za-z_][A-Za-z0-9_]*$"},{"type":"null"}]},"__schema97":{"anyOf":[{"type":"string","minLength":1},{"type":"null"}]},"__schema98":{"anyOf":[{"oneOf":[{"type":"object","properties":{"fn":{"type":"string","const":"select"},"params":{"type":"object","properties":{"mode":{"type":"string","enum":["keep","drop"],"description":"Keep: exactly these columns, in this order. drop: every column but these"},"columns":{"minItems":1,"maxItems":500,"type":"array","items":{"$ref":"#/$defs/__schema14"}},"optional":{"description":"In drop mode, skip a named column that isn\'t there, as a split\'s column is once its value is gone","$ref":"#/$defs/__schema99"}},"required":["mode","columns"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"rename"},"params":{"type":"object","properties":{"renames":{"$ref":"#/$defs/__schema70"}},"required":["renames"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"filter"},"params":{"type":"object","properties":{"match":{"type":"string","enum":["all","any"]},"conditions":{"minItems":1,"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema29"}}},"required":["match","conditions"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"sort"},"params":{"type":"object","properties":{"keys":{"minItems":1,"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema100"}}},"required":["keys"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"limit"},"params":{"type":"object","properties":{"count":{"oneOf":[{"type":"object","properties":{"type":{"type":"string","const":"number"},"value":{"type":"integer","minimum":1,"maximum":100000}},"required":["type","value"],"additionalProperties":false},{"$ref":"#/$defs/__schema36"}]},"from":{"type":"string","enum":["start","end"]}},"required":["count","from"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"aggregate"},"params":{"type":"object","properties":{"groupBy":{"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema102"},"description":"Empty gives one row, e.g. a KPI"},"metrics":{"minItems":1,"maxItems":50,"type":"array","items":{"$ref":"#/$defs/__schema103"}},"totals":{"$ref":"#/$defs/__schema78"}},"required":["groupBy","metrics"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"pivot"},"params":{"type":"object","properties":{"rows":{"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema14"},"description":"Columns kept as rows, one row per combination"},"column":{"description":"Column whose values become output columns","$ref":"#/$defs/__schema14"},"values":{"minItems":1,"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema105"}},"columns":{"$ref":"#/$defs/__schema62"},"nullLabel":{"$ref":"#/$defs/__schema64"},"fill":{"$ref":"#/$defs/__schema66"},"thenBy":{"description":"Columns split under column, outer to inner, discover mode only: one output column per combination the data has","$ref":"#/$defs/__schema106"}},"required":["rows","column","values","columns","nullLabel","fill"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"window"},"params":{"type":"object","properties":{"columns":{"minItems":1,"maxItems":20,"type":"array","items":{"$ref":"#/$defs/__schema107"},"description":"Columns added after the input columns, each over all the rows this step receives"}},"required":["columns"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false},{"type":"object","properties":{"fn":{"type":"string","const":"join"},"params":{"type":"object","properties":{"keys":{"minItems":1,"maxItems":10,"type":"array","items":{"$ref":"#/$defs/__schema14"},"description":"Columns every input has, whose values name one row of each input, such as a region and a month"}},"required":["keys"],"additionalProperties":false}},"required":["fn","params"],"additionalProperties":false}]},{"type":"null"}]},"__schema99":{"type":"boolean"}}}.',
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'saveReportDatasheetChanges',
				],
			},
		},
	},
	{
		displayName: 'Revisions',
		name: 'revisions',
		required: true,
		type: 'json',
		default: '',
		description: 'The revisions the preview of the same changes answered. The save is refused when a datasheet they name changed since, so it never writes over someone else\'s edit: preview again and save the new revisions. Enter it as JSON, as this JSON Schema describes: {"type":"object","propertyNames":{"$ref":"#/$defs/__schema121"},"additionalProperties":{"$ref":"#/$defs/__schema122"},"$defs":{"__schema121":{"type":"string"},"__schema122":{"type":"string"}}}.',
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'saveReportDatasheetChanges',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'datasheet',
				],
				operation: [
					'saveReportDatasheetChanges',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'A report\'s parameters, with which ones a burst can vary by, the dashboard filters and the datasheet columns a parameter can link, with the parameter that already links each.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'parameter',
				],
				operation: [
					'getReportParameters',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'parameter',
				],
				operation: [
					'getReportParameters',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Creates a parameter of a report, linked to the dashboard filters and datasheet columns given, as the app\'s report parameters editor does. With a value, writes it into those filters, and as a row filter into those columns, and reads their datasheets again. Answers the parameter. Only the report\'s editors may.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'parameter',
				],
				operation: [
					'createReportParameter',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'parameter',
				],
				operation: [
					'createReportParameter',
				],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		required: true,
		type: 'string',
		default: '',
		description: 'The parameter\'s name, as shown in Rollstack. It can\'t be the name of another parameter of the report.',
		displayOptions: {
			show: {
				resource: [
					'parameter',
				],
				operation: [
					'createReportParameter',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'parameter',
				],
				operation: [
					'createReportParameter',
				],
			},
		},
		options: [
			{
				displayName: 'Columns',
				name: 'columns',
				type: 'json',
				default: '',
				description: 'The columns the parameter links, by datasheetId and column as columns in getReportParameters lists them: its value is written into each as a row filter, in that datasheet only. Each must have no parameterId yet. The value\'s type follows the first filter\'s valueType, or the first column\'s kind when it links no filter that can be set. Enter it as JSON, as this JSON Schema describes: {"default":[],"maxItems":200,"type":"array","items":{"type":"object","properties":{"datasheetId":{"type":"string","format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","description":"The datasheet\'s ID, as datasheetId in columns from getReportParameters."},"column":{"type":"string","minLength":1,"maxLength":255,"description":"The column\'s name, as column in columns from getReportParameters."}},"required":["datasheetId","column"],"additionalProperties":false}}.',
			},
			{
				displayName: 'Filter IDs',
				name: 'filterIds',
				type: 'string',
				default: '',
				description: 'The filters the parameter links, by their ID in filters from getReportParameters: its value is written into each, in every datasheet that reads its dashboard. Each must have no parameterId yet. A burst can vary by the parameter only if one of them has a valueType, or it links a column. Separate several with commas, or enter a JSON array.',
			},
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Value',
				name: 'value',
				type: 'json',
				default: '',
				description: 'The parameter\'s value, of the valueType of the filters it links. When set, it is written into those filters and their datasheets are read again with it, so the report\'s slides change. If null or omitted, as for a parameter a burst\'s variants will set, the filters keep their own values. A value of a report parameter, in the shape of its type. Copy the shape of the parameter\'s value in listBursts, or of a variant\'s in listBurstVariants: - A list of values: { "type": "categorical", "values": ["EMEA"] }, with at least one value. operator can also be is_not, contains or doesnt_contain; it is is when left out. - A number: { "type": "number", "value": 10 }. Text: { "type": "text", "value": "EMEA" }. - A date range: { "type": "date", "subtype": "date_range", "startDate": "2026-01-01", "endDate": "2026-03-31" }. One date: { "type": "date", "subtype": "date_single", "date": "2026-03-31" }. - A month or a quarter: { "type": "date", "subtype": "date_month_year", "month": 3, "year": 2026 } (months 1 to 12), { "type": "date", "subtype": "date_quarter_year", "quarter": 1, "year": 2026 }. - A relative period: { "type": "date", "subtype": "date_relative", "rangeType": "lastN", "rangeN": 3, "periodType": "months" }. rangeType is current, lastN or nextN; periodType is days, weeks, months, quarters or years, or completeDays through completeYears for whole periods only. To send null, enter null. Enter it as JSON, as this JSON Schema describes: {"default":null,"anyOf":[{"anyOf":[{"type":"object","properties":{"type":{"type":"string","const":"categorical"},"values":{"type":"array","items":{"anyOf":[{"type":"string"},{"type":"number"}]}},"operator":{"type":"string","enum":["is","is_not","contains","doesnt_contain"]}},"required":["type","values"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_range"},"startDate":{"type":"string"},"endDate":{"type":"string"}},"required":["type","subtype","startDate","endDate"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_relative"},"rangeType":{"type":"string","enum":["current","lastN","nextN"]},"rangeN":{"type":"number"},"periodType":{"type":"string","enum":["days","weeks","months","quarters","years","completeDays","completeWeeks","completeMonths","completeQuarters","completeYears"]}},"required":["type","subtype","rangeType","rangeN","periodType"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_month_year"},"month":{"type":"number"},"year":{"type":"number"}},"required":["type","subtype","month","year"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_quarter_year"},"quarter":{"type":"number"},"year":{"type":"number"}},"required":["type","subtype","quarter","year"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_single"},"date":{"type":"string"}},"required":["type","subtype","date"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_null"}},"required":["type","subtype"]},{"type":"object","properties":{"type":{"type":"string","const":"number"},"value":{"type":"number"}},"required":["type","value"]},{"type":"object","properties":{"type":{"type":"string","const":"text"},"value":{"type":"string","minLength":1}},"required":["type","value"]}]},{"type":"null"}]}.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Changes a parameter of a report, such as its value to show the report for another region, as the app\'s report parameters editor does: what you send changes and the rest stays. A new value is written into the filters and columns it links and their datasheets are read again, so the report\'s slides change; follow that read with runId. Answers the parameter. Only the report\'s editors may.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'parameter',
				],
				operation: [
					'updateReportParameter',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'parameter',
				],
				operation: [
					'updateReportParameter',
				],
			},
		},
	},
	{
		displayName: 'Parameter ID',
		name: 'parameterId',
		required: true,
		type: 'string',
		default: '',
		description: 'The parameter to act on, by its ID in parameters from getReportParameters',
		displayOptions: {
			show: {
				resource: [
					'parameter',
				],
				operation: [
					'updateReportParameter',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'parameter',
				],
				operation: [
					'updateReportParameter',
				],
			},
		},
		options: [
			{
				displayName: 'Columns',
				name: 'columns',
				type: 'json',
				default: '',
				description: 'All the columns the parameter links from now on, by datasheetId and column as columns in getReportParameters lists them, replacing the ones it links: a column left out keeps the row filter it holds, and a column added must have no other parameterId. If omitted, it links the same columns. Enter it as JSON, as this JSON Schema describes: {"maxItems":200,"type":"array","items":{"type":"object","properties":{"datasheetId":{"type":"string","format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","description":"The datasheet\'s ID, as datasheetId in columns from getReportParameters."},"column":{"type":"string","minLength":1,"maxLength":255,"description":"The column\'s name, as column in columns from getReportParameters."}},"required":["datasheetId","column"],"additionalProperties":false}}.',
			},
			{
				displayName: 'Filter IDs',
				name: 'filterIds',
				type: 'string',
				default: '',
				description: 'All the filters the parameter links from now on, by their ID in filters from getReportParameters, replacing the ones it links: a filter left out keeps the value it holds, and a filter added must have no other parameterId. If omitted, it links the same filters. Separate several with commas, or enter a JSON array.',
			},
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The parameter\'s new name, as shown in Rollstack. It can\'t be the name of another parameter of the report.',
			},
			{
				displayName: 'Value',
				name: 'value',
				type: 'json',
				default: '',
				description: 'The parameter\'s new value, of the valueType of the filters it links. It is written into those filters and their datasheets are read again with it, so the report\'s slides change. null clears it, and the filters keep the values they hold. If omitted, the value stays. A value of a report parameter, in the shape of its type. Copy the shape of the parameter\'s value in listBursts, or of a variant\'s in listBurstVariants: - A list of values: { "type": "categorical", "values": ["EMEA"] }, with at least one value. operator can also be is_not, contains or doesnt_contain; it is is when left out. - A number: { "type": "number", "value": 10 }. Text: { "type": "text", "value": "EMEA" }. - A date range: { "type": "date", "subtype": "date_range", "startDate": "2026-01-01", "endDate": "2026-03-31" }. One date: { "type": "date", "subtype": "date_single", "date": "2026-03-31" }. - A month or a quarter: { "type": "date", "subtype": "date_month_year", "month": 3, "year": 2026 } (months 1 to 12), { "type": "date", "subtype": "date_quarter_year", "quarter": 1, "year": 2026 }. - A relative period: { "type": "date", "subtype": "date_relative", "rangeType": "lastN", "rangeN": 3, "periodType": "months" }. rangeType is current, lastN or nextN; periodType is days, weeks, months, quarters or years, or completeDays through completeYears for whole periods only. To send null, enter null. Enter it as JSON, as this JSON Schema describes: {"anyOf":[{"anyOf":[{"type":"object","properties":{"type":{"type":"string","const":"categorical"},"values":{"type":"array","items":{"anyOf":[{"type":"string"},{"type":"number"}]}},"operator":{"type":"string","enum":["is","is_not","contains","doesnt_contain"]}},"required":["type","values"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_range"},"startDate":{"type":"string"},"endDate":{"type":"string"}},"required":["type","subtype","startDate","endDate"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_relative"},"rangeType":{"type":"string","enum":["current","lastN","nextN"]},"rangeN":{"type":"number"},"periodType":{"type":"string","enum":["days","weeks","months","quarters","years","completeDays","completeWeeks","completeMonths","completeQuarters","completeYears"]}},"required":["type","subtype","rangeType","rangeN","periodType"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_month_year"},"month":{"type":"number"},"year":{"type":"number"}},"required":["type","subtype","month","year"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_quarter_year"},"quarter":{"type":"number"},"year":{"type":"number"}},"required":["type","subtype","quarter","year"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_single"},"date":{"type":"string"}},"required":["type","subtype","date"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_null"}},"required":["type","subtype"]},{"type":"object","properties":{"type":{"type":"string","const":"number"},"value":{"type":"number"}},"required":["type","value"]},{"type":"object","properties":{"type":{"type":"string","const":"text"},"value":{"type":"string","minLength":1}},"required":["type","value"]}]},{"type":"null"}]}.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Deletes a parameter of a report, as the app\'s report parameters editor does. The filters and columns it linked keep the last value it wrote, and a burst that varies by it stops varying by it. Refused for the last parameter a burst varies by, and on a burst\'s variant, whose parameters follow its template report\'s: delete it there. Only the report\'s editors may.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'parameter',
				],
				operation: [
					'deleteReportParameter',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'parameter',
				],
				operation: [
					'deleteReportParameter',
				],
			},
		},
	},
	{
		displayName: 'Parameter ID',
		name: 'parameterId',
		required: true,
		type: 'string',
		default: '',
		description: 'The parameter to act on, by its ID in parameters from getReportParameters',
		displayOptions: {
			show: {
				resource: [
					'parameter',
				],
				operation: [
					'deleteReportParameter',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'parameter',
				],
				operation: [
					'deleteReportParameter',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Who opened a report and how they read it, as its editors see under Views in the app: each person\'s visits, time spent and whether they opened it since its last successful run, who it is shared with but hasn\'t opened it since, and how far into it people read, slide by slide. Editors\' own time editing doesn\'t count. Only its editors may.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'sharing',
				],
				operation: [
					'getReportViews',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'sharing',
				],
				operation: [
					'getReportViews',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Shares a report of any type with a member of the organization to view or edit it, or changes their permission. They get an email. A report that updates a file, such as a Google Slides presentation, also shares the file with them, as the app does.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'sharing',
				],
				operation: [
					'shareReport',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, of any type, by its ID from listReports or createReport. You can also copy it from the report\'s link in Rollstack (appUrl): it\'s the part right after /slides/ or /destinations/.',
		displayOptions: {
			show: {
				resource: [
					'sharing',
				],
				operation: [
					'shareReport',
				],
			},
		},
	},
	{
		displayName: 'User ID',
		name: 'userId',
		required: true,
		type: 'number',
		default: 0,
		typeOptions: {
			maxValue: 9007199254740991,
			numberPrecision: 0,
		},
		description: 'The member to share the report with, or to unshare it from. Use their ID from listMembers, which only owners and admins can call, or their userId in sharedWith from getReport if the report is already shared with them. You can share a report only with active members of the organization, and not with yourself. Anyone the report is shared with can unshare it from themselves, even with view permission.',
		displayOptions: {
			show: {
				resource: [
					'sharing',
				],
				operation: [
					'shareReport',
				],
			},
		},
	},
	{
		displayName: 'Permission',
		name: 'permission',
		required: true,
		type: 'options',
		options: [
			{
				name: 'Comment',
				value: 'comment',
			},
			{
				name: 'Edit',
				value: 'edit',
			},
			{
				name: 'View',
				value: 'view',
			},
		],
		default: 'comment',
		description: 'What the member can do with the report. view lets them open, export and duplicate it. comment also lets them add, reply to and resolve comments on its slides. edit also lets them change its slides, data, schedules, email and other settings, run it, send its email, chat with the slides agent about it, and manage who it\'s shared with. Neither lets them delete the report or transfer its ownership. If the report is already shared with the member, this replaces their permission and they aren\'t notified again. On a report that updates a file in Google Drive or OneDrive, Rollstack also shares the file with them, as the app does.',
		displayOptions: {
			show: {
				resource: [
					'sharing',
				],
				operation: [
					'shareReport',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'sharing',
				],
				operation: [
					'shareReport',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Removes a user\'s share of a report of any type, and their access to its file when it updates one, as the app does.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'sharing',
				],
				operation: [
					'unshareReport',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, of any type, by its ID from listReports or createReport. You can also copy it from the report\'s link in Rollstack (appUrl): it\'s the part right after /slides/ or /destinations/.',
		displayOptions: {
			show: {
				resource: [
					'sharing',
				],
				operation: [
					'unshareReport',
				],
			},
		},
	},
	{
		displayName: 'User ID',
		name: 'userId',
		required: true,
		type: 'number',
		default: 0,
		typeOptions: {
			maxValue: 9007199254740991,
			numberPrecision: 0,
		},
		description: 'The member to share the report with, or to unshare it from. Use their ID from listMembers, which only owners and admins can call, or their userId in sharedWith from getReport if the report is already shared with them. You can share a report only with active members of the organization, and not with yourself. Anyone the report is shared with can unshare it from themselves, even with view permission.',
		displayOptions: {
			show: {
				resource: [
					'sharing',
				],
				operation: [
					'unshareReport',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'sharing',
				],
				operation: [
					'unshareReport',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Shares up to 50 reports of any type with the same members, with the same permission, as "Share report" does for one. Each member gets one email listing the reports newly shared with them. Answers one result per report, each naming its id: a report you may not share fails on its own and the others are still shared, but a member who is not in the organization, or yourself, fails the whole call with nothing shared.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'sharing',
				],
				operation: [
					'batchShareReports',
				],
			},
		},
	},
	{
		displayName: 'IDs',
		name: 'ids',
		required: true,
		type: 'string',
		default: '',
		description: 'The reports to act on, of any type, by their ID from listReports. From 1 to 50 IDs; an ID listed twice is acted on once. Separate several with commas, or enter a JSON array.',
		displayOptions: {
			show: {
				resource: [
					'sharing',
				],
				operation: [
					'batchShareReports',
				],
			},
		},
	},
	{
		displayName: 'User IDs',
		name: 'userIds',
		required: true,
		type: 'json',
		default: '',
		description: 'The members to share every report with, by their user ID from listMembers. Each must be an active member of the organization other than you, or the whole call fails with nothing shared. From 1 to 50 IDs. Enter it as JSON, as this JSON Schema describes: {"minItems":1,"maxItems":50,"type":"array","items":{"type":"integer","minimum":-9007199254740991,"maximum":9007199254740991}}.',
		displayOptions: {
			show: {
				resource: [
					'sharing',
				],
				operation: [
					'batchShareReports',
				],
			},
		},
	},
	{
		displayName: 'Permission',
		name: 'permission',
		required: true,
		type: 'options',
		options: [
			{
				name: 'Comment',
				value: 'comment',
			},
			{
				name: 'Edit',
				value: 'edit',
			},
			{
				name: 'View',
				value: 'view',
			},
		],
		default: 'comment',
		description: 'What the member can do with the report. view lets them open, export and duplicate it. comment also lets them add, reply to and resolve comments on its slides. edit also lets them change its slides, data, schedules, email and other settings, run it, send its email, chat with the slides agent about it, and manage who it\'s shared with. Neither lets them delete the report or transfer its ownership. If the report is already shared with the member, this replaces their permission and they aren\'t notified again. On a report that updates a file in Google Drive or OneDrive, Rollstack also shares the file with them, as the app does.',
		displayOptions: {
			show: {
				resource: [
					'sharing',
				],
				operation: [
					'batchShareReports',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'sharing',
				],
				operation: [
					'batchShareReports',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'The comments on a report\'s slides, oldest first: each thread\'s first comment, whose threadId is null and which says whether the thread is resolved, then its replies. Read the open threads to see what reviewers asked for. Members who can view the report may.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'comment',
				],
				operation: [
					'listReportComments',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'comment',
				],
				operation: [
					'listReportComments',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Starts a comment thread on a slide of a report, or replies to a thread, as the user. A reply notifies the thread\'s other participants who can still open the report. Members who can comment on the report may.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'comment',
				],
				operation: [
					'createReportComment',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'comment',
				],
				operation: [
					'createReportComment',
				],
			},
		},
	},
	{
		displayName: 'Text',
		name: 'text',
		required: true,
		type: 'string',
		default: '',
		description: 'The comment, as plain text: each line becomes a paragraph, and Markdown marks such as ** and # are removed. Mentions and @Rollstack requests can only be written in the app. At most 5000 characters.',
		displayOptions: {
			show: {
				resource: [
					'comment',
				],
				operation: [
					'createReportComment',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'comment',
				],
				operation: [
					'createReportComment',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Slide ID',
				name: 'slideId',
				type: 'string',
				default: '',
				description: 'The slide to start a new thread on, as slideId in getReportContent. Leave it out with threadId.',
			},
			{
				displayName: 'Thread ID',
				name: 'threadId',
				type: 'string',
				default: '',
				description: 'The thread to reply to, by its first comment\'s ID from listReportComments. The reply goes on the thread\'s slide, and the thread\'s other participants are notified.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Resolves a comment thread once what it asked for is done, or opens it again, as the user. Only a thread\'s first comment can be resolved. Members who can comment on the report may.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'comment',
				],
				operation: [
					'resolveReportComment',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, by its ID from listReports or createReport. Only reports whose type is SlideDeck work here: another type, such as a Google Slides presentation, returns 400. You can also copy it from the report\'s link in Rollstack: it\'s the part right after /slides/.',
		displayOptions: {
			show: {
				resource: [
					'comment',
				],
				operation: [
					'resolveReportComment',
				],
			},
		},
	},
	{
		displayName: 'Comment ID',
		name: 'commentId',
		required: true,
		type: 'string',
		default: '',
		description: 'The thread to act on, by its first comment\'s ID from listReportComments, the one whose threadId is null',
		displayOptions: {
			show: {
				resource: [
					'comment',
				],
				operation: [
					'resolveReportComment',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'comment',
				],
				operation: [
					'resolveReportComment',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Resolved',
				name: 'resolved',
				type: 'boolean',
				default: true,
				description: 'Whether to resolve the thread. Turn it off to open the thread again. Defaults to true.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'The schedules of a report of any type, with the syncs each updates and when each runs next, or null for one that never runs again. Read them before "Replace report schedules", which replaces them all.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'schedule',
				],
				operation: [
					'getReportSchedules',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, of any type, by its ID from listReports or createReport. You can also copy it from the report\'s link in Rollstack (appUrl): it\'s the part right after /slides/ or /destinations/.',
		displayOptions: {
			show: {
				resource: [
					'schedule',
				],
				operation: [
					'getReportSchedules',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Replaces the schedules of a report of any type, at most 10; an empty list removes them all. Only its editors may. A scheduled run updates the whole report: an AI update on a SlideDeck report, and a refresh of every sync on a report of another type, or only the syncIds a schedule names. Schedules are checked every 15 minutes, so a cron that fires more often still runs at most once per 15 minutes.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'schedule',
				],
				operation: [
					'updateReportSchedules',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, of any type, by its ID from listReports or createReport. You can also copy it from the report\'s link in Rollstack (appUrl): it\'s the part right after /slides/ or /destinations/.',
		displayOptions: {
			show: {
				resource: [
					'schedule',
				],
				operation: [
					'updateReportSchedules',
				],
			},
		},
	},
	{
		displayName: 'Schedules',
		name: 'schedules',
		required: true,
		type: 'json',
		default: '',
		description: 'The report\'s new schedules. They replace all of its current schedules, so read them with getReportSchedules first and include any you want to keep, with their syncIds; send an empty list to remove them all. When several schedules fall at the same time, the report runs once. Up to 10. Enter it as JSON, as this JSON Schema describes: {"maxItems":10,"type":"array","items":{"type":"object","properties":{"frequency":{"type":"string","enum":["hourly","daily","weekly","monthly","quarterly"],"description":"How often the schedule runs. hourly runs every day at each time in selectedTimes, and takes no cronExpression. daily, weekly, monthly and quarterly run whenever cronExpression fires, and take no selectedTimes. For those, the frequency doesn\'t change when the report runs, but the app uses it to describe and edit the schedule, so pick the one that matches your cron expression."},"cronExpression":{"description":"When a daily, weekly, monthly or quarterly schedule runs: a five-field cron expression (minute, hour, day of month, month, day of week) in the schedule\'s timezone, such as 0 9 * * 1 for every Monday at 9:00, or 0 9 L * * for 9:00 on the last day of each month. Required for those frequencies; omit it for hourly. Rollstack checks schedules every 15 minutes, so the minute field must include 0, 15, 30 or 45, and runs at other minutes are skipped. At most 100 characters.","examples":["0 9 * * 1"],"type":"string","maxLength":100},"selectedTimes":{"description":"The times of day an hourly schedule runs, every day, as 24-hour HH:mm in the schedule\'s timezone, such as 09:00 or 13:45. Required for hourly; omit it for other frequencies. Each time must be on the quarter hour (:00, :15, :30 or :45). From 1 to 96 times.","minItems":1,"maxItems":96,"type":"array","items":{"type":"string","pattern":"^([01]\\\\d|2[0-3]):(00|15|30|45)$","examples":["09:00"]}},"startDate":{"type":"string","format":"date-time","pattern":"^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$","description":"When the schedule starts: it never runs the report before this date and time. This is a local date and time in the schedule\'s timezone, written as if it were UTC: 2026-11-02T09:00:00Z means 9:00 on November 2, 2026 in that timezone, not 9:00 UTC. For frequencies other than hourly, set it to the date and time of the first run: the app shows its time as the schedule\'s time, and when someone changes the schedule\'s frequency or days there, it rebuilds cronExpression at that time.","examples":["2026-11-02T09:00:00Z"]},"endDate":{"default":null,"description":"When the schedule ends: it never runs the report after this date and time. Omit it or pass null for a schedule that never ends. Like startDate, this is a local date and time in the schedule\'s timezone, written as if it were UTC. Must be later than startDate. Set it later than the last run you want: a run at exactly this time may be skipped.","examples":["2027-11-02T09:00:00Z"],"anyOf":[{"type":"string","format":"date-time","pattern":"^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"},{"type":"null"}]},"timezone":{"type":"string","minLength":1,"description":"The timezone the schedule runs in. Its run times (cronExpression or selectedTimes), startDate and endDate are all local times in this timezone, so a schedule set for 9:00 keeps running at 9:00 local time when daylight saving time starts or ends. Given as an IANA timezone name, such as America/New_York. UTC offsets such as +05:30 aren\'t accepted.","examples":["America/New_York"]},"syncIds":{"default":null,"description":"The syncs, from listReportSyncs, that the schedule updates on a report other than a SlideDeck. null when it updates the whole report, which a slide deck always does. Omit it or pass null to update the whole report. Each ID must be a sync of this report, so it only works on a report other than a SlideDeck. Keep the syncIds getReportSchedules returns for schedules you don\'t mean to change. A sync deleted later is skipped, so a schedule whose syncs are all gone updates nothing.","anyOf":[{"minItems":1,"maxItems":500,"type":"array","items":{"type":"string","format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"}},{"type":"null"}]}},"required":["frequency","startDate","timezone"],"additionalProperties":false}}.',
		displayOptions: {
			show: {
				resource: [
					'schedule',
				],
				operation: [
					'updateReportSchedules',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'schedule',
				],
				operation: [
					'updateReportSchedules',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Gives up to 50 reports of any type the same schedules, replacing all of each report\'s current ones, as "Replace report schedules" does for one; an empty list removes them all. Each schedule updates its whole report. Only the reports\' editors may. Answers one result per report, each naming its id, with its new schedules: a report you can\'t edit fails on its own and keeps its schedules, while the others are still changed.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'schedule',
				],
				operation: [
					'batchUpdateReportSchedules',
				],
			},
		},
	},
	{
		displayName: 'IDs',
		name: 'ids',
		required: true,
		type: 'string',
		default: '',
		description: 'The reports to act on, of any type, by their ID from listReports. From 1 to 50 IDs; an ID listed twice is acted on once. Separate several with commas, or enter a JSON array.',
		displayOptions: {
			show: {
				resource: [
					'schedule',
				],
				operation: [
					'batchUpdateReportSchedules',
				],
			},
		},
	},
	{
		displayName: 'Schedules',
		name: 'schedules',
		required: true,
		type: 'json',
		default: '',
		description: 'The new schedules of every report. They replace all of each report\'s current schedules; send an empty list to remove them all. Each schedule updates the whole report: to update only some syncs of a report, set its schedules with updateReportSchedules. Up to 10. Enter it as JSON, as this JSON Schema describes: {"maxItems":10,"type":"array","items":{"type":"object","properties":{"frequency":{"type":"string","enum":["hourly","daily","weekly","monthly","quarterly"],"description":"How often the schedule runs. hourly runs every day at each time in selectedTimes, and takes no cronExpression. daily, weekly, monthly and quarterly run whenever cronExpression fires, and take no selectedTimes. For those, the frequency doesn\'t change when the report runs, but the app uses it to describe and edit the schedule, so pick the one that matches your cron expression."},"cronExpression":{"description":"When a daily, weekly, monthly or quarterly schedule runs: a five-field cron expression (minute, hour, day of month, month, day of week) in the schedule\'s timezone, such as 0 9 * * 1 for every Monday at 9:00, or 0 9 L * * for 9:00 on the last day of each month. Required for those frequencies; omit it for hourly. Rollstack checks schedules every 15 minutes, so the minute field must include 0, 15, 30 or 45, and runs at other minutes are skipped. At most 100 characters.","examples":["0 9 * * 1"],"type":"string","maxLength":100},"selectedTimes":{"description":"The times of day an hourly schedule runs, every day, as 24-hour HH:mm in the schedule\'s timezone, such as 09:00 or 13:45. Required for hourly; omit it for other frequencies. Each time must be on the quarter hour (:00, :15, :30 or :45). From 1 to 96 times.","minItems":1,"maxItems":96,"type":"array","items":{"type":"string","pattern":"^([01]\\\\d|2[0-3]):(00|15|30|45)$","examples":["09:00"]}},"startDate":{"type":"string","format":"date-time","pattern":"^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$","description":"When the schedule starts: it never runs the report before this date and time. This is a local date and time in the schedule\'s timezone, written as if it were UTC: 2026-11-02T09:00:00Z means 9:00 on November 2, 2026 in that timezone, not 9:00 UTC. For frequencies other than hourly, set it to the date and time of the first run: the app shows its time as the schedule\'s time, and when someone changes the schedule\'s frequency or days there, it rebuilds cronExpression at that time.","examples":["2026-11-02T09:00:00Z"]},"endDate":{"default":null,"description":"When the schedule ends: it never runs the report after this date and time. Omit it or pass null for a schedule that never ends. Like startDate, this is a local date and time in the schedule\'s timezone, written as if it were UTC. Must be later than startDate. Set it later than the last run you want: a run at exactly this time may be skipped.","examples":["2027-11-02T09:00:00Z"],"anyOf":[{"type":"string","format":"date-time","pattern":"^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"},{"type":"null"}]},"timezone":{"type":"string","minLength":1,"description":"The timezone the schedule runs in. Its run times (cronExpression or selectedTimes), startDate and endDate are all local times in this timezone, so a schedule set for 9:00 keeps running at 9:00 local time when daylight saving time starts or ends. Given as an IANA timezone name, such as America/New_York. UTC offsets such as +05:30 aren\'t accepted.","examples":["America/New_York"]}},"required":["frequency","startDate","timezone"],"additionalProperties":false}}.',
		displayOptions: {
			show: {
				resource: [
					'schedule',
				],
				operation: [
					'batchUpdateReportSchedules',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'schedule',
				],
				operation: [
					'batchUpdateReportSchedules',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'The emails every report the user can see sent, of any type, newest first, each with its report, as the app\'s Email sends page lists them: pass status failed and since to find the ones that didn\'t go out, and burstId for one burst\'s. Same fields as "List sent emails". Answers up to limit emails, 20 by default and 200 at most, and a nextCursor: pass it as cursor for the next page, until it is null.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'email',
				],
				operation: [
					'listEmails',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'email',
				],
				operation: [
					'listEmails',
				],
			},
		},
		options: [
			{
				displayName: 'Burst ID',
				name: 'burstId',
				type: 'string',
				default: '',
				description: 'Only the emails of this burst, by its ID from listBursts: each variant\'s own emails, and the emails its email configurations sent, which list its template as their report. If omitted, every report\'s.',
			},
			{
				displayName: 'Cursor',
				name: 'cursor',
				type: 'string',
				default: '',
				description: 'Where to continue the list: pass the nextCursor returned with the previous page to get the next one. Omit it for the first page.',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 50,
				typeOptions: {
					minValue: 1,
					maxValue: 200,
					numberPrecision: 0,
				},
				description: 'Max number of results to return',
			},
			{
				displayName: 'Since',
				name: 'since',
				type: 'string',
				default: '',
				description: 'Only what happened at or after this time, as an ISO 8601 date and time in UTC, such as 2026-11-08T18:00:00Z. If omitted, from the start.',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Delivered',
						value: 'delivered',
					},
					{
						name: 'Failed',
						value: 'failed',
					},
					{
						name: 'Opened',
						value: 'opened',
					},
				],
				default: 'delivered',
				description: 'Only the emails in this state, as the Email sends page filters them: failed the ones that could not be sent, opened the ones a recipient opened, and delivered the ones the email server accepted, opened or not. If omitted, every email.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Who a report\'s email goes to and how it is sent, for a report of any type. Answers 404 until its email is set up, as on a burst\'s variant that sends no email of its own. For a burst, read "List burst variants", which has every variant\'s recipients, and "List burst email configurations" rather than calling this on each variant. On an older report that sends to several recipient groups, to, cc, bcc and replyTo list every group\'s addresses together.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'email',
				],
				operation: [
					'getReportEmailConfig',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, of any type, by its ID from listReports or createReport. You can also copy it from the report\'s link in Rollstack (appUrl): it\'s the part right after /slides/ or /destinations/.',
		displayOptions: {
			show: {
				resource: [
					'email',
				],
				operation: [
					'getReportEmailConfig',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'The emails a report of any type sent, newest first: when, how, to whom, and whether each was delivered, failed or opened. To check many reports, call "List sent emails of all reports" instead, which lists every report\'s emails with their report, and a burst\'s with its burstId. Answers up to limit emails, 20 by default and 200 at most, and a nextCursor: pass it as cursor for the next page, until it is null.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'email',
				],
				operation: [
					'listReportEmails',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, of any type, by its ID from listReports or createReport. You can also copy it from the report\'s link in Rollstack (appUrl): it\'s the part right after /slides/ or /destinations/.',
		displayOptions: {
			show: {
				resource: [
					'email',
				],
				operation: [
					'listReportEmails',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'email',
				],
				operation: [
					'listReportEmails',
				],
			},
		},
		options: [
			{
				displayName: 'Cursor',
				name: 'cursor',
				type: 'string',
				default: '',
				description: 'Where to continue the list: pass the nextCursor returned with the previous page to get the next one. Omit it for the first page.',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 50,
				typeOptions: {
					minValue: 1,
					maxValue: 200,
					numberPrecision: 0,
				},
				description: 'Max number of results to return',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Sets who a report\'s email goes to and how it is sent, for a report of any type, replacing the settings this endpoint covers; Drive sharing, attachment folders and the email\'s subject and body stay as set in the app. Only its editors may. The sender must be the user\'s own or shared with the organization. A report that sends to several recipient groups returns 400: change those in the app.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'email',
				],
				operation: [
					'updateReportEmailConfig',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, of any type, by its ID from listReports or createReport. You can also copy it from the report\'s link in Rollstack (appUrl): it\'s the part right after /slides/ or /destinations/.',
		displayOptions: {
			show: {
				resource: [
					'email',
				],
				operation: [
					'updateReportEmailConfig',
				],
			},
		},
	},
	{
		displayName: 'To',
		name: 'to',
		required: true,
		type: 'string',
		default: '',
		description: 'The addresses to send the report\'s email to. If empty, no one receives it: the report\'s runs send no email and sendReportEmail returns 400. At most 100 addresses across to, cc and bcc. Separate several with commas, or enter a JSON array.',
		displayOptions: {
			show: {
				resource: [
					'email',
				],
				operation: [
					'updateReportEmailConfig',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'email',
				],
				operation: [
					'updateReportEmailConfig',
				],
			},
		},
		options: [
			{
				displayName: 'BCC',
				name: 'bcc',
				type: 'string',
				default: '',
				description: 'The addresses to also send the report\'s email to without the other recipients seeing them. If omitted, no one is blind-copied. Counts toward the 100 addresses allowed across to, cc and bcc. Separate several with commas, or enter a JSON array.',
			},
			{
				displayName: 'CC',
				name: 'cc',
				type: 'string',
				default: '',
				description: 'The addresses to copy on the report\'s email, which every recipient can see. If omitted, no one is copied. Counts toward the 100 addresses allowed across to, cc and bcc. Separate several with commas, or enter a JSON array.',
			},
			{
				displayName: 'Email Analytics Enabled',
				name: 'emailAnalyticsEnabled',
				type: 'boolean',
				default: false,
				description: 'Whether to track when recipients open the report\'s email; opened emails show as Opened in the report\'s Email sends panel in the app. Setting it to true returns 403 unless email analytics is on for the organization (emailAnalyticsEnabled from getOrganization). Defaults to false.',
			},
			{
				displayName: 'Group Recipients',
				name: 'groupRecipients',
				type: 'boolean',
				default: true,
				description: 'Whether to send one email to all the addresses in to together. Set it to false to send each address in to its own email with the same cc, bcc and replyTo; the addresses in cc and bcc then receive one copy per address in to. Defaults to true.',
			},
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Ignored Failure Status Messages',
				name: 'ignoredFailureStatusMessages',
				type: 'string',
				default: '',
				description: 'The failures that shouldn\'t stop a run from emailing the report (see trigger). A run with failures still sends the email when all of them are in this list. On a slide deck, a run in which every datasheet fails never does. On a slide deck, include internal_server_error to email the report even when some of its datasheets fail. On an older report, include the error.code values from listReportSyncs to ignore. Defaults to slide_not_found alone, so by default a slide deck\'s run with any failed datasheet sends no email, and an older report\'s run still emails when only syncs on a missing slide fail. The other values describe why a sync of an older report failed, and have an effect only on older reports: - dashboard_not_found, or the older tableau_view_not_found: the dashboard, Tableau workbook, Power BI report or spreadsheet could not be found. - dashboard_tab_not_found: the dashboard tab, Tableau view, Power BI report page or spreadsheet sheet could not be found. - dashboard_not_ready: the dashboard took too long to load. - dashboard_has_errors: the dashboard or spreadsheet failed to load because of an error in the tool it comes from. - dashboard_invalid_layout: the dashboard\'s layout is invalid, and it needs to be saved again. - element_not_found, or the older metabase_element_not_found and looker_element_not_found: the visualization could not be found. - slide_not_found, or the older google_slide_not_found: the slide that shows the visualization could not be found. - file_not_found: the spreadsheet file the visualization comes from could not be found. - sheet_not_found: the spreadsheet sheet could not be found. - sheet_hidden: the spreadsheet sheet is hidden and needs to be unhidden. - range_not_found: the spreadsheet range could not be found. - duplicate_file_failed: Rollstack could not prepare the spreadsheet file for the update. - merged_range_on_filter_range: the visualization has merged cells, which filters can\'t be applied to. - insufficient_permissions: the owner doesn\'t have edit access to the file. - image_cropping_failed: Rollstack could not crop the visualization\'s image. - visualization_not_found: the visualization could not be found in the dashboard. - visualization_not_ready: the visualization took too long to load. - visualization_has_errors: the visualization failed to load because of an error in the tool it comes from. - visualization_empty, or the older empty_data: the visualization is empty. - invalid_credentials: the connection\'s credentials are invalid. - missing_credentials: the connection\'s credentials were deleted, or the owner\'s access to it was suspended. - instance_unavailable: the data source\'s instance is temporarily unavailable. - column_not_found: a column the native chart uses is missing from its data. - fetch_summary_data_error, fetch_visual_specification_error, missing_data, missing_formatted_value and viz_not_ready: Rollstack could not fetch the data of a native chart. - incorrect_data_structure: the native chart\'s structure doesn\'t fit its data. - malformed_data: Rollstack could not fetch the data of a native chart or, from Snowflake, Databricks or BigQuery, the query is invalid. - worksheet_not_found: the Tableau worksheet could not be found. - sync_not_found: the visualization was deleted. - file_update_failed: the data was fetched but could not be written into the file. Separate several with commas, or enter a JSON array. Each one of: tableau_view_not_found, dashboard_not_found, dashboard_tab_not_found, dashboard_not_ready, dashboard_has_errors, dashboard_invalid_layout, metabase_element_not_found, looker_element_not_found, element_not_found, google_slide_not_found, slide_not_found, file_not_found, sheet_not_found, sheet_hidden, range_not_found, duplicate_file_failed, merged_range_on_filter_range, insufficient_permissions, image_cropping_failed, visualization_not_found, visualization_not_ready, visualization_has_errors, visualization_empty, invalid_credentials, missing_credentials, instance_unavailable, column_not_found, empty_data, fetch_summary_data_error, fetch_visual_specification_error, incorrect_data_structure, missing_data, missing_formatted_value, malformed_data, viz_not_ready, worksheet_not_found, sync_not_found, file_update_failed, internal_server_error.',
			},
			{
				displayName: 'Reply To',
				name: 'replyTo',
				type: 'string',
				default: '',
				description: 'The addresses recipients\' replies should go to instead of the sender. They don\'t receive the email themselves. If omitted, replies go to the sender. Separate several with commas, or enter a JSON array.',
			},
			{
				displayName: 'Send Attachment As Link',
				name: 'sendAttachmentAsLink',
				type: 'boolean',
				default: false,
				description: 'Whether the email puts the pdf or ppt file behind a Download PDF or Download PPT button instead of attaching it. When false, the file is attached. Has no effect with cloudLink. If omitted, keeps the current setting, or for a report whose email isn\'t set up yet, true on a slide deck and false on an older report.',
			},
			{
				displayName: 'Sharing Format',
				name: 'sharingFormat',
				type: 'options',
				options: [
					{
						name: 'cloudLink',
						value: 'cloudLink',
					},
					{
						name: 'Link',
						value: 'link',
					},
					{
						name: 'PDF',
						value: 'pdf',
					},
					{
						name: 'PPT',
						value: 'ppt',
					},
				],
				default: 'cloudLink',
				description: 'How the email delivers the report. pdf and ppt send it as a PDF or PowerPoint file, attached or behind a download button (see sendAttachmentAsLink); a slide deck leaves its hidden slides out. link sends a link to the Google Drive or OneDrive file an older report updates, shared with the recipients as set in the app; an email report sends its content in the email itself, and a slide deck has no such file, so one whose settings still contain link is emailed as a PDF behind a download button. cloudLink (Exported link in the app), for slide decks only, sends a link to the copy exported to Google Drive or OneDrive and shares it with the addresses in to, cc and bcc with the sharing permission set in the app, viewer unless changed there; if no permission is set, as after PDF or PPT was picked in the app, the copy isn\'t shared with them. cloudLink on an older report, link on a slide deck, or ppt on a Google Docs or Word report returns 400. For cloudLink, set up the export in the report\'s Update runs settings in the app first. If omitted, keeps the current format, or for a report whose email isn\'t set up yet, pdf on a slide deck and link on an older report.',
			},
			{
				displayName: 'SMTP Server ID',
				name: 'smtpServerId',
				type: 'string',
				default: '',
				description: 'The SMTP connection to send the report\'s email through, from listSmtpConnections; recipients see its from address as the sender. If null or omitted, the email is sent from Rollstack\'s own address. A connection listSmtpConnections doesn\'t list, or a Google or Microsoft account Rollstack can no longer send from, returns 403 unless it is already the report\'s sender. To send null, enter null.',
			},
			{
				displayName: 'Trigger',
				name: 'trigger',
				type: 'options',
				options: [
					{
						name: 'All',
						value: 'all',
					},
					{
						name: 'None',
						value: 'none',
					},
					{
						name: 'Scheduled',
						value: 'scheduled',
					},
				],
				default: 'all',
				description: 'Which of the report\'s runs email it automatically. A run emails it when it updates everything, or when all its failures are in ignoredFailureStatusMessages. On a slide deck, all and scheduled work the same way: only runs started by its schedules (see getReportSchedules) send the email, and a slide deck with no datasheets is never emailed by its runs. On an older report, all emails after every run of the whole report, whether started by a schedule, with startReportRun or in the app, and scheduled only after runs its schedules start; a run of only some syncs never emails it. With none (Manual in the app), no run sends it: the email goes out only when sent with sendReportEmail or from the app. Defaults to all.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Emails a report to its recipients now, as it is. Only its editors may. Answers 400 when it has no recipients. An email report needs its email template set up in the app first. Sends in the background; while the user\'s send of the report is going, starts nothing. At most 5 sends a minute per user, test sends included. From an AI client, the send only asks the user to confirm it in Rollstack: it answers confirmation-required and runs once they confirm.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'email',
				],
				operation: [
					'sendReportEmail',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, of any type, by its ID from listReports or createReport. You can also copy it from the report\'s link in Rollstack (appUrl): it\'s the part right after /slides/ or /destinations/.',
		displayOptions: {
			show: {
				resource: [
					'email',
				],
				operation: [
					'sendReportEmail',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'email',
				],
				operation: [
					'sendReportEmail',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Sends a report\'s email to the user only, and waits until it is sent. Only its editors may. Counts against the 5 sends a minute.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'email',
				],
				operation: [
					'sendReportTestEmail',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, of any type, by its ID from listReports or createReport. You can also copy it from the report\'s link in Rollstack (appUrl): it\'s the part right after /slides/ or /destinations/.',
		displayOptions: {
			show: {
				resource: [
					'email',
				],
				operation: [
					'sendReportTestEmail',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'email',
				],
				operation: [
					'sendReportTestEmail',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'The bursts of reports the user can see, newest first: those of Rollstack reports, whose variants differ by report parameters, and those of older reports such as Google Slides or PowerPoint files, whose variants differ by filters, as kind says. Each comes with what its variants differ by and the template report they are copied from. You can filter by name, ignoring case. Answers up to limit bursts, 50 by default and 200 at most, and a nextCursor: pass it as cursor for the next page, until it is null. "List reports" leaves out the reports of a burst, its template and variants.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'listBursts',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'listBursts',
				],
			},
		},
		options: [
			{
				displayName: 'Cursor',
				name: 'cursor',
				type: 'string',
				default: '',
				description: 'Where to continue the list: pass the nextCursor returned with the previous page to get the next one. Omit it for the first page.',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 50,
				typeOptions: {
					minValue: 1,
					maxValue: 200,
					numberPrecision: 0,
				},
				description: 'Max number of results to return',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Only return bursts whose name contains this text, ignoring case: region matches Regional Review',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'A burst\'s email configurations, as the app\'s Burst email settings show them: each one email to its own recipients that includes every variant it selects, sent only when you send it. Unlike each variant\'s own email, which its runs send to its own recipients. What both sent is in "List sent emails of all reports" with burstId.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'listBurstEmailConfigs',
				],
			},
		},
	},
	{
		displayName: 'Burst ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The burst to act on, by its ID from listBursts. You can also copy it from the burst\'s link in Rollstack: it\'s the part right after /collections/.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'listBurstEmailConfigs',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Where the runs of a burst\'s variants stand, such as those "Run burst variants" started, with how each variant\'s latest run ended. Waits up to waitSeconds for none of them to be running and answers as soon as that happens, so call it again while the status is running. A run started in the app or by a schedule counts too.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'getBurstRun',
				],
			},
		},
	},
	{
		displayName: 'Burst ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The burst to act on, by its ID from listBursts. You can also copy it from the burst\'s link in Rollstack: it\'s the part right after /collections/.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'getBurstRun',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'getBurstRun',
				],
			},
		},
		options: [
			{
				displayName: 'Wait Seconds',
				name: 'waitSeconds',
				type: 'number',
				default: 20,
				typeOptions: {
					minValue: 0,
					maxValue: 30,
					numberPrecision: 0,
				},
				description: 'How long this call waits for the work to finish, in seconds: the message to the slides agent on getReportMessage, the run on getReportRun, the batch of variants being added on getBurstVariantBatch, the runs of a burst\'s variants on getBurstRun. It returns as soon as the work is done, or as things stand once the time is up, so call it again while status is still queued or running. 0 returns at once. Defaults to 20; at most 30.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'A burst\'s settings, as its Settings tab in the app shows them: how its variants are named, and for an older report\'s burst, how each variant\'s run updates its file, what it does with empty charts, how it archives and how its filters match. Its folders and schedules are set in the app.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'getBurstSettings',
				],
			},
		},
	},
	{
		displayName: 'Burst ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The burst to act on, by its ID from listBursts. You can also copy it from the burst\'s link in Rollstack: it\'s the part right after /collections/.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'getBurstSettings',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'A burst\'s variants the user can open, oldest first, each with its values of the burst\'s parameters or filters, how its latest run went, whether one is going, and who its email goes to. adding lists the variants the user is still adding. Answers up to limit variants, 50 by default and 200 at most, and a nextCursor: pass it as cursor for the next page, until it is null.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'listBurstVariants',
				],
			},
		},
	},
	{
		displayName: 'Burst ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The burst to act on, by its ID from listBursts. You can also copy it from the burst\'s link in Rollstack: it\'s the part right after /collections/.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'listBurstVariants',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'listBurstVariants',
				],
			},
		},
		options: [
			{
				displayName: 'Cursor',
				name: 'cursor',
				type: 'string',
				default: '',
				description: 'Where to continue the list: pass the nextCursor returned with the previous page to get the next one. Omit it for the first page.',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 50,
				typeOptions: {
					minValue: 1,
					maxValue: 200,
					numberPrecision: 0,
				},
				description: 'Max number of results to return',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'A batch of variants being added to a burst, with where each variant stands: copied from the template report, then run once to fetch its data. Waits up to waitSeconds for the batch to end and answers as soon as it does, so call it again while the status is running. Your later batch on the burst reuses the id, so this describes the latest one.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'getBurstVariantBatch',
				],
			},
		},
	},
	{
		displayName: 'Burst ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The burst to act on, by its ID from listBursts. You can also copy it from the burst\'s link in Rollstack: it\'s the part right after /collections/.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'getBurstVariantBatch',
				],
			},
		},
	},
	{
		displayName: 'Batch ID',
		name: 'batchId',
		required: true,
		type: 'string',
		default: '',
		description: 'The batch, by the batchId that addBurstVariants returned. A member\'s batches on a burst share one ID, so it always refers to their latest.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'getBurstVariantBatch',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'getBurstVariantBatch',
				],
			},
		},
		options: [
			{
				displayName: 'Wait Seconds',
				name: 'waitSeconds',
				type: 'number',
				default: 20,
				typeOptions: {
					minValue: 0,
					maxValue: 30,
					numberPrecision: 0,
				},
				description: 'How long this call waits for the work to finish, in seconds: the message to the slides agent on getReportMessage, the run on getReportRun, the batch of variants being added on getBurstVariantBatch, the runs of a burst\'s variants on getBurstRun. It returns as soon as the work is done, or as things stand once the time is up, so call it again while status is still queued or running. 0 returns at once. Defaults to 20; at most 30.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'The filters of the dashboard an older report\'s sync reads, which a burst of the report can vary by: pass their ids in filters to "Create burst". Read from the dashboard with your access to its connection, so it can take a few seconds. Find the report\'s syncs with "List report syncs". A Rollstack report bursts by report parameters instead: see "Get report parameters".',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'listReportSyncFilters',
				],
			},
		},
	},
	{
		displayName: 'Report ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to act on, of any type, by its ID from listReports or createReport. You can also copy it from the report\'s link in Rollstack (appUrl): it\'s the part right after /slides/ or /destinations/.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'listReportSyncFilters',
				],
			},
		},
	},
	{
		displayName: 'Sync ID',
		name: 'syncId',
		required: true,
		type: 'string',
		default: '',
		description: 'The sync whose dashboard filters to list, by its ID from listReportSyncs',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'listReportSyncFilters',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Adds variants to a burst by their values of its report parameters, or of its filters for an older report\'s burst: each is a copy of the template report with its own values, then runs once to fetch its data. An older report\'s variant is a copy of its file in the burst\'s folder. Report parameter values and filter ids are checked first, so a request with one the burst can\'t take adds nothing. Answers at once with the batch\'s batchId and the names the variants are added with: follow the batch with "Get burst variant batch" until it ends.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'addBurstVariants',
				],
			},
		},
	},
	{
		displayName: 'Burst ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The burst to act on, by its ID from listBursts. You can also copy it from the burst\'s link in Rollstack: it\'s the part right after /collections/.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'addBurstVariants',
				],
			},
		},
	},
	{
		displayName: 'Variants',
		name: 'variants',
		required: true,
		type: 'json',
		default: '',
		description: 'The variants to add, 1 to 500. Variants may hold the same values as one another or as an existing variant: each is added as its own report. Enter it as JSON, as this JSON Schema describes: {"minItems":1,"maxItems":500,"type":"array","items":{"type":"object","properties":{"name":{"description":"The variant\'s name, which its report\'s name is built from as the burst\'s variantNaming says. If omitted, it is named after the values it sets, like EMEA - Q1 2026: its parameters\' values, or its primary filters\' values.","type":"string","minLength":1},"parameters":{"description":"For a burst by parameters: the value the variant sets of each report parameter, by its ID in the burst\'s parameters. A parameter left out keeps the template\'s value. A value must be one the template\'s datasheet filters can take, or the request returns 400 and adds nothing.","type":"object","propertyNames":{"type":"string","format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","examples":["5e7a9c1b-3d5f-4b7d-9e1a-3c5e7a9b1d3f"]},"additionalProperties":{"anyOf":[{"type":"object","properties":{"type":{"type":"string","const":"categorical"},"values":{"type":"array","items":{"anyOf":[{"type":"string"},{"type":"number"}]}},"operator":{"type":"string","enum":["is","is_not","contains","doesnt_contain"]}},"required":["type","values"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_range"},"startDate":{"type":"string"},"endDate":{"type":"string"}},"required":["type","subtype","startDate","endDate"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_relative"},"rangeType":{"type":"string","enum":["current","lastN","nextN"]},"rangeN":{"type":"number"},"periodType":{"type":"string","enum":["days","weeks","months","quarters","years","completeDays","completeWeeks","completeMonths","completeQuarters","completeYears"]}},"required":["type","subtype","rangeType","rangeN","periodType"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_month_year"},"month":{"type":"number"},"year":{"type":"number"}},"required":["type","subtype","month","year"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_quarter_year"},"quarter":{"type":"number"},"year":{"type":"number"}},"required":["type","subtype","quarter","year"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_single"},"date":{"type":"string"}},"required":["type","subtype","date"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_null"}},"required":["type","subtype"]},{"type":"object","properties":{"type":{"type":"string","const":"number"},"value":{"type":"number"}},"required":["type","value"]},{"type":"object","properties":{"type":{"type":"string","const":"text"},"value":{"type":"string","minLength":1}},"required":["type","value"]}],"description":"A value of a report parameter, in the shape of its type. Copy the shape of the parameter\'s value in listBursts, or of a variant\'s in listBurstVariants: - A list of values: { \\"type\\": \\"categorical\\", \\"values\\": [\\"EMEA\\"] }, with at least one value. operator can also be is_not, contains or doesnt_contain; it is is when left out. - A number: { \\"type\\": \\"number\\", \\"value\\": 10 }. Text: { \\"type\\": \\"text\\", \\"value\\": \\"EMEA\\" }. - A date range: { \\"type\\": \\"date\\", \\"subtype\\": \\"date_range\\", \\"startDate\\": \\"2026-01-01\\", \\"endDate\\": \\"2026-03-31\\" }. One date: { \\"type\\": \\"date\\", \\"subtype\\": \\"date_single\\", \\"date\\": \\"2026-03-31\\" }. - A month or a quarter: { \\"type\\": \\"date\\", \\"subtype\\": \\"date_month_year\\", \\"month\\": 3, \\"year\\": 2026 } (months 1 to 12), { \\"type\\": \\"date\\", \\"subtype\\": \\"date_quarter_year\\", \\"quarter\\": 1, \\"year\\": 2026 }. - A relative period: { \\"type\\": \\"date\\", \\"subtype\\": \\"date_relative\\", \\"rangeType\\": \\"lastN\\", \\"rangeN\\": 3, \\"periodType\\": \\"months\\" }. rangeType is current, lastN or nextN; periodType is days, weeks, months, quarters or years, or completeDays through completeYears for whole periods only."},"examples":[{"5e7a9c1b-3d5f-4b7d-9e1a-3c5e7a9b1d3f":{"type":"categorical","values":["EMEA"]}}]},"filters":{"description":"For a burst by filters: the value the variant applies to each filter, by its ID in the burst\'s filters, at least one. A filter left out keeps its value on the dashboard. An ID that isn\'t one of the burst\'s filters returns 400 and adds nothing.","type":"object","propertyNames":{"type":"string"},"additionalProperties":{"anyOf":[{"type":"object","properties":{"type":{"type":"string","const":"categorical"},"values":{"type":"array","items":{"anyOf":[{"type":"string"},{"type":"number"}]}},"operator":{"type":"string","enum":["is","is_not","contains","doesnt_contain"]}},"required":["type","values"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_range"},"startDate":{"type":"string"},"endDate":{"type":"string"}},"required":["type","subtype","startDate","endDate"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_relative"},"rangeType":{"type":"string","enum":["current","lastN","nextN"]},"rangeN":{"type":"number"},"periodType":{"type":"string","enum":["days","weeks","months","quarters","years","completeDays","completeWeeks","completeMonths","completeQuarters","completeYears"]}},"required":["type","subtype","rangeType","rangeN","periodType"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_month_year"},"month":{"type":"number"},"year":{"type":"number"}},"required":["type","subtype","month","year"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_quarter_year"},"quarter":{"type":"number"},"year":{"type":"number"}},"required":["type","subtype","quarter","year"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_single"},"date":{"type":"string"}},"required":["type","subtype","date"]},{"type":"object","properties":{"type":{"type":"string","const":"date"},"subtype":{"type":"string","const":"date_null"}},"required":["type","subtype"]},{"type":"object","properties":{"type":{"type":"string","const":"number"},"value":{"type":"number"}},"required":["type","value"]},{"type":"object","properties":{"type":{"type":"string","const":"text"},"value":{"type":"string","minLength":1}},"required":["type","value"]}],"description":"A value of a filter, in the shape of its valueType, the same shapes as a report parameter value. Copy the shape of a variant\'s value of the filter in listBurstVariants."},"examples":[{"3b1f8c2e-6a4d-4f1e-9b2a-7c5d8e1f2a3b":{"type":"categorical","values":["EMEA"]}}]}},"additionalProperties":false}}.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'addBurstVariants',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'addBurstVariants',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Turns a burst of an older report, a Google Slides or PowerPoint file, into a new burst of Rollstack reports of type SlideDeck, as Convert to Rollstack slides does for one report. The burst\'s template is converted as "Convert report to slide deck" does, each filter the variants differ by becomes a report parameter on it, and each variant becomes a report of its own with its values of those parameters. The older burst\'s settings, sharing, schedules, failure notices and emails are copied onto the new burst and its reports. The older burst and its files stay as they are. Answers the new burst, and what became of each filter, variant and sync, with the reason for each that was not converted, and what the older burst had that has no equivalent. It starts an update of the template and of every converted variant to fill their charts, as "Run burst variants" does: follow them with "Get burst run", and start the ones that failed to start again. Only the older burst\'s editors may. It answers once the conversion ends, which can take several minutes for a burst with many variants: send an Idempotency-Key (MCP: idempotencyKey) so a retry doesn\'t convert it twice. Counts against the 10 imports a minute per user.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'convertBurst',
				],
			},
		},
	},
	{
		displayName: 'Burst ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The burst to act on, by its ID from listBursts. You can also copy it from the burst\'s link in Rollstack: it\'s the part right after /collections/.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'convertBurst',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'convertBurst',
				],
			},
		},
		options: [
			{
				displayName: 'Folder ID',
				name: 'folderId',
				type: 'string',
				default: '',
				description: 'The folder to put the new report in, by its ID from listFolders; it must be one you can add reports to. If omitted, it goes at the top level, as in the app.',
			},
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name for the new report, as members will see it in Rollstack. Leading and trailing spaces are removed, and it can\'t be blank. If omitted, it takes the older report\'s name.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Makes a report the template of a new burst, and answers the burst, named after the report and with no variants yet. Add them with "Add burst variants". A Rollstack report\'s variants differ by the report parameters in parameterIds, found with "Get report parameters". An older report\'s variants differ by the filters in filters, found with "List sync filters": a folder is made for the burst in Google Drive or OneDrive and the report\'s file is copied into it as the template, which can take a minute. Only the report\'s editors may.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'createBurst',
				],
			},
		},
	},
	{
		displayName: 'Template Report ID',
		name: 'templateReportId',
		required: true,
		type: 'string',
		default: '',
		description: 'The report to make the template of the burst, by its ID from listReports. You must be able to edit it, and it can\'t already be part of a burst. A Rollstack report must have datasheets, and becomes the template as it is. An older report must have syncs: its file is copied into a new folder for the burst, and the copy becomes the template.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'createBurst',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'createBurst',
				],
			},
		},
		options: [
			{
				displayName: 'Drive ID',
				name: 'driveId',
				type: 'string',
				default: '',
				description: 'For an older report: the shared drive parentFolderId is in. Leave it out for a folder in your own drive.',
			},
			{
				displayName: 'Filters',
				name: 'filters',
				type: 'json',
				default: '',
				description: 'For an older report, such as a Google Slides or PowerPoint file: the filters of its syncs the variants differ by. Enter it as JSON, as this JSON Schema describes: {"type":"object","properties":{"primaryIds":{"minItems":1,"maxItems":3,"type":"array","items":{"type":"string"},"description":"The filters that name the variants, by their ID from listReportSyncFilters, in the order their values name a variant. 1 to 3. With more than one, each variant\'s file goes in a folder per value, one level per filter."},"secondaryIds":{"default":[],"description":"Filters a variant can also set, which don\'t name it, by their ID from listReportSyncFilters.","type":"array","items":{"type":"string"}}},"required":["primaryIds"],"additionalProperties":false}.',
			},
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Parameter IDs',
				name: 'parameterIds',
				type: 'string',
				default: '',
				description: 'For a Rollstack report: the template report\'s parameters the variants differ by, by their ID from getReportParameters, in the order their values name a variant. Each must be burstable there. At least one. Separate several with commas, or enter a JSON array.',
			},
			{
				displayName: 'Parent Folder ID',
				name: 'parentFolderId',
				type: 'string',
				default: '',
				description: 'For an older report: the Google Drive or OneDrive folder to create the burst\'s folder in, by its ID in that drive. The template and the variants\' files go in the burst\'s folder. Defaults to the top of your drive.',
			},
			{
				displayName: 'Variant Naming',
				name: 'variantNaming',
				type: 'options',
				options: [
					{
						name: 'Prefix',
						value: 'prefix',
					},
					{
						name: 'sameName',
						value: 'sameName',
					},
					{
						name: 'Suffix',
						value: 'suffix',
					},
				],
				default: 'suffix',
				description: 'How each variant\'s report is named from the burst\'s name and the name the variant is added with, EMEA in a burst named Regional Review: suffix gives Regional Review - EMEA, prefix gives EMEA - Regional Review, and sameName gives EMEA. It applies to variants added from then on. Defaults to suffix.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Adds an email configuration to a burst and answers it: one email to its recipients with the variants it selects, every variant by default. Sends nothing. Only the burst\'s owner and admins may.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'createBurstEmailConfig',
				],
			},
		},
	},
	{
		displayName: 'Burst ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The burst to act on, by its ID from listBursts. You can also copy it from the burst\'s link in Rollstack: it\'s the part right after /collections/.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'createBurstEmailConfig',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'createBurstEmailConfig',
				],
			},
		},
		options: [
			{
				displayName: 'BCC',
				name: 'bcc',
				type: 'string',
				default: '',
				description: 'The addresses that also receive the email without the others seeing them. Separate several with commas, or enter a JSON array.',
			},
			{
				displayName: 'CC',
				name: 'cc',
				type: 'string',
				default: '',
				description: 'The addresses copied on the email, which every recipient can see. Separate several with commas, or enter a JSON array.',
			},
			{
				displayName: 'Email Analytics Enabled',
				name: 'emailAnalyticsEnabled',
				type: 'boolean',
				default: false,
				description: 'Whether opens of the email are tracked',
			},
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The configuration\'s name, as shown in the burst\'s Emailing tab in the app. To send null, enter null.',
			},
			{
				displayName: 'Reply To',
				name: 'replyTo',
				type: 'string',
				default: '',
				description: 'Where replies to the email go. Separate several with commas, or enter a JSON array.',
			},
			{
				displayName: 'Send Attachment As Link',
				name: 'sendAttachmentAsLink',
				type: 'boolean',
				default: false,
				description: 'Whether the email puts the pdf or ppt file behind a Download PDF or Download PPT button instead of attaching it. When false, the file is attached. Has no effect with cloudLink.',
			},
			{
				displayName: 'Sharing Format',
				name: 'sharingFormat',
				type: 'options',
				options: [
					{
						name: 'cloudLink',
						value: 'cloudLink',
					},
					{
						name: 'Link',
						value: 'link',
					},
					{
						name: 'PDF',
						value: 'pdf',
					},
					{
						name: 'PPT',
						value: 'ppt',
					},
				],
				default: 'cloudLink',
				description: 'How the email delivers the report. pdf and ppt send it as a PDF or PowerPoint file, attached or behind a download button (see sendAttachmentAsLink); a slide deck leaves its hidden slides out. link sends a link to the Google Drive or OneDrive file an older report updates, shared with the recipients as set in the app; an email report sends its content in the email itself, and a slide deck has no such file, so one whose settings still contain link is emailed as a PDF behind a download button. cloudLink (Exported link in the app), for slide decks only, sends a link to the copy exported to Google Drive or OneDrive and shares it with the addresses in to, cc and bcc with the sharing permission set in the app, viewer unless changed there; if no permission is set, as after PDF or PPT was picked in the app, the copy isn\'t shared with them.',
			},
			{
				displayName: 'SMTP Server ID',
				name: 'smtpServerId',
				type: 'string',
				default: '',
				description: 'The SMTP connection the email is sent through, from listSmtpConnections; null sends from Rollstack\'s own address. To send null, enter null.',
			},
			{
				displayName: 'To',
				name: 'to',
				type: 'string',
				default: '',
				description: 'The addresses the email goes to. Separate several with commas, or enter a JSON array.',
			},
			{
				displayName: 'Variant IDs',
				name: 'variantIds',
				type: 'string',
				default: '',
				description: 'The variants the email includes, by their ID in listBurstVariants. Empty includes every variant, also those added later. Separate several with commas, or enter a JSON array.',
			},
			{
				displayName: 'Zip Attachments',
				name: 'zipAttachments',
				type: 'boolean',
				default: false,
				description: 'Whether the variants\' files come in one zip file, with a file format',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Starts a run of every variant of a burst, or of the variants passed, as "Start report run" does for each: it refreshes the variant\'s data, and repairs a Rollstack report\'s slides with AI. An older report\'s variants run together as the app\'s Update runs them, in batches and behind the organization\'s other burst runs, so a variant can wait its turn before its run shows. Each such run updates the variant\'s file when it has one, and emails the variant to its recipients when its email trigger is all, as "Start report run" does. The template report isn\'t run; run it with "Start report run". Answers each variant\'s run at once: follow them all with "Get burst run" until none is running, or one with "Get report run", passing the variant\'s id and runId. A variant already running answers that run and starts nothing. From an AI client, a run that emails variants only asks the user to confirm it in Rollstack: it answers confirmation-required and runs once they confirm.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'startBurstRun',
				],
			},
		},
	},
	{
		displayName: 'Burst ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The burst to act on, by its ID from listBursts. You can also copy it from the burst\'s link in Rollstack: it\'s the part right after /collections/.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'startBurstRun',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'startBurstRun',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Variant IDs',
				name: 'variantIds',
				type: 'string',
				default: '',
				description: 'The variants to run, by their ID in listBurstVariants, instead of every variant, such as those whose last run failed. Each must be a variant of this burst. 1 to 500 IDs. Separate several with commas, or enter a JSON array.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Sends a burst\'s email configuration now: one email to its recipients with each variant it selects. Building it outlasts the request, so it goes out after the answer. Send a test with "Send burst email configuration test" first to check how it looks. Only the burst\'s owner and admins may. Sends have a low rate limit. From an AI client, the send only asks the user to confirm it in Rollstack: it answers confirmation-required and runs once they confirm.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'sendBurstEmailConfig',
				],
			},
		},
	},
	{
		displayName: 'Burst ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The burst to act on, by its ID from listBursts. You can also copy it from the burst\'s link in Rollstack: it\'s the part right after /collections/.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'sendBurstEmailConfig',
				],
			},
		},
	},
	{
		displayName: 'Config ID',
		name: 'configId',
		required: true,
		type: 'string',
		default: '',
		description: 'The email configuration, by its ID from listBurstEmailConfigs',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'sendBurstEmailConfig',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'sendBurstEmailConfig',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Sends each variant\'s own email now, to its own recipients, as the app\'s Send does: every variant, or those passed. The template sends nothing. Every recipient gets an email. Only the burst\'s owner and admins may. Sends have a low rate limit. From an AI client, the send only asks the user to confirm it in Rollstack: it answers confirmation-required and runs once they confirm.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'sendBurstVariantEmails',
				],
			},
		},
	},
	{
		displayName: 'Burst ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The burst to act on, by its ID from listBursts. You can also copy it from the burst\'s link in Rollstack: it\'s the part right after /collections/.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'sendBurstVariantEmails',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'sendBurstVariantEmails',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Variant IDs',
				name: 'variantIds',
				type: 'string',
				default: '',
				description: 'The variants to act on, by their ID in listBurstVariants, instead of every variant. Each must be a variant of this burst. 1 to 500 IDs. Separate several with commas, or enter a JSON array.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Renames a burst and answers it, and with renameVariants its reports too. Only the burst\'s owner and admins may.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'renameBurst',
				],
			},
		},
	},
	{
		displayName: 'Burst ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The burst to act on, by its ID from listBursts. You can also copy it from the burst\'s link in Rollstack: it\'s the part right after /collections/.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'renameBurst',
				],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		required: true,
		type: 'string',
		default: '',
		description: 'The burst\'s new name',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'renameBurst',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'renameBurst',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Rename Files',
				name: 'renameFiles',
				type: 'boolean',
				default: false,
				description: 'Whether to also rename the burst\'s folders, for a burst of Google Slides, Google Docs, PowerPoint or Word reports. It goes on after the answer. Defaults to false.',
			},
			{
				displayName: 'Rename Variants',
				name: 'renameVariants',
				type: 'boolean',
				default: false,
				description: 'Whether to rename every report in the burst after the new name too, as variantNaming builds each name, the template included. A Rollstack report\'s burst renames the template, which is the report the burst was made from. Defaults to false.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Changes how the variants\' own emails are sent, as the app\'s Burst settings in its Emailing tab do: only the settings passed, on the template, whose settings new variants copy, and on the variants. Each keeps its recipients: set them with "Set variant recipients". Sends no email. Members who only contribute change their own variants. See a report\'s settings with "Get email settings".',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'updateBurstVariantEmailSettings',
				],
			},
		},
	},
	{
		displayName: 'Burst ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The burst to act on, by its ID from listBursts. You can also copy it from the burst\'s link in Rollstack: it\'s the part right after /collections/.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'updateBurstVariantEmailSettings',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'updateBurstVariantEmailSettings',
				],
			},
		},
		options: [
			{
				displayName: 'Email Analytics Enabled',
				name: 'emailAnalyticsEnabled',
				type: 'boolean',
				default: false,
				description: 'Whether to track when recipients open the emails. true returns 403 unless email analytics is on for the organization. If omitted, stays as it is.',
			},
			{
				displayName: 'Group Recipients',
				name: 'groupRecipients',
				type: 'boolean',
				default: false,
				description: 'Whether each variant sends one email to all its to addresses together, rather than one email per address. If omitted, stays as it is.',
			},
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Ignored Failure Status Messages',
				name: 'ignoredFailureStatusMessages',
				type: 'string',
				default: '',
				description: 'The failures that shouldn\'t stop a run from emailing a variant (see trigger), such as the error.code values from listReportSyncs. If omitted, stays as it is. The other values describe why a sync of an older report failed, and have an effect only on older reports: - dashboard_not_found, or the older tableau_view_not_found: the dashboard, Tableau workbook, Power BI report or spreadsheet could not be found. - dashboard_tab_not_found: the dashboard tab, Tableau view, Power BI report page or spreadsheet sheet could not be found. - dashboard_not_ready: the dashboard took too long to load. - dashboard_has_errors: the dashboard or spreadsheet failed to load because of an error in the tool it comes from. - dashboard_invalid_layout: the dashboard\'s layout is invalid, and it needs to be saved again. - element_not_found, or the older metabase_element_not_found and looker_element_not_found: the visualization could not be found. - slide_not_found, or the older google_slide_not_found: the slide that shows the visualization could not be found. - file_not_found: the spreadsheet file the visualization comes from could not be found. - sheet_not_found: the spreadsheet sheet could not be found. - sheet_hidden: the spreadsheet sheet is hidden and needs to be unhidden. - range_not_found: the spreadsheet range could not be found. - duplicate_file_failed: Rollstack could not prepare the spreadsheet file for the update. - merged_range_on_filter_range: the visualization has merged cells, which filters can\'t be applied to. - insufficient_permissions: the owner doesn\'t have edit access to the file. - image_cropping_failed: Rollstack could not crop the visualization\'s image. - visualization_not_found: the visualization could not be found in the dashboard. - visualization_not_ready: the visualization took too long to load. - visualization_has_errors: the visualization failed to load because of an error in the tool it comes from. - visualization_empty, or the older empty_data: the visualization is empty. - invalid_credentials: the connection\'s credentials are invalid. - missing_credentials: the connection\'s credentials were deleted, or the owner\'s access to it was suspended. - instance_unavailable: the data source\'s instance is temporarily unavailable. - column_not_found: a column the native chart uses is missing from its data. - fetch_summary_data_error, fetch_visual_specification_error, missing_data, missing_formatted_value and viz_not_ready: Rollstack could not fetch the data of a native chart. - incorrect_data_structure: the native chart\'s structure doesn\'t fit its data. - malformed_data: Rollstack could not fetch the data of a native chart or, from Snowflake, Databricks or BigQuery, the query is invalid. - worksheet_not_found: the Tableau worksheet could not be found. - sync_not_found: the visualization was deleted. - file_update_failed: the data was fetched but could not be written into the file. Separate several with commas, or enter a JSON array. Each one of: tableau_view_not_found, dashboard_not_found, dashboard_tab_not_found, dashboard_not_ready, dashboard_has_errors, dashboard_invalid_layout, metabase_element_not_found, looker_element_not_found, element_not_found, google_slide_not_found, slide_not_found, file_not_found, sheet_not_found, sheet_hidden, range_not_found, duplicate_file_failed, merged_range_on_filter_range, insufficient_permissions, image_cropping_failed, visualization_not_found, visualization_not_ready, visualization_has_errors, visualization_empty, invalid_credentials, missing_credentials, instance_unavailable, column_not_found, empty_data, fetch_summary_data_error, fetch_visual_specification_error, incorrect_data_structure, missing_data, missing_formatted_value, malformed_data, viz_not_ready, worksheet_not_found, sync_not_found, file_update_failed, internal_server_error.',
			},
			{
				displayName: 'Send Attachment As Link',
				name: 'sendAttachmentAsLink',
				type: 'boolean',
				default: false,
				description: 'Whether the email puts the pdf or ppt file behind a Download PDF or Download PPT button instead of attaching it. When false, the file is attached. Has no effect with cloudLink. If omitted, stays as it is.',
			},
			{
				displayName: 'Sharing Format',
				name: 'sharingFormat',
				type: 'options',
				options: [
					{
						name: 'cloudLink',
						value: 'cloudLink',
					},
					{
						name: 'Link',
						value: 'link',
					},
					{
						name: 'PDF',
						value: 'pdf',
					},
					{
						name: 'PPT',
						value: 'ppt',
					},
				],
				default: 'cloudLink',
				description: 'How the email delivers the report. pdf and ppt send it as a PDF or PowerPoint file, attached or behind a download button (see sendAttachmentAsLink); a slide deck leaves its hidden slides out. link sends a link to the Google Drive or OneDrive file an older report updates, shared with the recipients as set in the app; an email report sends its content in the email itself, and a slide deck has no such file, so one whose settings still contain link is emailed as a PDF behind a download button. cloudLink (Exported link in the app), for slide decks only, sends a link to the copy exported to Google Drive or OneDrive and shares it with the addresses in to, cc and bcc with the sharing permission set in the app, viewer unless changed there; if no permission is set, as after PDF or PPT was picked in the app, the copy isn\'t shared with them. If omitted, stays as it is.',
			},
			{
				displayName: 'SMTP Server ID',
				name: 'smtpServerId',
				type: 'string',
				default: '',
				description: 'The SMTP connection to send the emails through, from listSmtpConnections; null sends from Rollstack\'s own address. If omitted, each report keeps its own sender. To send null, enter null.',
			},
			{
				displayName: 'Trigger',
				name: 'trigger',
				type: 'options',
				options: [
					{
						name: 'All',
						value: 'all',
					},
					{
						name: 'None',
						value: 'none',
					},
					{
						name: 'Scheduled',
						value: 'scheduled',
					},
				],
				default: 'all',
				description: 'Which of the report\'s runs email it automatically. A run emails it when it updates everything, or when all its failures are in ignoredFailureStatusMessages. On a slide deck, all and scheduled work the same way: only runs started by its schedules (see getReportSchedules) send the email, and a slide deck with no datasheets is never emailed by its runs. On an older report, all emails after every run of the whole report, whether started by a schedule, with startReportRun or in the app, and scheduled only after runs its schedules start; a run of only some syncs never emails it. With none (Manual in the app), no run sends it: the email goes out only when sent with sendReportEmail or from the app. If omitted, stays as it is.',
			},
			{
				displayName: 'Variant IDs',
				name: 'variantIds',
				type: 'string',
				default: '',
				description: 'The reports to change, by their ID: variants from listBurstVariants, and the burst\'s templateReportId, whose settings new variants copy. If omitted, the template and every variant you can edit. Separate several with commas, or enter a JSON array.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Changes the fields passed of a burst\'s email configuration and answers it. Sends nothing. Only the burst\'s owner and admins may.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'updateBurstEmailConfig',
				],
			},
		},
	},
	{
		displayName: 'Burst ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The burst to act on, by its ID from listBursts. You can also copy it from the burst\'s link in Rollstack: it\'s the part right after /collections/.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'updateBurstEmailConfig',
				],
			},
		},
	},
	{
		displayName: 'Config ID',
		name: 'configId',
		required: true,
		type: 'string',
		default: '',
		description: 'The email configuration, by its ID from listBurstEmailConfigs',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'updateBurstEmailConfig',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'updateBurstEmailConfig',
				],
			},
		},
		options: [
			{
				displayName: 'BCC',
				name: 'bcc',
				type: 'string',
				default: '',
				description: 'The addresses that also receive the email without the others seeing them. Separate several with commas, or enter a JSON array.',
			},
			{
				displayName: 'CC',
				name: 'cc',
				type: 'string',
				default: '',
				description: 'The addresses copied on the email, which every recipient can see. Separate several with commas, or enter a JSON array.',
			},
			{
				displayName: 'Email Analytics Enabled',
				name: 'emailAnalyticsEnabled',
				type: 'boolean',
				default: false,
				description: 'Whether opens of the email are tracked',
			},
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The configuration\'s name, as shown in the burst\'s Emailing tab in the app. To send null, enter null.',
			},
			{
				displayName: 'Reply To',
				name: 'replyTo',
				type: 'string',
				default: '',
				description: 'Where replies to the email go. Separate several with commas, or enter a JSON array.',
			},
			{
				displayName: 'Send Attachment As Link',
				name: 'sendAttachmentAsLink',
				type: 'boolean',
				default: false,
				description: 'Whether the email puts the pdf or ppt file behind a Download PDF or Download PPT button instead of attaching it. When false, the file is attached. Has no effect with cloudLink.',
			},
			{
				displayName: 'Sharing Format',
				name: 'sharingFormat',
				type: 'options',
				options: [
					{
						name: 'cloudLink',
						value: 'cloudLink',
					},
					{
						name: 'Link',
						value: 'link',
					},
					{
						name: 'PDF',
						value: 'pdf',
					},
					{
						name: 'PPT',
						value: 'ppt',
					},
				],
				default: 'cloudLink',
				description: 'How the email delivers the report. pdf and ppt send it as a PDF or PowerPoint file, attached or behind a download button (see sendAttachmentAsLink); a slide deck leaves its hidden slides out. link sends a link to the Google Drive or OneDrive file an older report updates, shared with the recipients as set in the app; an email report sends its content in the email itself, and a slide deck has no such file, so one whose settings still contain link is emailed as a PDF behind a download button. cloudLink (Exported link in the app), for slide decks only, sends a link to the copy exported to Google Drive or OneDrive and shares it with the addresses in to, cc and bcc with the sharing permission set in the app, viewer unless changed there; if no permission is set, as after PDF or PPT was picked in the app, the copy isn\'t shared with them.',
			},
			{
				displayName: 'SMTP Server ID',
				name: 'smtpServerId',
				type: 'string',
				default: '',
				description: 'The SMTP connection the email is sent through, from listSmtpConnections; null sends from Rollstack\'s own address. To send null, enter null.',
			},
			{
				displayName: 'To',
				name: 'to',
				type: 'string',
				default: '',
				description: 'The addresses the email goes to. Separate several with commas, or enter a JSON array.',
			},
			{
				displayName: 'Variant IDs',
				name: 'variantIds',
				type: 'string',
				default: '',
				description: 'The variants the email includes, by their ID in listBurstVariants. Empty includes every variant, also those added later. Separate several with commas, or enter a JSON array.',
			},
			{
				displayName: 'Zip Attachments',
				name: 'zipAttachments',
				type: 'boolean',
				default: false,
				description: 'Whether the variants\' files come in one zip file, with a file format',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Changes the settings passed and answers them all. A Rollstack report\'s burst takes only variantNaming. An older report\'s run settings, such as updateMethod, also apply to its existing variants. Only the burst\'s owner and admins may.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'updateBurstSettings',
				],
			},
		},
	},
	{
		displayName: 'Burst ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The burst to act on, by its ID from listBursts. You can also copy it from the burst\'s link in Rollstack: it\'s the part right after /collections/.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'updateBurstSettings',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'updateBurstSettings',
				],
			},
		},
		options: [
			{
				displayName: 'Archive Variants In Folder',
				name: 'archiveVariantsInFolder',
				type: 'boolean',
				default: false,
				description: 'Whether each variant\'s archived copies go in an archive folder next to its file, rather than beside it, with updateMethod archive. For an older report\'s burst only: a Rollstack report\'s burst returns 400.',
			},
			{
				displayName: 'Case Insensitive Filters',
				name: 'caseInsensitiveFilters',
				type: 'boolean',
				default: false,
				description: 'Whether a variant\'s filter values match the dashboard\'s values whatever their case. It applies when filters are next applied, such as with reapplyBurstFilters. For an older report\'s burst only: a Rollstack report\'s burst returns 400.',
			},
			{
				displayName: 'Datestamp Suffix',
				name: 'datestampSuffix',
				type: 'string',
				default: '',
				description: 'With updateMethod archive: the date format added to the name of each archived copy. For an older report\'s burst only: a Rollstack report\'s burst returns 400.',
			},
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Update Method',
				name: 'updateMethod',
				type: 'options',
				options: [
					{
						name: 'Archive',
						value: 'archive',
					},
					{
						name: 'Update',
						value: 'update',
					},
					{
						name: 'updateVisualizations',
						value: 'updateVisualizations',
					},
				],
				default: 'archive',
				description: 'How each variant\'s run changes its file. update updates the same file with the latest data. archive first saves a copy of the file, named with the date of its previous run, then updates the original. updateVisualizations is the method email reports are created with. It applies to new variants and to the existing ones. For an older report\'s burst only: a Rollstack report\'s burst returns 400.',
			},
			{
				displayName: 'Variant Empty Visualizations',
				name: 'variantEmptyVisualizations',
				type: 'options',
				options: [
					{
						name: 'hideCascade',
						value: 'hideCascade',
					},
					{
						name: 'hideCascadeIfAtLeastOneVisualizationIsEmpty',
						value: 'hideCascadeIfAtLeastOneVisualizationIsEmpty',
					},
					{
						name: 'hideNoCascade',
						value: 'hideNoCascade',
					},
					{
						name: 'Show',
						value: 'show',
					},
				],
				default: 'hideCascade',
				description: 'What a variant\'s run does with a chart or table that has no data for its values. show places it empty, hideNoCascade leaves it out of the file, hideCascade hides its slide when every visualization on the slide is empty, and hideCascadeIfAtLeastOneVisualizationIsEmpty hides its slide when any of them is. For an older report\'s burst only: a Rollstack report\'s burst returns 400.',
			},
			{
				displayName: 'Variant Naming',
				name: 'variantNaming',
				type: 'options',
				options: [
					{
						name: 'Prefix',
						value: 'prefix',
					},
					{
						name: 'sameName',
						value: 'sameName',
					},
					{
						name: 'Suffix',
						value: 'suffix',
					},
				],
				default: 'prefix',
				description: 'How each variant\'s report is named from the burst\'s name and the name the variant is added with, EMEA in a burst named Regional Review: suffix gives Regional Review - EMEA, prefix gives EMEA - Regional Review, and sameName gives EMEA. It applies to variants added from then on.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Sets who each variant\'s email goes to, replacing its to, cc and bcc. Its other email settings, such as its sender and which runs send it, stay as copied from the template; a variant without email settings gets the defaults. Sends no email. As in the app, the burst\'s owner and admins can set any variant\'s recipients, other members only those of variants they own or can edit; the others are skipped, as is a variant with several recipient groups, which the app asks to reconcile first.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'updateBurstVariantRecipients',
				],
			},
		},
	},
	{
		displayName: 'Burst ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The burst to act on, by its ID from listBursts. You can also copy it from the burst\'s link in Rollstack: it\'s the part right after /collections/.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'updateBurstVariantRecipients',
				],
			},
		},
	},
	{
		displayName: 'Variants',
		name: 'variants',
		required: true,
		type: 'json',
		default: '',
		description: 'The variants whose recipients to replace, 1 to 500. The other variants, and the rest of each variant\'s email settings, stay as they are. Enter it as JSON, as this JSON Schema describes: {"minItems":1,"maxItems":500,"type":"array","items":{"type":"object","properties":{"\\u0069d":{"type":"string","description":"The variant, by its ID in listBurstVariants."},"to":{"type":"array","items":{"type":"string","format":"email","pattern":"^(?!\\\\.)(?!.*\\\\.\\\\.)([A-Za-z0-9_\'+\\\\-\\\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\\\-]*\\\\.)+[A-Za-z]{2,}$","examples":["jane@acme.com"]},"description":"The addresses to send the variant\'s email to. If empty, no one receives it. At most 100 addresses across to, cc and bcc."},"cc":{"default":[],"description":"The addresses to copy on the variant\'s email, which every recipient can see. If omitted, no one is copied.","type":"array","items":{"type":"string","format":"email","pattern":"^(?!\\\\.)(?!.*\\\\.\\\\.)([A-Za-z0-9_\'+\\\\-\\\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\\\-]*\\\\.)+[A-Za-z]{2,}$","examples":["jane@acme.com"]}},"bcc":{"default":[],"description":"The addresses to also send the variant\'s email to without the other recipients seeing them. If omitted, no one is blind-copied.","type":"array","items":{"type":"string","format":"email","pattern":"^(?!\\\\.)(?!.*\\\\.\\\\.)([A-Za-z0-9_\'+\\\\-\\\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\\\-]*\\\\.)+[A-Za-z]{2,}$","examples":["jane@acme.com"]}}},"required":["\\u0069d","to"],"additionalProperties":false}}.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'updateBurstVariantRecipients',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'updateBurstVariantRecipients',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Replaces the filters an older report\'s burst varies by, then writes every variant\'s values into its syncs again, which can take a minute, and answers the burst. A filter left out is removed with every variant\'s value of it, unless replace carries those values to its new filter: confirm with the user first. Variants keep their files and names. Only the burst\'s owner and admins may. A Rollstack report\'s burst varies by report parameters and returns 400.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'updateBurstFilters',
				],
			},
		},
	},
	{
		displayName: 'Burst ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The burst to act on, by its ID from listBursts. You can also copy it from the burst\'s link in Rollstack: it\'s the part right after /collections/.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'updateBurstFilters',
				],
			},
		},
	},
	{
		displayName: 'Primary IDs',
		name: 'primaryIds',
		required: true,
		type: 'string',
		default: '',
		description: 'The filters that name the variants, by their ID in the burst\'s filters or from listReportSyncFilters, in the order their values name a variant. 1 to 3. Separate several with commas, or enter a JSON array.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'updateBurstFilters',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'updateBurstFilters',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Replace',
				name: 'replace',
				type: 'json',
				default: '',
				description: 'Carries every variant\'s value of a filter you\'re replacing to its new filter, such as one moved to another dashboard. Without it, a filter left out is removed together with every variant\'s value of it, which can\'t be undone. Enter it as JSON, as this JSON Schema describes: {"default":[],"type":"array","items":{"type":"object","properties":{"fromId":{"type":"string","description":"A filter the burst varies by now, by its ID in its filters."},"toId":{"type":"string","description":"The new filter, among primaryIds or secondaryIds, that takes its values."}},"required":["fromId","toId"],"additionalProperties":false}}.',
			},
			{
				displayName: 'Secondary IDs',
				name: 'secondaryIds',
				type: 'string',
				default: '',
				description: 'Filters a variant can also set, which don\'t name it. Separate several with commas, or enter a JSON array.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Deletes a burst with every report in it, the template included, as the app does, and can\'t be undone. A Rollstack report\'s burst uses the report it was made from as its template, so that report is deleted too. Files in Google Drive or OneDrive stay. Only the burst\'s owner may. From an AI client, the deletion only asks the user to confirm it in Rollstack: it answers confirmation-required and runs once they confirm.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'deleteBurst',
				],
			},
		},
	},
	{
		displayName: 'Burst ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The burst to act on, by its ID from listBursts. You can also copy it from the burst\'s link in Rollstack: it\'s the part right after /collections/.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'deleteBurst',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'deleteBurst',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Deletes a burst\'s email configuration. Its past sends stay. Only the burst\'s owner and admins may.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'deleteBurstEmailConfig',
				],
			},
		},
	},
	{
		displayName: 'Burst ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The burst to act on, by its ID from listBursts. You can also copy it from the burst\'s link in Rollstack: it\'s the part right after /collections/.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'deleteBurstEmailConfig',
				],
			},
		},
	},
	{
		displayName: 'Config ID',
		name: 'configId',
		required: true,
		type: 'string',
		default: '',
		description: 'The email configuration, by its ID from listBurstEmailConfigs',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'deleteBurstEmailConfig',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'deleteBurstEmailConfig',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Writes each variant\'s filter values into its syncs again, as the app\'s Reapply does: after syncs were added to the template, or a filter changed on its dashboard. It reads the dashboards with your access to their connections, and runs nothing: run the variants afterwards with "Run burst variants". Members who only contribute reapply their own variants. A Rollstack report\'s burst returns 400.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'reapplyBurstFilters',
				],
			},
		},
	},
	{
		displayName: 'Burst ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The burst to act on, by its ID from listBursts. You can also copy it from the burst\'s link in Rollstack: it\'s the part right after /collections/.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'reapplyBurstFilters',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'reapplyBurstFilters',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Variant IDs',
				name: 'variantIds',
				type: 'string',
				default: '',
				description: 'The variants to act on, by their ID in listBurstVariants, instead of every variant. Each must be a variant of this burst. 1 to 500 IDs. Separate several with commas, or enter a JSON array.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Removes variants of a burst by their ids, and deletes their reports. Find the ids with "List burst variants", which shows each variant\'s parameter or filter values, and confirm them with the user. An older report\'s variant file stays in Google Drive or OneDrive. The user must be able to edit every variant passed, or nothing is removed: the burst\'s owner and admins can edit them all, other members only their own. From an AI client, the removal only asks the user to confirm it in Rollstack: it answers confirmation-required and runs once they confirm.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'removeBurstVariants',
				],
			},
		},
	},
	{
		displayName: 'Burst ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The burst to act on, by its ID from listBursts. You can also copy it from the burst\'s link in Rollstack: it\'s the part right after /collections/.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'removeBurstVariants',
				],
			},
		},
	},
	{
		displayName: 'Variant IDs',
		name: 'variantIds',
		required: true,
		type: 'string',
		default: '',
		description: 'The variants to remove, by their ID in listBurstVariants, which shows each one\'s parameter or filter values. Each must be a variant of this burst. 1 to 500 IDs. Separate several with commas, or enter a JSON array.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'removeBurstVariants',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'removeBurstVariants',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Sends a burst\'s email configuration to you alone, to check how it looks before sending it. Only the burst\'s owner and admins may. Sends have a low rate limit.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'burst',
				],
				operation: [
					'sendBurstEmailConfigTest',
				],
			},
		},
	},
	{
		displayName: 'Burst ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The burst to act on, by its ID from listBursts. You can also copy it from the burst\'s link in Rollstack: it\'s the part right after /collections/.',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'sendBurstEmailConfigTest',
				],
			},
		},
	},
	{
		displayName: 'Config ID',
		name: 'configId',
		required: true,
		type: 'string',
		default: '',
		description: 'The email configuration, by its ID from listBurstEmailConfigs',
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'sendBurstEmailConfigTest',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'burst',
				],
				operation: [
					'sendBurstEmailConfigTest',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'The data source connections the user can see, without their credentials: each one\'s type, name, settings such as its URL, owner, admins, default user and whether any user\'s access works.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'connection',
				],
				operation: [
					'listConnections',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'The dashboards of a Looker, Metabase, Omni, Lightdash, Sigma, Tableau or Power BI connection whose name holds any word of query or its singular, in any case, at most 50: those the most of the organization\'s reports read first, copies, old and personal ones last, then most words first, read with the user\'s access to the connection. A Tableau dashboard is a workbook, its views its tabs; a Power BI one a report, its pages its tabs; a Sigma one a workbook, its pages its tabs. On a Sigma connection, query can be a link to a workbook the user pasted: it finds only that workbook, with the page the link opens on as tabId, but not the link\'s control values, saved view or tag, and a link to another Sigma organization is rejected. On a Salesforce connection it finds reports the same way, the most recently run first among equals, each with its format: a report has no tabs, so add a tabular or summary one to a report with "Add sources to report" by its reportId, without "Get dashboard", and tell the user a matrix or joined one can\'t be added yet. Search by the name the user gives, confirm the dashboard with the user, then check its tabs and charts with "Get dashboard" or add it to a report with "Add sources to report". "List connections" gives the connection\'s type and id.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'connection',
				],
				operation: [
					'searchDashboards',
				],
			},
		},
	},
	{
		displayName: 'Type',
		name: 'type',
		required: true,
		type: 'options',
		options: [
			{
				name: 'Lightdash',
				value: 'Lightdash',
			},
			{
				name: 'Looker',
				value: 'Looker',
			},
			{
				name: 'Metabase',
				value: 'Metabase',
			},
			{
				name: 'Omni',
				value: 'Omni',
			},
			{
				name: 'PowerBI',
				value: 'PowerBI',
			},
			{
				name: 'Salesforce',
				value: 'Salesforce',
			},
			{
				name: 'Sigma',
				value: 'Sigma',
			},
			{
				name: 'Tableau',
				value: 'Tableau',
			},
		],
		default: 'Lightdash',
		description: 'The type of connection, as type in listConnections: the BI tool it connects to. Only Looker, Metabase, Omni, Lightdash, Sigma, Tableau and Power BI (PowerBI) connections have dashboards, and on a Salesforce connection the search finds its reports.',
		displayOptions: {
			show: {
				resource: [
					'connection',
				],
				operation: [
					'searchDashboards',
				],
			},
		},
	},
	{
		displayName: 'Connection ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'Unique identifier for the connection, from listConnections, which also returns its type',
		displayOptions: {
			show: {
				resource: [
					'connection',
				],
				operation: [
					'searchDashboards',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'connection',
				],
				operation: [
					'searchDashboards',
				],
			},
		},
		options: [
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				description: 'Words to search for in names, separated by spaces: a dashboard, table, model or spreadsheet is returned when its name contains any of them, case-insensitively, a table\'s full name with its database and schema. If omitted, results aren\'t filtered by name. At most 50 results are returned either way.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'A dashboard of a Looker, Metabase, Omni, Lightdash, Sigma, Tableau or Power BI connection, read with the user\'s access to the connection (a Salesforce report has no tabs or charts to read, so add it with "Add sources to report" directly): its tabs, and the charts and filters of the tab tabId names, one of the ids in tabs (else the one the dashboard opens on, a Power BI report\'s or Sigma workbook\'s first page). Tableau and Power BI list no charts or filters here: once the tab is added to a report, its charts are listed from its picture for the slides agent to add; a Sigma page lists its charts and tables, and the workbook\'s controls as its filters. Find the dashboard\'s id with "Search dashboards". Confirm the dashboard and tab with the user, then add it to a report with "Add sources to report"; for another tab, call it again with that tab\'s id from tabs.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'connection',
				],
				operation: [
					'getDashboard',
				],
			},
		},
	},
	{
		displayName: 'Type',
		name: 'type',
		required: true,
		type: 'options',
		options: [
			{
				name: 'Lightdash',
				value: 'Lightdash',
			},
			{
				name: 'Looker',
				value: 'Looker',
			},
			{
				name: 'Metabase',
				value: 'Metabase',
			},
			{
				name: 'Omni',
				value: 'Omni',
			},
			{
				name: 'PowerBI',
				value: 'PowerBI',
			},
			{
				name: 'Sigma',
				value: 'Sigma',
			},
			{
				name: 'Tableau',
				value: 'Tableau',
			},
		],
		default: 'Lightdash',
		description: 'The type of connection, as type in listConnections: the BI tool it connects to. Only Looker, Metabase, Omni, Lightdash, Sigma, Tableau and Power BI (PowerBI) connections have dashboards.',
		displayOptions: {
			show: {
				resource: [
					'connection',
				],
				operation: [
					'getDashboard',
				],
			},
		},
	},
	{
		displayName: 'Connection ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'Unique identifier for the connection, from listConnections, which also returns its type',
		displayOptions: {
			show: {
				resource: [
					'connection',
				],
				operation: [
					'getDashboard',
				],
			},
		},
	},
	{
		displayName: 'Dashboard ID',
		name: 'dashboardId',
		required: true,
		type: 'string',
		default: '',
		description: 'The dashboard to read, by the ID that searchDashboards returns',
		displayOptions: {
			show: {
				resource: [
					'connection',
				],
				operation: [
					'getDashboard',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'connection',
				],
				operation: [
					'getDashboard',
				],
			},
		},
		options: [
			{
				displayName: 'Tab ID',
				name: 'tabId',
				type: 'string',
				default: '',
				description: 'The dashboard tab to read, by its ID from the tabs that getDashboard returns: a Looker, Metabase or Lightdash tab, a Tableau view, a Power BI page or a Sigma page. If omitted, the dashboard\'s first tab is used, or the whole dashboard when it has no tabs, as on Omni. A tab the dashboard doesn\'t have returns a 404 error.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'The models of a Looker, Power BI or Tableau connection whose name or group holds any word of query or its singular, in any case, at most 50: Looker explores grouped by LookML model, Power BI semantic models by workspace, Tableau published data sources by project, read with the user\'s access to the connection (on Tableau, their own Tableau user). A model is what the slides agent queries in its BI tool for the data a slide needs, where a dashboard tab comes in as a picture. Confirm the model with the user, then add it to a report with "Add sources to report" by its modelId and pass the new datasheet\'s id to "Send message to slides agent". "List connections" gives the connection\'s type and id.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'connection',
				],
				operation: [
					'searchModels',
				],
			},
		},
	},
	{
		displayName: 'Type',
		name: 'type',
		required: true,
		type: 'options',
		options: [
			{
				name: 'Looker',
				value: 'Looker',
			},
			{
				name: 'PowerBI',
				value: 'PowerBI',
			},
			{
				name: 'Tableau',
				value: 'Tableau',
			},
		],
		default: 'Looker',
		description: 'The type of connection, as type in listConnections. Only Looker, Power BI (PowerBI) and Tableau connections have models: Looker explores, Power BI semantic models and Tableau published data sources.',
		displayOptions: {
			show: {
				resource: [
					'connection',
				],
				operation: [
					'searchModels',
				],
			},
		},
	},
	{
		displayName: 'Connection ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'Unique identifier for the connection, from listConnections, which also returns its type',
		displayOptions: {
			show: {
				resource: [
					'connection',
				],
				operation: [
					'searchModels',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'connection',
				],
				operation: [
					'searchModels',
				],
			},
		},
		options: [
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				description: 'Words to search for in names, separated by spaces: a dashboard, table, model or spreadsheet is returned when its name contains any of them, case-insensitively, a table\'s full name with its database and schema. If omitted, results aren\'t filtered by name. At most 50 results are returned either way.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'The tables and views of a Snowflake, Databricks or BigQuery connection whose full name, database.schema.table (project.dataset.table on BigQuery), holds any word of query, in any case, at most 50, read with the user\'s access to the connection, as its default user when one is set. The first search of a connection reads its whole catalog, which can take a while on a large warehouse. On BigQuery it reads the billing project\'s tables, and another project\'s only when query names that project, by its ID or as the start of a name such as other-project.dataset. Search by the name the user gives and confirm the table with the user, then add it to a report with "Add sources to report" by its connection, database, schema and table, and pass the datasheet id on "Send message to slides agent": the slides agent queries it in the warehouse with SQL over all its rows. "List connections" gives the connection\'s type and id.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'connection',
				],
				operation: [
					'searchTables',
				],
			},
		},
	},
	{
		displayName: 'Type',
		name: 'type',
		required: true,
		type: 'options',
		options: [
			{
				name: 'BigQuery',
				value: 'BigQuery',
			},
			{
				name: 'Databricks',
				value: 'Databricks',
			},
			{
				name: 'Snowflake',
				value: 'Snowflake',
			},
		],
		default: 'BigQuery',
		description: 'The type of connection, as type in listConnections: the Snowflake, Databricks or BigQuery data warehouse',
		displayOptions: {
			show: {
				resource: [
					'connection',
				],
				operation: [
					'searchTables',
				],
			},
		},
	},
	{
		displayName: 'Connection ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'Unique identifier for the connection, from listConnections, which also returns its type',
		displayOptions: {
			show: {
				resource: [
					'connection',
				],
				operation: [
					'searchTables',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'connection',
				],
				operation: [
					'searchTables',
				],
			},
		},
		options: [
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				description: 'Words to search for in names, separated by spaces: a dashboard, table, model or spreadsheet is returned when its name contains any of them, case-insensitively, a table\'s full name with its database and schema. If omitted, results aren\'t filtered by name. At most 50 results are returned either way.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'The Google Sheets and Excel files the user added in the app whose name holds any word of query, in any case, most words first, at most 50. Rollstack can\'t search the user\'s whole Google Drive or OneDrive: for another file, ask the user to add it in the app. Confirm the file with the user, then list its sheets with "Get spreadsheet".',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'spreadsheet',
				],
				operation: [
					'searchSpreadsheets',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'spreadsheet',
				],
				operation: [
					'searchSpreadsheets',
				],
			},
		},
		options: [
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				description: 'Words to search for in names, separated by spaces: a dashboard, table, model or spreadsheet is returned when its name contains any of them, case-insensitively, a table\'s full name with its database and schema. If omitted, results aren\'t filtered by name. At most 50 results are returned either way.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'A Google Sheets or Excel file the user added in the app, with its sheets, read with the user\'s own Google or Microsoft account. Fails with user-missing-oauth when the user hasn\'t connected that account in the app. Find the file\'s id with "Search spreadsheets", then add a range of one of its sheets to a report with "Add sources to report" by the sheet\'s id.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'spreadsheet',
				],
				operation: [
					'getSpreadsheet',
				],
			},
		},
	},
	{
		displayName: 'Spreadsheet ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The spreadsheet whose sheets to list, by its ID from searchSpreadsheets. This is Rollstack\'s identifier, not the file\'s ID in Google Drive, OneDrive or SharePoint. It must be one of your own spreadsheets in Rollstack: another member\'s spreadsheet returns 404, as does an Excel file stored in Google Drive.',
		displayOptions: {
			show: {
				resource: [
					'spreadsheet',
				],
				operation: [
					'getSpreadsheet',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'The user\'s SMTP connections and the ones shared with the organization, without their credentials.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'smtpConnection',
				],
				operation: [
					'listSmtpConnections',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'The folders the user can see, each with its parent, null at the top level, and the user\'s permission on it: null, view, edit or manage. Pass a folder\'s id as folderId to "List reports" or "Create report", or to "Get folder" to see who it\'s shared with.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'folder',
				],
				operation: [
					'listFolders',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'A folder the user can see, with its parent and everyone who has access to it: its owner, the members it is shared with directly, and those who reach it through the folder it is nested in, each with their permission.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'folder',
				],
				operation: [
					'getFolder',
				],
			},
		},
	},
	{
		displayName: 'Folder ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The folder to act on, by its ID from listFolders or createFolder',
		displayOptions: {
			show: {
				resource: [
					'folder',
				],
				operation: [
					'getFolder',
				],
			},
		},
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Creates a folder owned by the user: at the top level, which only owners and admins of the organization may, or inside a folder the user owns or has manage on. Then file reports in it with "Update report"\'s folderId, or create them there with "Create report". Each call creates another folder, even with the same name.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'folder',
				],
				operation: [
					'createFolder',
				],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		required: true,
		type: 'string',
		default: '',
		description: 'The folder\'s name, as members will see it in Rollstack. Leading and trailing spaces are removed, and it can\'t be blank.',
		displayOptions: {
			show: {
				resource: [
					'folder',
				],
				operation: [
					'createFolder',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'folder',
				],
				operation: [
					'createFolder',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Parent Folder ID',
				name: 'parentFolderId',
				type: 'string',
				default: '',
				description: 'The folder to create it in, by its ID from listFolders: one you own or have manage on. Omit it or pass null to create it at the top level, which only owners and admins of the organization may. To send null, enter null.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Renames a folder, or moves it into another folder or to the top level, with everything in it. Members of the folder it moves into get access to its reports. Needs manage on the folder, or owning it, and the same on the one it moves into. Answers the name and parent of the folder: "Get folder" gives who has access.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'folder',
				],
				operation: [
					'updateFolder',
				],
			},
		},
	},
	{
		displayName: 'Folder ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The folder to act on, by its ID from listFolders or createFolder',
		displayOptions: {
			show: {
				resource: [
					'folder',
				],
				operation: [
					'updateFolder',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'folder',
				],
				operation: [
					'updateFolder',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The folder\'s name, as members will see it in Rollstack. Leading and trailing spaces are removed, and it can\'t be blank.',
			},
			{
				displayName: 'Parent Folder ID',
				name: 'parentFolderId',
				type: 'string',
				default: '',
				description: 'The folder to move it into, by its ID from listFolders, one you own or have manage on, and not the folder itself or one nested in it. Pass null to move it to the top level. Its reports, bursts and subfolders move with it. To send null, enter null.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Shares a folder and everything in it with a member of the organization, or changes their permission, as Share in the app does. A member new to the folder gets an email. Needs manage on the folder, or owning it.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'folder',
				],
				operation: [
					'shareFolder',
				],
			},
		},
	},
	{
		displayName: 'Folder ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The folder to act on, by its ID from listFolders or createFolder',
		displayOptions: {
			show: {
				resource: [
					'folder',
				],
				operation: [
					'shareFolder',
				],
			},
		},
	},
	{
		displayName: 'User ID',
		name: 'userId',
		required: true,
		type: 'number',
		default: 0,
		typeOptions: {
			maxValue: 9007199254740991,
			numberPrecision: 0,
		},
		description: 'The member to share the folder with, or to unshare it from: their ID from listMembers, which only owners and admins can call, or their userId in access from getFolder. Only active members of the organization. Anyone the folder is shared with can unshare it from themselves.',
		displayOptions: {
			show: {
				resource: [
					'folder',
				],
				operation: [
					'shareFolder',
				],
			},
		},
	},
	{
		displayName: 'Permission',
		name: 'permission',
		required: true,
		type: 'options',
		options: [
			{
				name: 'Edit',
				value: 'edit',
			},
			{
				name: 'Manage',
				value: 'manage',
			},
			{
				name: 'View',
				value: 'view',
			},
		],
		default: 'edit',
		description: 'What the member can do with the folder and everything in it. view lets them open its reports, edit also lets them change them, and manage also lets them rename, move and share the folder and add folders to it. If the folder is already shared with the member, this replaces their permission and they aren\'t notified again. Rollstack also shares the files of its reports that update a Google Drive or OneDrive file with them, as the app does.',
		displayOptions: {
			show: {
				resource: [
					'folder',
				],
				operation: [
					'shareFolder',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'folder',
				],
				operation: [
					'shareFolder',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'Removes a member\'s direct share of a folder, and their access to its reports\' files in Drive unless they still reach the folder through a parent folder, as the app does. Access through a parent folder stays: unshare that folder instead. Needs manage on the folder, or owning it, except to unshare it from yourself.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'folder',
				],
				operation: [
					'unshareFolder',
				],
			},
		},
	},
	{
		displayName: 'Folder ID',
		name: 'id',
		required: true,
		type: 'string',
		default: '',
		description: 'The folder to act on, by its ID from listFolders or createFolder',
		displayOptions: {
			show: {
				resource: [
					'folder',
				],
				operation: [
					'unshareFolder',
				],
			},
		},
	},
	{
		displayName: 'User ID',
		name: 'userId',
		required: true,
		type: 'number',
		default: 0,
		typeOptions: {
			maxValue: 9007199254740991,
			numberPrecision: 0,
		},
		description: 'The member to share the folder with, or to unshare it from: their ID from listMembers, which only owners and admins can call, or their userId in access from getFolder. Only active members of the organization. Anyone the folder is shared with can unshare it from themselves.',
		displayOptions: {
			show: {
				resource: [
					'folder',
				],
				operation: [
					'unshareFolder',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'folder',
				],
				operation: [
					'unshareFolder',
				],
			},
		},
		options: [
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '',
				description: 'A unique value, such as a UUID, that makes retrying this call safe. A retry with the same key within 24 hours answers the first call\'s result instead of running it again. Use a new key for each new call. From 1 to 255 printable ASCII characters.',
			},
		],
	},
	{
		displayName: 'Tool Description',
		name: 'toolDescription',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: 'The members of the organization, with their role, authentication role, insights access and whether they are active. Optionally only those with a status, active or deactivated, or with an email.',
		description: 'What the agent reads to decide when and how to use this tool. It starts as Rollstack\'s description of the operation, which you can change.',
		displayOptions: {
			show: {
				'@tool': [
					true,
				],
				resource: [
					'member',
				],
				operation: [
					'listMembers',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'member',
				],
				operation: [
					'listMembers',
				],
			},
		},
		options: [
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				default: '',
				placeholder: 'name@email.com',
				description: 'Only return the member with exactly this email address, ignoring case. Returns an empty list if no member has it, or if they don\'t match status.',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Active',
						value: 'active',
					},
					{
						name: 'Deactivated',
						value: 'deactivated',
					},
				],
				default: 'active',
				description: 'Only return active members, or only deactivated ones. If omitted, returns both.',
			},
		],
	},
];
