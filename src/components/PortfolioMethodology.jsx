import AtelierIcon from './AtelierIcon';
import { Effect, Effects } from './animate-ui/Effect';
import styles from './PortfolioMethodology.module.css';

function PortfolioMethodology({ steps }) {
  return (
    <section className={styles.section}>
      <div className={`wideContainer ${styles.inner}`}>
        <Effects animateWhenInView blur="8px" holdDelay={0.06} slide="up" step={0.12}>
          <span className={styles.eyebrow}>Methodology</span>
          <h2>The Atelier Standard</h2>
        </Effects>
        <div className={styles.grid}>
          {steps.map((step, index) => (
            <Effect
              animateWhenInView
              as="article"
              blur="8px"
              className={styles.card}
              delay={0.16 + index * 0.1}
              key={step.title}
              slide="up"
              zoom={0.98}
            >
              <div className={styles.iconWrap}>
                <AtelierIcon className={styles.icon} name={step.icon} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Effect>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioMethodology;
