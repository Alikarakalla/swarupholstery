import { Link } from 'react-router-dom';
import { Effect } from './animate-ui/Effect';
import styles from './AtelierEditorialServicesGrid.module.css';

function AtelierEditorialServicesGrid({ cards }) {
  return (
    <section className={styles.section}>
      <div className={`wideContainer ${styles.grid}`}>
        {cards.map((card, index) => (
          <Effect
            animateWhenInView
            as="article"
            blur="10px"
            className={`${styles.card} ${card.offset ? styles.offset : ''}`}
            delay={0.08 + index * 0.12}
            key={card.title}
            slide={index % 2 === 0 ? 'up' : 'left'}
            zoom={0.98}
          >
            <div className={styles.imageWrap}>
              <img alt={card.imageAlt} src={card.image} />
              <div className={styles.tint} />
            </div>
            <div className={styles.content}>
              <span className={styles.eyebrow}>{card.eyebrow}</span>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <div className={styles.linkWrap}>
                <Link to={card.to}>{card.ctaLabel}</Link>
              </div>
            </div>
          </Effect>
        ))}
      </div>
    </section>
  );
}

export default AtelierEditorialServicesGrid;
