// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import 'dotenv/config'

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "nl",
    locales: ["nl", "es", "en"],
    routing: {
      prefixDefaultLocale: true,
    }
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sanity({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: "production",
    useCdn: false
  })],
});