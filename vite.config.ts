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
      // This includes ProductDetail.tsx and any product-specific pages
      pages: 'src/pages/',
      config: {
        outDir: 'dist',
        baseUrl: '',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
