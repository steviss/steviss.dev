import type { SanityTagsGroqQueryType } from '../queries'
import type { TagType } from 'src/types'

export const convertSanityTagToTag = (tags: SanityTagsGroqQueryType[], prefix: boolean = true): TagType[] =>
  tags.map(({ title, slug, _createdAt, _updatedAt, description, posts }) => ({
    title,
    slug: prefix ? `tag/${slug}` : slug,
    description,
    posts: posts.map((post) => ({
      ...post,
      createdAt: new Date(post._createdAt),
      updatedAt: new Date(post._updatedAt),
    })),
    createdAt: new Date(_createdAt),
    updatedAt: new Date(_updatedAt),
  })) as unknown as TagType[]
