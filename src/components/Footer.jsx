import AtelierIcon from './AtelierIcon';
import { companyInfo, footerUtilityLinks } from '../data/siteData';
import { Effects } from './animate-ui/Effect';
import styles from './Footer.module.css';

function Footer() {
  const copyrightLabel = `© ${new Date().getFullYear()} ${companyInfo.shortName}. The Digital Atelier.`;

  return (
    <footer className={styles.footer}>
      <div className={`wideContainer ${styles.inner}`}>
        <Effects animateWhenInView blur="8px" holdDelay={0.06} slide="up" step={0.12}>
          <div className={styles.brandBlock}>
            <div className={styles.brand}>{companyInfo.shortName}</div>
            <div className={styles.caption}>{copyrightLabel}</div>
          </div>

          <div className={styles.linksBlock}>
            {footerUtilityLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className={styles.iconBlock}>
            <a aria-label="Instagram placeholder" href={companyInfo.socialLinks[0]?.href || '#'}>
              <AtelierIcon className={styles.icon} name="camera" />
            </a>
            <a aria-label="Email Swar Upholstery" href={companyInfo.emailHref}>
              <AtelierIcon className={styles.icon} name="mail" />
            </a>
          </div>
        </Effects>
      </div>
    </footer>
  );
}

export default Footer;
