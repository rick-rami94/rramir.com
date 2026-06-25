# rramir.com

Personal website for Rick Ramirez — security engineer & cybersecurity risk consultant.

Built with [Astro](https://astro.build). Static output, near-zero JavaScript, cream-and-navy editorial theme.

## Develop

```bash
npm install      # once
npm run dev      # live-reload dev server at http://localhost:4321
```

## Build & preview the production output

```bash
npm run build    # outputs static site to ./dist
npm run preview  # serve the built ./dist locally
```

## Editing content

Almost all text lives in **`src/data/site.js`** — profile, focus areas, experience,
standards, projects, services, and credentials. Edit there; the page rebuilds from it.

- Layout / `<head>` / fonts: `src/layouts/Base.astro`
- Page structure: `src/pages/index.astro`
- Styling & color palette (CSS variables at the top): `src/styles/global.css`
- Portrait, favicon, robots: `public/`

## Deploy to rramir.com

Any static host works. Recommended: **Cloudflare Pages** (free, fast, easy custom domain).

1. Push this repo to GitHub.
2. Cloudflare dashboard → Pages → Connect to Git → select the repo.
3. Build command: `npm run build` — Output directory: `dist`.
4. After the first deploy, add a custom domain `rramir.com` in the Pages project;
   Cloudflare will guide the DNS records (CNAME / apex).

Alternatives with the same `dist` output: Netlify, Vercel, or GitHub Pages.
