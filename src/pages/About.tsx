import PageHeader from '@/components/ui/PageHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faHandshake, faScrewdriverWrench, faHeadset, faCheck } from '@fortawesome/free-solid-svg-icons'
import { galleryImage } from '@/lib/images'
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

const pillars = [
  { icon: faAward, name: 'Experience', text: 'TODO: Years of industry experience and expertise' },
  { icon: faScrewdriverWrench, name: 'Quality', text: 'Premium materials and careful workmanship on every project.' },
  { icon: faHandshake, name: 'Service', text: 'Professional installation from consultation to completion.' },
  { icon: faHeadset, name: 'Support', text: 'Dedicated customer support and after-sales service.' },
]

const commitments = [
  'TODO: Commitment to customer satisfaction and quality workmanship',
  'TODO: Sustainable and responsible business practices',
  'TODO: Building lasting relationships with customers and suppliers',
]

export default function About() {
  return (
    <>
      <PageHeader
        title="About ProTrade Solution"
        intro="Flooring specialists for residential and commercial projects."
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-24 lg:px-10">
        <img
          src={galleryImage(6)}
          alt="TODO: company or team photo"
          width={600}
          height={800}
          loading="lazy"
          className="aspect-[3/4] w-full object-cover md:col-span-5"
        />
        <div className="md:col-span-6 md:col-start-7">
          <h2 className="text-4xl sm:text-5xl">Our story</h2>
          <p className="prose-body mt-6">
            ProTrade Solution supplies and fits hybrid timber, laminate,
            engineered timber and vinyl flooring for homes and commercial
            spaces.
          </p>
          <p className="prose-body mt-4">
            TODO: Add company history, founding date and mission statement.
          </p>
        </div>
      </section>

      <section className="bg-warm-beige">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-24 lg:px-10">
          <h2 className="text-4xl sm:text-5xl md:col-span-4">Why choose ProTrade</h2>
          <ul className="md:col-span-7 md:col-start-6">
            {pillars.map((p) => (
              <li
                key={p.name}
                className="grid grid-cols-[2.5rem_1fr] gap-x-5 border-t border-latte/60 py-6 first:border-t-0 first:pt-0"
              >
                <FontAwesomeIcon icon={p.icon} className="mt-1.5 text-xl text-espresso" aria-hidden="true" />
                <div>
                  <h3 className="text-2xl">{p.name}</h3>
                  <p className="prose-body mt-1">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-24 lg:px-10">
        <h2 className="text-4xl sm:text-5xl md:col-span-4">Our commitment</h2>
        <ul className="space-y-4 md:col-span-7 md:col-start-6">
          {commitments.map((c) => (
            <li key={c} className="flex items-start gap-4">
              <FontAwesomeIcon icon={faCheck} className="mt-1.5 text-espresso" aria-hidden="true" />
              <span className="prose-body">{c}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
