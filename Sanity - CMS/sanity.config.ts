import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { iconPicker } from 'sanity-plugin-icon-picker'
import { structure } from './structure'

const singletonTypes = new Set(["home_page", "servicesPage", "about_page", "faq", "footer"])
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

export default defineConfig({
  name: 'default',
  title: 'SolVolt',

  projectId: 'd4g4oz53',
  dataset: 'production',

  plugins: [structureTool({ structure }), visionTool(), iconPicker() as any],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})