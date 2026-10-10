import { StaticRouter } from 'react-router'
import type { ReactNode } from 'react'

// vite-plugin-ssg renders each page outside the app's Router, so <Link> needs one at build time.
export const ssgContext = (location: string) => (children: ReactNode) => (
  <StaticRouter location={location}>{children}</StaticRouter>
)
