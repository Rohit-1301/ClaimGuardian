import { cn } from '../../utils/cn';
import styles from './LoadingSpinner.module.css';

export type SpinnerSize  = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SpinnerColor = 'primary' | 'white' | 'teal' | 'slate';

interface LoadingSpinnerProps {
  size?:      SpinnerSize;
  color?:     SpinnerColor;
  label?:     string;
  className?: string;
}

export default function LoadingSpinner({
  size      = 'md',
  color     = 'primary',
  label     = 'Loading…',
  className,
}: LoadingSpinnerProps) {
  return (
    <span
      role="status"
      aria-label={label}
      className={cn(styles.spinner, styles[size], styles[color], className)}
    >
      <span className="sr-only">{label}</span>
    </span>
  );
}
