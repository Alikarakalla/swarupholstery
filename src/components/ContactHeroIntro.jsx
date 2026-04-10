import { Effect, Effects } from './animate-ui/Effect';
import styles from './ContactHeroIntro.module.css';

function ContactHeroIntro({ description, eyebrow, title }) {
  return (
    <header className={styles.section}>
      <div className={`wideContainer ${styles.layout}`}>
        <div className={styles.titleBlock}>
          <Effects animateWhenInView blur="10px" holdDelay={0.06} slide="up" step={0.12}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h1>{title}</h1>
          </Effects>
        </div>
        <Effect
          animateWhenInView
          blur="8px"
          className={styles.copyBlock}
          delay={0.16}
          slide="left"
        >
          <p>{description}</p>
        </Effect>
      </div>
    </header>
  );
}

export default ContactHeroIntro;
