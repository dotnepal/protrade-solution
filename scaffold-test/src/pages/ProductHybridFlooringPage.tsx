import type { SsgOptions } from 'vite-plugin-ssg/utils'

export const ssgOptions: SsgOptions = {
  slug: 'products/hybrid-flooring',
  routeUrl: '/products/hybrid-flooring',
  Head: () => (
    <>
      <title>Hybrid Flooring - ProTrade Solution</title>
      <meta name="description" content="Premium hybrid timber flooring solutions combining durability and natural aesthetics." />
      <meta property="og:title" content="Hybrid Flooring - ProTrade Solution" />
      <meta property="og:url" content="https://www.protradesolution.com.au/products/hybrid-flooring" />
    </>
  ),
-e;

export default function ProductHybridFlooringPage() {
  return (
    <div>
      <h1>Hybrid Timber Flooring</h1>
      <p>Premium hybrid flooring combining engineered stability with natural timber aesthetics.</p>
      <h2>Features</h2>
      <ul>
        <li>Durable core for high-traffic areas</li>
        <li>Natural timber veneer</li>
        <li>Easy maintenance</li>
        <li>Water-resistant</li>
      </ul>
      <a href="/products">Back to Products</a>
    </div>
  )
-e;
