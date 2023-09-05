import type { PostType } from 'src/types'

export const convertToPostType = (posts: any[]): PostType[] =>
  posts.map(({ title, slug, _createdAt }) => ({
    title,
    slug: slug.current,
    pubDate: _createdAt,
  })) as PostType[]
