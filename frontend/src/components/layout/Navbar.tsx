import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth, UserButton } from '@clerk/react';
import { Button } from '../ui';
import { PUBLIC_NAV_LINKS } from '../../constants/navigation';
import { cn } from '../../utils/cn';
import styles from './Navbar.module.css';


export default function Navbar() {
  const [isScrolled,     setIsScrolled]     = useState(false);
  const [isMobileOpen,   setIsMobileOpen]   = useState(false);
  const location = useLocation();
  const { isSignedIn } = useAuth();


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsMobileOpen(false); }, [location.pathname]);

  const isLandingPage = location.pathname === '/';

  return (
    <header
      className={cn(
        styles.header,
        isScrolled     ? styles.scrolled    : '',
        !isLandingPage ? styles.solidBorder : '',
      )}
      role="banner"
    >
      <nav className={cn(styles.nav, 'container')} aria-label="Main navigation">
        {/* ── Logo ── */}
        <Link to="/" className={styles.logo} aria-label="ClaimGuardian home">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={styles.logoIcon} aria-hidden="true">
            <path
              d="M16 2L4 8v8c0 8.627 5.163 16.538 12 18 6.837-1.462 12-9.373 12-18V8L16 2z"
              fill="url(#shieldGrad)"
            />
            <path
              d="M11 16l3.5 3.5L21 12.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="shieldGrad" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2563EB" />
                <stop offset="1" stopColor="#0D9488" />
              </linearGradient>
            </defs>
          </svg>
          <span className={styles.logoText}>
            Claim<span className={styles.logoAccent}>Guardian</span>
          </span>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <ul className={styles.navLinks} role="list">
          {PUBLIC_NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  styles.navLink,
                  location.pathname === link.href ? styles.navLinkActive : '',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <div className={styles.actions}>
          {!isSignedIn ? (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button variant="primary" size="sm">Get Started →</Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard">
                <Button variant="outline" size="sm">Dashboard</Button>
              </Link>
              <UserButton />
            </>
          )}
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className={styles.hamburger}
          onClick={() => setIsMobileOpen((v) => !v)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
        >
          <span className={cn(styles.bar, isMobileOpen ? styles.barOpen1 : '')} />
          <span className={cn(styles.bar, isMobileOpen ? styles.barOpen2 : '')} />
          <span className={cn(styles.bar, isMobileOpen ? styles.barOpen3 : '')} />
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      {isMobileOpen && (
        <div id="mobile-menu" className={styles.mobileMenu} role="dialog" aria-label="Mobile navigation">
          <ul className={styles.mobileLinks} role="list">
            {PUBLIC_NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.mobileLink}>{link.label}</a>
              </li>
            ))}
          </ul>
          {!isSignedIn ? (
            <div className={styles.mobileActions}>
              <Link to="/login"  className={styles.mobileLinkFull}>
                <Button variant="outline" size="md" fullWidth>Sign In</Button>
              </Link>
              <Link to="/signup" className={styles.mobileLinkFull}>
                <Button variant="primary" size="md" fullWidth>Get Started →</Button>
              </Link>
            </div>
          ) : (
            <div className={styles.mobileActions}>
              <Link to="/dashboard" className={styles.mobileLinkFull}>
                <Button variant="primary" size="md" fullWidth>Go to Dashboard</Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
