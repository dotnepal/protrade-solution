import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import PageHeader from '@/components/ui/PageHeader';
import { galleryImage } from '@/lib/images';
import { products } from '../data/products';
import type { SsgOptions } from 'vite-plugin-ssg/utils'
import { ssgContext } from '@/lib/ssgContext'
import { generateSeoMetaTags, getSeoMetadata } from '@/lib/seoHelpers'

const seoData = getSeoMetadata('/products', {
  title: 'Flooring Products - ProTrade Solution',
  description: 'Browse our range of premium flooring products.',
})

export const ssgOptions: SsgOptions = {
  slug: 'products',
  routeUrl: '/products',
  context: ssgContext('/products'),
  Head: () => (
    <>
      {generateSeoMetaTags(seoData)}
    </>
  ),
};

const placeholderPhotos = [5, 12, 13, 3];

export default function Products() {
  return (
    <>
      <PageHeader
        title="Flooring we supply"
        intro="Hybrid timber, laminate, engineered timber and vinyl. Choose a floor, then we fit it."
      />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
        <ul className="space-y-20 md:space-y-28">
          {products.map((product, i) => (
            <li key={product.slug} className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
              <img
                src={galleryImage(placeholderPhotos[i % placeholderPhotos.length])}
                alt=""
                width={800}
                height={600}
                loading={i === 0 ? 'eager' : 'lazy'}
                className={`aspect-[4/3] w-full object-cover md:col-span-7 ${
                  i % 2 ? 'md:order-2 md:col-start-6' : ''
                }`}
              />
              <div
                className={`md:col-span-4 ${
                  i % 2 ? 'md:order-1 md:col-start-1' : 'md:col-start-9'
                }`}
              >
                <h2 className="text-4xl">{product.name}</h2>
                <p className="prose-body mt-4">
                  {product.description !== 'TODO: Add product description'
                    ? product.description
                    : 'Description coming soon.'}
                </p>
                <Link
                  to={`/products/${product.slug}`}
                  className="link-quiet mt-6 inline-flex items-center gap-3"
                >
                  View {product.name}
                  <FontAwesomeIcon icon={faArrowRightLong} aria-hidden="true" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
