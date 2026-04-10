import { Link } from 'react-router-dom';
import { Effect, Effects } from './animate-ui/Effect';
import Shine from './animate-ui/Shine';
import styles from './FabricsSampleCta.module.css';

function FabricsSampleCta({ cta }) {
  return (
    <section className={styles.section}>
      <div className={`wideContainer ${styles.inner}`}>
        <Effects animateWhenInView blur="10px" holdDelay={0.08} slide="up" step={0.12}>
          <p className={styles.eyebrow}>{cta.eyebrow}</p>
          <h2>
            {cta.title}
            <br />
            <span>{cta.accent}</span>
          </h2>
          <p className={styles.description}>{cta.description}</p>
        </Effects>
        <Effect animateWhenInView as="div" delay={0.24} slide="up">
          <div className={styles.actions}>
            <Shine
              className={styles.shineWrap}
              delay={250}
              duration={1300}
              loop
              loopDelay={2200}
              opacity={0.16}
            >
              <Link className={styles.primaryButton} to={cta.primaryTo}>
                {cta.primaryLabel}
              </Link>
            </Shine>
            <Link className={styles.secondaryButton} to={cta.secondaryTo}>
              {cta.secondaryLabel}
            </Link>
          </div>
        </Effect>
      </div>
    </section>
  );
}

export default FabricsSampleCta;
