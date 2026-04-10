import { Effect, Effects } from './animate-ui/Effect';
import styles from './AtelierTextileLibrarySection.module.css';

function AtelierTextileLibrarySection({ section }) {
  return (
    <section className={styles.section}>
      <div className={styles.grainOverlay} />
      <div className={`wideContainer ${styles.layout}`}>
        <div className={styles.content}>
          <Effects animateWhenInView blur="10px" holdDelay={0.08} slide="up" step={0.1}>
            <span className={styles.eyebrow}>{section.eyebrow}</span>
            <h2>
              {section.title} <span>{section.accent}</span>
            </h2>
            <p>{section.description}</p>
            <div className={styles.tags}>
              {section.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </Effects>
        </div>
        <Effect
          animateWhenInView
          blur="12px"
          className={styles.media}
          delay={0.2}
          slide="left"
          zoom={0.98}
        >
          <div className={styles.imageFrame}>
            <img alt={section.imageAlt} src={section.image} />
          </div>
          <div className={styles.badge}>
            <strong>{section.statValue}</strong>
            <span>{section.statLabel}</span>
          </div>
        </Effect>
      </div>
    </section>
  );
}

export default AtelierTextileLibrarySection;
