import { useState } from 'react';
import { Bell, Trash2, Moon, Globe, Settings2 } from 'lucide-react';
import { DEFAULT_PREFERENCES, type UserPreferenceState } from '../../../constants/profileMockData';
import styles from './PreferencesCard.module.css';

interface PrefRowProps {
  icon:        React.ReactNode;
  label:       string;
  description: string;
  enabled:     boolean;
  onToggle:    () => void;
  disabled?:   boolean;
  comingSoon?: boolean;
}

function ToggleRow({ icon, label, description, enabled, onToggle, disabled, comingSoon }: PrefRowProps) {
  return (
    <div className={styles.row}>
      <div className={styles.rowLeft}>
        <span className={styles.rowIcon} aria-hidden="true">{icon}</span>
        <div>
          <div className={styles.rowLabel}>
            {label}
            {comingSoon && <span className={styles.comingSoonBadge}>Coming soon</span>}
          </div>
          <p className={styles.rowDesc}>{description}</p>
        </div>
      </div>
      <button
        role="switch"
        aria-checked={enabled}
        aria-label={`Toggle ${label}`}
        onClick={onToggle}
        disabled={disabled || comingSoon}
        className={`${styles.toggle} ${enabled ? styles.toggleOn : styles.toggleOff} ${(disabled || comingSoon) ? styles.toggleDisabled : ''}`}
      >
        <span className={styles.thumb} />
      </button>
    </div>
  );
}

export default function PreferencesCard() {
  const [prefs, setPrefs] = useState<UserPreferenceState>(DEFAULT_PREFERENCES);

  const toggle = (key: keyof UserPreferenceState) => {
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.headerIcon} aria-hidden="true">
          <Settings2 size={18} />
        </div>
        <div>
          <h3 className={styles.title}>Preferences</h3>
          <p className={styles.subtitle}>Manage your account settings</p>
        </div>
      </div>

      <div className={styles.rows}>
        <ToggleRow
          icon={<Bell size={16} />}
          label="Email Notifications"
          description="Receive validation results and report summaries via email"
          enabled={prefs.emailNotifications}
          onToggle={() => toggle('emailNotifications')}
        />
        <ToggleRow
          icon={<Trash2 size={16} />}
          label="Auto-Delete After Report"
          description="Uploaded files are purged automatically after analysis"
          enabled={prefs.autoDeleteFiles}
          onToggle={() => toggle('autoDeleteFiles')}
        />
        <ToggleRow
          icon={<Moon size={16} />}
          label="Dark Mode"
          description="Switch to dark theme across the platform"
          enabled={prefs.darkMode}
          onToggle={() => toggle('darkMode')}
          comingSoon
        />
        <div className={styles.languageRow}>
          <div className={styles.rowLeft}>
            <span className={styles.rowIcon} aria-hidden="true"><Globe size={16} /></span>
            <div>
              <p className={styles.rowLabel}>Language</p>
              <p className={styles.rowDesc}>Display language for the interface</p>
            </div>
          </div>
          <select
            className={styles.langSelect}
            value={prefs.language}
            onChange={(e) => setPrefs((p) => ({ ...p, language: e.target.value }))}
            aria-label="Select language"
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi (coming soon)</option>
            <option value="Marathi">Marathi (coming soon)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
