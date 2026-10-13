import { useState } from 'react';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { routes } from '@/routes';

// TODO(Phase 2): replace placeholder contact details and map embed URL
const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.123456789!2d151.123456!3d-33.8688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a1b1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sProTrade%20Solution!5e0!3m2!1sen!2sau!4v1234567890';
const MAP_LINK = 'https://www.google.com/maps/search/?api=1&query=Melbourne+Victoria+3000';

export default function Footer() {
  const year = new Date().getFullYear();
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-24 lg:px-10">
        <div className="md:col-span-5">
          <p className="font-serif text-4xl font-medium leading-tight text-cream">
            Talk to us about your floor.
          </p>
          <p className="mt-5 max-w-[46ch] text-warm-beige">
            Supply and fitting of hybrid timber, laminate, engineered timber and
            vinyl flooring, with trims, carpet removal and rubbish disposal.
          </p>
          <ul className="mt-8 space-y-4 text-lg">
            <li className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faPhone}
                className="w-4 text-caramel"
                aria-hidden="true"
              />
              <a href="tel:+61450546870" className="underline underline-offset-4 hover:text-caramel">
                0450 546 870 <br/>Call us to get free quote and measurement
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-4 text-caramel"
                aria-hidden="true"
              />
              <a
                href="mailto:info@protradesolution.com.au"
                className="underline underline-offset-4 hover:text-caramel"
              >
                info@protradesolution.com.au
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="w-4 text-caramel"
                aria-hidden="true"
              />
              Melbourne, Victoria 3000
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faClock}
                className="w-4 text-caramel"
                aria-hidden="true"
              />
			  <p>Office Hour:</p>
			  <p>
				  Monday to Saturday <br />
				  7:00am – 8:00pm
			  </p>
            </li>
          </ul>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div className="relative aspect-[4/3] w-full bg-charcoal md:aspect-[16/10]">
            {mapLoaded ? (
              <iframe
                title="ProTrade Solution location"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={MAP_SRC}
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size="2x"
                  className="text-caramel"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  onClick={() => setMapLoaded(true)}
                  className="btn-primary"
                >
                  Load map
                </button>
                <a
                  href={MAP_LINK}
                  className="text-sm text-warm-beige underline underline-offset-4"
                >
                  Or open in Google Maps
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-latte/50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-warm-beige sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>&copy; {year} ProTrade Solution</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {routes.map((r) => (
              <li key={r.path}>
                <Link to={r.path} className="underline-offset-4 hover:underline">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
