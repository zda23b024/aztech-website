# Aztech Website

This is a Next.js website based on the PRISM academic/profile template. It is a static personal website for showing a profile, biography, publications, teaching, awards, services, CV, and news.

The site content is mostly edited from files in `content/` and `content_zh/`, while the React application code lives in `src/`.

## What This Project Uses

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- TOML content files
- Markdown content files
- BibTeX publication data
- English and Chinese content support

## Important Folders

- `src/` - the website application code and React components
- `content/` - English site content
- `content_zh/` - Chinese site content
- `public/` - public assets such as images and favicon
- `package.json` - project scripts and dependencies
- `next.config.ts` - Next.js configuration

## Requirements

Use Node.js version 22 or newer.

Check your Node version:

```bash
node -v
```

## Install Dependencies

Run this once after downloading or cloning the project:

```bash
npm install
```

## Run The Project In Development

Start the local development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Build The Project

Create a production static build:

```bash
npm run build
```

This project uses `output: 'export'` in `next.config.ts`, so the finished static website is generated in:

```text
out/
```

## Preview The Built Static Website

After running `npm run build`, you can preview the exported site with:

```bash
npx serve out
```

If `serve` asks to install, approve it. Then open the local URL shown in the terminal.

## Available Commands

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
```

Note: because this project is configured for static export, `npm run build` plus serving the `out/` folder is the correct production flow.

## Editing The Website

Edit these files to change the site content:

- `content/config.toml` - site title, author, navigation, social links, language settings
- `content/bio.md` - biography/about text
- `content/publications.bib` - publication entries
- `content/news.toml` - news items
- `content/teaching.toml` - teaching page
- `content/awards.toml` - awards page
- `content/services.toml` - services page
- `content/cv.md` - CV page

For Chinese content, edit the matching files inside `content_zh/`.
