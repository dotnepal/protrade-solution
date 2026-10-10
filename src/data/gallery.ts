/**
 * Gallery data for services page
 * Flooring photos and installation examples
 * Photos: WebP, pre-sized to ~800px, in src/assets/img/gallery/
 * Alt text: placeholder until Phase 2 with real images and descriptions
 */

export type ImageOrientation = 'portrait' | 'landscape' | 'square';

export interface GalleryImage {
  src: string; // filename in src/assets/img/gallery/
  alt: string; // placeholder until Phase 2
  orientation: ImageOrientation;
  caption?: string; // optional, placeholder until Phase 2
}

export const galleryImages: GalleryImage[] = [
  {
    src: 'flooring-install-01.webp',
    alt: 'Hybrid timber flooring installation example',
    orientation: 'landscape',
    caption: 'Professional hybrid timber installation',
  },
  {
    src: 'flooring-install-02.webp',
    alt: 'Laminate flooring in modern home',
    orientation: 'portrait',
    caption: 'Contemporary laminate flooring',
  },
  {
    src: 'flooring-install-03.webp',
    alt: 'Engineering timber floor detail',
    orientation: 'landscape',
    caption: 'Engineered timber with authentic finish',
  },
  {
    src: 'flooring-install-04.webp',
    alt: 'Vinyl flooring in kitchen area',
    orientation: 'landscape',
    caption: 'Waterproof vinyl in kitchen',
  },
  {
    src: 'flooring-install-05.webp',
    alt: 'Bathroom vinyl installation',
    orientation: 'portrait',
    caption: 'Moisture-resistant vinyl flooring',
  },
  {
    src: 'flooring-install-06.webp',
    alt: 'Scotia trim installation detail',
    orientation: 'square',
    caption: 'Professional scotia finishing',
  },
  {
    src: 'flooring-install-07.webp',
    alt: 'Completed flooring project',
    orientation: 'landscape',
    caption: 'Full-room flooring transformation',
  },
  {
    src: 'flooring-install-08.webp',
    alt: 'Wood texture close-up',
    orientation: 'square',
    caption: 'Authentic timber appearance',
  },
];
