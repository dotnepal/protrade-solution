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

*Domain:* protradesolution.com.au
*Status:* Draft
*Last Updated at:* TBD

# Services
* We specialise in hybrid timber flooring, laminate flooring, engineering timber and vinyl.
* We also supply and insole fit MDF scotia, supply and fit doorway trims, expansion trims, pull up of carpet and floating floor.
* We also do offcut and rubbish disposal.

# Project Architecture
- Follows trunk based development

# Technical stack
- **Frontend:** Next.js (TypeScript, React) with static export
- **UI/UX:** Tailwind CSS
- **Backend:** None (static HTML only; Formspree for contact form)
- **Database:** None
- **Deployment:** Next.js `next export` → static HTML files → Cloudflare Pages
- **Color Palette:** Soft coffee texture - TBD

**Architecture notes:**
- Development: Full Next.js framework (hot reload, TypeScript support)
- Output: Pure HTML/CSS/JS (no runtime dependencies)
- SEO: Fully server-side generated (static HTML, OG tags, sitemap)
- Forms: Integrated with Formspree (no backend needed)

# CI/CD Deployment
- The pages will be hosted in Github
- Github workflow will build and deploy to cloudflare pages
- Github will have following branches, and follow trunk-based development
    * main - for active development
    * release - triggers deployment to cloudflare pages

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
**Service:** Formspree
**Why:** Simple, no backend required, GDPR-compliant, handles email delivery and spam filtering

**Recommendation:**
- Free tier includes 50 submissions/month
- Setup is one line: `<form action="https://formspree.io/f/YOUR_ID" method="POST">`
- Emails you submissions, optionally redirects user
- Simple, reliable, no backend

**How it works:**
- Form HTML is static (built in Next.js)
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

