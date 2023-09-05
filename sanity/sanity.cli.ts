import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
  },
  server: {
    hostname: '0.0.0.0', //so the docker instance routes properly
    port: 3333,
  },
  vite: {
    server: {
      watch: {
        usePolling: true, //needs to be enabled if WIN + WSL because of file systems
      },
    },
  },
})
