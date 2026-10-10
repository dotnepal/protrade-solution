# Phase 1 Completion Instructions

## Overview
Phase 1 code is complete. This guide covers manual setup to deploy the site and mark Phase 1 done.

## Prerequisites
- GitHub account (dotnepal org owner)
- Cloudflare account with protradesolution.com.au domain
- Domain DNS access

---

## Step 1: Create Cloudflare Pages Project

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select **Pages** (left sidebar)
3. Click **Create a project** → **Connect to Git**
4. Authorize GitHub and select `dotnepal/protrade-solution`
5. Configure:
   - **Framework**: None
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Environment variables**: (none needed)
6. Click **Save and Deploy**
7. Wait for first deploy to complete (→ `protrade-solution.pages.dev`)

---

## Step 2: Create & Configure GitHub Secrets

### Get Cloudflare API Token

1. Cloudflare Dashboard → **Account** (left sidebar)
2. Go to **API Tokens** tab
3. Click **Create Token**
4. Select **Edit Cloudflare Workers** template (or create custom: `account.pages:read/write`)
5. Copy token (shown once)

### Get Cloudflare Account ID

1. Cloudflare Dashboard → **Account**
2. Copy **Account ID** (shown on right)

### Add to GitHub

1. Go to `https://github.com/dotnepal/protrade-solution/settings/secrets/actions`
2. Click **New repository secret**
3. Add `CLOUDFLARE_API_TOKEN` with the token from Step 2a
4. Click **New repository secret** again
5. Add `CLOUDFLARE_ACCOUNT_ID` with the account ID from Step 2b

---

## Step 3: Create Release Branch & Set Branch Protection

```bash
# In your local repo (or via GitHub web UI)
git checkout -b release
git push -u origin release
```

### Add Branch Protection

1. GitHub repo → **Settings** → **Branches**
2. Click **Add rule** under **Branch protection rules**
3. Apply to branch: `main`
   - ✅ Require pull request reviews before merging
   - ✅ Require status checks to pass before merging (CI must pass)
   - ✅ Include administrators
4. Click **Create**
5. Repeat for `release` branch (same settings)

---

## Step 4: Test Promotion Workflow

1. Create a PR: `main` → `release`
   ```bash
   # Or via GitHub web UI
   git checkout main
   git pull
   git checkout -b test-promotion
   git push -u origin test-promotion
   # Open PR on GitHub
   ```
2. Wait for CI checks to pass (5-10 min)
3. Merge PR → triggers Deploy workflow
4. Verify site deployed: `https://protrade-solution.pages.dev/`

---

## Step 5: Add Custom Domain & DNS

### Cloudflare Pages Settings

1. Cloudflare Dashboard → **Pages**
2. Select `protrade-solution` project
3. **Settings** → **Custom domains**
4. Click **Add custom domain**
5. Enter: `www.protradesolution.com.au`
6. Cloudflare will provide CNAME target (copy it)

### DNS Configuration

1. Go to your domain registrar (where protradesolution.com.au is registered)
2. Add CNAME record:
   - **Name**: `www`
   - **Target**: (paste CNAME from Cloudflare)
   - **TTL**: 3600 (or auto)
3. Create 301 redirect for apex:
   - **Name**: `@` or (blank)
   - **Type**: Redirect
   - **Target**: `https://www.protradesolution.com.au`
   - **Status**: 301 Permanent Redirect

### Verify Setup

1. Wait 5-15 min for DNS to propagate
2. Test URLs:
   - `https://www.protradesolution.com.au` (should work)
   - `https://protradesolution.com.au` (should redirect to www)
3. Verify HTTPS certificate (should be auto-issued by Cloudflare)

---

## Step 6: Mark Phase 1 Complete

Once everything works:

```bash
# Update issue status via GitHub CLI
gh project item-edit 1 --owner dotnepal --url https://github.com/dotnepal/protrade-solution/issues/15 --field Status --value "Done"

# Or manually close issue #15 on GitHub
```

---

## Verification Checklist

- [ ] Site loads on `https://www.protradesolution.com.au`
- [ ] All pages render (/, /services, /products, /about, /contact)
- [ ] HTTPS certificate valid
- [ ] Mobile menu works (hamburger on small screens)
- [ ] Gallery carousel works (keyboard arrows, swipe)
- [ ] Apex redirect works (protradesolution.com.au → www)
- [ ] CI/CD workflows passing
- [ ] GitHub branch protection active on `main` and `release`

---

## Troubleshooting

### Site not deploying
- Check Cloudflare Pages project settings
- Verify `npm run build` succeeds locally
- Check GitHub Secrets are set correctly

### DNS not resolving
- Run `nslookup www.protradesolution.com.au` to check propagation
- Wait up to 24 hours for full propagation
- Verify CNAME record in registrar

### HTTPS certificate not issued
- Cloudflare Pages handles SSL automatically
- Should be ready within 30 min of adding domain
- Check Cloudflare Pages → Custom Domains status

### Merge button disabled
- CI checks must pass first
- Click **Details** on failing check to see error
- Fix and push new commit
