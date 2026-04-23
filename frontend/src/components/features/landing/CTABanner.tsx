import { Link } from 'react-router-dom';
import { Button } from '../../ui';
import styles from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={`${styles.inner} container`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Get Started Today</p>
          <h2 id="cta-heading" className={styles.title}>
            Ready to cut denials and save revenue?
          </h2>
          <p className={styles.subtitle}>
            Join billing teams already using ClaimGuardian to validate smarter.
            Free plan available. No credit card required.
          </p>
          <div className={styles.actions}>
            <Link to="/signup">
              <Button variant="primary" size="lg">
                Start Free Trial →
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg">
                Sign In
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className={styles.decorOrb1} aria-hidden="true" />
        <div className={styles.decorOrb2} aria-hidden="true" />
      </div>
    </section>
  );
}
