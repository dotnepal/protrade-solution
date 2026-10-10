import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faPhone } from '@fortawesome/free-solid-svg-icons';
import { galleryImage } from '@/lib/images';
import type { FlooringProduct } from '@/data/products';

const photoBySlug: Record<string, number> = {
  'hybrid-timber': 5,
  laminate: 12,
  'engineering-timber': 13,
  vinyl: 3,
};

export default function ProductView({ product }: { product: FlooringProduct }) {
  const specs = product.specs ? Object.entries(product.specs) : [];
  const photo = galleryImage(photoBySlug[product.slug] ?? 5);

  return (
    <>
      <div className="mx-auto max-w-7xl px-5 pt-10 sm:px-8 lg:px-10">
        <Link to="/products" className="link-quiet inline-flex items-center gap-3">
          <FontAwesomeIcon icon={faArrowLeftLong} aria-hidden="true" />
          All flooring
        </Link>
      </div>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-10 sm:px-8 md:grid-cols-12 md:pb-28 lg:px-10">
        <div className="md:col-span-5">
          <h1 className="text-5xl sm:text-6xl">{product.name}</h1>
          <p className="prose-body mt-8 text-lg">{product.description}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Link to="/contact" className="btn-primary">Get a quote</Link>
            <a href="tel:+61299999999" className="link-quiet inline-flex items-center gap-3">
              <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
              Call us
            </a>
          </div>
        </div>
        <img
          src={photo}
          alt={`${product.name}, installed example (placeholder photo)`}
          width={800}
          height={600}
          className="aspect-[4/3] w-full object-cover md:col-span-7"
        />
      </section>

      <section className="bg-warm-beige">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-24 lg:px-10">
          <h2 className="text-4xl md:col-span-4">Specifications</h2>
          {specs.length > 0 ? (
            <dl className="md:col-span-7 md:col-start-6">
              {specs.map(([k, v]) => (
                <div key={k} className="grid gap-1 border-t border-latte/60 py-4 first:border-t-0 first:pt-0 sm:grid-cols-[12rem_1fr]">
                  <dt className="font-semibold text-espresso">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="prose-body md:col-span-7 md:col-start-6">
              TODO: add thickness, finish, durability and warranty details.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
