/* =========================================================
   ClaimGuardian — Global TypeScript Type Definitions
   ========================================================= */

/* ── Navigation ── */
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string;
  isComingSoon?: boolean;
  isExternal?: boolean;
}

/* ── UI Primitives ── */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
export type ButtonSize    = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type BadgeVariant  = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
export type SpinnerSize   = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/* ── Dashboard ── */
export interface StatItem {
  id:          string;
  label:       string;
  value:       string | number;
  change?:     number;
  changeLabel?: string;
  icon:        string;
  color:       'primary' | 'teal' | 'success' | 'warning';
}

export interface ActivityItem {
  id:        string;
  title:     string;
  subtitle:  string;
  timestamp: string;
  status:    'success' | 'warning' | 'error' | 'pending';
  icon:      string;
}

/* ── Claims (Phase 2) ── */
export type ClaimStatus =
  | 'draft'
  | 'pending_validation'
  | 'validated'
  | 'rejected'
  | 'submitted';

export interface Claim {
  id:          string;
  claimNumber: string;
  patientName: string;
  status:      ClaimStatus;
  amount:      number;
  uploadedAt:  string;
  validatedAt?: string;
}

/* ── API Response Wrapper (Phase 2) ── */
export interface ApiResponse<T> {
  data:       T;
  error:      string | null;
  success:    boolean;
  statusCode: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total:    number;
  page:     number;
  pageSize: number;
  hasMore:  boolean;
}

/* ── User Preferences (Phase 2) ── */
export interface UserPreferences {
  emailNotifications: boolean;
  pushNotifications:  boolean;
  weeklyDigest:       boolean;
  theme:              'light' | 'dark' | 'system';
  language:           string;
}
