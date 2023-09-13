export type SanityTagsGroqQueryType = {
  slug: string
  title: string
  description: string
  posts: {
    title: string
    slug: string
    _createdAt: string
    _updatedAt: string
  }[]
  _createdAt: string
  _updatedAt: string
}

export const sanityTagsGroqQuery = `
*[_type == "tag"]{
  title,
  description,
  "slug": slug.current,
  "posts": *[_type=="post" && references(^._id)]{ 
  	title,
  	"slug": slug.current,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
  	_createdAt,
    _updatedAt
	},
  _createdAt,
  _updatedAt
}
`
