ME Blog — Eleventy scaffold

This project is a minimal Eleventy (11ty) static blog scaffold intended to be deployed via GitHub Pages.

Prerequisites

- Node.js (>=14) and npm installed

Quick start

1. Install dependencies:

   npm install

2. Run dev server (watch + local server):

   npm start

3. Build for production (outputs to `docs/`):

   npm run build

Deploy to GitHub Pages (simple)

- Create a GitHub repository and push this project to `main`.
- In the repository settings -> Pages, set source to `main` branch / `docs` folder and save.
- GitHub will serve the site from `https://<your-username>.github.io/<repo>/` (or your custom domain if configured).

Optional: GitHub Actions

You can add a GitHub Actions workflow to automatically run `npm ci` and `npm run build` and push to `gh-pages` or to the `docs/` folder on `main`.

Notes

- Content lives in `src/`. Add posts to `src/posts/` as Markdown files with frontmatter.
- Layouts are in `src/_includes/layouts/`.
- Styling is in `src/styles.css` and copied through to the site root.
