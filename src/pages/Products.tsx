import { Link } from 'react-router';
import { products } from '@/data/products';

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-espresso">Flooring Products</h1>
      <p className="text-charcoal mb-12">
        TODO: Add products overview text
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.slug}
            to={`/products/${product.slug}`}
            className="group border-2 border-latte rounded-lg p-6 hover:shadow-lg transition-shadow bg-cream"
          >
            {product.image && (
              <div className="aspect-square bg-warm-beige rounded mb-4 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            )}
            <div className="aspect-square bg-warm-beige rounded mb-4 flex items-center justify-center text-charcoal">
              TODO: Product image
            </div>
            <h3 className="text-xl font-bold text-espresso group-hover:text-caramel transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-charcoal mt-2">{product.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
