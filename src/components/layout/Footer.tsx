import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <footer className="bg-espresso text-white">
      {/* Map Section */}
      <div className="w-full h-80 bg-charcoal relative">
        {!mapLoaded && (
          <button
            onClick={() => setMapLoaded(true)}
            className="absolute inset-0 w-full h-full bg-charcoal hover:bg-latte transition-colors flex items-center justify-center z-10"
            aria-label="Load map"
          >
            <span className="text-cream">📍 Click to load map</span>
          </button>
        )}
        {mapLoaded && (
          <iframe
            title="ProTrade Solution location"
            width="100%"
            height="100%"
            style={{ border: 0 } as React.CSSProperties}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.123456789!2d151.123456!3d-33.8688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a1b1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sProTrade%20Solution!5e0!3m2!1sen!2sau!4v1234567890"
          />
        )}
      </div>

      {/* Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h3 className="font-bold mb-4 text-lg">About ProTrade</h3>
              <p className="text-sm text-cream">
                ProTrade Solution specialises in professional flooring
                installation for residential and commercial projects across
                Australia.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold mb-4 text-lg">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="tel:+61299999999"
                    className="text-caramel hover:underline"
                  >
                    +61 2 9999 9999
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@protradesolution.com.au"
                    className="text-caramel hover:underline"
                  >
                    info@protradesolution.com.au
                  </a>
                </li>
                <li className="text-cream">Sydney, NSW 2000</li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-bold mb-4 text-lg">Hours</h3>
              <ul className="space-y-1 text-sm text-cream">
                <li>Monday–Friday: 8am–5pm</li>
                <li>Saturday: 9am–2pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-latte mt-8 pt-8 text-center text-xs text-cream">
            <p>
              &copy; {currentYear} ProTrade Solution. All rights reserved.
            </p>
            <p className="mt-2 text-charcoal">
              <a href="/" className="hover:text-caramel">
                Home
              </a>
              {' | '}
              <a href="/contact" className="hover:text-caramel">
                Contact
              </a>
              {' | '}
              <a href="/about" className="hover:text-caramel">
                About
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
