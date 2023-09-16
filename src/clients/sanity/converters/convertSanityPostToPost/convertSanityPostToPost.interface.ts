import type { SanityPostsGroqQueryType } from 'src/clients/sanity/queries'
import type { ConvertSanityDocumentToTypeFunction, PostType } from 'src/types'

export interface ConvertSanityPostToPostFunctionRetrieveFieldsI {
  body?: boolean
}

export type ConvertSanityPostToPostFunction = ConvertSanityDocumentToTypeFunction<
  SanityPostsGroqQueryType,
  PostType,
  ConvertSanityPostToPostFunctionRetrieveFieldsI
>
