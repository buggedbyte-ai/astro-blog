# Astro Blog Project

This is a simple Astro blog project that uses a JSON data file for static blog content.

## Project Structure

```
astro-blog
├── public
│   └── favicon.svg
├── src
│   ├── components
│   │   └── BlogPost.astro
│   ├── layouts
│   │   └── BlogLayout.astro
│   ├── pages
│   │   ├── index.astro
│   │   └── blog.astro
│   └── data
│       └── posts.json
├── package.json
├── astro.config.mjs
└── README.md
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd astro-blog
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the development server**:
   ```
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000` to view the blog.

## Adding Blog Posts

Blog posts are stored in the `src/data/posts.json` file. Each post should have the following structure:

```json
{
  "id": "unique-post-id",
  "title": "Post Title",
  "content": "Post content goes here.",
  "date": "YYYY-MM-DD"
}
```

## Components and Layouts

- **BlogPost Component**: Located in `src/components/BlogPost.astro`, this component is responsible for rendering individual blog posts.
- **BlogLayout**: Located in `src/layouts/BlogLayout.astro`, this layout wraps around the blog pages and includes common elements like headers and footers.

## License

This project is licensed under the MIT License.