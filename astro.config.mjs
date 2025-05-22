import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://buggedbyte-ai.github.io',
  base: '/astro-blog',
  outDir: 'dist',
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
  },
});