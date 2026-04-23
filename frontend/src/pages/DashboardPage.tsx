import { DashboardLayout } from '../components/layout';
import { WelcomeCard, StatCard, RecentActivity, UploadCTACard } from '../components/features/dashboard';
import styles from './DashboardPage.module.css';

/**
 * Dashboard Page — authenticated main workspace
 * Route: /dashboard  (protected)
 */
export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* ── Page heading (visually hidden — Sidebar handles nav) ── */}
      <h1 className="sr-only">Dashboard</h1>

      <div className={styles.grid}>
        {/* ── Welcome Card: full width ── */}
        <div className={styles.fullWidth}>
          <WelcomeCard />
        </div>

        {/* ── Stat Cards ── */}
        <StatCard
          label="Claims Analyzed"
          value={0}
          icon="📋"
          color="primary"
          change="0 this week"
          description="AI-validated claim submissions"
        />
        <StatCard
          label="Reports Generated"
          value={0}
          icon="📊"
          color="teal"
          change="0 this week"
          description="Detailed validation reports"
        />
        <StatCard
          label="Errors Caught"
          value={0}
          icon="🔍"
          color="success"
          change="0 this week"
          description="Issues detected before submission"
        />
        <StatCard
          label="Revenue Protected"
          value="$0"
          icon="💰"
          color="warning"
          change="Est. savings"
          description="Estimated denial cost avoided"
        />

        {/* ── Upload CTA: full width ── */}
        <div className={styles.fullWidth}>
          <UploadCTACard />
        </div>

        {/* ── Recent Activity: full width ── */}
        <div className={styles.fullWidth}>
          <RecentActivity />
        </div>
      </div>
    </DashboardLayout>
  );
}
