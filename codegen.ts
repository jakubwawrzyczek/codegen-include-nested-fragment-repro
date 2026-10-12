import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: 'schema.graphql',
	generates: {
		'src/globalTypes.ts': { plugins: ['typescript'] },
		'src/': {
			documents: ['src/**/*.tsx'],
			plugins: ['typescript-operations'],
			config: {
				omitOperationSuffix: true,
				inlineFragmentTypes: 'combine',
			},
			preset: 'near-operation-file',
			presetConfig: { extension: '.generated.ts', baseTypesPath: 'globalTypes.ts' },
		},
	},
};

export default config;
