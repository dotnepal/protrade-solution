/**
 * Flooring Products data
 * Placeholder data for Phase 1; replace with real products and specs in Phase 2
 */

export interface FlooringProduct {
  slug: string;
  name: string;
  description: string;
  specs?: Record<string, string>;
  image?: string;
}

export const products: FlooringProduct[] = [
  {
    slug: 'hybrid-timber',
    name: 'Hybrid Timber Flooring',
    description:
      'Hybrid timber flooring combines the beauty of natural timber with enhanced durability. Perfect for high-traffic areas while maintaining an elegant aesthetic.',
    specs: {
      'Durability': 'AC4 Rating',
      'Thickness': '8-12mm',
      'Installation': 'Click-lock system',
      'Warranty': '10 years (Phase 2: update)',
    },
    image: 'hybrid-timber.webp',
  },
  {
    slug: 'laminate',
    name: 'Laminate Flooring',
    description:
      'Durable and affordable laminate flooring options for any room. Wide selection of wood-look designs with excellent water resistance.',
    specs: {
      'Durability': 'AC3 Rating',
      'Thickness': '8mm',
      'Installation': 'Click-lock or glue-down',
      'Warranty': '7 years (Phase 2: update)',
    },
    image: 'laminate.webp',
  },
  {
    slug: 'engineering-timber',
    name: 'Engineering Timber',
    description:
      'Engineered timber offers stability and authenticity. A real timber veneer on plywood backing provides the best of both worlds for Australian homes.',
    specs: {
      'Timber Type': 'Mixed Australian species (Phase 2: specify)',
      'Thickness': '14-15mm',
      'Installation': 'Floating or glued',
      'Warranty': '15 years (Phase 2: update)',
    },
    image: 'engineering-timber.webp',
  },
  {
    slug: 'vinyl',
    name: 'Vinyl Flooring',
    description:
      'Modern vinyl flooring with authentic wood and stone appearances. Waterproof, easy to clean, and ideal for kitchens and bathrooms.',
    specs: {
      'Durability': 'Premium commercial-grade',
      'Thickness': '4-6mm',
      'Installation': 'Click or glue-down',
      'Warranty': '10 years (Phase 2: update)',
    },
    image: 'vinyl.webp',
  },
];
