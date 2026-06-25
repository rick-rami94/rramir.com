import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://rramir.com',
  compressHTML: true,
  integrations: [sitemap()],
});
