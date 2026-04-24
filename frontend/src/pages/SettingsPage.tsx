import { Settings } from 'lucide-react';
import { DashboardLayout } from '../components/layout';

// Settings-specific components
import { GeneralPreferences, NotificationSettings, DangerZone } from '../components/features/settings';

// Reused from profile features (no duplication)
import { SecurityPrivacyCard, ConnectedServicesCard } from '../components/features/profile';

import styles from './SettingsPage.module.css';

/**
 * Settings Page
 * Route: /settings  (protected)
 *
 * Sections:
 *   1. General Preferences  — language, timezone, auto-delete, dark mode
 *   2. Notification Settings — email, alerts, digest toggles
 *   3. Security & Privacy   — auth status, 2FA, masking (reused from profile)
 *   4. Connected Services   — Clerk, Supabase, OCR (reused from profile)
 *   5. Danger Zone          — sign out, clear data, delete account
 */
export default function SettingsPage() {
  return (
    <DashboardLayout>
      {/* ── Page Header ── */}
      <header className={styles.pageHeader}>
        <div className={styles.headerIcon} aria-hidden="true">
          <Settings size={22} />
        </div>
        <div>
          <h1 className={styles.pageTitle}>Settings</h1>
          <p className={styles.pageSubtitle}>
            Manage your account preferences, privacy, and integrations
          </p>
        </div>
      </header>

      {/* ── Content ── */}
      <div className={styles.content}>
        {/* ── Left: primary settings ── */}
        <div className={styles.mainCol}>
          <GeneralPreferences />
          <NotificationSettings />
          <DangerZone />
        </div>

        {/* ── Right: status + services ── */}
        <div className={styles.sideCol}>
          <SecurityPrivacyCard />
          <ConnectedServicesCard />
        </div>
      </div>
    </DashboardLayout>
  );
}
