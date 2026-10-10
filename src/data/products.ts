/**
 * Products data
 * Placeholder data for Phase 1; replace with real products in Phase 2
 */

export interface Product {
  slug: string;
  name: string;
  description: string;
  specs?: Record<string, string>;
  image?: string;
}

export const products: Product[] = [
  {
    slug: 'hybrid-timber',
    name: 'Hybrid Timber Flooring',
    description: 'TODO: Add product description',
    image: 'TODO: Add image path',
  },
  {
    slug: 'laminate',
    name: 'Laminate Flooring',
    description: 'TODO: Add product description',
    image: 'TODO: Add image path',
  },
  {
    slug: 'engineering-timber',
    name: 'Engineering Timber',
    description: 'TODO: Add product description',
    image: 'TODO: Add image path',
  },
];
