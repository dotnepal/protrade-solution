This page is instruction to CLAUDE

Acronyms: TBD - To be done, implies that disucssion is on-going and decisions has not been finalized yet.

# Introduction

This is a green field project and many things are under discussion. The company
sells a service, of nature flooring business. We want to create an informational website for visitors to get to know about company.

No membership system in website.

What this website is about:
- provide information regarding the company
- provide information about different types of flooring woods
- share types of services sold by the company

What this website is not about:
- This is not an e-commerce. 
- This is not an online retail store.
- Customers cannot order from online.
- It has no payment integration

Website will have following menus (from left to right):

Main menu:
    - left:
        - company logo
    - right:
        - home
        - services
        - products
        - About us
        - contact

# Website status

*Business name:* ProTrade Solution
*Domain:* protradesolution.com.au
*Status:* Phase 1 Implementation (4/6 issues done, 2 blockers)
*Last Updated at:* 2026-10-10

## Phase 1 Progress

| Issue | Title | Status | Notes |
|-------|-------|--------|-------|
| #8 | SEO Scaffolding | ✅ Done | Constants, helpers, components, validation script |
| #12 | Design & UX | ✅ Done | Mobile menu, carousel, lazy-loaded map, accessibility |
| #13 | Routes & Pages | ✅ Done | All routes configured with placeholder content |
| #7 | Architecture Spike | 🔄 In Review | SSR module resolution blocker; fallback path documented |
| #14 | CI/CD Infrastructure | 🔄 In Review | Workflows complete; manual Cloudflare/GitHub setup needed |
| #15 | Phase 1 Exit Criteria | ⏸️ Paused | Blocked: awaiting #7 & #14 completion |

### Blockers
- **#7 (Architecture)**: vite-plugin-ssg SSR module resolution for pre-rendering (deferred with fallback options documented in CLAUDE.md Spike #7)
- **#14 (CI/CD)**: Requires manual Cloudflare Pages project creation, GitHub secrets, branch protection setup

# Services
* We specialise in hybrid timber flooring, laminate flooring, engineering timber and vinyl.
* We also supply and insole fit MDF scotia, supply and fit doorway trims, expansion trims, pull up of carpet and floating floor.
* We also do offcut and rubbish disposal.

# Project Architecture
- Follows trunk based development
- Delivery phases:
    * Phase 1 - foundations and a working site: architecture, repo hygiene, scaffold, design/UX, CI/CD, SEO structure, placeholder content
    * Phase 2 - real business content and SEO values
- Implementation plan: `tasks/2026-10-10-IMPLEMENTATION-PLAN.md` (local only, `tasks/` is gitignored)

# Technical stack
- **Frontend:** Vite + React 19 (TypeScript) with React Router, pre-rendered to static HTML via vite-plugin-ssg (mirrors dotnepal/hooxygen)
- **UI/UX:** Tailwind CSS 4 (via @tailwindcss/vite)
- **Backend:** None (static HTML only; contact info only in v1, no form)
- **Database:** None
- **Deployment:** Vite build + SSG → static HTML in `dist/` → Cloudflare Pages (wrangler)
- **Color Palette:** Original Coffee theme (finalized, see "Design - Color Palette")
- **Project structure:** mirrors dotnepal/hooxygen `src/`: `pages/`, `components/{layout,ui,seo,sections}`, `data/` (typed TS data files), `routes.ts` as the single route list, `hooks/`, `lib/`, `utils/`, `assets/`. MDX rejected for content.
- **Routes:** `/`, `/services`, `/products` (list page), `/products/:slug` (dedicated page per product), `/about`, `/contact`, plus a 404 page
- **Package manager:** npm
- **Font:** Libre Franklin (self-hosted)
- **Analytics:** None for now
- **Gallery:** carousel on `/services` (Embla); photos pre-resized WebP in `src/assets/img/gallery/`, raw originals in `images/` (temporary)
- **Quality bar:** follow web best practices; WCAG Level AA is the minimum accessibility standard

