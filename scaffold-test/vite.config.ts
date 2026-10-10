import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { ssgPlugin } from 'vite-plugin-ssg'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ssgPlugin({
      routes: [
        '/',
        '/services',
        '/products',
        '/about',
        '/contact',
      ],
      includedRoutes: [
        '/',
        '/services',
        '/products',
        '/products/hybrid-flooring',
        '/products/laminate-flooring',
        '/products/vinyl-flooring',
        '/about',
        '/contact',
      ],
    }),
  ],
})
