import { Link } from 'react-router-dom';
import { Effect } from './animate-ui/Effect';
import styles from './AtelierBentoServices.module.css';

function AtelierBentoServices({ services }) {
  return (
    <section className={styles.section}>
      <div className="wideContainer">
        <div className={styles.header}>
          <Effect animateWhenInView as="div" blur="8px" slide="up">
            <span className={styles.kicker}>Curated Services</span>
            <h2>Tailored to your lifestyle.</h2>
          </Effect>
          <Effect animateWhenInView delay={0.14} slide="left">
            <Link className={styles.headerLink} to="/services">
              View all services
            </Link>
          </Effect>
        </div>

        <Effect animateWhenInView as="div" blur="10px" delay={0.18} slide="up">
          <div className={styles.grid}>
            {services.map((service) => (
              <Link
                className={`${styles.card} ${
                  service.span === 'wide' ? styles.cardWide : ''
                } ${service.tone === 'dark' ? styles.cardDark : ''}`}
                key={service.title}
                to={service.to}
              >
                <img alt={`${service.title} placeholder`} src={service.image} />
                <div className={styles.cardOverlay} />
                <div className={styles.cardContent}>
                  <h3>{service.title}</h3>
                  <p>{service.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </Effect>
      </div>
    </section>
  );
}

export default AtelierBentoServices;
