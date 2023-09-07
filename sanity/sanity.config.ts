import { schemaTypes } from './schemas'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

export default defineConfig({
  name: 'default',
  title: 'steviss-dev-sanity',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '',
  dataset: process.env.SANITY_STUDIO_DATASET ?? '',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
