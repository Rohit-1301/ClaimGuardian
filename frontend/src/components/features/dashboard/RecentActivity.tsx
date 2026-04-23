import styles from './RecentActivity.module.css';

export default function RecentActivity() {
  return (
    <section className={styles.section} aria-labelledby="activity-heading">
      <div className={styles.header}>
        <h2 id="activity-heading" className={styles.title}>Recent Activity</h2>
        <span className={styles.badge}>0 items</span>
      </div>

      {/* Empty State */}
      <div className={styles.emptyState} role="status" aria-live="polite">
        <div className={styles.emptyIcon} aria-hidden="true">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14,2 14,8 20,8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
        </div>
        <p className={styles.emptyTitle}>No activity yet</p>
        <p className={styles.emptyDesc}>
          Your validated claims and reports will appear here. Upload your first claim to get started.
        </p>
      </div>
    </section>
  );
}
