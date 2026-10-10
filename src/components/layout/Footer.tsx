export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold mb-4">About ProTrade</h3>
            <p className="text-sm text-cream">
              {/* TODO: Add company description */}
              ProTrade Solution provides flooring services for residential and
              commercial customers.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-sm">
              <a href="tel:TODO" className="text-caramel hover:underline">
                TODO: Phone number
              </a>
            </p>
            <p className="text-sm">
              <a href="mailto:TODO" className="text-caramel hover:underline">
                TODO: Email
              </a>
            </p>
            <p className="text-sm text-cream">TODO: Address</p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold mb-4">Hours</h3>
            <p className="text-sm text-cream">TODO: Business hours</p>
          </div>
        </div>

        <div className="border-t border-latte mt-8 pt-8 text-center text-xs text-cream">
          <p>
            &copy; {currentYear} ProTrade Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
