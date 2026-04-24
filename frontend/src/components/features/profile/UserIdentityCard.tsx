import { useUser, useAuth } from '@clerk/react';
import {
  Mail, Calendar, Clock, Briefcase,
  CheckCircle2, ShieldCheck,
} from 'lucide-react';
import styles from './UserIdentityCard.module.css';

function getInitials(first?: string | null, last?: string | null): string {
  const f = (first?.[0] ?? '').toUpperCase();
  const l = (last?.[0]  ?? '').toUpperCase();
  return f + l || '?';
}

function formatDate(dateStr?: string | null): string {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric',
  });
}

export default function UserIdentityCard() {
  const { user }        = useUser();
  const { isSignedIn }  = useAuth();

  const initials    = getInitials(user?.firstName, user?.lastName);
  const fullName    = [user?.firstName, user?.lastName].filter(Boolean).join(' ') || 'User';
  const email       = user?.primaryEmailAddress?.emailAddress ?? '—';
  const memberSince = formatDate(user?.createdAt?.toISOString());
  const lastLogin   = formatDate(user?.lastSignInAt?.toISOString());

  /* Profile completion: name + email (verified) + org + NPI */
  const steps = [
    !!user?.firstName,
    !!user?.primaryEmailAddress?.verification?.status === true,
    false, // org — Phase 2
    false, // NPI  — Phase 2
  ];
  const completedSteps  = steps.filter(Boolean).length;
  const completionPct   = Math.round((completedSteps / steps.length) * 100);

  return (
    <div className={styles.card}>
      {/* ── Avatar + Identity ── */}
      <div className={styles.identityRow}>
        <div className={styles.avatarWrap} aria-label={`Avatar for ${fullName}`}>
          <span className={styles.initials} aria-hidden="true">{initials}</span>
          {isSignedIn && (
            <span className={styles.onlineDot} title="Online" aria-label="Online" />
          )}
        </div>

        <div className={styles.identityInfo}>
          <h2 className={styles.name}>{fullName}</h2>
          <div className={styles.roleBadge}>
            <ShieldCheck size={12} aria-hidden="true" />
            Policyholder
          </div>
        </div>
      </div>

      {/* ── Info Grid ── */}
      <div className={styles.infoGrid}>
        <InfoRow icon={<Mail size={15} />}      label="Email"        value={email}       />
        <InfoRow icon={<Briefcase size={15} />}  label="Role"         value="Policyholder" />
        <InfoRow icon={<Calendar size={15} />}  label="Member Since" value={memberSince} />
        <InfoRow icon={<Clock size={15} />}     label="Last Login"   value={lastLogin}   />
      </div>

      {/* ── Profile Completion ── */}
      <div className={styles.completionSection}>
        <div className={styles.completionHeader}>
          <div className={styles.completionLabel}>
            <CheckCircle2 size={14} aria-hidden="true" />
            Profile Completion
          </div>
          <span className={styles.completionPct}>{completionPct}%</span>
        </div>
        <div className={styles.progressTrack} role="progressbar" aria-valuenow={completionPct} aria-valuemin={0} aria-valuemax={100}>
          <div
            className={styles.progressFill}
            style={{ width: `${completionPct}%` }}
          />
        </div>
        <p className={styles.completionHint}>
          {completionPct < 100
            ? 'Add your organization and NPI number to complete your profile.'
            : 'Your profile is complete.'}
        </p>
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className={styles.infoRow}>
      <span className={styles.infoIcon} aria-hidden="true">{icon}</span>
      <span className={styles.infoLabel}>{label}</span>
      <span className={styles.infoValue}>{value}</span>
    </div>
  );
}
