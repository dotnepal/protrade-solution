import { useParams, Link } from 'react-router';
import { products } from '../data/products';
import ProductView from '@/components/ui/ProductView';

/**
 * Product Detail Page Component
 * Used for client-side routing (when navigating via React Router)
 * For static pre-rendering, see ProductHybridTimberPage.tsx, ProductLaminatePage.tsx, etc.
 */

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
        <h1 className="text-5xl sm:text-6xl">Product not found</h1>
        <Link to="/products" className="link-quiet mt-8 inline-block">
          Browse all flooring
        </Link>
      </section>
    );
  }

  return <ProductView product={product} />;
}
