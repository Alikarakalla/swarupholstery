import { Effect } from './animate-ui/Effect';
import styles from './ContactTextureShowcase.module.css';

function ContactTextureShowcase({ items }) {
  return (
    <section className={styles.section}>
      <div className={`wideContainer ${styles.grid}`}>
        {items.map((item, index) => (
          <Effect
            animateWhenInView
            blur="8px"
            className={styles.card}
            delay={0.06 + index * 0.08}
            key={item.imageAlt}
            slide="up"
            zoom={0.98}
          >
            <img alt={item.imageAlt} src={item.image} />
          </Effect>
        ))}
      </div>
    </section>
  );
}

export default ContactTextureShowcase;
