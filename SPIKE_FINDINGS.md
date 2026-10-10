# Spike #7: Architecture Investigation - vite-plugin-ssg Pre-rendering & Cloudflare Routing

## Spike Status: COMPLETE ✅

All required investigations completed and documented. Findings posted to GitHub issue #7.

## Key Findings Summary

### 1. vite-plugin-ssg v0.1.0 Pre-rendering ✅
- **Verified:** Plugin successfully generates multiple static HTML files from page exports
- **Pattern:** File-based (one `.tsx` file per route, each exports `ssgOptions`)
- **Reference:** Hooxygen (dotnepal/hooxygen) uses identical pattern successfully
- **Verdict:** Viable for ProTrade Solution

### 2. Dynamic Routes Support ✅
- **Limitation:** No built-in route parameters like `/products/:slug`
- **Solution:** Create explicit page files per product variant
  - ProductHybridFlooringPage.tsx → dist/products/hybrid-flooring.html
  - ProductLaminateFlooringPage.tsx → dist/products/laminate-flooring.html
  - ProductVinylFlooringPage.tsx → dist/products/vinyl-flooring.html
- **Scalability:** Works for v1 (~3-20 products); Phase 2 should revisit with Next.js if >20

### 3. Cloudflare Routing Decision ✅
- **Chosen:** Option B - Per-Route HTML (no SPA fallback)
- **Why:** True static hosting, zero JS overhead, optimal Core Web Vitals
- **Config:** No `_redirects` SPA rule; serve actual HTML files at paths
- **404:** Create NotFoundPage.tsx → dist/404.html
- **Trailing slashes:** Not needed (actual file paths work)

### 4. inject-scripts.mjs Post-Build Pattern ✅
- **Why:** vite-plugin-ssg generates HTML without React bundle script
- **Solution:** Post-build script finds `dist/assets/index-{hash}.js`, injects it into every HTML
- **Reference:** Pattern from Hooxygen, verified working
- **Build:** `npm run build` = `tsc -b && vite build && node scripts/inject-scripts.mjs`

### 5. Hooxygen Reference Architecture ✅
- **Reviewed:** index.html, public/, vite.config.ts, scripts/inject-scripts.mjs
- **Findings:** Hooxygen uses per-page files with ssgOptions; we'll use identical pattern
- **Note:** Hooxygen uses SPA fallback (`/* /index.html 200`); ProTrade will use per-route HTML (better SSG benefit)

## Artifacts Created

1. **scaffold-test/** - Minimal Vite + React scaffold to test vite-plugin-ssg
   - Page files with ssgOptions structure
   - vite.config.ts with ssgPlugin configuration
   - scripts/inject-scripts.mjs (post-build script pattern)
   - Built successfully; ready for copy to real project

2. **GitHub Issue #7 Comment** - Full spike findings posted
   - Detailed decision analysis (3 Cloudflare options)
   - Risk assessment and mitigations
   - Next steps for Phase 1.4 onwards

## Decisions Locked & Ready for CLAUDE.md

The following hard-to-change decisions are now locked (pending Sam's approval):

- Use vite-plugin-ssg v0.1.0 with explicit page files
- Handle dynamic routes via separate product page files
- Use Cloudflare per-route HTML serving (no SPA fallback)
- Include inject-scripts.mjs in build pipeline

**Proposed CLAUDE.md additions:** See `/tmp/claude-md-additions.md`

## What's Next (Phase 1.4 onwards)

1. **Step 1.4 Scaffold:** Create 8 page files with ssgOptions
2. **Step 1.8 Design:** Ensure build includes inject-scripts.mjs
3. **Step 1.9 CI/CD:** Test per-route HTML serving on Cloudflare Pages
4. **Step 1.10:** Verify 404 page behavior and trailing slash handling

## Risks Identified & Mitigated

| Risk | Mitigation |
|------|-----------|
| vite-plugin-ssg v0.1.0 immaturity | Spike completed successfully; fallback to react-snap if needed |
| Cloudflare per-route routing untested | Will test in step 1.9; if fails, switch to SPA fallback or rewrite rules |
| Product file proliferation >20 items | v2 milestone to revisit with Next.js or CMS |

---

**Spike completed:** Ready to proceed to Phase 1.4 (scaffold) with confidence.
