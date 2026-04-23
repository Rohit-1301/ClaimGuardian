import { useUser } from '@clerk/react';
import styles from './WelcomeCard.module.css';

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

function formatDate(): string {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year:    'numeric',
    month:   'long',
    day:     'numeric',
  });
}

export default function WelcomeCard() {
  const { user } = useUser();
  const greeting = getGreeting();
  const date     = formatDate();

  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <p className={styles.greeting}>
          {greeting}, <span className={styles.name}>{user?.firstName ?? 'there'}</span> 👋
        </p>
        <p className={styles.date}>{date}</p>
        <p className={styles.subtitle}>
          Your workspace is ready. Upload a claim to start your first AI validation.
        </p>
      </div>
      <div className={styles.right} aria-hidden="true">
        <div className={styles.shieldWrap}>
          <svg width="64" height="64" viewBox="0 0 32 32" fill="none">
            <path d="M16 2L4 8v8c0 8.627 5.163 16.538 12 18 6.837-1.462 12-9.373 12-18V8L16 2z" fill="url(#wc)" opacity="0.15"/>
            <path d="M16 5L6 9.8v6.4c0 6.6 3.9 12.7 10 14.4 6.1-1.7 10-7.8 10-14.4V9.8L16 5z" fill="url(#wc2)"/>
            <path d="M11 16l3.5 3.5L21 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="wc"  x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse"><stop stopColor="#2563EB"/><stop offset="1" stopColor="#0D9488"/></linearGradient>
              <linearGradient id="wc2" x1="6" y1="5" x2="26" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#3B82F6"/><stop offset="1" stopColor="#0D9488"/></linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
