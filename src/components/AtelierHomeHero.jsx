import { Link } from 'react-router-dom';
import AtelierIcon from './AtelierIcon';
import { Effect, Effects } from './animate-ui/Effect';
import Shine from './animate-ui/Shine';
import styles from './AtelierHomeHero.module.css';

function AtelierHomeHero({ image }) {
  return (
    <section className={styles.hero}>
      <div className={styles.mediaLayer}>
        <img alt="Master craftsman" src={image} />
      </div>
      <div className={styles.overlay} />
      <div className={`wideContainer ${styles.contentWrap}`}>
        <div className={styles.content}>
          <Effects animateWhenInView blur="12px" holdDelay={0.08} slide="up" step={0.12}>
            <span className={styles.kicker}>The Digital Atelier</span>
            <h1>
              Artistry in
              <br />
              <span>Every Stitch.</span>
            </h1>
            <p>
              Elevating bespoke interiors through time-honored craftsmanship and contemporary
              material science. Experience the velvet-touch of true luxury.
            </p>
          </Effects>
          <Effect animateWhenInView as="div" delay={0.46} slide="up">
            <div className={styles.actions}>
              <Shine
                className={styles.shineWrap}
                delay={250}
                duration={1300}
                loop
                loopDelay={2200}
                opacity={0.16}
              >
                <Link className={styles.primaryButton} to="/contact">
                  Book a consultation
                </Link>
              </Shine>
              <Link className={styles.secondaryLink} to="/gallery">
                View portfolio
                <AtelierIcon className={styles.arrowIcon} name="arrow_forward" />
              </Link>
            </div>
          </Effect>
        </div>
      </div>
    </section>
  );
}

export default AtelierHomeHero;
