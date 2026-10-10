# Deployment Guide

ProTrade Solution uses GitHub Actions for CI/CD with Cloudflare Pages for hosting.

## CI/CD Pipeline

### Workflows

- **CI** (`.github/workflows/ci.yml`): Runs on PRs to `main` and `release`
  - Type checking (`tsc --noEmit`)
  - Linting (`npm run lint`)
  - Building (`npm run build`)
  - SEO validation (`npm run seo:report`)
  - Accessibility check (axe-core)
  - Lighthouse performance audit

- **Deploy** (`.github/workflows/deploy.yml`): Runs on pushes to `release` branch
  - Builds the project
  - Deploys to Cloudflare Pages

## Setup Instructions

### 1. Cloudflare Pages Project

1. Sign in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **Pages**
3. Create new project → Connect Git
4. Authorize GitHub and select `dotnepal/protrade-solution`
5. Framework: None
6. Build command: `npm run build`
7. Build output directory: `dist`
8. Environment variables: None required
9. Deploy

### 2. GitHub Secrets

Add the following secrets to GitHub (Settings → Secrets and variables → Actions):

- `CLOUDFLARE_API_TOKEN`: Create at Cloudflare Dashboard → Account → API Tokens
  - Scope: Pages (read/write)
  - Minimal permissions recommended
- `CLOUDFLARE_ACCOUNT_ID`: Found in Cloudflare Dashboard → Account → API

### 3. Branch Protection & Release Process

```bash
# Create release branch (one-time)
git checkout -b release
git push -u origin release
```

Add branch protection on `main` and `release`:
- GitHub Settings → Branches → Add rule
- Require pull request reviews before merging
- Require status checks to pass (CI must be green)

### 4. Promotion Workflow

1. Create a PR from `main` → `release`
2. Wait for CI checks to pass
3. Merge PR → triggers Deploy workflow
4. Site deploys to `https://protrade-solution.pages.dev/`

### 5. Custom Domain (Final Step)

1. In Cloudflare Pages project settings
2. Add custom domain: `www.protradesolution.com.au`
3. Create CNAME record (Cloudflare will guide)
4. Set up DNS redirect for apex domain (`protradesolution.com.au` → `www`) with 301

## Local Development

```bash
npm run dev          # Start dev server on http://localhost:5173
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run build:seo-check  # Run SEO validation
```

## Monitoring

- **CI Status**: GitHub Actions tab
- **Deployments**: GitHub Deployments or Cloudflare Pages dashboard
- **Site Analytics**: Cloudflare Analytics (if enabled)
- **Performance**: Lighthouse reports in GitHub Actions artifacts
