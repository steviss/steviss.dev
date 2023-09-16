import type { SanityTagsGroqQueryType } from 'src/clients/sanity/queries'
import type { ConvertSanityDocumentToTypeFunction, TagType } from 'src/types'

export type ConvertSanityTagToTagFunction = ConvertSanityDocumentToTypeFunction<SanityTagsGroqQueryType, TagType>
