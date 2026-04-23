<!-- # Skill: Generate Code

## Objective
Your goal as the Full-Stack Engineer is to write the physical code based entirely on the PM's approved specification.

## Rules of Engagement
- **Dynamic Coding**: You are not limited to HTML/JS. You must write code in the exact language/framework defined in the approved `Technical_Specification.md`.
- **Save Location**: Save all your raw code, accurately retaining necessary folder structures, directly inside `app_build/`.

## Instructions
1. **Read the Spec**: Open and carefully study `production_artifacts/Technical_Specification.md`.
2. **Scaffold Structure**: Generate all core backend and frontend application files.
3. **Output**: Dump your code perfectly into the `app_build/` directory. Do not skip or summarize any code blocks. Ensure all `package.json` or `requirements.txt` files are present. -->


# Skill: Generate ClaimGuardian Production Code

ROLE:
You are a senior full-stack engineer responsible for converting the approved specification into a real production-grade codebase.

MISSION:
Build the complete ClaimGuardian application exactly according to the approved Technical_Specification.md.

Read first:

production_artifacts/Technical_Specification.md

Never guess if spec exists. Follow it precisely.

---

# MANDATORY TECH STACK

Frontend:
- React
- Vite
- TypeScript
- pnpm
- React Router
- Tailwind CSS preferred
- Axios or Fetch
- React Query preferred

Backend:
- FastAPI
- Python 3.11+
- Pydantic
- SQLAlchemy or Supabase client

Database:
- Supabase PostgreSQL

AI Integration:
- LangChain compatible hooks

---

# OUTPUT LOCATION

Write all code inside:

app_build/

Recommended structure:

app_build/
  frontend/
  backend/

---

# FRONTEND REQUIREMENTS

Generate a professional SaaS-style frontend.

## Required Pages

1. Landing Page
Route: /

Sections:
- Hero section
- Product benefits
- How it works
- CTA buttons
- Footer

2. Login Page
Route: /login

Fields:
- email
- password

Validation:
- required
- email format

3. Register Page
Route: /register

Fields:
- full name
- email
- password
- confirm password

4. Dashboard
Route: /dashboard

Widgets:
- total claims analyzed
- recent reports
- pending uploads
- risk distribution

5. Upload Claim Page
Route: /claims/new

Features:
- drag and drop upload
- multiple documents
- progress indicator
- allowed file type validation

6. Claim Result Page
Route: /claims/:id

Sections:
- extracted data
- risk score
- detected issues
- suggestions
- download report button

7. Reports Page
Route: /reports

Features:
- list past reports
- search
- download

---

# FRONTEND QUALITY RULES

1. Use reusable components.
2. Use loading states.
3. Use toast notifications.
4. Use clean responsive layout.
5. Use typed interfaces.
6. Use proper folder organization:
   src/components
   src/pages
   src/hooks
   src/services
   src/types

---

# BACKEND REQUIREMENTS

Generate modular FastAPI backend.

Recommended structure:

backend/
  main.py
  core/
  routes/
  schemas/
  services/
  db/
  utils/

---

# REQUIRED API MODULES

## Auth

POST /api/auth/register  
POST /api/auth/login  
GET /api/auth/me

## Claims

POST /api/claims/upload  
POST /api/claims/{id}/analyze  
GET /api/claims/{id}  
GET /api/claims

## Reports

GET /api/reports/{id}  
GET /api/reports

## Health

GET /health

---

# BACKEND RULES

1. Use Pydantic request/response schemas.
2. Use dependency injection.
3. Add error handling.
4. Validate file uploads.
5. Use async where appropriate.
6. Add CORS config.
7. Use .env for secrets.
8. Keep route logic thin; use services.

---

# DATABASE REQUIREMENTS

Use Supabase tables:

users
claims
claim_documents
analysis_reports
audit_logs

Use migrations or SQL scripts if possible.

---

# AUTHENTICATION

Use JWT or Supabase Auth.

Must support:
- protected routes
- token validation
- logout handling

---

# CODE QUALITY BAR

Produce code as if for a startup MVP, not classroom demo.

Meaning:
- clean names
- maintainable structure
- no giant files
- comments only where useful
- no placeholder lorem ipsum logic

---

# FINAL TASK

After generation, ensure:
- package.json exists
- pnpm lock ready
- requirements.txt exists
- .env.example exists