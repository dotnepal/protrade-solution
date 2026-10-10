import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { ssgPlugin } from 'vite-plugin-ssg'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ssgPlugin({
      // Scan src/pages/ for components that export `ssgOptions`
      pages: 'src/pages/',
      config: {
        // Output pre-rendered HTML alongside the regular Vite build
        outDir: 'dist',
        baseUrl: '',
      },
    }),
  ],
})
