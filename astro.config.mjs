import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://thestrategicrecruiter.com',
  integrations: [sitemap()],
  output: 'static',
  build: {
    // Never inline stylesheets — keeps CSP compatible (no 'unsafe-inline' needed)
    inlineStylesheets: 'never',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
