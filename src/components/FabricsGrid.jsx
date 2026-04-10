import { Effect } from './animate-ui/Effect';
import styles from './FabricsGrid.module.css';

function FabricsGrid({ items }) {
  return (
    <section className={styles.section}>
      <div className={`wideContainer ${styles.grid}`}>
        {items.map((item, index) => {
          if (item.layout === 'featuredLarge') {
            return (
              <Effect
                animateWhenInView
                as="article"
                blur="10px"
                className={`${styles.card} ${styles.featuredLarge}`}
                delay={0.06 + index * 0.08}
                key={item.title}
                slide="up"
                zoom={0.98}
              >
                <div className={styles.largeImageWrap}>
                  <img alt={item.imageAlt} src={item.image} />
                  <div className={styles.hoverTint} />
                </div>
                <div className={styles.largeFooter}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                  <span className={styles.reference}>{item.reference}</span>
                </div>
              </Effect>
            );
          }

          if (item.layout === 'featuredWide') {
            return (
              <Effect
                animateWhenInView
                as="article"
                blur="10px"
                className={`${styles.card} ${styles.featuredWide}`}
                delay={0.06 + index * 0.08}
                key={item.title}
                slide="left"
                zoom={0.98}
              >
                <div className={styles.wideImageWrap}>
                  <img alt={item.imageAlt} src={item.image} />
                  <div className={styles.atelierBadge}>
                    <p>Limited Edition</p>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </Effect>
            );
          }

          return (
            <Effect
              animateWhenInView
              as="article"
              blur="8px"
              className={`${styles.card} ${styles.standard}`}
              delay={0.06 + index * 0.08}
              key={item.title}
              slide="up"
            >
              <div className={styles.squareImageWrap}>
                <img alt={item.imageAlt} src={item.image} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </Effect>
          );
        })}
      </div>
    </section>
  );
}

export default FabricsGrid;
