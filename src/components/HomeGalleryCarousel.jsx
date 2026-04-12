import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Effect, Effects } from './animate-ui/Effect';
import styles from './HomeGalleryCarousel.module.css';

function HomeGalleryCarousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || items.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [items.length, paused]);

  const activeItem = items[activeIndex];

  const carouselStyle = useMemo(
    () => ({
      '--gallery-count': items.length,
      '--gallery-rotation': `${activeIndex * (-360 / items.length)}deg`,
    }),
    [activeIndex, items.length],
  );

  return (
    <section className={styles.section}>
      <div className={`wideContainer ${styles.inner}`}>
        <Effects animateWhenInView blur="10px" holdDelay={0.06} slide="up" step={0.12}>
          <span className={styles.eyebrow}>Gallery</span>
          <div className={styles.heading}>
            <h2>
              Gallery shown in a
              <br />
              <span>real 3D rotation.</span>
            </h2>
            <p>
              A rotating presentation of restoration work, seating detail, leather finishing, and
              studio commissions, built to feel closer to a premium visual gallery than a flat
              slider.
            </p>
          </div>
        </Effects>

        <Effect animateWhenInView blur="10px" className={styles.stageBlock} delay={0.14} slide="up">
          <div
            aria-label="3D upholstery gallery"
            className={styles.stage}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className={styles.stageTopBar}>
              <span className={styles.stageLabel}>Featured Work</span>
              <span className={styles.stageMeta}>{items.length} Views</span>
            </div>

            <div className={styles.scene}>
              <div className={styles.carousel} style={carouselStyle}>
                {items.map((item, index) => (
                  <button
                    aria-label={`Show ${item.title}`}
                    className={`${styles.face} ${index === activeIndex ? styles.faceActive : ''}`}
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    style={{ '--face-index': index }}
                    type="button"
                  >
                    <img alt={item.imageAlt} src={item.image} />
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.controls}>
              <button
                aria-label="Previous gallery slide"
                className={styles.controlButton}
                onClick={() => setActiveIndex((current) => (current - 1 + items.length) % items.length)}
                type="button"
              >
                <span className="material-symbols-outlined">west</span>
              </button>

              <div className={styles.dots}>
                {items.map((item, index) => (
                  <button
                    aria-label={`Go to ${item.title}`}
                    aria-pressed={index === activeIndex}
                    className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    type="button"
                  />
                ))}
              </div>

              <button
                aria-label="Next gallery slide"
                className={styles.controlButton}
                onClick={() => setActiveIndex((current) => (current + 1) % items.length)}
                type="button"
              >
                <span className="material-symbols-outlined">east</span>
              </button>
            </div>
          </div>
        </Effect>

        <Effect animateWhenInView blur="10px" className={styles.summary} delay={0.18} slide="up">
          <div className={styles.summaryContent}>
            <span className={styles.summaryEyebrow}>{activeItem.eyebrow}</span>
            <h3>{activeItem.title}</h3>
            <p>{activeItem.description}</p>
          </div>
          <div className={styles.summaryActions}>
            <Link className={styles.primaryLink} to="/gallery">
              View full portfolio
            </Link>
            <Link className={styles.secondaryLink} to="/contact">
              Request a similar finish
            </Link>
          </div>
        </Effect>
      </div>
    </section>
  );
}

export default HomeGalleryCarousel;
