import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <>
      <Seo
        description="The page you requested could not be found on the Swar Upholstery Inc website."
        title="Page Not Found"
      />

      <section className={`section ${styles.wrapper}`}>
        <div className="container">
          <div className={`${styles.card} surfaceCard`}>
            <span className="eyebrow">404</span>
            <h1>The page you requested does not exist.</h1>
            <p>
              The route may have changed while the site is being prepared for launch. Use the links
              below to get back to the main site experience.
            </p>
            <div className={styles.actions}>
              <Link className="button" to="/">
                Return home
              </Link>
              <Link className="buttonGhost" to="/contact">
                Contact the studio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
