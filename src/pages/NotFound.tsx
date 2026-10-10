import { Link } from 'react-router';
import type { SsgOptions } from 'vite-plugin-ssg/utils'
import { ssgContext } from '@/lib/ssgContext'
import { generateSeoMetaTags, getSeoMetadata } from '@/lib/seoHelpers'

const seoData = getSeoMetadata('/404', {
  title: 'Page Not Found - ProTrade Solution',
  description: 'This page could not be found.',
})

export const ssgOptions: SsgOptions = {
  slug: '404',
  routeUrl: '/404',
  context: ssgContext('/404'),
  Head: () => (
    <>
      {generateSeoMetaTags(seoData)}
    </>
  ),
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36 lg:px-10">
      <h1 className="text-6xl sm:text-7xl lg:text-8xl">Page not found</h1>
      <p className="prose-body mt-8 text-lg">
        That address doesn't match a page on this site. It may have moved, or the link may be mistyped.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
        <Link to="/" className="btn-primary">Back to home</Link>
        <Link to="/products" className="link-quiet">Browse flooring</Link>
        <Link to="/contact" className="link-quiet">Contact us</Link>
      </div>
    </section>
  );
}
