import { useState } from 'react';
import { Globe, Moon, Trash2, Sliders } from 'lucide-react';
import styles from './GeneralPreferences.module.css';

export default function GeneralPreferences() {
  const [prefs, setPrefs] = useState({
    autoDelete: false,
    darkMode:   false,
    language:   'English',
    timezone:   'Asia/Kolkata',
  });

  const toggle = (key: 'autoDelete' | 'darkMode') => {
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  };

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionIcon}><Sliders size={18} /></div>
        <div>
          <h2 className={styles.sectionTitle}>General Preferences</h2>
          <p className={styles.sectionSub}>Customize your ClaimGuardian experience</p>
        </div>
      </div>

      <div className={styles.rows}>
        {/* Language */}
        <div className={styles.row}>
          <div className={styles.rowLeft}>
            <span className={styles.rowIcon}><Globe size={15} /></span>
            <div>
              <p className={styles.rowLabel}>Language</p>
              <p className={styles.rowDesc}>Preferred display language for the interface</p>
            </div>
          </div>
          <select
            className={styles.select}
            value={prefs.language}
            onChange={(e) => setPrefs((p) => ({ ...p, language: e.target.value }))}
            aria-label="Language preference"
          >
            <option value="English">🇬🇧 English</option>
            <option value="Hindi">🇮🇳 Hindi (coming soon)</option>
            <option value="Marathi">🇮🇳 Marathi (coming soon)</option>
            <option value="Gujarati">🇮🇳 Gujarati (coming soon)</option>
          </select>
        </div>

        {/* Timezone */}
        <div className={styles.row}>
          <div className={styles.rowLeft}>
            <span className={styles.rowIcon}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
              </svg>
            </span>
            <div>
              <p className={styles.rowLabel}>Timezone</p>
              <p className={styles.rowDesc}>Used for formatting dates in reports and activity logs</p>
            </div>
          </div>
          <select
            className={styles.select}
            value={prefs.timezone}
            onChange={(e) => setPrefs((p) => ({ ...p, timezone: e.target.value }))}
            aria-label="Timezone preference"
          >
            <option value="Asia/Kolkata">IST (UTC+5:30)</option>
            <option value="Asia/Dubai">GST (UTC+4)</option>
            <option value="America/New_York">EST (UTC-5)</option>
            <option value="UTC">UTC</option>
          </select>
        </div>

        {/* Dark Mode */}
        <div className={styles.row}>
          <div className={styles.rowLeft}>
            <span className={styles.rowIcon}><Moon size={15} /></span>
            <div>
              <div className={styles.rowLabel}>
                Dark Mode
                <span className={styles.badge}>Coming soon</span>
              </div>
              <p className={styles.rowDesc}>Switch to dark theme across the entire platform</p>
            </div>
          </div>
          <button
            role="switch" aria-checked={prefs.darkMode}
            aria-label="Toggle dark mode"
            disabled
            className={`${styles.toggle} ${prefs.darkMode ? styles.on : styles.off} ${styles.disabled}`}
          >
            <span className={styles.thumb} />
          </button>
        </div>

        {/* Auto-delete */}
        <div className={styles.row}>
          <div className={styles.rowLeft}>
            <span className={styles.rowIcon}><Trash2 size={15} /></span>
            <div>
              <p className={styles.rowLabel}>Auto-Delete Uploaded Files</p>
              <p className={styles.rowDesc}>Automatically purge claim files after the report is generated</p>
            </div>
          </div>
          <button
            role="switch" aria-checked={prefs.autoDelete}
            aria-label="Toggle auto-delete"
            onClick={() => toggle('autoDelete')}
            className={`${styles.toggle} ${prefs.autoDelete ? styles.on : styles.off}`}
          >
            <span className={styles.thumb} />
          </button>
        </div>
      </div>
    </section>
  );
}
