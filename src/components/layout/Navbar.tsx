import { Link, useLocation } from 'react-router';
import { routes } from '@/routes';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-espresso text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo (left) */}
          <Link to="/" className="flex-shrink-0 font-bold text-xl">
            {/* TODO: Replace with logo */}
            ProTrade
          </Link>

          {/* Navigation links (right) */}
          <div className="flex gap-8">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === route.path
                    ? 'text-caramel border-b-2 border-caramel'
                    : 'text-white hover:text-caramel'
                }`}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
