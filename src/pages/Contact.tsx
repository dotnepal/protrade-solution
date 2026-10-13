import PageHeader from '@/components/ui/PageHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faClock, faIdCard } from '@fortawesome/free-solid-svg-icons'
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

const details = [
  { icon: faPhone, label: 'Phone', node: <a href="tel:+61450546870" className="link-quiet text-xl">0450 546 870</a> },
  { icon: faEnvelope, label: 'Email', node: <a href="mailto:info@protradesolution.com.au" className="link-quiet text-xl">info@protradesolution.com.au</a> },
  { icon: faLocationDot, label: 'Address', node: <p className="text-xl">Melbourne, Victoria 3000</p> },
  {
    icon: faClock,
    label: 'Hours',
    node: (
      <p className="text-lg">
        Monday to Saturday, 7:00am – 8:00pm
      </p>
    ),
  },
  { icon: faIdCard, label: 'Business details', node: <p className="text-lg"><strong>ABN:</strong> 67 831 685 996</p> },
]

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact"
        intro="Call or email to talk about your floor and get a quote."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-24 lg:px-10">
        <dl className="md:col-span-7">
          {details.map((d) => (
            <div
              key={d.label}
              className="grid grid-cols-[2.5rem_1fr] gap-x-5 border-t border-latte/50 py-7 first:border-t-0 first:pt-0"
            >
              <dt className="mt-1.5">
                <FontAwesomeIcon icon={d.icon} className="text-xl text-espresso" aria-hidden="true" />
                <span className="sr-only">{d.label}</span>
              </dt>
              <dd>{d.node}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
