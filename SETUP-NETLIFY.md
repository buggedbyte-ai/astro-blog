# Setting Up Netlify CMS for Your Astro Blog

## Directory Setup

First, create the necessary directories:
```bash
mkdir -p public/admin
```

## Configuration Files

### 1. Create Netlify CMS Configuration
```yaml
// filepath: public/admin/config.yml
backend:
  name: git-gateway
  branch: main

media_folder: "public/images"
public_folder: "/images"

collections:
  - name: "blog"
    label: "Blog Posts"
    folder: "src/content/blog"
    create: true
    slug: "{{slug}}"
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Publication Date", name: "date", widget: "datetime"}
      - {label: "Featured Image", name: "image", widget: "image", required: false}
      - {label: "Description", name: "description", widget: "text"}
      - {label: "Body", name: "body", widget: "markdown"}
```

### 2. Create Admin Page
```html
// filepath: public/admin/index.html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Content Manager</title>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  </head>
  <body>
    <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
  </body>
</html>
```

### 3. Update Blog Layout
Add the Netlify Identity widget to your layout:
```astro
// filepath: src/layouts/BlogLayout.astro
---
// ...existing imports...
---
<html lang="en">
  <head>
    <!-- ...existing head content... -->
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  </head>
  <!-- ...rest of your layout... -->
</html>
```

### 4. Create Content Collection Configuration
```typescript
// filepath: src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: z.string().optional()
  })
});

export const collections = {
  'blog': blogCollection
};
```

### 5. Update Posts Loading
```typescript
// filepath: src/lib/posts.ts
import { getCollection } from 'astro:content';

export async function getPosts() {
  const posts = await getCollection('blog');
  return posts.sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());
}
```

## Deployment Steps

1. Push your code to GitHub
2. Connect your repository to Netlify
3. In Netlify dashboard:
   - Enable Identity
   - Enable Git Gateway
   - Configure registration preferences (invite-only recommended)
   - Add the deploy settings for your site

## Using the CMS

1. Deploy your site
2. Navigate to `your-site.netlify.app/admin`
3. Set up your admin account
4. Start creating content!

## Content Management Flow

### How Content is Created
1. Log in to `/admin`
2. Create/edit posts through the CMS interface
3. Changes are committed to your GitHub repository
4. Netlify automatically rebuilds and deploys

### How Content is Displayed
1. Content is stored as Markdown in your repository
2. Astro processes content during build
3. Blog components fetch and display content
4. Images are served from the specified media folder

## Troubleshooting

If you encounter issues:
1. Verify Identity service is enabled
2. Check Git Gateway configuration
3. Ensure branch names match in config
4. Verify media folder permissions

## Additional Resources

- [Netlify CMS Documentation](https://www.netlifycms.org/docs/intro/)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Netlify Identity](https://docs.netlify.com/visitor-access/identity/)