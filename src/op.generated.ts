/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import * as Types from './globalTypes';

import { ContainerFragment } from './helper.generated';
export type PingVariables = Exact<{
  flag: boolean;
}>;


export type Ping =
  | { thing?: MarkdownFragment }
  | Record<PropertyKey, never>
;
