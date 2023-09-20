import rss from '@astrojs/rss'
import { useSanityClient } from '@sanity/astro'
import { convertSanityPostToPost, sanityPostsGroqQuery } from 'src/clients/sanity'
import { SITE_DESCRIPTION, SITE_TITLE } from 'src/config'

export async function GET(context) {
  const posts = await useSanityClient().fetch(sanityPostsGroqQuery)
  const postsTyped = convertSanityPostToPost(posts)
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: postsTyped.map((post) => ({
      ...post.data,
      link: post.slug,
    })),
  })
}
