import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class RollstackApi implements ICredentialType {
	name = 'rollstackApi';

	displayName = 'Rollstack API';

	icon: Icon = { light: 'file:../icons/rollstack.svg', dark: 'file:../icons/rollstack.dark.svg' };

	documentationUrl =
		'https://github.com/Rollstack/n8n-nodes-rollstack?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			description:
				'A Rollstack API key, which starts with rsk_. Create it in Rollstack under Settings > Connected apps.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	// Rollstack's check that a key works: the user, organization, role and scopes the key acts with
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.rollstack.com/public/v1',
			url: '/me',
			method: 'GET',
		},
	};
}
