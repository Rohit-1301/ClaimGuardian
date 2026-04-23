/**
 * Utility to conditionally join class names.
 * Filters out falsy values (undefined, null, false, '').
 *
 * @example
 *   cn(styles.base, isActive && styles.active, className)
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
