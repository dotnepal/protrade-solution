import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface GalleryProps {
  images: Array<{ src: string; alt: string }>;
  aspectRatio?: 'square' | 'video' | 'portrait';
}

export default function Gallery({
  images,
  aspectRatio = 'video',
}: GalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.scrollProgress() * (images.length - 1));
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi, images.length]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      scrollPrev();
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      scrollNext();
      e.preventDefault();
    }
  };

  const aspectRatioClass = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
  }[aspectRatio];

  return (
    <div
      className="space-y-4"
      role="region"
      aria-label="Image gallery"
      onKeyDown={handleKeyDown}
    >
      {/* Carousel container */}
      <div className="overflow-hidden rounded-lg border-2 border-latte bg-cream">
        <div ref={emblaRef} className="w-full">
          <div className="flex touch-pan-y gap-0">
            {images.map((image, idx) => (
              <div
                key={idx}
                className={`flex-[0_0_100%] min-w-0 ${aspectRatioClass}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label="Previous slide"
          className="p-2 rounded bg-espresso text-white hover:bg-latte disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          ← Previous
        </button>

        {/* Slide indicators */}
        <div className="flex gap-2">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === selectedIndex ? 'bg-caramel' : 'bg-latte'
              }`}
              aria-current={idx === selectedIndex ? 'page' : undefined}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label="Next slide"
          className="p-2 rounded bg-espresso text-white hover:bg-latte disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next →
        </button>
      </div>

      {/* Slide counter */}
      <p className="text-sm text-charcoal text-center">
        Slide {selectedIndex + 1} of {images.length}
      </p>
    </div>
  );
}
