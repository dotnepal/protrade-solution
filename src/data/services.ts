/**
 * Services data
 * Flooring services and related offerings
 * Source: CLAUDE.md Services section
 */

export interface Service {
  slug: string;
  name: string;
  description: string;
  icon?: string; // TODO: Phase 2 - add icon names
}

export const services: Service[] = [
  {
    slug: 'timber-flooring',
    name: 'Hybrid & Engineering Timber Flooring',
    description:
      'We specialise in hybrid timber flooring and engineering timber installation. Our expertise ensures beautiful, durable timber floors for your home.',
  },
  {
    slug: 'laminate-flooring',
    name: 'Laminate Flooring',
    description:
      'High-quality laminate flooring with wood-look designs. Affordable, durable, and easy to maintain for any room in your home.',
  },
  {
    slug: 'vinyl-flooring',
    name: 'Vinyl Flooring',
    description:
      'Modern vinyl flooring solutions with authentic appearances. Perfect for kitchens, bathrooms, and high-moisture areas.',
  },
  {
    slug: 'scotia-installation',
    name: 'MDF Scotia & Trims',
    description:
      'We supply and install MDF scotia, doorway trims, and expansion trims. Professional finishing touches for all your flooring projects.',
  },
  {
    slug: 'carpet-removal',
    name: 'Carpet Removal & Floating Floor Prep',
    description:
      'Expert carpet pull-up and floor preparation services. We ensure your subfloor is ready for your new flooring installation.',
  },
  {
    slug: 'disposal',
    name: 'Offcut & Rubbish Disposal',
    description:
      'Professional disposal of flooring offcuts and construction waste. Clean, responsible waste management for your project.',
  },
];
