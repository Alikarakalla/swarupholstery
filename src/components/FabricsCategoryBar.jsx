import { Effect } from './animate-ui/Effect';
import styles from './FabricsCategoryBar.module.css';

function FabricsCategoryBar({ activeCategory, categories, onSelect }) {
  return (
    <section className={styles.section}>
      <div
        aria-label="Fabric categories"
        className={`wideContainer ${styles.scroller}`}
        role="tablist"
      >
        {categories.map((category, index) => (
          <Effect
            animateWhenInView
            as="span"
            className={styles.tabWrap}
            delay={0.04 + index * 0.06}
            key={category}
            slide="up"
          >
            <button
              aria-selected={activeCategory === category}
              className={`${styles.button} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => onSelect(category)}
              role="tab"
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
