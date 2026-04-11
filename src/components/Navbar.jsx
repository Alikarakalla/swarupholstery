import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { companyInfo, headerNavigationLinks } from '../data/siteData';
import styles from './Navbar.module.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    document.body.dataset.mobileMenu = menuOpen ? 'open' : 'closed';

    return () => {
      document.body.style.overflow = '';
      delete document.body.dataset.mobileMenu;
    };
  }, [menuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 981px)');
    const handleChange = (event) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };

    handleChange(mediaQuery);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (menuOpen) {
        setHeaderVisible(true);
        return;
      }

      if (currentScrollY <= 10) {
        setHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setHeaderVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  return (
    <header
      className={`
        ${styles.header}
        ${!isHomePage ? styles.innerPageHeader : ''}
        ${menuOpen ? styles.headerOpen : ''}
        ${!headerVisible ? styles.headerHidden : ''}
      `}
    >
      <div className={`wideContainer ${styles.inner}`}>
        <Link aria-label={companyInfo.name} className={styles.brand} to="/">
          {companyInfo.shortName}
        </Link>

        <nav aria-label="Primary navigation" className={styles.desktopNav}>
          {headerNavigationLinks.map((link) => (
            <NavLink
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
              end={link.to === '/'}
              key={link.to}
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.desktopActions}>
          <Link className={styles.ctaButton} to="/contact">
            Book a consultation
          </Link>
        </div>

        <button
          aria-controls="mobile-nav"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ''}`}
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        aria-hidden={!menuOpen}
        className={`${styles.mobilePanel} ${menuOpen ? styles.mobilePanelOpen : ''}`}
        id="mobile-nav"
      >
        <div className={`wideContainer ${styles.mobilePanelInner}`}>
          <nav aria-label="Mobile navigation" className={styles.mobileNav}>
            {headerNavigationLinks.map((link) => (
              <NavLink
                className={({ isActive }) =>
                  `${styles.mobileLink} ${isActive ? styles.mobileActive : ''}`
                }
                end={link.to === '/'}
                key={link.to}
                to={link.to}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <Link className={styles.mobileCta} to="/contact">
            Book a consultation
          </Link>
          <div className={styles.mobileInfo}>
            <a href={companyInfo.phoneHref}>{companyInfo.phoneDisplay}</a>
            <a href={companyInfo.emailHref}>{companyInfo.email}</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
