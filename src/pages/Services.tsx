import type { SsgOptions } from 'vite-plugin-ssg/utils'

export const ssgOptions: SsgOptions = {
  slug: 'services',
  routeUrl: '/services',
  Head: () => (
    <>
      <title>Services - ProTrade Solution</title>
      <meta name="description" content="Explore our flooring services including supply, installation, and removal." />
    </>
  ),
};

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="bg-espresso text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-cream">
            Complete flooring solutions for residential and commercial projects
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-16 flex-1">
        {/* Gallery Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-espresso">Gallery</h2>
          <div className="aspect-video bg-cream flex items-center justify-center rounded-lg border-2 border-latte overflow-hidden">
            <img
              src="/gallery-01.webp"
              alt="Project gallery - first image"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-charcoal mt-2">
            TODO: Embla carousel (issue #12) - swipe through project gallery with keyboard support
          </p>
        </section>

        {/* Services List */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-espresso">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-caramel pl-6 py-4">
              <h3 className="font-bold text-xl mb-2 text-espresso">Flooring Installation</h3>
              <ul className="space-y-2 text-charcoal">
                <li>• Hybrid timber flooring</li>
                <li>• Laminate flooring</li>
                <li>• Engineering timber</li>
                <li>• Vinyl flooring</li>
              </ul>
            </div>
            <div className="border-l-4 border-caramel pl-6 py-4">
              <h3 className="font-bold text-xl mb-2 text-espresso">Additional Services</h3>
              <ul className="space-y-2 text-charcoal">
                <li>• Supply and fit MDF scotia</li>
                <li>• Doorway trims installation</li>
                <li>• Expansion trim fitting</li>
                <li>• Carpet removal and disposal</li>
                <li>• Offcut and rubbish disposal</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cream border-2 border-latte rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-espresso">Ready for Your Flooring Project?</h2>
          <p className="text-charcoal mb-6">
            Contact us today to discuss your flooring needs and get a free quote.
          </p>
          <a
            href="/contact"
            className="inline-block bg-caramel text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-opacity"
          >
            Get Started
          </a>
        </section>
      </div>
    </div>
  );
}
