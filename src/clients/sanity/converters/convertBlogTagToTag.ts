import type { BlogPostsGroqQueryType } from '../queries'
import type { TagType } from 'src/types'

export const convertBlogTagToTag = (blogposts: BlogPostsGroqQueryType[], prefix: boolean = true): TagType[] =>
  blogposts.map(({ title, slug, _createdAt, _updatedAt, body, mainImage, tags }) => ({
    title,
    slug: prefix ? `blog/${slug}` : slug,
    body,
    heroImage: mainImage?.asset?.url,
    tags,
    createdAt: new Date(_createdAt),
    updatedAt: new Date(_updatedAt),
  })) as unknown as TagType[]
