import {
  ShieldCheck, Fingerprint, Activity,
  Lock, Eye, ShieldAlert,
} from 'lucide-react';
import type { ReactNode } from 'react';
import styles from './SecurityPrivacyCard.module.css';

type SecurityLevel = 'success' | 'warning' | 'info' | 'neutral';

interface SecurityItem {
  icon:        ReactNode;
  label:       string;
  value:       string;
  level:       SecurityLevel;
  description?: string;
}

const SECURITY_ITEMS: SecurityItem[] = [
  {
    icon:  <ShieldCheck size={16} />,
    label: 'Authentication',
    value: 'Clerk Secured',
    level: 'success',
    description: 'Identity verified via Clerk',
  },
  {
    icon:  <Activity size={16} />,
    label: 'Session Status',
    value: 'Active',
    level: 'success',
    description: 'Your current session is valid',
  },
  {
    icon:  <Fingerprint size={16} />,
    label: 'Two-Factor Auth',
    value: 'Optional',
    level: 'warning',
    description: 'Enable 2FA for added security',
  },
  {
    icon:  <Lock size={16} />,
    label: 'Data Masking',
    value: 'Enabled',
    level: 'success',
    description: 'PHI masked before AI processing',
  },
  {
    icon:  <Eye size={16} />,
    label: 'Privacy Mode',
    value: 'Enabled',
    level: 'success',
    description: 'Personal data is anonymised in logs',
  },
];

const LEVEL_MAP: Record<SecurityLevel, { badge: string; dot: string }> = {
  success: { badge: styles.badgeSuccess, dot: styles.dotSuccess },
  warning: { badge: styles.badgeWarning, dot: styles.dotWarning },
  info:    { badge: styles.badgeInfo,    dot: styles.dotInfo    },
  neutral: { badge: styles.badgeNeutral, dot: styles.dotNeutral },
};

export default function SecurityPrivacyCard() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.headerIcon} aria-hidden="true">
            <ShieldAlert size={18} />
          </div>
          <div>
            <h3 className={styles.title}>Security &amp; Privacy</h3>
            <p className={styles.subtitle}>Account protection overview</p>
          </div>
        </div>
      </div>

      <ul className={styles.list} role="list">
        {SECURITY_ITEMS.map((item) => {
          const colors = LEVEL_MAP[item.level];
          return (
            <li key={item.label} className={styles.item}>
              <div className={styles.itemLeft}>
                <span className={`${styles.itemIcon} ${colors.dot}`} aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <p className={styles.itemLabel}>{item.label}</p>
                  {item.description && (
                    <p className={styles.itemDesc}>{item.description}</p>
                  )}
                </div>
              </div>
              <span className={`${styles.badge} ${colors.badge}`}>
                <span className={`${styles.badgeDot} ${colors.dot}`} aria-hidden="true" />
                {item.value}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
