---
id: 3
title: "Understanding Astro's File Structure and Components"
description: "A beginner's guide to the core folders and components in Astro."
date: "2025-05-10"
featured: false
---

When you open your new Astro project, it might look confusing. Here's a quick breakdown:

- `/src/pages/`: Each `.astro` or `.md` file here becomes a route.
- `/src/components/`: Reusable UI pieces go here.
- `/public/`: Static assets (images, fonts).

Astro components use a special `.astro` file format. It combines frontmatter (in a code fence at the top), HTML, and can include JavaScript or imported components from other frameworks.

Example of an `.astro` component:
```astro
---
const { title } = Astro.props;
---
<h1>{title}</h1>
```

**Resources:**
- [Astro Docs - Project Structure](https://docs.astro.build/en/core-concepts/project-structure/)