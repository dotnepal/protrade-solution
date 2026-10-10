#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.resolve(projectRoot, 'dist');

/**
 * Generate sitemap.xml from built HTML files
 * Scans the dist directory for .html files and creates a sitemap
 */

const SITE_URL = 'https://www.protradesolution.com.au';

function generateSitemap() {
  if (!fs.existsSync(distDir)) {
    console.warn('dist/ directory not found; skipping sitemap generation');
    return;
  }

  const htmlFiles = [];

  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.html')) {
        const relativePath = path.relative(distDir, filePath);
        const urlPath = relativePath.replace(/\\/g, '/').replace('index.html', '');
        htmlFiles.push(urlPath === '' ? '/' : '/' + urlPath);
      }
    });
  }

  walkDir(distDir);

  // Create sitemap XML
  const urls = htmlFiles
    .filter((url) => !url.includes('404'))
    .sort()
    .map(
      (url) =>
        `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === '/' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  const sitemapPath = path.resolve(distDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log(`✓ Generated sitemap.xml (${htmlFiles.length} pages)`);
}

generateSitemap();
