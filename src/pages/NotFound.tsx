import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-espresso mb-4">404</h1>
      <p className="text-2xl text-charcoal mb-8">Page not found</p>
      <p className="text-charcoal mb-8">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-block bg-caramel text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-opacity"
      >
        Go Home
      </Link>
    </div>
  );
}
