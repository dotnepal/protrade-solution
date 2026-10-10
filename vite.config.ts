import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import ssg from 'vite-plugin-ssg';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Dynamic routes: generate /products/:slug for each product
import { products } from './src/data/products';
const dynamicRoutes = products.map((product) => `/products/${product.slug}`);

export default defineConfig({
  plugins: [
    react(),
    ssg({
      script: 'async',
      onFinished() {
        console.log('✓ SSG build complete');
      },
      includedRoutes() {
        return [
          '/',
          '/services',
          '/products',
          ...dynamicRoutes,
          '/about',
          '/contact',
          '/404',
        ];
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
