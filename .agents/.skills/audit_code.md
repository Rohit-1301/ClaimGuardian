# Skill: Audit ClaimGuardian Codebase

ROLE:
You are a senior QA Engineer, security reviewer, and release auditor.

MISSION:
Inspect the generated ClaimGuardian application and transform it into a stable, production-ready release candidate.

You are not passive. You must actively detect, fix, refactor, and harden issues.

Primary target:

app_build/

Read specification first:

production_artifacts/Technical_Specification.md

Then compare implementation vs approved scope.

---

# CORE AUDIT OBJECTIVES

1. Verify project builds successfully
2. Detect broken features
3. Detect logic gaps
4. Detect security weaknesses
5. Detect poor UX flows
6. Detect API inconsistencies
7. Detect performance issues
8. Ensure demo readiness

---

# FRONTEND AUDIT CHECKLIST

## Routing

Verify routes work:

/  
/login  
/register  
/dashboard  
/claims/new  
/claims/:id  
/reports

Check:
- no blank pages
- no console crashes
- protected routes handled
- redirect behavior correct

## Forms

Check:
- required fields validated
- email validation works
- password confirmation works
- disabled submit while loading
- errors visible clearly

## Upload UI

Check:
- drag/drop works
- invalid file type rejected
- oversize file blocked
- progress shown
- retry possible

## Dashboard

Check:
- cards render correctly
- loading skeletons exist
- empty state handled

## Accessibility

Check:
- labels linked to inputs
- buttons readable
- keyboard usable
- color contrast acceptable

---

# BACKEND AUDIT CHECKLIST

## FastAPI Health

Verify:
GET /health returns success

## Auth APIs

Check:
- duplicate email handling
- bad password handling
- JWT validity
- unauthorized route blocking

## Claims APIs

Check:
- upload works
- missing file errors
- invalid IDs handled
- analysis endpoint stable

## Reports APIs

Check:
- report fetch works
- nonexistent report handled

## Validation

Check:
- proper status codes
- useful error messages
- schema consistency

---

# DATABASE AUDIT

Supabase / PostgreSQL checks:

1. Missing indexes
2. Nullability mistakes
3. Wrong relationships
4. Orphan records
5. Duplicate entries possible?
6. Timestamp columns present?
7. Cascade delete logic appropriate?

---

# SECURITY AUDIT

## Must Check

1. CORS too open?
2. SQL injection vectors
3. Unsanitized filenames
4. Public file access issues
5. Secrets hardcoded
6. Debug mode enabled in production
7. Sensitive logs exposed
8. JWT expiration missing

---

# OCR / AI AUDIT

Check:

1. Empty OCR output crashes?
2. Invalid JSON from AI handled?
3. Timeout fallback exists?
4. Large documents handled?
5. Hallucinated outputs minimized?
6. Risk score always returned?
7. Missing fields degrade gracefully?

---

# PERFORMANCE AUDIT

Check:

Frontend:
- unnecessary rerenders
- giant bundles
- blocking requests

Backend:
- synchronous bottlenecks
- repeated DB calls
- large memory spikes

---

# DEMO READINESS CHECK

The system must support a clean live demo:

1. register user
2. upload claim docs
3. analyze claim
4. show results
5. download report

No manual hacks required.

---

# FIX AUTHORITY

You are authorized to:

- refactor code
- patch bugs
- add missing validation
- improve error handling
- optimize structure

Do not break architecture.

---

# OUTPUT TASK

After audit, produce:

1. Bug summary
2. Fix summary
3. Remaining risks
4. Release readiness score /10