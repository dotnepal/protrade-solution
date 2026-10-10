import type { SsgOptions } from 'vite-plugin-ssg/utils'

export const ssgOptions: SsgOptions = {
  slug: 'products/laminate-flooring',
  routeUrl: '/products/laminate-flooring',
  Head: () => (
    <>
      <title>Laminate Flooring - ProTrade Solution</title>
      <meta name="description" content="Affordable and durable laminate flooring options for any room in your home." />
      <meta property="og:title" content="Laminate Flooring - ProTrade Solution" />
      <meta property="og:url" content="https://www.protradesolution.com.au/products/laminate-flooring" />
    </>
  ),
-e;

export default function ProductLaminateFlooringPage() {
  return (
    <div>
      <h1>Laminate Flooring</h1>
      <p>Affordable and durable laminate flooring solutions for every room.</p>
      <h2>Features</h2>
      <ul>
        <li>Cost-effective alternative to solid wood</li>
        <li>Wide variety of colors and designs</li>
        <li>Scratch-resistant surface</li>
        <li>Easy to clean and maintain</li>
      </ul>
      <a href="/products">Back to Products</a>
    </div>
  )
-e;
