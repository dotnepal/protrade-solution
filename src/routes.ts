/**
 * Routes configuration
 * Single source of truth for all routes in the application
 * Used by React Router, SSG configuration, and navbar generation
 */

export interface NavItem {
  label: string;
  path: string;
}

export const routes: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const ssgRoutes = [
  '/',
  '/services',
  '/products',
  '/about',
  '/contact',
  '/404',
  // Dynamic routes are added in vite.config.ts based on data/products.ts
];

export const SITE_URL = 'https://www.protradesolution.com.au';
