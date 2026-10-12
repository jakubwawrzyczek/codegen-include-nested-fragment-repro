/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import * as Types from './globalTypes';

export type MarkdownFragment = { markdown: string };

export type ContainerFragment = { thing: MarkdownFragment };