## Github repository & project information

*Github repository:* git@github.com:dotnepal/protrade-solution.git
*Gh cli:* Use Gh cli to interact with Git
*Project dashboard:* https://github.com/orgs/dotnepal/projects/1/views/1
*Milestone:* v1.0.0 (covers both phases)
*Phase field:* board custom field `Phase` (options: Phase 1, Phase 2). Set with Gh cli, e.g. `gh project item-edit 1 --owner dotnepal --url <issue-url> --field Phase --value "Phase 1"`
*Priority field:* board custom field `Priority Level` (P0 blocker, P1 important, P2 nice to have). The built-in `Priority` field is uneditable, so it is unused
*Project dashboard lanes definition:* (the board's Status field already has all 5 lanes)
- Backlog: newer issues will be added here, anything undecided, needs approval
  from stakeholders
- Ready: issue is ready to be picked and worked on
- In progress: issue is currently in progress, labelled as `in-progress`
- In review: issue has been worked on, git branch pushed, PR created and
  labelled as `code-review` 
- Done: PR has been merged, issue closed, labelled as `done`

**Architecture notes:**
- Development: Vite dev server (hot reload, TypeScript support)
- Output: Pure HTML/CSS/JS (no runtime dependencies)
- SEO: Pre-rendered at build time (static HTML, OG tags, JSON-LD, sitemap script)
- Forms: None in v1 (contact info only). Formspree is the planned option if a form is added later

## Spike #7 - Architecture Decisions (2026-10-10)

### Pre-rendering with vite-plugin-ssg

**Decision:** Use vite-plugin-ssg v0.1.0 for static site generation.

**Pattern:**
- One `.tsx` file per route in `src/pages/`
- Each file exports `ssgOptions` with metadata (slug, routeUrl, Head, context)
- Build pipeline: `tsc -b && vite build && node scripts/inject-scripts.mjs`
- Plugin generates one `.html` file per page during build
- Post-build script (inject-scripts.mjs) injects React bundle script into each HTML file

**Example:**
```tsx
// src/pages/HomePage.tsx
import type { SsgOptions } from 'vite-plugin-ssg/utils'

export const ssgOptions: SsgOptions = {
  slug: 'index',
  routeUrl: '/',
  Head: () => <title>Home - ProTrade Solution</title>,
};

export default function HomePage() { ... }
```

**Reference:** Pattern verified against dotnepal/hooxygen; Hooxygen uses identical pattern successfully.

### Dynamic Routes (/products/:slug)

**Decision:** Create explicit page files for each product variant (no parameterized routes).

**Implementation:**
- Create separate `.tsx` files:
  - `src/pages/ProductHybridFlooringPage.tsx` → `dist/products/hybrid-flooring.html`
  - `src/pages/ProductLaminateFlooringPage.tsx` → `dist/products/laminate-flooring.html`
  - `src/pages/ProductVinylFlooringPage.tsx` → `dist/products/vinyl-flooring.html`
- Each file has own `ssgOptions` with specific `slug: 'products/{product-name}'`

**Scalability:** v1 supports up to ~20 products easily. If growing beyond, Phase 2 should revisit with Next.js dynamic routes or CMS.

**Fallback:** If vite-plugin-ssg fails in practice, switch to react-snap custom prerender script or revisit Next.js.

### Cloudflare Routing

**Decision:** Per-route HTML serving (no SPA fallback).

**Configuration:**
- No `_redirects` file with `/* /index.html 200` rule
- Cloudflare serves actual pre-rendered HTML files at each path
- Example: GET `/products/hybrid-flooring` → Cloudflare serves `dist/products/hybrid-flooring.html`
- No trailing slashes needed (actual file paths work as-is)

**404 Handling:**
- Create `src/pages/NotFoundPage.tsx` with `slug: '404'` → generates `dist/404.html`
- Configure Cloudflare to serve `404.html` on 404 errors (or use Cloudflare `_headers` file)

**Benefits:**
- True static hosting (zero JS overhead for initial page load)
- Fast first paint (pre-rendered HTML ships immediately)
- Optimal Core Web Vitals (no hydration delay)
- SEO-friendly (search engines index pre-rendered content)

**Why not SPA fallback:** Would serve `dist/index.html` to all routes, defeating the purpose of SSG (entire app hydrates in browser). Per-route HTML is the SSG benefit.

### inject-scripts.mjs Post-Build Script

**Necessity:** vite-plugin-ssg generates static HTML but **does not** include the React bundle script. The post-build script restores it.

**Pattern (from Hooxygen):**
1. Finds hashed main bundle: `dist/assets/index-{hash}.js`
2. Injects `<script type="module" crossorigin src="/assets/index-{hash}.js"></script>` before `</body>` in every HTML file
3. Ensures React can hydrate the pre-rendered snapshot

**Build command:** `npm run build` = `tsc -b && vite build && node scripts/inject-scripts.mjs`

### Public Assets

- `_redirects`: Not used (per-route HTML strategy, see above)
- `robots.txt`: Auto-generated by SEO scaffold (step 1.7)
- `sitemap.xml`: Auto-generated by SEO scaffold (step 1.7)
- `og-image-default.jpg`: Placeholder (step 1.8)
- `favicon.svg`: Placeholder (step 1.8)

# SEO & Measurement
- Canonical host: www.protradesolution.com.au (apex redirects to www)

# CI/CD Deployment
- The pages will be hosted in Github
- Github workflow will build and deploy to cloudflare pages
- Github will have following branches, and follow trunk-based development
    * main - for active development
    * release - triggers deployment to cloudflare pages
- Promotion: open a PR from `main` into `release`; CI must pass before merge. Merge deploys
- CI runs on PRs to `main` and `release`

# Core Questions That Unlock Architecture Decisions

## Q1: MVP Definition — What launches first?
**Question:** Which menu items are required for v1 launch (home, services, products, about, contact)? How many flooring types must be documented? Does the contact section need a form or just contact info?

**Answer:** 
- All menu items (home, services, products, about, contact) included in v1
- Flooring types: deferred until services section is finalized
- Contact section: contact info only (no form)

## Q2: Content Model — Who owns what, how often changes?
**Question:** Who writes product/service descriptions (you, marketing team, designer)? How frequently do flooring options, services, or pricing change? Do you need a CMS or is static content OK?

**Answer:**
- Content sourced from marketing team, Sam updates on website
- Infrequent changes; pricing not displayed on website
- Static content is sufficient (no CMS needed)

## Q3: Information Architecture — What's the actual structure?
**Question:** How deep do product pages go (just name/description or include specs, installation guide, gallery, testimonials)? Are there filters needed (by room type, aesthetic, budget, durability)?

**Answer:**
- Product pages: name, description, specs, and photos
- No testimonials in v1
- No filters in v1 (defer to v2)

## Q4: Business Outcomes — What's the goal?
**Question:** What should this site drive (lead generation with contact tracking, SEO/ranking for local keywords, or just brand presence)? Any performance targets (Lighthouse scores, Core Web Vitals)?

**Answer:**
- Goal: brand presence
- Lighthouse scores: aim for good performance
- Responsive: desktop and mobile browseable
- Core Web Vitals: follow standard practices

## Q5: Team & Maintenance — Who keeps this running?
**Question:** Is this a solo project or team effort? Who updates content after launch (you or non-technical staff)? How often should deployment happen?

**Answer:**
- Solo project (Sam maintains)
- Sam updates content after launch
- Frequent deployments during active development, then slower cadence post-launch

## Contact Form Implementation
**Status:** Not in v1. Kept for future reference.
**Service:** Formspree
**Why:** Simple, no backend required, GDPR-compliant, handles email delivery and spam filtering

**Recommendation:**
- Free tier includes 50 submissions/month
- Setup is one line: `<form action="https://formspree.io/f/YOUR_ID" method="POST">`
- Emails you submissions, optionally redirects user
- Simple, reliable, no backend

**How it works:**
- Form HTML is static (built in React)
- On submit, POST to Formspree endpoint
- Formspree sends submission email to your inbox
- User sees success/error message

**Security notes:**
- HTTPS encrypted in transit
- Formspree stores no email data—passes directly to you
- Suitable for contact inquiries (non-sensitive data)

**Future consideration:**
- If sensitive customer data needed (quotes, estimates), migrate to Cloudflare Workers backend for complete control

# Design - Color Palette

## ✅ FINALIZED: Original Coffee Theme
**Status:** Selected for development
**Preview:** `homepage-original-coffee.html`

**Colors:**
- **Espresso Dark** (#3E2723) — Primary text, headings, nav, footer
- **Latte** (#8D6E63) — Secondary accent, borders, hover states
- **Cream** (#F5F1EE) — Light backgrounds, cards
- **Caramel** (#D97706) — CTAs, highlights, links
- **Charcoal** (#1F2937) — Body text, high contrast
- **Warm Beige** (#ECDCC8) — Subtle backgrounds, dividers

**Rationale:**
Bold, distinctive coffee-shop aesthetic. Warm and inviting. Strong brand identity. Works well for flooring business (natural materials, earthy tones). Use this for all Tailwind configuration and component development.

## Reference Palettes (for future consideration)

## Industry-Aligned Palette
Based on research of 9 leading flooring business websites. This refined palette combines warm coffee aesthetic with proven industry standards (warm neutrals, professional minimalism, restrained accents).

**Colors:**
- **Warm Off-White** (#FAFAF8) — Main page backgrounds
- **Warm Gray** (#8B7766) — Navigation, primary text, headers
- **Coffee Brown** (#6B5B4F) — Headings, dark text, footer
- **Warm Taupe** (#C19A6B) — CTAs, accents, highlights, links
- **Light Warm Gray** (#E8DCC8) — Secondary backgrounds, dividers
- **Charcoal** (#2C2C2C) — High-contrast text, body copy

**Rationale:**
More sophisticated and professional than original coffee palette, aligned with industry standards. Still maintains warm, distinctive aesthetic. Clean backgrounds allow product imagery to be focal point (100% of analyzed flooring sites use similar approach).

## Alternative Palette: Nepal Flag-Inspired
Inspired by official Nepal flag colors (#003893 Blue, #DC143C Red). Bold, distinctive, culturally inspired.

**Colors:**
- **Nepal Navy Blue** (#003893) — Primary brand, headings, nav, footer
- **Nepal Crimson Red** (#DC143C) — CTAs, accents, highlights, important elements
- **Off-White** (#F9F9F9) — Main page backgrounds
- **Light Blue** (#E8F0FF) — Light accent backgrounds, cards, secondary sections
- **Warm Gray** (#D1CCC7) — Dividers, borders, secondary backgrounds
- **Dark Charcoal** (#1A1A1A) — Body text, high-contrast content

**Rationale:**
Bold and distinctive. Strong national identity (Nepal flag colors). Professional with energetic accents. Clear hierarchy (navy for structure, red for action). More vibrant than coffee palette, appeals to brands wanting strong visual identity.

# Commands

Development and deployment commands. All commands should be run from the project root.

## Development

```bash
npm run dev
```
Starts the Vite dev server on http://localhost:5173 with hot reload.

## Building

```bash
npm run build
```
Compiles TypeScript, bundles with Vite, and generates the sitemap. Output goes to `dist/`.

## Quality checks

```bash
npm run lint
```
Runs ESLint on all `.ts` and `.tsx` files. Fix auto-fixable issues with `eslint . --fix`.

```bash
npm run format
```
Formats code with Prettier (JS, TS, JSON, CSS, Markdown).

```bash
npm run format:check
```
Checks formatting without making changes (useful in CI).

## Preview

```bash
npm run preview
```
Builds the site and serves `dist/` locally to preview the production build.

