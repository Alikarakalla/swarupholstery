import AtelierIcon from './AtelierIcon';
import { Effect, Effects } from './animate-ui/Effect';
import styles from './ContactStudioSection.module.css';

function ContactStudioSection({ details, map }) {
  return (
    <section className={styles.section}>
      <div className={styles.grainOverlay} />
      <div className={`wideContainer ${styles.layout}`}>
        <Effect animateWhenInView as="div" blur="10px" className={styles.content} slide="right">
          <Effects animateWhenInView blur="8px" holdDelay={0.06} slide="up" step={0.12}>
            <div className={styles.headingBlock}>
              <span className={styles.eyebrow}>Physical Location</span>
              <h2>Visit the Atelier</h2>
              <div className={styles.rule} />
            </div>
          </Effects>

          <div className={styles.detailsList}>
            {details.map((item, index) => (
              <Effect
                animateWhenInView
                as="div"
                blur="6px"
                className={styles.detailItem}
                delay={0.18 + index * 0.1}
                key={item.title}
                slide="up"
              >
                <AtelierIcon className={styles.detailIcon} name={item.icon} />
                <div>
                  <p className={styles.detailTitle}>{item.title}</p>
                  {item.lines.map((line) => (
                    <p className={styles.detailLine} key={line}>
                      {line}
                    </p>
                  ))}
                </div>
              </Effect>
            ))}
          </div>
        </Effect>

        <Effect
          animateWhenInView
          blur="12px"
          className={styles.mapWrap}
          delay={0.16}
          slide="left"
          zoom={0.98}
        >
          <img alt={map.imageAlt} src={map.image} />
          <div className={styles.mapOverlay} />
          <div className={styles.marker} />
        </Effect>
      </div>
    </section>
  );
}

export default ContactStudioSection;
