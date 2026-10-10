import type { SsgOptions } from 'vite-plugin-ssg/utils'
import { generateSeoMetaTags, getSeoMetadata } from '@/lib/seoHelpers'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRulerCombined,
  faDoorOpen,
  faArrowsLeftRight,
  faBroom,
  faTrashCan,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import Gallery from '@/components/ui/Gallery'
import PageHeader from '@/components/ui/PageHeader'
import { galleryImage } from '@/lib/images'

const seoData = getSeoMetadata('/services', {
  title: 'Services - ProTrade Solution',
  description: 'Explore our flooring services including supply, installation, and removal.',
})

export const ssgOptions: SsgOptions = {
  slug: 'services',
  routeUrl: '/services',
  Head: () => (
    <>
      {generateSeoMetaTags(seoData)}
    </>
  ),
};

const fitting = [
  { icon: faRulerCombined, name: 'MDF scotia', text: 'Supplied and fitted to finish the floor edge.' },
  { icon: faDoorOpen, name: 'Doorway trims', text: 'Supplied and fitted where floors meet.' },
  { icon: faArrowsLeftRight, name: 'Expansion trims', text: 'Fitted to allow for floating-floor movement.' },
  { icon: faBroom, name: 'Carpet and floating floor pull-up', text: 'Old floor lifted before the new one goes down.' },
  { icon: faTrashCan, name: 'Offcut and rubbish disposal', text: 'We take the leftovers with us.' },
]

const photos = [1, 2, 4, 6, 7, 8].map((n) => ({
  src: galleryImage(n),
  alt: 'Completed flooring installation',
}))

export default function Services() {
  return (
    <>
      <PageHeader
        title="Services"
        intro="We specialise in hybrid timber, laminate, engineered timber and vinyl, and look after the details around them."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-24 lg:px-10">
        <h2 className="text-4xl sm:text-5xl md:col-span-4">The finishing work</h2>
        <ul className="md:col-span-7 md:col-start-6">
          {fitting.map((f) => (
            <li
              key={f.name}
              className="grid grid-cols-[2.5rem_1fr] gap-x-5 border-t border-latte/50 py-6 first:border-t-0 first:pt-0"
            >
              <FontAwesomeIcon icon={f.icon} className="mt-1.5 text-xl text-espresso" aria-hidden="true" />
              <div>
                <h3 className="text-2xl">{f.name}</h3>
                <p className="prose-body mt-1">{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-warm-beige">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
          <h2 className="mb-10 text-4xl sm:text-5xl">Recent work</h2>
          <Gallery images={photos} />
        </div>
      </section>

      <section className="bg-espresso text-cream">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <h2 className="max-w-[22ch] text-4xl text-cream sm:text-5xl">
            Tell us about your project.
          </h2>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
            <Link to="/contact" className="btn-primary">Get a quote</Link>
            <a href="tel:+61299999999" className="inline-flex items-center gap-3 text-lg underline underline-offset-4">
              <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
              +61 2 9999 9999
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
