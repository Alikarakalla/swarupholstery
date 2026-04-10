import { Effect } from './animate-ui/Effect';
import styles from './FabricsCategoryBar.module.css';

function FabricsCategoryBar({ activeCategory, categories, onSelect }) {
  return (
    <section className={styles.section}>
      <div className={`wideContainer ${styles.scroller}`}>
        {categories.map((category, index) => (
          <Effect
            animateWhenInView
            as="span"
            delay={0.04 + index * 0.06}
            key={category}
            slide="up"
            style={{ display: 'inline-flex' }}
          >
            <button
              className={`${styles.button} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => onSelect(category)}
              type="button"
            >
              {category}
            </button>
          </Effect>
        ))}
      </div>
    </section>
  );
}

export default FabricsCategoryBar;
