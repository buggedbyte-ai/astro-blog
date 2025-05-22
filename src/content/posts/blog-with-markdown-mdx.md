---
id: 4
title: "Creating a Blog with Markdown and MDX"
description: "Learn how to use Markdown and MDX to write content in your Astro blog."
date: "2025-05-11"
featured: false
---

Astro makes blogging easy with Markdown and MDX (Markdown + JSX). 

1. Add Markdown files to `/src/pages/blog/`
2. Each file becomes its own blog post!
3. Use frontmatter to define metadata:
```markdown
---
title: "My First Blog Post"
date: "2025-05-22"
description: "Why I'm learning Astro"
---

Hello world! This is my first post.
```

Want to use components in your Markdown? Use MDX:
- Install the integration:
```bash
npm install @astrojs/mdx
```
- Add to `astro.config.mjs`:
```js
import mdx from '@astrojs/mdx';
export default defineConfig({ integrations: [mdx()] });
```

**Resources:**
- [Astro Docs - Markdown](https://docs.astro.build/en/guides/markdown-content/)
- [MDX Docs](https://mdxjs.com/)