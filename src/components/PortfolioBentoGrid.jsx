import AtelierIcon from './AtelierIcon';
import { Effect } from './animate-ui/Effect';
import styles from './PortfolioBentoGrid.module.css';

function PortfolioBentoGrid({ items }) {
  return (
    <section className={styles.section}>
      <div className={`wideContainer ${styles.grid}`}>
        {items.map((item, index) =>
          item.type === 'detail' ? (
            <Effect
              animateWhenInView
              as="article"
              blur="10px"
              className={`${styles.detailCard} ${styles.card}`}
              delay={0.08 + index * 0.1}
              key={item.title}
              slide="up"
            >
              <AtelierIcon className={styles.detailIcon} name={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className={styles.swatchRow}>
                {item.swatches.map((swatch) => (
                  <span key={swatch} style={{ backgroundColor: swatch }} />
                ))}
              </div>
            </Effect>
          ) : (
            <Effect
              animateWhenInView
              as="article"
              blur="10px"
              className={`${styles.projectCard} ${styles.card} ${
                item.span === 'wide' ? styles.wide : ''
              }`}
              delay={0.08 + index * 0.1}
              key={item.title}
              slide={item.span === 'wide' ? 'up' : 'left'}
              zoom={0.98}
            >
              <div className={styles.imageWrap}>
                <img alt={item.imageAlt} src={item.image} />
              </div>
              <div className={styles.projectFooter}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
                <AtelierIcon className={styles.openIcon} name="open_in_full" />
              </div>
            </Effect>
          ),
        )}
      </div>
    </section>
  );
}

export default PortfolioBentoGrid;
