import gql from 'graphql-tag';
import { CONTAINER_FRAGMENT } from './helper';

export const PING_QUERY = gql`
	query Ping($flag: Boolean!) {
		...ContainerFragment @include(if: $flag)
	}
	${CONTAINER_FRAGMENT}
`;
