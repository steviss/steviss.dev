import { defineCliConfig } from 'sanity/cli'
import { env } from './env.mjs'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
  },
  server: {
    hostname: process.env.SANITY_HOST ?? '0.0.0.0', //so the docker instance routes properly
    port: parseInt(process.env.SANITY_PORT ?? '3333', 10),
  },
  vite: {
    server: {
      watch: {
        usePolling: true, //needs to be enabled if WIN + WSL because of file systems
      },
    },
  },
})
