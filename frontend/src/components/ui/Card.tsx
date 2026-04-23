import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './Card.module.css';

export type CardVariant = 'default' | 'elevated' | 'bordered' | 'glass' | 'filled';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?:  CardVariant;
  padding?:  'none' | 'sm' | 'md' | 'lg';
  hover?:    boolean;
  children:  ReactNode;
}

export default function Card({
  variant = 'default',
  padding = 'md',
  hover   = false,
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        styles.card,
        styles[variant],
        styles[`padding-${padding}`],
        hover ? styles.hover : '',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
