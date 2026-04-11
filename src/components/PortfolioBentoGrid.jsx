import { useMemo, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { Captions, Counter, Fullscreen, Zoom } from 'yet-another-react-lightbox/plugins';
import AtelierIcon from './AtelierIcon';
import { Effect } from './animate-ui/Effect';
import styles from './PortfolioBentoGrid.module.css';

function PortfolioBentoGrid({ items }) {
  const detailCard = items.find((item) => item.type === 'detail');
  const projectItems = useMemo(() => items.filter((item) => item.type === 'project'), [items]);
  const [selectedSwatch, setSelectedSwatch] = useState(detailCard?.swatches?.[0] ?? null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(-1);

  const lightboxSlides = useMemo(
    () =>
      projectItems.map((item) => ({
        src: item.image,
        alt: item.imageAlt,
        title: item.title,
        description: [item.subtitle, item.description, item.tags?.join(' • ')].filter(Boolean).join('\n'),
      })),
    [projectItems],
  );

  const openProject = (title) => {
    const targetIndex = projectItems.findIndex((item) => item.title === title);

    if (targetIndex !== -1) {
      setActiveProjectIndex(targetIndex);
    }
  };

  return (
    <>
      <section className={styles.section}>
        <div className={`wideContainer ${styles.grid}`}>
          {items.map((item, index) =>
            item.type === 'detail' ? (
              <Effect
                animateWhenInView
                as="article"
                blur="10px"
                className={`${styles.detailCard} ${styles.card}`}
                delay={0.08 + index * 0.1}
                key={item.title}
                slide="up"
              >
                <AtelierIcon className={styles.detailIcon} name={item.icon} />
                <h3>{selectedSwatch?.title || item.title}</h3>
                <p>{selectedSwatch?.description || item.description}</p>
                <div className={styles.swatchRow}>
                  {item.swatches.map((swatch) => (
                    <button
                      aria-label={`Show ${swatch.label}`}
                      className={`${styles.swatchButton} ${
                        selectedSwatch?.label === swatch.label ? styles.swatchActive : ''
                      }`}
                      key={swatch.label}
                      onClick={() => setSelectedSwatch(swatch)}
                      style={{ backgroundColor: swatch.color }}
                      type="button"
                    />
                  ))}
                </div>
              </Effect>
            ) : (
              <Effect
                animateWhenInView
                as="article"
                blur="10px"
                className={`${styles.projectCard} ${styles.card} ${
                  item.span === 'wide' ? styles.wide : ''
                }`}
                delay={0.08 + index * 0.1}
                key={item.title}
                slide={item.span === 'wide' ? 'up' : 'left'}
                zoom={0.98}
              >
                <div className={styles.imageWrap}>
                  <img alt={item.imageAlt} src={item.image} />
                </div>
                <div className={styles.projectFooter}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                  <button
                    aria-label={`Open ${item.title}`}
                    className={styles.openButton}
                    onClick={() => openProject(item.title)}
                    type="button"
                  >
                    <AtelierIcon className={styles.openIcon} name="open_in_full" />
                  </button>
                </div>
              </Effect>
            ),
          )}
        </div>
      </section>

      <Lightbox
        captions={{ descriptionTextAlign: 'start', descriptionMaxLines: 6 }}
        close={() => setActiveProjectIndex(-1)}
        counter={{ container: { style: { top: '1rem', bottom: 'auto' } } }}
        index={activeProjectIndex >= 0 ? activeProjectIndex : 0}
        open={activeProjectIndex >= 0}
        plugins={[Captions, Counter, Fullscreen, Zoom]}
        slides={lightboxSlides}
        styles={{
          container: { backgroundColor: 'rgba(1, 27, 15, 0.9)' },
          root: { '--yarl__color_backdrop': 'rgba(1, 27, 15, 0.9)' },
        }}
        zoom={{ maxZoomPixelRatio: 2.5, scrollToZoom: true }}
      />
    </>
  );
}

export default PortfolioBentoGrid;
