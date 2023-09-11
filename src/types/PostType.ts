import type { PortableTextProps } from 'astro-portabletext/types'

export type PostType = {
  title: string
  slug: string
  updatedAt: string
  createdAt: string
  heroImage?: string
  body: PortableTextProps
  tags: {
    title: string
    slug: string
  }[]
}
