import type { SsgOptions } from 'vite-plugin-ssg/utils'

export const ssgOptions: SsgOptions = {
  slug: 'products/vinyl-flooring',
  routeUrl: '/products/vinyl-flooring',
  Head: () => (
    <>
      <title>Vinyl Flooring - ProTrade Solution</title>
      <meta name="description" content="Waterproof and durable vinyl flooring perfect for kitchens and bathrooms." />
      <meta property="og:title" content="Vinyl Flooring - ProTrade Solution" />
      <meta property="og:url" content="https://www.protradesolution.com.au/products/vinyl-flooring" />
    </>
  ),
};

export default function ProductVinylFlooringPage() {
  return (
    <div>
      <h1>Vinyl Flooring</h1>
      <p>Waterproof and flexible vinyl flooring solutions for high-moisture areas.</p>
      <h2>Features</h2>
      <ul>
        <li>100% waterproof</li>
        <li>Comfortable underfoot</li>
        <li>Noise-reducing</li>
        <li>Easy installation and maintenance</li>
      </ul>
      <a href="/products">Back to Products</a>
    </div>
  )
}