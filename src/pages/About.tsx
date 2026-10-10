import PageHeader from '@/components/ui/PageHeader'
import type { SsgOptions } from 'vite-plugin-ssg/utils'
import { generateSeoMetaTags, getSeoMetadata } from '@/lib/seoHelpers'

const seoData = getSeoMetadata('/about', {
  title: 'About Us - ProTrade Solution',
  description: 'Learn about ProTrade Solution - professional flooring specialists serving the Australian market.',
})

export const ssgOptions: SsgOptions = {
  slug: 'about',
  routeUrl: '/about',
  Head: () => (
    <>
      {generateSeoMetaTags(seoData)}
    </>
  ),
};

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <PageHeader title="About ProTrade Solution" intro="Your trusted flooring partner" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full px-4 py-16 flex-1">
        {/* Company Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-espresso">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-charcoal mb-4">
                TODO: Add company history, founding date, and mission statement
              </p>
              <p className="text-charcoal mb-4">
                ProTrade Solution specialises in providing high-quality flooring solutions for residential and commercial projects throughout Australia.
              </p>
              <p className="text-charcoal">
                TODO: Add more about company values and commitment to customers
              </p>
            </div>
            <div className="aspect-square bg-warm-beige rounded-lg flex items-center justify-center border-2 border-latte">
              <p className="text-charcoal text-center">TODO: Company image or team photo</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-espresso">Why Choose ProTrade</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-latte rounded-lg p-6 bg-cream">
              <h3 className="font-bold text-lg text-espresso mb-3">Experience</h3>
              <p className="text-charcoal text-sm">
                TODO: Years of industry experience and expertise
              </p>
            </div>
            <div className="border border-latte rounded-lg p-6 bg-cream">
              <h3 className="font-bold text-lg text-espresso mb-3">Quality</h3>
              <p className="text-charcoal text-sm">
                Premium materials and superior craftsmanship in every project
              </p>
            </div>
            <div className="border border-latte rounded-lg p-6 bg-cream">
              <h3 className="font-bold text-lg text-espresso mb-3">Service</h3>
              <p className="text-charcoal text-sm">
                Professional installation from consultation to completion
              </p>
            </div>
            <div className="border border-latte rounded-lg p-6 bg-cream">
              <h3 className="font-bold text-lg text-espresso mb-3">Support</h3>
              <p className="text-charcoal text-sm">
                Dedicated customer support and after-sales service
              </p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-espresso">Our Team</h2>
          <p className="text-lg text-charcoal mb-8">
            TODO: Add information about team members, their expertise, and credentials
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="aspect-square bg-warm-beige rounded-lg flex items-center justify-center border-2 border-latte mb-4">
                  <p className="text-charcoal">TODO: Team member {i} photo</p>
                </div>
                <h3 className="font-bold text-lg text-espresso">Team Member {i}</h3>
                <p className="text-sm text-charcoal">TODO: Position and bio</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values/Mission */}
        <section className="bg-cream border-2 border-latte rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-espresso">Our Commitment</h2>
          <ul className="space-y-3 text-charcoal">
            <li className="flex items-start">
              <span className="text-caramel font-bold mr-3">✓</span>
              <span>TODO: Commitment to customer satisfaction and quality workmanship</span>
            </li>
            <li className="flex items-start">
              <span className="text-caramel font-bold mr-3">✓</span>
              <span>TODO: Sustainable and responsible business practices</span>
            </li>
            <li className="flex items-start">
              <span className="text-caramel font-bold mr-3">✓</span>
              <span>TODO: Continuous improvement and innovation in flooring solutions</span>
            </li>
            <li className="flex items-start">
              <span className="text-caramel font-bold mr-3">✓</span>
              <span>TODO: Building lasting relationships with customers and suppliers</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
