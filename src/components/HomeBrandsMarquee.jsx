import { Effect, Effects } from './animate-ui/Effect';
import styles from './HomeBrandsMarquee.module.css';

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items];

  return (
    <div className={styles.rowShell}>
      <div className={`${styles.rowTrack} ${reverse ? styles.rowTrackReverse : ''}`}>
        {doubled.map((item, index) => (
          <div className={styles.brandCard} key={`${item.name}-${index}`}>
            <span className={styles.brandName}>{item.name}</span>
            <span className={styles.brandMeta}>{item.meta}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HomeBrandsMarquee({ items }) {
  const midpoint = Math.ceil(items.length / 2);
  const firstRow = items.slice(0, midpoint);
  const secondRow = items.slice(midpoint);

  return (
    <section className={styles.section}>
      <div className={`wideContainer ${styles.inner}`}>
        <Effects animateWhenInView blur="8px" holdDelay={0.05} slide="up" step={0.1}>
          <span className={styles.eyebrow}>Material Partners</span>
          <div className={styles.heading}>
            <h2>Trusted names behind the finish.</h2>
            <p>
              A premium upholstery studio is only as strong as the materials behind it. This strip
              can showcase mills, leather houses, and trusted fabric partners.
            </p>
          </div>
        </Effects>

        <Effect animateWhenInView blur="8px" className={styles.marqueeStack} delay={0.12} slide="up">
          <MarqueeRow items={firstRow} />
          <MarqueeRow items={secondRow.length ? secondRow : firstRow} reverse />
        </Effect>
      </div>
    </section>
  );
}

export default HomeBrandsMarquee;
