import { Link } from 'react-router-dom';
import { Effect, Effects } from './animate-ui/Effect';
import Shine from './animate-ui/Shine';
import styles from './AtelierHomeCta.module.css';

function AtelierHomeCta() {
  return (
    <section className={styles.section}>
      <div className={`wideContainer ${styles.inner}`}>
        <Effects animateWhenInView blur="10px" holdDelay={0.08} slide="up" step={0.12}>
          <h2>
            Begin your bespoke
            <br />
            journey today.
          </h2>
          <p>
            Schedule a consultation for upholstery, seat restoration, or a full interior refresh
            and get clear guidance on the right next step.
          </p>
        </Effects>
        <Effect animateWhenInView as="div" delay={0.34} slide="up">
          <div className={styles.actions}>
            <Shine
              className={styles.shineWrap}
              delay={250}
              duration={1300}
              loop
              loopDelay={2100}
              opacity={0.16}
            >
              <Link className={styles.goldButton} to="/contact">
                Book a consultation
              </Link>
            </Shine>
            <Link className={styles.darkButton} to="/contact">
              Contact our studio
            </Link>
          </div>
        </Effect>
      </div>
    </section>
  );
}

export default AtelierHomeCta;
