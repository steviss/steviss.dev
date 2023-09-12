export type BlogTagsGroqQueryType = {
  _id: string
  title: string
  description: string
  _createdAt: string
  _updatedAt: Date
  _type: 'tag'
  slug: string
  posts: {
    title: string
    slug: string
    _createdAt: string
    _updatedAt: string
  }[]
}

export const blogTagsGroqQuery = `*[_type == "tag"]{
  ...,
  'slug': slug.current,
  "posts": *[_type=='post' && references(^._id)]{ 
  	title,
  	'slug': slug.current,
  	_createdAt,
    _updatedAt
	}
}`
