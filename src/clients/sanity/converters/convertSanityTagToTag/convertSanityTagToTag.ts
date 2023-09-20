import type { TagType } from 'src/types'

import { DEFAULT_PREFIX } from './convertSanityTagToTag.consts'
import type { ConvertSanityTagToTagFunction } from './convertSanityTagToTag.interface'

const convertSanityTagToTag: ConvertSanityTagToTagFunction = (items, options) => {
  const prefix = options?.prefix ? DEFAULT_PREFIX : false
  return items.map(({ title, slug, _createdAt, _updatedAt, description, posts }) => ({
    title,
    slug: prefix ? `${prefix}/${slug}` : slug,
    description,
    posts: posts.map((post) => ({
      ...post,
      createdAt: new Date(post._createdAt),
      updatedAt: new Date(post._updatedAt),
    })),
    createdAt: new Date(_createdAt),
    updatedAt: new Date(_updatedAt),
  })) as unknown as TagType[]
}

export default convertSanityTagToTag
