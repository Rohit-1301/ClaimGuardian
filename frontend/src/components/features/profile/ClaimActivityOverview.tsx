import { FileText, FileCheck, AlertTriangle, CalendarDays } from 'lucide-react';
import { MOCK_CLAIM_ACTIVITY } from '../../../constants/profileMockData';
import styles from './ClaimActivityOverview.module.css';
import type { ReactNode } from 'react';

interface ActivityStatProps {
  icon:        ReactNode;
  label:       string;
  value:       string | number;
  sublabel:    string;
  color:       'blue' | 'teal' | 'amber' | 'slate';
}

const STAT_COLOR_MAP = {
  blue:  { card: styles.statBlue,  icon: styles.iconBlue  },
  teal:  { card: styles.statTeal,  icon: styles.iconTeal  },
  amber: { card: styles.statAmber, icon: styles.iconAmber },
  slate: { card: styles.statSlate, icon: styles.iconSlate },
};

function ActivityStat({ icon, label, value, sublabel, color }: ActivityStatProps) {
  const colors = STAT_COLOR_MAP[color];
  return (
    <div className={`${styles.stat} ${colors.card}`}>
      <div className={`${styles.statIcon} ${colors.icon}`} aria-hidden="true">
        {icon}
      </div>
      <p className={styles.statValue}>
        {value === null || value === undefined ? '—' : value}
      </p>
      <p className={styles.statLabel}>{label}</p>
      <p className={styles.statSub}>{sublabel}</p>
    </div>
  );
}

export default function ClaimActivityOverview() {
  const { claimsUploaded, reportsGenerated, highRiskFlags, lastAnalysisDate } = MOCK_CLAIM_ACTIVITY;

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.title}>Claim Activity Overview</h3>
        <span className={styles.badge}>Last 30 days</span>
      </div>

      <div className={styles.grid}>
        <ActivityStat
          icon={<FileText size={20} />}
          label="Claims Uploaded"
          value={claimsUploaded}
          sublabel="Total documents submitted"
          color="blue"
        />
        <ActivityStat
          icon={<FileCheck size={20} />}
          label="Reports Generated"
          value={reportsGenerated}
          sublabel="Validation reports issued"
          color="teal"
        />
        <ActivityStat
          icon={<AlertTriangle size={20} />}
          label="High Risk Flags"
          value={highRiskFlags}
          sublabel="Critical errors detected"
          color="amber"
        />
        <ActivityStat
          icon={<CalendarDays size={20} />}
          label="Last Analysis"
          value={lastAnalysisDate ?? 'No data yet'}
          sublabel="Most recent AI validation"
          color="slate"
        />
      </div>
    </div>
  );
}
