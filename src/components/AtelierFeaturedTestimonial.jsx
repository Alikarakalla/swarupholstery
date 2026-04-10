import AtelierIcon from './AtelierIcon';
import { Effects } from './animate-ui/Effect';
import styles from './AtelierFeaturedTestimonial.module.css';

function AtelierFeaturedTestimonial({ testimonial }) {
  return (
    <section className={styles.section}>
      <div className={`wideContainer ${styles.inner}`}>
        <Effects animateWhenInView blur="10px" holdDelay={0.06} slide="up" step={0.12}>
          <AtelierIcon className={styles.quoteIcon} name="format_quote" />
          <blockquote>{testimonial.quote}</blockquote>
          <p>
            {testimonial.author} <span>{testimonial.role}</span>
          </p>
        </Effects>
      </div>
    </section>
  );
}

export default AtelierFeaturedTestimonial;
