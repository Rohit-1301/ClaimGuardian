import { Link, useNavigate } from 'react-router-dom';
import { useClerk } from '@clerk/react';
import { Upload, FileText, LayoutDashboard, LogOut, Zap } from 'lucide-react';
import styles from './QuickActionsCard.module.css';

export default function QuickActionsCard() {
  const { signOut } = useClerk();
  const navigate    = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.headerIcon} aria-hidden="true">
          <Zap size={18} />
        </div>
        <div>
          <h3 className={styles.title}>Quick Actions</h3>
          <p className={styles.subtitle}>Common tasks</p>
        </div>
      </div>

      <div className={styles.actions}>
        <Link to="/upload" className={styles.actionBtn}>
          <Upload size={16} aria-hidden="true" />
          Upload New Claim
        </Link>

        <Link to="/reports" className={styles.actionBtn + ' ' + styles.teal}>
          <FileText size={16} aria-hidden="true" />
          View Reports
        </Link>

        <Link to="/dashboard" className={styles.actionBtn + ' ' + styles.outline}>
          <LayoutDashboard size={16} aria-hidden="true" />
          Dashboard
        </Link>

        <button
          className={styles.actionBtn + ' ' + styles.danger}
          onClick={handleLogout}
          aria-label="Sign out of your account"
        >
          <LogOut size={16} aria-hidden="true" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
