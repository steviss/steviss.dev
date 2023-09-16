import type { PortableTextProps } from 'astro-portabletext/types'

export type PostType = {
  title: string
  slug: string
  heroImage?: string
  body: PortableTextProps
  tags: {
    title: string
    slug: string
  }[]
  estimatedReadingTime: number
  updatedAt: Date
  createdAt: Date
}
