export type BlogPostProps = Partial<HTMLDivElement> & {
  title: string
  slug: string
  description: string
  createdAt: Date
  heroImage?: string
}
