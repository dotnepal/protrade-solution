#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.resolve(projectRoot, 'dist');

/**
 * SEO validation report: checks all built pages for required tags
 */

function checkSeoTags() {
  if (!fs.existsSync(distDir)) {
    console.error('dist/ directory not found. Run `npm run build` first.');
    process.exit(1);
  }

  const htmlFiles = [];
  const issues = [];

  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.html') && !file.includes('404')) {
        htmlFiles.push(filePath);
      }
    });
  }

  walkDir(distDir);

  htmlFiles.forEach((filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const relativePath = path.relative(distDir, filePath);
    const urlPath = relativePath.replace(/\\/g, '/').replace('index.html', '') || '/';

    const checks = {
      title: /<title>/.test(content),
      description: /name="description"/.test(content),
      canonical: /rel="canonical"/.test(content),
      ogTitle: /property="og:title"/.test(content),
      ogDescription: /property="og:description"/.test(content),
      ogImage: /property="og:image"/.test(content),
      ogUrl: /property="og:url"/.test(content),
    };

    const missingTags = Object.entries(checks)
      .filter(([, present]) => !present)
      .map(([tag]) => tag);

    if (missingTags.length > 0) {
      issues.push({
        page: urlPath,
        missing: missingTags,
      });
    }
  });

  // Report
  console.log(`\n📊 SEO Report (${htmlFiles.length} pages)\n`);

  if (issues.length === 0) {
    console.log('✅ All pages have required SEO tags');
  } else {
    console.log(`⚠️  ${issues.length} page(s) with missing SEO tags:\n`);
    issues.forEach(({ page, missing }) => {
      console.log(`  ${page}`);
      missing.forEach((tag) => {
        console.log(`    - missing: ${tag}`);
      });
    });
    console.log('');
    process.exit(1);
  }
}

checkSeoTags();
