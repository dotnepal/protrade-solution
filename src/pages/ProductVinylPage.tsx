/**
 * Vinyl Flooring Product Page
 * Auto-generated detail page for SSG pre-rendering
 * Data source: src/data/products.ts
 */

import ProductView from '@/components/ui/ProductView';
import type { SsgOptions } from 'vite-plugin-ssg/utils';
import { ssgContext } from '@/lib/ssgContext'
import { products } from '../data/products';

const product = products.find((p) => p.slug === 'vinyl')!;

export const ssgOptions: SsgOptions = {
  slug: 'product-vinyl',
  routeUrl: '/products/vinyl',
  context: ssgContext('/products/vinyl'),
  Head: () => (
    <>
      <title>{product.name} - ProTrade Solution</title>
      <meta
        name="description"
        content={`${product.name}: ${product.description.substring(0, 155)}...`}
      />
    </>
  ),
};

export default function ProductVinylPage() {
  return <ProductView product={product} />;
}
