import type { SsgOptions } from 'vite-plugin-ssg/utils'
import { generateSeoMetaTags, getSeoMetadata } from '@/lib/seoHelpers'

const seoData = getSeoMetadata('/contact', {
  title: 'Contact Us - ProTrade Solution',
  description: 'Get in touch with ProTrade Solution for your flooring needs.',
})

export const ssgOptions: SsgOptions = {
  slug: 'contact',
  routeUrl: '/contact',
  Head: () => (
    <>
      {generateSeoMetaTags(seoData)}
    </>
  ),
};

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="bg-espresso text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Contact ProTrade Solution</h1>
          <p className="text-xl text-cream">
            Get in touch for a free consultation
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <div className="max-w-7xl mx-auto w-full px-4 py-16 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Details */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-espresso">Get in Touch</h2>

            <div className="space-y-8">
              {/* Phone */}
              <div>
                <h3 className="font-bold text-lg text-espresso mb-2">Call Us</h3>
                <a
                  href="tel:+61XXXXXXXXXX"
                  className="text-caramel hover:underline text-lg font-medium block"
                >
                  +61 TODO: Phone
                </a>
                <p className="text-sm text-charcoal mt-1">
                  TODO: Update with actual phone number
                </p>
              </div>

              {/* Email */}
              <div>
                <h3 className="font-bold text-lg text-espresso mb-2">Email Us</h3>
                <a
                  href="mailto:info@protradesolution.com.au"
                  className="text-caramel hover:underline font-medium block"
                >
                  info@protradesolution.com.au
                </a>
                <p className="text-sm text-charcoal mt-1">
                  TODO: Update with actual email
                </p>
              </div>

              {/* Address */}
              <div>
                <h3 className="font-bold text-lg text-espresso mb-2">Visit Us</h3>
                <p className="text-charcoal font-medium">
                  TODO: Street Address
                </p>
                <p className="text-charcoal">
                  TODO: City, State, Postcode
                </p>
              </div>

              {/* Hours */}
              <div>
                <h3 className="font-bold text-lg text-espresso mb-2">Business Hours</h3>
                <div className="text-charcoal space-y-1">
                  <p>TODO: Monday - Friday: HH:MM - HH:MM</p>
                  <p>TODO: Saturday: HH:MM - HH:MM</p>
                  <p>TODO: Sunday: Closed</p>
                </div>
              </div>

              {/* ABN */}
              <div>
                <h3 className="font-bold text-lg text-espresso mb-2">Business Details</h3>
                <p className="text-charcoal">
                  ABN: TODO
                </p>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-espresso">Location</h2>
            <div className="aspect-video bg-cream rounded-lg border-2 border-latte flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-charcoal font-medium">Service Area Map</p>
                <p className="text-sm text-charcoal mt-2">
                  TODO: Embed Google Maps iframe (lazy-loaded) - Issue #12
                </p>
              </div>
            </div>
            <p className="text-sm text-charcoal mt-4">
              We serve the greater TODO: area. Contact us to check if we service your location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
