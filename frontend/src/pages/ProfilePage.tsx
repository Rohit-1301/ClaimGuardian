import { UserProfile } from '@clerk/react';
import { DashboardLayout } from '../components/layout';
import styles from './ProfilePage.module.css';

/**
 * Profile Page — Clerk UserProfile management
 * Route: /profile  (protected)
 */
export default function ProfilePage() {
  return (
    <DashboardLayout>
      <h1 className={styles.pageTitle}>Account & Profile</h1>
      <p className={styles.pageSubtitle}>
        Manage your personal information, security settings, and connected accounts.
      </p>

      <div className={styles.profileWrap}>
        <UserProfile routing="hash" />
      </div>

      {/* ── Preferences Placeholder ── */}
      <div className={styles.prefsSection}>
        <h2 className={styles.prefsTitle}>Preferences</h2>
        <p className={styles.prefsDesc}>
          Notification settings and workspace preferences will be available in a future update.
        </p>
        <div className={styles.prefItems}>
          {[
            { label: 'Email Notifications',  desc: 'Receive validation results and report summaries via email', value: 'Coming soon' },
            { label: 'Weekly Digest',         desc: 'Weekly summary of claim activity and denial trends',         value: 'Coming soon' },
            { label: 'EHR Integration',       desc: 'Connect your EHR/PM system for seamless claim submission',     value: 'Phase 2'     },
          ].map((pref) => (
            <div key={pref.label} className={styles.prefItem}>
              <div>
                <p className={styles.prefLabel}>{pref.label}</p>
                <p className={styles.prefDesc}>{pref.desc}</p>
              </div>
              <span className={styles.prefBadge}>{pref.value}</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
