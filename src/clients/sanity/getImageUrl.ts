import { useSanityClient } from '@sanity/astro'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const imageBuilder = imageUrlBuilder(useSanityClient())

export function getImageUrl(source: SanityImageSource) {
  return imageBuilder.image(source)
}
