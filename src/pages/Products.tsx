import { Link } from 'react-router';
import { products } from '@/data/products';
import type { SsgOptions } from 'vite-plugin-ssg/utils'

export const ssgOptions: SsgOptions = {
  slug: 'products',
  routeUrl: '/products',
  Head: () => (
    <>
      <title>Flooring Products - ProTrade Solution</title>
      <meta name="description" content="Browse our range of premium flooring products." />
    </>
  ),
};

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="bg-espresso text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Flooring Products</h1>
          <p className="text-xl text-cream">
            Explore our range of premium flooring options for any space
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto w-full px-4 py-16 flex-1">
        <div className="mb-12">
          <p className="text-lg text-charcoal mb-2">
            We offer a variety of flooring solutions to suit your needs and budget:
          </p>
          <ul className="text-charcoal space-y-1 ml-4">
            <li>• Hybrid timber flooring</li>
            <li>• Laminate flooring</li>
            <li>• Engineering timber</li>
            <li>• Vinyl flooring</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.slug}
              to={`/products/${product.slug}`}
              className="group border-2 border-latte rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-cream hover:border-caramel"
            >
              <div className="aspect-square bg-warm-beige flex items-center justify-center text-charcoal font-medium overflow-hidden">
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                )}
                {!product.image && 'TODO: Product image'}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-espresso group-hover:text-caramel transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-charcoal mt-3">
                  {product.description !== 'TODO: Add product description'
                    ? product.description
                    : 'Premium flooring solution for modern spaces.'}
                </p>
                <p className="text-xs text-caramel font-medium mt-4 group-hover:underline">
                  View Details →
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-cream border-2 border-latte rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-espresso">Need Help Choosing?</h2>
          <p className="text-charcoal mb-6">
            Contact us for personalized recommendations and a free quote for your project.
          </p>
          <a
            href="/contact"
            className="inline-block bg-caramel text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
