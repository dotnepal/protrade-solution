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

### Infrastructure
- **Hosting:** Cloudflare Pages
- **Domain:** protradesolution.com.au (www is canonical, apex redirects to www)
- **DNS:** Cloudflare (set up after first successful Pages deploy)

### First-time setup (Sam only)
1. **Create Cloudflare Pages project**
   - Go to Cloudflare > Pages > Create a project
   - Connect the GitHub repo (dotnepal/protrade-solution)
   - Set build command: `npm run build`
   - Set publish directory: `dist/`
   - Deploy to generate a `*.pages.dev` URL

2. **Add GitHub repo secrets**
   - Go to GitHub > Settings > Secrets and variables > Actions
   - Add `CLOUDFLARE_API_TOKEN` (create in Cloudflare > Account > API Tokens)
   - Add `CLOUDFLARE_ACCOUNT_ID` (from Cloudflare account settings)

3. **Configure DNS** (after first successful deploy)
   - Point `www.protradesolution.com.au` to Cloudflare
   - Add custom domain to Pages project settings
   - Set apex (`protradesolution.com.au`) to 301 redirect to `www`
   - Verify HTTPS on both

### CI/CD Pipeline
Two workflows are active:

**ci.yml** (on PR to `main` and `release`)
- ✅ npm ci (install dependencies)
- ✅ TypeScript type check
- ✅ ESLint
- ✅ Vite build
- ✅ SEO report (sitemap validation)
- ✅ Axe accessibility check
- ✅ Lighthouse performance audit

**deploy.yml** (on push to `release`)
- Build site with `npm run build`
- Deploy `dist/` to Cloudflare Pages via wrangler-action
- Auto-deploys production on merge to `release`

### Promotion process (daily development)
1. Work on `main` branch; commit and push
2. Create a PR from `main` → `release`
3. CI checks must pass (lint, build, type check, accessibility, performance)
4. Merge to `release` (auto-deploys to production)
5. Verify production at https://www.protradesolution.com.au/

### Branch protection
- `main`: Requires PR review + CI passing before merge (no direct pushes)
- `release`: Requires CI passing before merge (prevents broken deployments)

## For maintainers

The site is deployed to [protradesolution.com.au](https://www.protradesolution.com.au).

**Contact:** Sam Shrestha (samundra@...)

**Images:** Raw originals in `images/` (temporary staging). Resize to ~800px WebP and move to `src/assets/img/gallery/` before commit.

**Content updates:** Edit TS data files in `src/data/` and page files in `src/pages/`. Commit and push to `main`; merge to `release` to deploy.

## License

TBD
