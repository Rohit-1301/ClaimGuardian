import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../../constants/navigation';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`${styles.inner} container`}>
        {/* ── Brand Column ── */}
        <div className={styles.brand}>
          <Link to="/" className={styles.logo} aria-label="ClaimGuardian home">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path d="M16 2L4 8v8c0 8.627 5.163 16.538 12 18 6.837-1.462 12-9.373 12-18V8L16 2z" fill="url(#fg)"/>
              <path d="M11 16l3.5 3.5L21 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="fg" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2563EB"/><stop offset="1" stopColor="#0D9488"/>
                </linearGradient>
              </defs>
            </svg>
            <span className={styles.logoText}>
              Claim<span className={styles.logoAccent}>Guardian</span>
            </span>
          </Link>
          <p className={styles.tagline}>
            AI-assisted pre-submission validation for health insurance claims. Reduce denials, save revenue, stay compliant.
          </p>
          <div className={styles.badges}>
            <span className={styles.trustBadge}>🔒 HIPAA Ready</span>
            <span className={styles.trustBadge}>✓ SOC 2 Planned</span>
          </div>
        </div>

        {/* ── Link Columns ── */}
        <div className={styles.linksGrid}>
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Product</h3>
            <ul role="list">
              {FOOTER_LINKS.product.map((l) => (
                <li key={l.href}><a href={l.href} className={styles.link}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Company</h3>
            <ul role="list">
              {FOOTER_LINKS.company.map((l) => (
                <li key={l.href}><a href={l.href} className={styles.link}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Legal</h3>
            <ul role="list">
              {FOOTER_LINKS.legal.map((l) => (
                <li key={l.href}><a href={l.href} className={styles.link}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className={styles.bottomBar}>
        <div className="container">
          <p className={styles.copyright}>
            © {year} ClaimGuardian. All rights reserved. Built with ❤️ for healthcare teams.
          </p>
        </div>
      </div>
    </footer>
  );
}
