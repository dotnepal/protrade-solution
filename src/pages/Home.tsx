import type { SsgOptions } from 'vite-plugin-ssg/utils'
import { generateSeoMetaTags, getSeoMetadata } from '@/lib/seoHelpers'
import { LocalBusinessStructuredData } from '@/components/seo/StructuredData'

const seoData = getSeoMetadata('/', {
  title: 'ProTrade Solution - Professional Flooring Specialists',
  description: 'ProTrade Solution specialises in hybrid timber flooring, laminate flooring, engineering timber and vinyl. Professional supply and installation services.',
})

export const ssgOptions: SsgOptions = {
  slug: 'index',
  routeUrl: '/',
  Head: () => (
    <>
      {generateSeoMetaTags(seoData)}
      <LocalBusinessStructuredData />
    </>
  ),
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-espresso">
                ProTrade Solution
              </h1>
              <p className="text-xl text-charcoal mb-4">
                Your trusted partner for premium flooring solutions
              </p>
              <p className="text-lg text-charcoal mb-8">
                We specialise in hybrid timber flooring, laminate flooring, engineering timber, and vinyl flooring. We also supply and fit MDF scotia, doorway trims, expansion trims, and handle carpet removal and disposal.
              </p>
              <div className="flex gap-4">
                <a
                  href="/services"
                  className="bg-caramel text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-opacity"
                >
                  Explore Services
                </a>
                <a
                  href="/products"
                  className="bg-latte text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-opacity"
                >
                  View Products
                </a>
              </div>
            </div>
            <div className="aspect-square bg-warm-beige rounded-lg flex items-center justify-center border-2 border-latte">
              <p className="text-charcoal text-center">TODO: Hero image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-espresso">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-caramel pl-6 py-4">
              <h3 className="font-bold text-xl mb-2 text-espresso">Quality Materials</h3>
              <p className="text-charcoal">We source premium flooring materials that last.</p>
            </div>
            <div className="border-l-4 border-caramel pl-6 py-4">
              <h3 className="font-bold text-xl mb-2 text-espresso">Expert Installation</h3>
              <p className="text-charcoal">Professional fitting by experienced technicians.</p>
            </div>
            <div className="border-l-4 border-caramel pl-6 py-4">
              <h3 className="font-bold text-xl mb-2 text-espresso">Complete Service</h3>
              <p className="text-charcoal">From selection to installation to disposal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-espresso text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-lg mb-8 text-cream">
            Contact us today for a free consultation
          </p>
          <a
            href="/contact"
            className="inline-block bg-caramel text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
