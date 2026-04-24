import { ShieldCheck, Info } from 'lucide-react';
import styles from './ComplianceNotice.module.css';

export default function ComplianceNotice() {
  return (
    <div className={styles.notice} role="note">
      <div className={styles.iconCol} aria-hidden="true">
        <ShieldCheck size={22} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <Info size={14} aria-hidden="true" />
          <strong className={styles.title}>Privacy &amp; Compliance Notice</strong>
        </div>
        <p className={styles.text}>
          ClaimGuardian follows <strong>privacy-first principles</strong> aligned with
          India's Digital Personal Data Protection Act 2023 (DPDP Act). Uploaded files
          may be <strong>auto-purged after analysis</strong>. Sensitive PHI (Protected
          Health Information) is masked and anonymised before processing by our AI engine.
          Your data is never sold, shared with third parties, or used for model training
          without explicit consent.
        </p>
        <div className={styles.tags}>
          <span className={styles.tag}>🔒 HIPAA Aware</span>
          <span className={styles.tag}>🛡️ DPDP Act 2023</span>
          <span className={styles.tag}>✓ PHI Masking</span>
          <span className={styles.tag}>✓ SOC 2 Planned</span>
        </div>
      </div>
    </div>
  );
}
