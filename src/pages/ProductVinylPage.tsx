/**
 * Vinyl Flooring Product Page
 * Auto-generated detail page for SSG pre-rendering
 * Data source: src/data/products.ts
 */

import { Link } from 'react-router';
import type { SsgOptions } from 'vite-plugin-ssg/utils';
import { products } from '../data/products';

const product = products.find((p) => p.slug === 'vinyl')!;

export const ssgOptions: SsgOptions = {
  slug: 'product-vinyl',
  routeUrl: '/products/vinyl',
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
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="bg-cream py-8 border-b-2 border-latte">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            to="/products"
            className="text-caramel hover:underline font-medium inline-block mb-4"
          >
            ← Back to products
          </Link>
          <h1 className="text-4xl font-bold text-espresso">{product.name}</h1>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full px-4 py-12 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image */}
          <div>
            <div className="aspect-square bg-warm-beige rounded-lg border-2 border-latte flex items-center justify-center text-charcoal font-medium overflow-hidden">
              {product.image && (
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              )}
              {!product.image && 'TODO: Product image'}
            </div>
            <p className="text-sm text-charcoal mt-4">
              TODO: Additional images and gallery coming in Phase 2
            </p>
          </div>

          {/* Details */}
          <div>
            <p className="text-lg text-charcoal mb-6">{product.description}</p>

            {/* Specs */}
            <div className="mb-8 p-6 bg-cream rounded-lg border-2 border-latte">
              <h2 className="text-2xl font-bold text-espresso mb-6">Specifications</h2>
              {product.specs && Object.keys(product.specs).length > 0 ? (
                <dl className="space-y-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-latte">
                      <dt className="font-medium text-charcoal">{key}</dt>
                      <dd className="text-charcoal">{value}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="text-charcoal">
                  TODO: Add detailed specifications (thickness, finish, durability, warranty, etc.)
                </p>
              )}
            </div>

            {/* Additional Info */}
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-bold text-lg text-espresso mb-2">Installation</h3>
                <p className="text-charcoal">
                  TODO: Installation method, timeline, and recommended use cases
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-espresso mb-2">Care & Maintenance</h3>
                <p className="text-charcoal">
                  TODO: Cleaning and maintenance recommendations
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-espresso mb-2">Warranty</h3>
                <p className="text-charcoal">TODO: Warranty details and coverage</p>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <a
                href="/contact"
                className="block text-center bg-caramel text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-opacity"
              >
                Request a Quote
              </a>
              <Link
                to="/services"
                className="block text-center border-2 border-caramel text-caramel px-8 py-3 rounded-lg font-medium hover:bg-caramel hover:text-white transition-colors"
              >
                View Installation Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
