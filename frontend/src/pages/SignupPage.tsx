import { SignUp } from '@clerk/react';
import { Link } from 'react-router-dom';
import styles from './AuthPage.module.css';

/**
 * Signup Page — Clerk SignUp component
 * Route: /signup
 */
export default function SignupPage() {
  return (
    <div className={styles.page}>
      <div className={styles.brand}>
        <Link to="/" className={styles.logo} aria-label="Back to ClaimGuardian home">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M16 2L4 8v8c0 8.627 5.163 16.538 12 18 6.837-1.462 12-9.373 12-18V8L16 2z" fill="url(#signup-g)"/>
            <path d="M11 16l3.5 3.5L21 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="signup-g" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2563EB"/><stop offset="1" stopColor="#0D9488"/>
              </linearGradient>
            </defs>
          </svg>
          <span className={styles.logoText}>ClaimGuardian</span>
        </Link>
      </div>

      <div className={styles.formWrap}>
        <SignUp
          routing="hash"
          signInUrl="/login"
          fallbackRedirectUrl="/dashboard"
        />
      </div>

      <p className={styles.footer}>
        Already have an account?{' '}
        <Link to="/login" className={styles.footerLink}>Sign in</Link>
      </p>
    </div>
  );
}
