# ClaimGuardian — Supabase SQL Schema
## Ready-to-paste into Supabase SQL Editor

> **Instructions**: Go to your Supabase project → SQL Editor → New Query → Paste the SQL below → Click Run.
> Run the entire script at once. Tables are ordered to respect foreign key dependencies.

---

```sql
-- ============================================================
-- ClaimGuardian — Supabase PostgreSQL Schema
-- Version: 1.0.0  |  Phase 2
-- Run in Supabase SQL Editor (project settings → SQL Editor)
-- ============================================================

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================
-- TABLE 1: profiles
-- Extended user info linked to Clerk user_id
-- ============================================================
CREATE TABLE IF NOT EXISTS public.profiles (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  clerk_user_id TEXT        NOT NULL UNIQUE,            -- Clerk's user ID (e.g. "user_xxxx")
  email         TEXT        NOT NULL,
  first_name    TEXT,
  last_name     TEXT,
  organization  TEXT,                                   -- Healthcare org or billing company name
  npi           TEXT,                                   -- National Provider Identifier (optional)
  role          TEXT        NOT NULL DEFAULT 'biller',  -- 'biller' | 'admin' | 'provider'
  avatar_url    TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Auto-update updated_at on row change
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- Index
CREATE INDEX IF NOT EXISTS idx_profiles_clerk_user_id ON public.profiles(clerk_user_id);

-- ============================================================
-- TABLE 2: claims
-- Uploaded claim document metadata
-- ============================================================
CREATE TABLE IF NOT EXISTS public.claims (
  id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id      UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  claim_number    TEXT        UNIQUE,                         -- Optional external claim ref
  claim_type      TEXT        NOT NULL DEFAULT 'CMS-1500',   -- 'CMS-1500' | 'UB-04'
  patient_name    TEXT,
  patient_dob     DATE,
  patient_id      TEXT,                                       -- Insurance member ID
  provider_npi    TEXT,
  insurance_id    TEXT,
  payer_name      TEXT,
  billed_amount   NUMERIC(12, 2),
  file_url        TEXT,                                       -- Supabase Storage URL
  file_name       TEXT,
  status          TEXT        NOT NULL DEFAULT 'draft',
    -- 'draft' | 'pending_validation' | 'validated' | 'rejected' | 'submitted'
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER claims_updated_at
  BEFORE UPDATE ON public.claims
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- Indexes
CREATE INDEX IF NOT EXISTS idx_claims_profile_id ON public.claims(profile_id);
CREATE INDEX IF NOT EXISTS idx_claims_status     ON public.claims(status);
CREATE INDEX IF NOT EXISTS idx_claims_created_at ON public.claims(created_at DESC);

-- ============================================================
-- TABLE 3: claim_line_items
-- Individual service line items within a claim
-- ============================================================
CREATE TABLE IF NOT EXISTS public.claim_line_items (
  id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  claim_id        UUID        NOT NULL REFERENCES public.claims(id) ON DELETE CASCADE,
  line_number     INTEGER     NOT NULL,
  cpt_code        TEXT,                   -- Current Procedural Terminology code
  icd10_code      TEXT,                   -- Diagnosis code
  modifier        TEXT,                   -- CPT modifier (e.g. 25, 59)
  units           INTEGER     DEFAULT 1,
  billed_amount   NUMERIC(10, 2),
  service_date    DATE,
  place_of_service TEXT,                  -- POS code
  description     TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index
CREATE INDEX IF NOT EXISTS idx_line_items_claim_id ON public.claim_line_items(claim_id);

-- ============================================================
-- TABLE 4: validation_reports
-- AI validation summary per claim
-- ============================================================
CREATE TABLE IF NOT EXISTS public.validation_reports (
  id                    UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  claim_id              UUID        NOT NULL UNIQUE REFERENCES public.claims(id) ON DELETE CASCADE,
  profile_id            UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  overall_status        TEXT        NOT NULL DEFAULT 'pending',
    -- 'pending' | 'pass' | 'pass_with_warnings' | 'fail'
  confidence_score      NUMERIC(5, 2),   -- 0.00 to 100.00
  total_errors          INTEGER     NOT NULL DEFAULT 0,
  total_warnings        INTEGER     NOT NULL DEFAULT 0,
  ai_summary            TEXT,            -- Human-readable AI-generated summary
  processing_time_ms    INTEGER,         -- How long validation took
  model_version         TEXT,            -- AI model version used
  validated_at          TIMESTAMPTZ,
  created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER validation_reports_updated_at
  BEFORE UPDATE ON public.validation_reports
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- Indexes
CREATE INDEX IF NOT EXISTS idx_reports_claim_id    ON public.validation_reports(claim_id);
CREATE INDEX IF NOT EXISTS idx_reports_profile_id  ON public.validation_reports(profile_id);
CREATE INDEX IF NOT EXISTS idx_reports_status      ON public.validation_reports(overall_status);

-- ============================================================
-- TABLE 5: validation_errors
-- Individual errors / warnings found per claim
-- ============================================================
CREATE TABLE IF NOT EXISTS public.validation_errors (
  id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  report_id       UUID        NOT NULL REFERENCES public.validation_reports(id) ON DELETE CASCADE,
  claim_id        UUID        NOT NULL REFERENCES public.claims(id) ON DELETE CASCADE,
  severity        TEXT        NOT NULL DEFAULT 'error',
    -- 'error' | 'warning' | 'info'
  error_code      TEXT,                   -- Internal error code (e.g. CG-E001)
  category        TEXT,                   -- 'coding' | 'compliance' | 'eligibility' | 'modifier'
  field_name      TEXT,                   -- Affected field (e.g. 'cpt_code', 'modifier')
  field_value     TEXT,                   -- Actual value found
  message         TEXT        NOT NULL,   -- Human-readable error message
  suggestion      TEXT,                   -- AI-suggested fix
  rule_reference  TEXT,                   -- Payer rule or CMS guideline reference
  line_item_id    UUID REFERENCES public.claim_line_items(id) ON DELETE SET NULL,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_errors_report_id ON public.validation_errors(report_id);
CREATE INDEX IF NOT EXISTS idx_errors_claim_id  ON public.validation_errors(claim_id);
CREATE INDEX IF NOT EXISTS idx_errors_severity  ON public.validation_errors(severity);

-- ============================================================
-- TABLE 6: audit_logs
-- Immutable record of all user actions (append-only)
-- ============================================================
CREATE TABLE IF NOT EXISTS public.audit_logs (
  id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id      UUID        REFERENCES public.profiles(id) ON DELETE SET NULL,
  clerk_user_id   TEXT,
  action          TEXT        NOT NULL,
    -- 'claim.upload' | 'claim.validate' | 'report.view' | 'auth.login' | 'auth.logout'
  resource_type   TEXT,                   -- 'claim' | 'report' | 'profile'
  resource_id     UUID,
  metadata        JSONB       DEFAULT '{}',
  ip_address      TEXT,
  user_agent      TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_audit_profile_id  ON public.audit_logs(profile_id);
CREATE INDEX IF NOT EXISTS idx_audit_action      ON public.audit_logs(action);
CREATE INDEX IF NOT EXISTS idx_audit_created_at  ON public.audit_logs(created_at DESC);

-- Prevent deletes on audit_logs (immutable log table)
CREATE RULE no_delete_audit AS ON DELETE TO public.audit_logs DO INSTEAD NOTHING;
CREATE RULE no_update_audit AS ON UPDATE TO public.audit_logs DO INSTEAD NOTHING;

-- ============================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- Users can only access their own data
-- ============================================================

-- Enable RLS on all tables
ALTER TABLE public.profiles           ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.claims             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.claim_line_items   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.validation_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.validation_errors  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs         ENABLE ROW LEVEL SECURITY;

-- ── profiles: users can read/update their own profile ──
CREATE POLICY "profiles_select_own" ON public.profiles
  FOR SELECT USING (clerk_user_id = current_setting('request.jwt.claims', true)::json->>'sub');

CREATE POLICY "profiles_insert_own" ON public.profiles
  FOR INSERT WITH CHECK (clerk_user_id = current_setting('request.jwt.claims', true)::json->>'sub');

CREATE POLICY "profiles_update_own" ON public.profiles
  FOR UPDATE USING (clerk_user_id = current_setting('request.jwt.claims', true)::json->>'sub');

-- ── claims: users can CRUD their own claims ──
CREATE POLICY "claims_select_own" ON public.claims
  FOR SELECT USING (
    profile_id IN (
      SELECT id FROM public.profiles
      WHERE clerk_user_id = current_setting('request.jwt.claims', true)::json->>'sub'
    )
  );

CREATE POLICY "claims_insert_own" ON public.claims
  FOR INSERT WITH CHECK (
    profile_id IN (
      SELECT id FROM public.profiles
      WHERE clerk_user_id = current_setting('request.jwt.claims', true)::json->>'sub'
    )
  );

CREATE POLICY "claims_update_own" ON public.claims
  FOR UPDATE USING (
    profile_id IN (
      SELECT id FROM public.profiles
      WHERE clerk_user_id = current_setting('request.jwt.claims', true)::json->>'sub'
    )
  );

CREATE POLICY "claims_delete_own" ON public.claims
  FOR DELETE USING (
    profile_id IN (
      SELECT id FROM public.profiles
      WHERE clerk_user_id = current_setting('request.jwt.claims', true)::json->>'sub'
    )
  );

-- ── claim_line_items: access via claims ownership ──
CREATE POLICY "line_items_select_own" ON public.claim_line_items
  FOR SELECT USING (
    claim_id IN (
      SELECT c.id FROM public.claims c
      JOIN public.profiles p ON c.profile_id = p.id
      WHERE p.clerk_user_id = current_setting('request.jwt.claims', true)::json->>'sub'
    )
  );

-- ── validation_reports: access via ownership ──
CREATE POLICY "reports_select_own" ON public.validation_reports
  FOR SELECT USING (
    profile_id IN (
      SELECT id FROM public.profiles
      WHERE clerk_user_id = current_setting('request.jwt.claims', true)::json->>'sub'
    )
  );

-- ── validation_errors: access via related claim ownership ──
CREATE POLICY "errors_select_own" ON public.validation_errors
  FOR SELECT USING (
    claim_id IN (
      SELECT c.id FROM public.claims c
      JOIN public.profiles p ON c.profile_id = p.id
      WHERE p.clerk_user_id = current_setting('request.jwt.claims', true)::json->>'sub'
    )
  );

-- ── audit_logs: users can read their own logs ──
CREATE POLICY "audit_select_own" ON public.audit_logs
  FOR SELECT USING (
    clerk_user_id = current_setting('request.jwt.claims', true)::json->>'sub'
  );

-- ============================================================
-- VERIFICATION QUERY
-- Run this after setup to verify all tables were created
-- ============================================================
-- SELECT table_name
-- FROM information_schema.tables
-- WHERE table_schema = 'public'
-- ORDER BY table_name;
```

---

## Table Reference

| Table | Rows | Purpose |
|---|---|---|
| `profiles` | Per user | Extended user info linked to Clerk `user_id` |
| `claims` | Per claim document | Uploaded claim metadata and status |
| `claim_line_items` | Per service line | Individual CPT/ICD codes per claim |
| `validation_reports` | Per claim | AI validation summary and scores |
| `validation_errors` | Per error found | Individual errors and warnings with suggestions |
| `audit_logs` | Append-only | Immutable log of all user actions |

## Notes

- **Clerk JWT**: RLS policies read `clerk_user_id` from Clerk's JWT `sub` claim. Configure Clerk JWT template in Supabase Dashboard → Auth → Providers → JWT.
- **Storage**: Claim file uploads will use `Supabase Storage` bucket named `claims-documents` (configure separately).
- **Immutable logs**: `audit_logs` has rules preventing DELETE and UPDATE — it's append-only by design.
