import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLayerGroup,
  faTree,
  faRuler,
  faDroplet,
  faArrowRightLong,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { galleryImage } from '@/lib/images'
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

const offerings = [
  {
    icon: faTree,
    name: 'Hybrid timber',
    text: 'Stable, water-resistant planks with a timber look, for busy family homes.',
  },
  {
    icon: faLayerGroup,
    name: 'Laminate',
    text: 'Hard-wearing floating floors in a wide range of finishes.',
  },
  {
    icon: faRuler,
    name: 'Engineered timber',
    text: 'Real timber surface on a stable core, supplied and fitted.',
  },
  {
    icon: faDroplet,
    name: 'Vinyl',
    text: 'Waterproof plank for kitchens, laundries and bathrooms.',
  },
]

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-14 sm:px-8 md:grid-cols-12 md:pb-32 md:pt-24 lg:px-10">
        <div className="md:col-span-7 md:pr-6 md:pt-8">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl">
            Timber floors, supplied and fitted properly.
          </h1>
          <p className="prose-body mt-8 text-lg">
            ProTrade Solution lays hybrid timber, laminate, engineered timber
            and vinyl, then finishes the job with scotia, trims, carpet removal
            and rubbish disposal.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Link to="/contact" className="btn-primary">
              Get a quote
            </Link>
            <Link to="/services" className="link-quiet">
              See our work
            </Link>
          </div>
        </div>

        <figure className="relative md:col-span-5 md:mt-16">
          <img
            src={galleryImage(1)}
            alt="A newly laid timber-look floor running the length of a hallway"
            width={600}
            height={800}
            fetchPriority="high"
            className="aspect-[3/4] w-full object-cover"
          />
          <figcaption className="bg-espresso px-6 py-5 text-cream md:absolute md:-bottom-10 md:-left-12 md:max-w-[18rem]">
            Hallway floor, fitted and trimmed.
          </figcaption>
        </figure>
      </section>

      <section className="bg-warm-beige">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-12 md:py-28 lg:px-10">
          <h2 className="text-4xl sm:text-5xl md:col-span-4">
            The floors we supply and fit.
          </h2>
          <ul className="md:col-span-7 md:col-start-6">
            {offerings.map((o) => (
              <li
                key={o.name}
                className="grid grid-cols-[2.5rem_1fr] gap-x-5 border-t border-latte/60 py-7 first:border-t-0 first:pt-0"
              >
                <FontAwesomeIcon
                  icon={o.icon}
                  className="mt-2 text-xl text-espresso"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-3xl">{o.name}</h3>
                  <p className="prose-body mt-2">{o.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-12 md:py-32 lg:px-10">
        <img
          src={galleryImage(3)}
          alt="An open-plan living area with a light timber-look floor"
          width={800}
          height={600}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover md:col-span-7"
        />
        <div className="md:col-span-4 md:col-start-9">
          <h2 className="text-4xl sm:text-5xl">From first measure to last trim.</h2>
          <p className="prose-body mt-6">
            We supply the floor, fit it, finish the edges and take the offcuts
            away with us.
          </p>
          <Link to="/services" className="link-quiet mt-8 inline-flex items-center gap-3">
            All services
            <FontAwesomeIcon icon={faArrowRightLong} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bg-espresso text-cream">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <h2 className="max-w-[22ch] text-4xl text-cream sm:text-5xl">
            Planning a new floor?
          </h2>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
            <Link to="/contact" className="btn-primary">
              Get a quote
            </Link>
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
