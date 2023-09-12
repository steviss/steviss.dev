export type BlogPostsGroqQueryType = {
  _id: string
  _updatedAt: Date
  title: string
  mainImage: {
    asset: {
      path: string
      url: string
    }
  }
  _createdAt: string
  _type: 'post'
  slug: string
  body: Record<any, any>[]
  tags: {
    title: string
    slug: string
  }[]
}

export const blogPostsGroqQuery = `*[_type == "post"]{..., mainImage{asset->{url}}, "slug": slug.current, "tags": tags[]->{title, 'slug': slug.current}}`
