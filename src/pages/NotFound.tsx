import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="bg-espresso text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold">Page Not Found</h1>
        </div>
      </section>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 py-24 text-center">
          <div className="mb-8">
            <p className="text-9xl font-bold text-caramel">404</p>
          </div>
          <h2 className="text-3xl font-bold text-espresso mb-4">Oops!</h2>
          <p className="text-xl text-charcoal mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-charcoal mb-12">
            We're sorry for the inconvenience. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-block bg-caramel text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-opacity"
            >
              Go Home
            </Link>
            <Link
              to="/products"
              className="inline-block border-2 border-caramel text-caramel px-8 py-3 rounded-lg font-medium hover:bg-caramel hover:text-white transition-colors"
            >
              Browse Products
            </Link>
          </div>

          <div className="mt-12 p-6 bg-cream rounded-lg border-2 border-latte">
            <p className="text-charcoal">
              Still having trouble? <a href="/contact" className="text-caramel font-medium hover:underline">Contact us</a> for assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
