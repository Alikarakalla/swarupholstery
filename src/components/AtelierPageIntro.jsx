import { Effect, Effects } from './animate-ui/Effect';
import styles from './AtelierPageIntro.module.css';

function AtelierPageIntro({ accent, description, eyebrow, mobileInline = false, title }) {
  return (
    <section className={styles.section}>
      <div className={`wideContainer ${styles.layout}`}>
        <div className={styles.titleBlock}>
          <Effects animateWhenInView blur="10px" holdDelay={0.06} slide="up" step={0.12}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h1 className={mobileInline ? styles.mobileInlineTitle : ''}>
              {title}
              <br className={mobileInline ? styles.mobileInlineBreak : ''} />
              <span>{accent}</span>
            </h1>
          </Effects>
        </div>
        <Effect
          animateWhenInView
          blur="8px"
          className={styles.copyBlock}
          delay={0.18}
          slide="left"
        >
          <p>{description}</p>
        </Effect>
      </div>
    </section>
  );
}

export default AtelierPageIntro;
