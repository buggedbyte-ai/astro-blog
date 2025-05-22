import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://buggedbyte.github.io',
  base: '/Silent-Words',
  outDir: 'dist',
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
  },
});