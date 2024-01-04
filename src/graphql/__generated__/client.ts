import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Link = {
  __typename?: 'Link';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  post: Link;
};


export type MutationPostArgs = {
  description: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  feed: Array<Maybe<Link>>;
  info: Scalars['String']['output'];
};

export type All_LinkQueryVariables = Exact<{ [key: string]: never; }>;


export type All_LinkQuery = { __typename?: 'Query', feed: Array<{ __typename?: 'Link', id: string, description: string } | null> };


export const All_LinkDocument = gql`
    query ALL_LINK {
  feed {
    id
    description
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    ALL_LINK(variables?: All_LinkQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<All_LinkQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<All_LinkQuery>(All_LinkDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ALL_LINK', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;