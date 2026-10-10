export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-espresso">Our Services</h1>
      <p className="text-charcoal mb-8">
        TODO: Add services overview
      </p>

      {/* Gallery placeholder */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6 text-espresso">Gallery</h2>
        <div className="aspect-video bg-cream flex items-center justify-center rounded-lg border-2 border-latte">
          <p className="text-charcoal">
            TODO: Add carousel with first gallery image (Embla carousel in issue #12)
          </p>
        </div>
      </section>

      {/* Service list */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-espresso">What We Offer</h2>
        <ul className="list-disc list-inside space-y-2 text-charcoal">
          <li>TODO: Hybrid timber flooring</li>
          <li>TODO: Laminate flooring</li>
          <li>TODO: Engineering timber</li>
          <li>TODO: Vinyl flooring</li>
          <li>TODO: Supply and fit MDF scotia</li>
          <li>TODO: Door and expansion trims</li>
          <li>TODO: Carpet removal and disposal</li>
        </ul>
      </section>
    </div>
  );
}
