import type { SanityPostsGroqQueryType } from '../queries'
import type { PostType } from 'src/types'

export const convertSanityPostToPost = (posts: SanityPostsGroqQueryType[], prefix: boolean = true): PostType[] =>
  posts.map(({ title, slug, _createdAt, _updatedAt, body, mainImage, estimatedReadingTime, tags }) => ({
    title,
    slug: prefix ? `blog/${slug}` : slug,
    heroImage: mainImage?.asset?.url,
    body,
    estimatedReadingTime,
    tags: tags.map((tag) => ({ ...tag, slug: `tag/${tag.slug}` })),
    createdAt: new Date(_createdAt),
    updatedAt: new Date(_updatedAt),
  })) as unknown as PostType[]
