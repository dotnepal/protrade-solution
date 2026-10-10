import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { routes } from '@/routes';

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path);

  return (
    <nav
      aria-label="Main"
      className="sticky top-0 z-50 border-b border-latte/40 bg-cream/95 backdrop-blur"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          to="/"
          className="font-serif text-2xl font-medium tracking-tight text-espresso"
        >
          ProTrade
          <span className="ml-2 font-sans text-sm font-normal text-latte">
            Solution
          </span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                to={route.path}
                aria-current={isActive(route.path) ? 'page' : undefined}
                className={`border-b-2 py-1 text-base text-espresso transition-colors hover:border-latte ${
                  isActive(route.path)
                    ? 'border-caramel font-semibold'
                    : 'border-transparent'
                }`}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center text-espresso md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} size="lg" />
        </button>
      </div>

      {open && (
        <ul
          id="mobile-menu"
          className="border-t border-latte/40 bg-cream px-5 pb-6 pt-2 sm:px-8 md:hidden"
        >
          {routes.map((route) => (
            <li key={route.path} className="border-b border-latte/30">
              <Link
                to={route.path}
                onClick={() => setOpen(false)}
                aria-current={isActive(route.path) ? 'page' : undefined}
                className={`block py-4 font-serif text-2xl text-espresso ${
                  isActive(route.path) ? 'font-semibold' : ''
                }`}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
