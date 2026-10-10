/**
 * Engineering Timber Product Page
 * Auto-generated detail page for SSG pre-rendering
 * Data source: src/data/products.ts
 */

import ProductView from '@/components/ui/ProductView';
import type { SsgOptions } from 'vite-plugin-ssg/utils';
import { ssgContext } from '@/lib/ssgContext'
import { products } from '../data/products';

const product = products.find((p) => p.slug === 'engineering-timber')!;

export const ssgOptions: SsgOptions = {
  slug: 'product-engineering-timber',
  routeUrl: '/products/engineering-timber',
  context: ssgContext('/products/engineering-timber'),
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

export default function ProductEngineeringTimberPage() {
  return <ProductView product={product} />;
}
