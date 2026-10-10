export interface Route {
  path: string
  component: () => Promise<any>
  name: string
}

export const routes: Route[] = [
  {
    path: '/',
    component: () => import('./pages/Home'),
    name: 'Home',
  },
  {
    path: '/services',
    component: () => import('./pages/Services'),
    name: 'Services',
  },
  {
    path: '/products',
    component: () => import('./pages/Products'),
    name: 'Products',
  },
  {
    path: '/about',
    component: () => import('./pages/About'),
    name: 'About',
  },
  {
    path: '/contact',
    component: () => import('./pages/Contact'),
    name: 'Contact',
  },
]

// Dynamic routes for products
export const dynamicRoutes = [
  '/products/hybrid-flooring',
  '/products/laminate-flooring',
  '/products/vinyl-flooring',
]
