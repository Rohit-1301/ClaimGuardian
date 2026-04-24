import { useClerk } from '@clerk/react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Trash2, LogOut, ShieldOff } from 'lucide-react';
import styles from './DangerZone.module.css';

export default function DangerZone() {
  const { signOut } = useClerk();
  const navigate    = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <section className={styles.section} aria-label="Danger zone">
      <div className={styles.sectionHeader}>
        <div className={styles.sectionIcon}><AlertTriangle size={18} /></div>
        <div>
          <h2 className={styles.sectionTitle}>Danger Zone</h2>
          <p className={styles.sectionSub}>These actions are permanent or disruptive — proceed carefully</p>
        </div>
      </div>

      <div className={styles.actions}>
        {/* Sign Out */}
        <div className={styles.actionRow}>
          <div className={styles.actionInfo}>
            <div className={styles.actionIcon} style={{ background: 'var(--color-warning-light)', color: 'var(--color-warning)' }}>
              <LogOut size={16} />
            </div>
            <div>
              <p className={styles.actionLabel}>Sign Out of All Devices</p>
              <p className={styles.actionDesc}>Ends all active sessions across all devices immediately</p>
            </div>
          </div>
          <button className={`${styles.btn} ${styles.btnWarning}`} onClick={handleSignOut}>
            Sign Out
          </button>
        </div>

        {/* Clear Uploaded Data */}
        <div className={styles.actionRow}>
          <div className={styles.actionInfo}>
            <div className={styles.actionIcon} style={{ background: '#FFF1F2', color: '#E11D48' }}>
              <Trash2 size={16} />
            </div>
            <div>
              <p className={styles.actionLabel}>Clear All Uploaded Claim Files</p>
              <p className={styles.actionDesc}>
                Permanently deletes all uploaded claim documents from cloud storage. Reports are retained.
              </p>
            </div>
          </div>
          <button
            className={`${styles.btn} ${styles.btnDanger}`}
            onClick={() => alert('Feature available in Phase 2 with Supabase integration.')}
          >
            Clear Data
          </button>
        </div>

        {/* Delete Account */}
        <div className={styles.actionRow}>
          <div className={styles.actionInfo}>
            <div className={styles.actionIcon} style={{ background: '#FFF1F2', color: '#B91C1C' }}>
              <ShieldOff size={16} />
            </div>
            <div>
              <p className={styles.actionLabel}>Delete My Account</p>
              <p className={styles.actionDesc}>
                Permanently removes your account, all data, and access. This cannot be undone.
              </p>
            </div>
          </div>
          <button
            className={`${styles.btn} ${styles.btnDestructive}`}
            onClick={() => alert('To delete your account, contact support@claimguardian.io')}
          >
            Delete Account
          </button>
        </div>
      </div>
    </section>
  );
}
