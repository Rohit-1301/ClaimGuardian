import { useState } from 'react';
import { useUser } from '@clerk/react';
import { UserCog } from 'lucide-react';
import { DashboardLayout } from '../components/layout';
import {
  UserIdentityCard,
  SecurityPrivacyCard,
  ClaimActivityOverview,
  QuickActionsCard,
  ComplianceNotice,
} from '../components/features/profile';
import styles from './ProfilePage.module.css';

/**
 * ProfilePage — Identity, Stats & Quick Access
 * Route: /profile  (protected)
 *
 * Focused on WHO the user is + their claim activity.
 * Preferences / Settings / Danger Zone → moved to /settings
 */
export default function ProfilePage() {
  const { user } = useUser();
  const [editMode, setEditMode] = useState(false);

  return (
    <DashboardLayout>
      {/* ── Page Header ── */}
      <header className={styles.pageHeader}>
        <div className={styles.pageHeaderLeft}>
          <h1 className={styles.pageTitle}>My Profile</h1>
          <p className={styles.pageSubtitle}>Secure Claim Management Center</p>
        </div>
        <button
          className={styles.editBtn}
          onClick={() => setEditMode((v) => !v)}
          aria-pressed={editMode}
          aria-label="Edit profile"
        >
          <UserCog size={16} aria-hidden="true" />
          {editMode ? 'Save Changes' : 'Edit Profile'}
        </button>
      </header>

      {/* ── Account Status Strip ── */}
      <div className={styles.statusStrip}>
        <span className={styles.statusDot} aria-hidden="true" />
        <span className={styles.statusText}>
          Signed in as&nbsp;<strong>{user?.primaryEmailAddress?.emailAddress}</strong>
          &nbsp;·&nbsp;Session active
        </span>
      </div>

      {/* ── Two-column responsive grid ── */}
      <div className={styles.grid}>
        {/* Left: identity + activity */}
        <div className={styles.leftCol}>
          <UserIdentityCard />
          <ClaimActivityOverview />
          <ComplianceNotice />
        </div>

        {/* Right: security status + quick actions */}
        <div className={styles.rightCol}>
          <SecurityPrivacyCard />
          <QuickActionsCard />
        </div>
      </div>
    </DashboardLayout>
  );
}
