import { Link } from 'react-router-dom';
import AtelierIcon from './AtelierIcon';
import { Effect, Effects } from './animate-ui/Effect';
import Shine from './animate-ui/Shine';
import styles from './AtelierMaterialLibrary.module.css';

function AtelierMaterialLibrary({ image, tags }) {
  return (
    <section className={styles.section}>
      <div className={`wideContainer ${styles.layout}`}>
        <div className={styles.content}>
          <Effects animateWhenInView blur="10px" holdDelay={0.08} slide="up" step={0.1}>
            <span className={styles.kicker}>The Material Library</span>
            <h2>
              Tactile Luxury at
              <br />
              Your Fingertips.
            </h2>
            <div className={styles.tags}>
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <p>
              We collaborate with trusted suppliers and premium material collections to source
              surfaces that do not just look beautiful, but wear with character. Explore a curated
              range of leather, vinyl, fabric, and foam options for your project.
            </p>
          </Effects>
          <Effect animateWhenInView delay={0.44} slide="up">
            <Shine
              className={styles.shineWrap}
              delay={300}
              duration={1400}
              loop
              loopDelay={2600}
              opacity={0.14}
            >
              <Link className={styles.linkButton} to="/contact">
                Request fabric swatches
                <AtelierIcon className={styles.sparkIcon} name="auto_awesome" />
              </Link>
            </Shine>
          </Effect>
        </div>

        <Effect
          animateWhenInView
          blur="10px"
          className={styles.media}
          delay={0.2}
          slide="left"
          zoom={0.98}
        >
          <div className={styles.backplate} />
          <div className={styles.imageFrame}>
            <img alt="Fabric swatches" src={image} />
          </div>
        </Effect>
      </div>
    </section>
  );
}

export default AtelierMaterialLibrary;
