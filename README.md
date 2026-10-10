# ProTrade Solution

Informational website for a flooring business. This site showcases services, products, and company information. It is **not** an e-commerce platform.

## Quick start

```bash
# Install dependencies
npm ci

# Development (hot reload at http://localhost:5173)
npm run dev

# Build static site
npm run build

# Preview built site
npm run preview
```

## Commands

- `npm run dev` — Start Vite dev server
- `npm run build` — Compile TypeScript, bundle with Vite, generate sitemap
- `npm run preview` — Preview the built site locally
- `npm run lint` — Check code with ESLint
- `npm run format` — Format code with Prettier
- `npm run format:check` — Check formatting without changes

## Tech stack

- **Frontend:** Vite + React 19 + TypeScript + React Router
- **Styling:** Tailwind CSS 4
- **Output:** Static HTML (pre-rendered with vite-plugin-ssg)
- **Deployment:** Cloudflare Pages
- **Node:** v22+ (pinned in `.nvmrc`)

## Project structure

```
src/
├── pages/           # Route pages (Home, Services, Products, About, Contact)
├── components/      # React components (Layout, UI, SEO)
│   ├── layout/      # Navbar, Footer, SkipToContentLink
│   ├── ui/          # Buttons, Cards, etc.
│   └── seo/         # Structured data, metadata
├── data/            # Typed TS data (products, services, gallery)
├── routes.ts        # Single route source of truth
├── App.tsx          # Root component
└── assets/          # Images, fonts, etc.
```

## Deployment

### First time setup
1. Create a Cloudflare Pages project
2. Connect the GitHub repo
3. Set build command: `npm run build`
4. Set publish directory: `dist/`

### Promotion process (after v1.0.0)
1. Open a PR from `main` → `release`
2. Ensure CI passes (lint, type check, build, accessibility)
3. Merge to `release` (auto-deploys via GitHub Actions)

## For maintainers

The site is deployed to [protradesolution.com.au](https://www.protradesolution.com.au).

**Contact:** Sam Shrestha (samundra@...)

**Images:** Raw originals in `images/` (temporary staging). Resize to ~800px WebP and move to `src/assets/img/gallery/` before commit.

**Content updates:** Edit TS data files in `src/data/` and page files in `src/pages/`. Commit and push to `main`; merge to `release` to deploy.

## License

TBD
