import { useState, type ReactElement } from 'react';

import { Link, useLocation } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/react';
import { Badge } from '../ui';
import { SIDEBAR_NAV_ITEMS, SIDEBAR_BOTTOM_ITEMS } from '../../constants/navigation';
import { cn } from '../../utils/cn';
import styles from './Sidebar.module.css';

/* ── Inline SVG Icon Map ── */
const ICONS: Record<string, ReactElement> = {

  grid: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  ),
  'file-text': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/>
      <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/>
    </svg>
  ),
  upload: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16,16 12,12 8,16"/><line x1="12" y1="12" x2="12" y2="21"/>
      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
    </svg>
  ),
  'bar-chart': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6"  y1="20" x2="6"  y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
    </svg>
  ),
  'trending-up': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/>
      <polyline points="17,6 23,6 23,12"/>
    </svg>
  ),
  user: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  settings: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  ),
};

interface SidebarProps {
  onMobileClose?: () => void;
}

export default function Sidebar({ onMobileClose }: SidebarProps) {
  const { user } = useUser();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (href: string) => location.pathname === href;

  return (
    <aside
      className={cn(styles.sidebar, collapsed ? styles.collapsed : '')}
      aria-label="Application sidebar"
    >
      {/* ── Logo ── */}
      <div className={styles.logoArea}>
        <Link to="/" className={styles.logo}>
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M16 2L4 8v8c0 8.627 5.163 16.538 12 18 6.837-1.462 12-9.373 12-18V8L16 2z" fill="url(#sg2)"/>
            <path d="M11 16l3.5 3.5L21 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="sg2" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2563EB"/><stop offset="1" stopColor="#0D9488"/>
              </linearGradient>
            </defs>
          </svg>
          {!collapsed && (
            <span className={styles.logoText}>
              Claim<span className={styles.logoAccent}>Guardian</span>
            </span>
          )}
        </Link>

        <button
          className={styles.collapseBtn}
          onClick={() => setCollapsed((v) => !v)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          title={collapsed ? 'Expand' : 'Collapse'}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: collapsed ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
            <polyline points="15,18 9,12 15,6"/>
          </svg>
        </button>
      </div>

      {/* ── Main Nav ── */}
      <nav className={styles.nav} aria-label="Sidebar navigation">
        <ul className={styles.navList} role="list">
          {SIDEBAR_NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                to={item.isComingSoon ? '#' : item.href}
                onClick={item.isComingSoon ? (e) => e.preventDefault() : onMobileClose}
                className={cn(
                  styles.navItem,
                  isActive(item.href) ? styles.navItemActive : '',
                  item.isComingSoon   ? styles.navItemDisabled : '',
                )}
                aria-current={isActive(item.href) ? 'page' : undefined}
                title={collapsed ? item.label : undefined}
              >
                <span className={styles.navIcon}>{ICONS[item.icon]}</span>
                {!collapsed && (
                  <>
                    <span className={styles.navLabel}>{item.label}</span>
                    {item.isComingSoon && (
                      <Badge variant="info" size="sm">Soon</Badge>
                    )}
                  </>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Bottom Section ── */}
      <div className={styles.bottomSection}>
        <ul className={styles.navList} role="list">
          {SIDEBAR_BOTTOM_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                to={'isComingSoon' in item && item.isComingSoon ? '#' : item.href}
                onClick={'isComingSoon' in item && item.isComingSoon ? (e) => e.preventDefault() : onMobileClose}
                className={cn(
                  styles.navItem,
                  isActive(item.href) ? styles.navItemActive : '',
                )}
                title={collapsed ? item.label : undefined}
              >
                <span className={styles.navIcon}>{ICONS[item.icon]}</span>
                {!collapsed && <span className={styles.navLabel}>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── User Info ── */}
        <div className={styles.userArea}>
        <UserButton />

          {!collapsed && user && (
            <div className={styles.userInfo}>
              <p className={styles.userName}>
                {user.firstName} {user.lastName}
              </p>
              <p className={styles.userEmail}>
                {user.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
