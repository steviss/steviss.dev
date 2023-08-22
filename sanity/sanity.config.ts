import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {env} from './env.mjs'

export default defineConfig({
  name: 'default',
  title: 'steviss-dev-sanity',
  projectId: env.SANITY_STUDIO_PROJECT_ID,
  dataset: env.SANITY_STUDIO_DATASET,
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
