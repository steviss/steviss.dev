import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import sanity from '@sanity/astro'
import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'

const { SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET } = loadEnv(process.env.NODE_ENV, process.cwd(), '')

export const sanityClienfConfig = {
  projectId: SANITY_STUDIO_PROJECT_ID,
  dataset: SANITY_STUDIO_DATASET,
  apiVersion: '2021-03-25',
  useCdn: true,
}

// https://astro.build/config
export default defineConfig({
  site: 'https://steviss.dev',
  integrations: [sitemap(), react(), tailwind(), sanity(sanityClienfConfig)],
  experimental: { assets: true },
})
