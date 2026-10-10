import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { ssgPlugin } from 'vite-plugin-ssg';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
     ssgPlugin({
      // Scan src/pages/ for components that export `ssgOptions`
      pages: 'src/pages/',
      // Disable dev middleware so Vite dev server serves the live React app
      devMiddleware: false,
      config: {
        // Output pre-rendered HTML alongside the regular Vite build
        outDir: 'dist',
        baseUrl: '',
        // The SSG plugin runs its own Vite server with configFile: false,
        // so the '@' alias must be re-declared for pre-rendering.
        vite: {
          plugins: [
            {
              name: 'ssg-alias',
              config: () => ({ resolve: { alias: { '@': path.resolve(__dirname, './src') } } }),
            },
          ],
        },
        html: {
          // Blocking script: runs before paint to prevent FOUC for Nepali users.
          // Reads ho-gas-lang from localStorage; if 'ne', sets data-lang="ne" on <html>
          // so the FOUC-prevention CSS (html[data-lang="ne"] #root { visibility: hidden })
          // hides the English SSG HTML until React mounts with the correct language.
          headTags: `<script>(function(){try{var l=localStorage.getItem('ho-gas-lang');if(l==='ne'){document.documentElement.setAttribute('data-lang','ne');}}catch(e){}})();</script><script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" defer></script>`,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
