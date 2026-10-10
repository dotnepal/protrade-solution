import { useParams, Link } from 'react-router';
import { products } from '@/data/products';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-espresso mb-4">Product not found</h1>
        <Link to="/products" className="text-caramel hover:underline">
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Link to="/products" className="text-caramel hover:underline mb-6 inline-block">
        ← Back to products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image */}
        <div>
          <div className="aspect-square bg-cream rounded-lg border-2 border-latte flex items-center justify-center text-charcoal">
            TODO: Product image
          </div>
        </div>

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold text-espresso mb-4">{product.name}</h1>
          <p className="text-lg text-charcoal mb-6">{product.description}</p>

          {product.specs && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-espresso mb-4">Specifications</h2>
              <dl className="space-y-2">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <dt className="font-medium text-charcoal">{key}:</dt>
                    <dd className="text-charcoal">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <div className="space-y-4">
            <p className="text-charcoal">
              TODO: Add more details, installation info, etc.
            </p>
            <button className="bg-caramel text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-opacity">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
