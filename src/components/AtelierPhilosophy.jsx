import { Effect, Effects } from './animate-ui/Effect';
import styles from './AtelierPhilosophy.module.css';

function AtelierPhilosophy({ accentImage, image, points }) {
  return (
    <section className={styles.section}>
      <div className={`wideContainer ${styles.layout}`}>
        <Effect
          animateWhenInView
          blur="10px"
          className={styles.mediaColumn}
          slide="right"
          zoom={0.98}
        >
          <div className={styles.primaryImage}>
            <img alt="Interior design" src={image} />
          </div>
          <div className={styles.accentImage}>
            <img alt="Fabric texture" src={accentImage} />
          </div>
        </Effect>

        <div className={styles.content}>
          <Effects animateWhenInView blur="8px" holdDelay={0.08} slide="up" step={0.12}>
            <span className={styles.kicker}>Our Philosophy</span>
            <h2>
              Where Heritage Meets
              <br />
              Modern Precision.
            </h2>
            <p>
              At Swar Upholstery, we don&apos;t just restore furniture; we preserve legacies. Every
              piece that enters our atelier is treated as a narrative of design, stripped to its
              core and rebuilt with the finest sustainable materials.
            </p>
          </Effects>
          <div className={styles.points}>
            {points.map((point, index) => (
              <Effect
                animateWhenInView
                as="article"
                blur="6px"
                delay={0.34 + index * 0.1}
                key={point.number}
                slide="up"
              >
                <span>{point.number}</span>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </Effect>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AtelierPhilosophy;
