import gql from 'graphql-tag';

export const MARKDOWN_FRAGMENT = gql`
	fragment MarkdownFragment on Markdown {
		markdown
	}
`;

export const CONTAINER_FRAGMENT = gql`
	fragment ContainerFragment on Query {
		thing(flag: true) {
			...MarkdownFragment
		}
	}
	${MARKDOWN_FRAGMENT}
`;
