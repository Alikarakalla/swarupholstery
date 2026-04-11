import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'motion/react';
import styles from './MotionCarousel.module.css';

function MotionCarousel({
  autoplayDelay = 4800,
  className = '',
  options,
  renderSlide,
  slides,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    loop: true,
    ...options,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('reInit', onSelect);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || autoplayDelay <= 0 || slides.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      if (!document.hidden) {
        emblaApi.scrollNext();
      }
    }, autoplayDelay);

    return () => window.clearInterval(intervalId);
  }, [autoplayDelay, emblaApi, slides.length]);

  return (
    <div className={`${styles.carousel} ${className}`.trim()}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {slides.map((slide, index) => {
            const isActive = index === selectedIndex;

            return (
              <div className={styles.slide} key={slide.id ?? slide.image ?? index}>
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0.72,
                    scale: isActive ? 1 : 1.04,
                  }}
                  className={styles.slideInner}
                  transition={{ damping: 34, stiffness: 260, type: 'spring' }}
                >
                  {renderSlide(slide, index, isActive)}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {scrollSnaps.length > 1 ? (
        <div className={styles.dots} role="tablist" aria-label="Hero slides">
          {scrollSnaps.map((_, index) => {
            const isActive = index === selectedIndex;

            return (
              <button
                aria-label={`Go to slide ${index + 1}`}
                aria-selected={isActive}
                className={`${styles.dot} ${isActive ? styles.dotActive : ''}`}
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                role="tab"
                type="button"
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default MotionCarousel;
