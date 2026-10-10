/**
 * Laminate Flooring Product Page
 * Auto-generated detail page for SSG pre-rendering
 * Data source: src/data/products.ts
 */

import ProductView from '@/components/ui/ProductView';
import type { SsgOptions } from 'vite-plugin-ssg/utils';
import { ssgContext } from '@/lib/ssgContext'
import { products } from '../data/products';

const product = products.find((p) => p.slug === 'laminate')!;

export const ssgOptions: SsgOptions = {
  slug: 'product-laminate',
  routeUrl: '/products/laminate',
  context: ssgContext('/products/laminate'),
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

export default function ProductLaminatePage() {
  return <ProductView product={product} />;
}
