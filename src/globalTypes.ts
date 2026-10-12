export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Markdown = {
  __typename?: 'Markdown';
  markdown: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  thing: Markdown;
};


export type QueryThingArgs = {
  flag: Scalars['Boolean']['input'];
};
