import styles from './StatCard.module.css';

export type StatColor = 'primary' | 'teal' | 'success' | 'warning';

interface StatCardProps {
  label:       string;
  value:       string | number;
  icon:        string;
  color?:      StatColor;
  change?:     string;
  changeUp?:   boolean;
  description?: string;
}

export default function StatCard({
  label,
  value,
  icon,
  color       = 'primary',
  change,
  changeUp,
  description,
}: StatCardProps) {
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <div className={styles.header}>
        <div className={styles.iconWrap} aria-hidden="true">
          {icon}
        </div>
        {change !== undefined && (
          <span className={`${styles.change} ${changeUp ? styles.up : styles.neutral}`}>
            {changeUp ? '↑' : '—'} {change}
          </span>
        )}
      </div>
      <p className={styles.value}>{value}</p>
      <p className={styles.label}>{label}</p>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
