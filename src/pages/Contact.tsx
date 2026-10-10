export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-espresso">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-espresso">Get in Touch</h2>

          <div className="space-y-6">
            {/* Phone */}
            <div>
              <h3 className="font-bold text-espresso mb-2">Phone</h3>
              <a
                href="tel:TODO"
                className="text-caramel hover:underline text-lg"
              >
                TODO: Phone number
              </a>
            </div>

            {/* Email */}
            <div>
              <h3 className="font-bold text-espresso mb-2">Email</h3>
              <a
                href="mailto:TODO"
                className="text-caramel hover:underline"
              >
                TODO: Email address
              </a>
            </div>

            {/* Address */}
            <div>
              <h3 className="font-bold text-espresso mb-2">Address</h3>
              <p className="text-charcoal">
                TODO: Full address
              </p>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-bold text-espresso mb-2">Business Hours</h3>
              <p className="text-charcoal">
                TODO: Operating hours
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-espresso">Location</h2>
          <div className="aspect-video bg-cream rounded-lg border-2 border-latte flex items-center justify-center text-charcoal">
            TODO: Embed map (lazy-load iframe) - see issue #12
          </div>
        </div>
      </div>
    </div>
  );
}
