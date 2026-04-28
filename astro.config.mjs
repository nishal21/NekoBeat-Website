// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://nishal21.github.io',
  base: '/NekoBeat-Website',
  // integrations: [sitemap()], // Uncomment after: npm install @astrojs/sitemap
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' }
  }
});
