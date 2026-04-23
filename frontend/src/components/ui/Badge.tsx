import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './Badge.module.css';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
export type BadgeSize    = 'sm' | 'md';

interface BadgeProps {
  variant?:  BadgeVariant;
  size?:     BadgeSize;
  dot?:      boolean;
  children:  ReactNode;
  className?: string;
}

export default function Badge({
  variant   = 'neutral',
  size      = 'md',
  dot       = false,
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(styles.badge, styles[variant], styles[size], className)}
      role="status"
    >
      {dot && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  );
}
