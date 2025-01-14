import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cobotte.github.io',
  base: '/coffee-shop-cafe',
  integrations: [sitemap()],
  compressHTML: true,
});
