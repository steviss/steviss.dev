import type { PostType } from './PostType'

export type TagType = {
  title: string
  slug: string
  updatedAt: Date
  createdAt: Date
  description: string
  posts: PostType[]
}
