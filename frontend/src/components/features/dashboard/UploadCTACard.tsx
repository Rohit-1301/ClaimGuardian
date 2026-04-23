import { Link } from 'react-router-dom';
import { Button } from '../../ui';
import styles from './UploadCTACard.module.css';

export default function UploadCTACard() {
  return (
    <div className={styles.card}>
      <div className={styles.icon} aria-hidden="true">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16,16 12,12 8,16"/>
          <line x1="12" y1="12" x2="12" y2="21"/>
          <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
        </svg>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>Validate Your First Claim</h3>
        <p className={styles.desc}>
          Upload a CMS-1500 or UB-04 claim form and get instant AI-powered validation with a full error report.
        </p>
      </div>
      <Link to="/upload">
        <Button variant="primary" size="md">
          Upload Claim →
        </Button>
      </Link>
    </div>
  );
}
