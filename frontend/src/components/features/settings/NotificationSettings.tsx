import { useState } from 'react';
import { Bell, Mail, Activity, AlertTriangle, MessageSquare, Settings2 } from 'lucide-react';
import styles from './NotificationSettings.module.css';

interface NotifToggle {
  id:          string;
  icon:        React.ReactNode;
  label:       string;
  description: string;
  enabled:     boolean;
  comingSoon?: boolean;
}

export default function NotificationSettings() {
  const [settings, setSettings] = useState<Record<string, boolean>>({
    emailReports:     true,
    emailAlerts:      true,
    weeklyDigest:     false,
    highRiskAlerts:   true,
    systemUpdates:    false,
    inAppMessages:    false,
  });

  const toggle = (id: string) => {
    setSettings((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const ROWS: NotifToggle[] = [
    {
      id:          'emailReports',
      icon:        <Mail size={15} />,
      label:       'Validation Report Emails',
      description: 'Receive a report summary email after each AI claim validation',
      enabled:     settings.emailReports,
    },
    {
      id:          'highRiskAlerts',
      icon:        <AlertTriangle size={15} />,
      label:       'High Risk Flag Alerts',
      description: 'Instant notifications when a claim scores high-risk during analysis',
      enabled:     settings.highRiskAlerts,
    },
    {
      id:          'emailAlerts',
      icon:        <Bell size={15} />,
      label:       'Email Notifications',
      description: 'General platform alerts and account activity notifications',
      enabled:     settings.emailAlerts,
    },
    {
      id:          'weeklyDigest',
      icon:        <Activity size={15} />,
      label:       'Weekly Activity Digest',
      description: 'A weekly summary of claim activity, denial trends, and savings',
      enabled:     settings.weeklyDigest,
    },
    {
      id:          'systemUpdates',
      icon:        <Settings2 size={15} />,
      label:       'Product Updates',
      description: 'New features, improvements, and platform announcements',
      enabled:     settings.systemUpdates,
      comingSoon:  true,
    },
    {
      id:          'inAppMessages',
      icon:        <MessageSquare size={15} />,
      label:       'In-App Messages',
      description: 'Toast notifications and banners inside the dashboard',
      enabled:     settings.inAppMessages,
      comingSoon:  true,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionIcon}><Bell size={18} /></div>
        <div>
          <h2 className={styles.sectionTitle}>Notification Settings</h2>
          <p className={styles.sectionSub}>Control what alerts and emails you receive</p>
        </div>
      </div>

      <div className={styles.rows}>
        {ROWS.map((row) => (
          <div key={row.id} className={styles.row}>
            <div className={styles.rowLeft}>
              <span className={styles.rowIcon} aria-hidden="true">{row.icon}</span>
              <div>
                <div className={styles.rowLabel}>
                  {row.label}
                  {row.comingSoon && <span className={styles.badge}>Coming soon</span>}
                </div>
                <p className={styles.rowDesc}>{row.description}</p>
              </div>
            </div>
            <button
              role="switch"
              aria-checked={row.enabled}
              aria-label={`Toggle ${row.label}`}
              onClick={() => !row.comingSoon && toggle(row.id)}
              disabled={row.comingSoon}
              className={`${styles.toggle} ${row.enabled ? styles.on : styles.off} ${row.comingSoon ? styles.disabled : ''}`}
            >
              <span className={styles.thumb} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
