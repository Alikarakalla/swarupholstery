import { Link } from 'react-router-dom';
import AtelierIcon from './AtelierIcon';
import { Effect, Effects } from './animate-ui/Effect';
import styles from './PortfolioFeaturedCaseStudy.module.css';

function PortfolioFeaturedCaseStudy({ study }) {
  return (
    <section className={styles.section}>
      <div className={styles.grainOverlay} />
      <div className={`wideContainer ${styles.layout}`}>
        <Effect
          animateWhenInView
          blur="12px"
          className={styles.mediaColumn}
          slide="right"
          zoom={0.98}
        >
          <div className={styles.afterFrame}>
            <img alt={study.afterAlt} src={study.afterImage} />
            <div className={styles.afterBadge}>After</div>
          </div>
          <div className={styles.beforeFrame}>
            <img alt={study.beforeAlt} src={study.beforeImage} />
            <div className={styles.beforeBadge}>Before</div>
          </div>
        </Effect>

        <div className={styles.content}>
          <Effects animateWhenInView blur="10px" holdDelay={0.08} slide="up" step={0.1}>
            <div className={styles.caseHeader}>
              <div className={styles.line} />
              <span>{study.eyebrow}</span>
            </div>
            <h2>
              {study.title}
              <br />
              {study.accent}
            </h2>
            <p>{study.description}</p>
            <div className={styles.tags}>
              {study.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <Link className={styles.link} to={study.ctaTo}>
              {study.ctaLabel}
              <AtelierIcon className={styles.icon} name="arrow_forward" />
            </Link>
          </Effects>
        </div>
      </div>
    </section>
  );
}

export default PortfolioFeaturedCaseStudy;
