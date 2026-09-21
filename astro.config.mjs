import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://rramir.com',
  compressHTML: true,
  redirects: {
    '/blog': '/articles',
  },
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      filter: (page) => !page.startsWith('https://rramir.com/blog'),
      serialize(item) {
        if (item.url === 'https://rramir.com/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (
          item.url === 'https://rramir.com/securing-ai/' ||
          item.url === 'https://rramir.com/articles/'
        ) {
          item.priority = 0.8;
        } else if (item.url.includes('/articles/')) {
          item.priority = 0.6;
        }
        return item;
      },
    }),
  ],
});
