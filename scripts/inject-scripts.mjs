#!/usr/bin/env node

/**
 * inject-scripts.mjs
 *
 * Post-build step: vite-plugin-ssg generates static HTML files but does NOT
 * include a script tag loading the main Vite bundle. Without it, React never
 * mounts and the site is completely static with no interactivity.
 *
 * This script:
 *  1. Finds the hashed main bundle in dist/assets/ (index-{hash}.js)
 *  2. Injects script module tag with src="/assets/index-{hash}.js" before
 *     closing body tag in every dist HTML file
 *
 * Run automatically as part of: npm run build
 *   "build": "tsc -b && vite build && node scripts/inject-scripts.mjs"
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '..', 'dist');
const assetsDir = path.join(distDir, 'assets');

// Find the main entry chunk: index-{hash}.js
const assetFiles = await fs.readdir(assetsDir);
const mainChunk = assetFiles.find((f) => /^index-[A-Za-z0-9_-]+\.js$/.test(f));

if (!mainChunk) {
  console.error('[inject-scripts] ERROR: Could not find main bundle (index-*.js) in dist/assets/');
  process.exit(1);
}

const scriptTag = `<script type="module" crossorigin src="/assets/${mainChunk}"></script>`;
console.log(`[inject-scripts] Main bundle: ${mainChunk}`);

// Find all HTML files recursively
async function findHtmlFiles(dir) {
  const files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await findHtmlFiles(fullPath));
    } else if (entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

const htmlFiles = await findHtmlFiles(distDir);

await Promise.all(
  htmlFiles.map(async (htmlPath) => {
    const html = await fs.readFile(htmlPath, 'utf-8');

    if (html.includes('/assets/index-')) {
      const rel = path.relative(distDir, htmlPath);
      console.log(`[inject-scripts] Skipped  ${rel} (already has bundle reference)`);
      return;
    }

    await fs.writeFile(htmlPath, html.replace('</body>', `    ${scriptTag}\n</body>`));
    const rel = path.relative(distDir, htmlPath);
    console.log(`[inject-scripts] Injected ${rel}`);
  })
);

console.log('[inject-scripts] Done.');
