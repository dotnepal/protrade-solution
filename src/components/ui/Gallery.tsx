import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeftLong,
  faArrowRightLong,
} from '@fortawesome/free-solid-svg-icons';

interface GalleryProps {
  images: Array<{ src: string; alt: string }>;
}

export default function Gallery({ images }: GalleryProps) {
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    duration: reduceMotion ? 0 : 25,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    update();
    emblaApi.on('select', update).on('reInit', update);
    return () => {
      emblaApi.off('select', update).off('reInit', update);
    };
  }, [emblaApi, update]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') emblaApi?.scrollPrev();
    if (e.key === 'ArrowRight') emblaApi?.scrollNext();
  };

  const arrow =
    'flex h-12 w-12 items-center justify-center border border-espresso text-espresso transition-colors hover:bg-espresso hover:text-cream disabled:border-latte/40 disabled:text-latte/50 disabled:hover:bg-transparent';

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Project photos"
      onKeyDown={onKeyDown}
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="-ml-4 flex touch-pan-y">
          {images.map((image, i) => (
            <div
              key={image.src}
              className="min-w-0 flex-[0_0_78%] pl-4 sm:flex-[0_0_44%] lg:flex-[0_0_30%]"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={600}
                height={800}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canPrev}
          aria-label="Previous photos"
          className={arrow}
        >
          <FontAwesomeIcon icon={faArrowLeftLong} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canNext}
          aria-label="Next photos"
          className={arrow}
        >
          <FontAwesomeIcon icon={faArrowRightLong} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
