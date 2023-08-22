import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
  },
  server: {
    hostname: '0.0.0.0', //so the docker instance routes properly
    port: 3333,
  },
})
