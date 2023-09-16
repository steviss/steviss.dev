import { DEFAULT_PREFIX, RETRIEVE_FIELDS_DEFAULTS } from './convertSanityPostToPost.consts'
import type { ConvertSanityPostToPostFunction } from './convertSanityPostToPost.interface'
import type { PostType } from 'src/types'

const convertSanityPostToPost: ConvertSanityPostToPostFunction = (items, options) => {
  const prefix = options?.prefix ? DEFAULT_PREFIX : false
  const retrieveFields = Object.assign(RETRIEVE_FIELDS_DEFAULTS, { ...options?.retrieveFields })
  return items.map(({ title, slug, _createdAt, _updatedAt, body, mainImage, estimatedReadingTime, tags }) => ({
    title,
    slug: prefix ? `${prefix}/${slug}` : slug,
    heroImage: mainImage?.asset?.url,
    body: retrieveFields.body && body,
    estimatedReadingTime,
    tags: tags.map((tag) => ({ ...tag, slug: `tag/${tag.slug}` })),
    createdAt: new Date(_createdAt),
    updatedAt: new Date(_updatedAt),
  })) as unknown as PostType[]
}

export default convertSanityPostToPost
