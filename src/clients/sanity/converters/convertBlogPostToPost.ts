import type { BlogPostsGroqQueryType } from '../queries'
import type { PostType } from 'src/types'

export const convertBlogPostToPost = (blogposts: BlogPostsGroqQueryType[], prefix: boolean = true): PostType[] =>
  blogposts.map(({ title, slug, _createdAt, _updatedAt, body, mainImage, tags }) => ({
    title,
    slug: prefix ? `blog/${slug}` : slug,
    body,
    heroImage: mainImage?.asset?.url,
    tags: tags.map((tag) => ({ ...tag, slug: `tag/${slug}` })),
    createdAt: new Date(_createdAt),
    updatedAt: new Date(_updatedAt),
  })) as unknown as PostType[]
