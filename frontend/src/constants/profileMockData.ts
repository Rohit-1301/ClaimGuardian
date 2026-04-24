/* =========================================================
   ClaimGuardian — Profile Page Mock Constants
   Replace with real API/Supabase data in Phase 2
   ========================================================= */

export const MOCK_CLAIM_ACTIVITY = {
  claimsUploaded:    0,
  reportsGenerated:  0,
  highRiskFlags:     0,
  lastAnalysisDate:  null as string | null,
};

export const CONNECTED_SERVICES = [
  {
    id:          'clerk',
    name:        'Clerk Authentication',
    description: 'Identity & session management',
    status:      'connected' as const,
  },
  {
    id:          'supabase',
    name:        'Supabase Database',
    description: 'Secure cloud data storage',
    status:      'connected' as const,
  },
  {
    id:          'ocr',
    name:        'OCR Document Parser',
    description: 'Automated claim data extraction',
    status:      'coming_soon' as const,
  },
] as const;

export type ServiceStatus = 'connected' | 'ready' | 'coming_soon' | 'error';

export interface UserPreferenceState {
  emailNotifications:      boolean;
  autoDeleteFiles:         boolean;
  darkMode:                boolean;
  language:                string;
}

export const DEFAULT_PREFERENCES: UserPreferenceState = {
  emailNotifications: true,
  autoDeleteFiles:    false,
  darkMode:           false,
  language:           'English',
};

export const PROFILE_COMPLETION_STEPS = [
  { label: 'Name set',          key: 'hasName'  },
  { label: 'Email verified',    key: 'hasEmail' },
  { label: 'Organization added', key: 'hasOrg' },
  { label: 'NPI number added',  key: 'hasNPI'  },
] as const;
