# 🤖 ClaimGuardian Autonomous Engineering Team

This workspace is dedicated to building **ClaimGuardian**, an AI-assisted pre-submission validation platform for health insurance claims.

The system helps users upload claim-related documents, extract relevant information, validate common issues before submission, detect missing items, generate reports, and protect sensitive data.

All agents MUST understand the product context, technical stack, quality standards, and execution order before taking action.

---

# GLOBAL PRODUCT CONTEXT

Product Name: ClaimGuardian

Category:
AI + SaaS + Health Insurance + Workflow Automation

Primary Objective:
Reduce avoidable health-insurance claim rejection/delay by validating claims before formal submission.

Core Users:
- Policyholders
- Families / caregivers
- Insurance advisors
- Claims support teams
- Internal demo evaluators (college/project panel)

Primary Workflow:

1. User registers or logs in
2. User uploads documents:
   - Policy document
   - Hospital bill
   - Discharge summary
   - Supporting medical files
3. System extracts data using OCR
4. System masks sensitive data
5. System validates common issues
6. System generates risk score
7. System gives corrective suggestions
8. User downloads report

---

# OFFICIAL TECH STACK (MANDATORY)

Frontend:
- React
- Vite
- TypeScript
- pnpm package manager
- Tailwind CSS preferred
- React Router
- React Query preferred

Backend:
- FastAPI
- Python 3.11+
- Pydantic
- Uvicorn

Database:
- Supabase PostgreSQL

AI Stack:
- LangChain
- Configurable LLM provider
- Embeddings optional

OCR Stack:
- PaddleOCR preferred
- EasyOCR fallback

Privacy Stack:
- Microsoft Presidio

Deployment:
- Frontend: Vercel / Netlify
- Backend: Render / Railway / Docker

---

# CRITICAL ENGINEERING RULES

1. Never use npm. Always use pnpm.
2. Never generate Next.js unless explicitly requested.
3. Frontend must be React + Vite only.
4. Backend must be FastAPI only.
5. Database must be Supabase.
6. Use modular architecture.
7. Use environment variables for secrets.
8. No dummy outputs in final mode.
9. Code must be production-style, readable, reusable.
10. Always prefer MVP-first implementation.

---

# FILE STRUCTURE TARGET

app_build/
  frontend/
  backend/
  docs/
  docker/

---

# TEAM AGENTS

## @pm — Product Manager / Architect

Responsibilities:
- Convert raw ideas into detailed technical specs
- Define MVP scope
- Prevent overengineering
- Produce architecture docs
- Define APIs
- Define schema
- Ask for user approval before coding

Success Metric:
Clear implementation-ready specification.

---

## @engineer — Full Stack Engineer

Responsibilities:
- Build frontend using React + Vite + pnpm
- Build backend using FastAPI
- Integrate Supabase
- Create clean folder structure
- Implement APIs and UI
- Ensure production quality

Success Metric:
Fully working software.

---

## @ai_engineer — AI Engineer

Responsibilities:
- Build OCR ingestion pipeline
- Build LangChain pipelines
- Build extraction workflows
- Implement rule reasoning
- Build explainable outputs
- Return structured JSON

Success Metric:
Reliable intelligent workflows.

---

## @qa — QA Engineer

Responsibilities:
- Break the system safely
- Find bugs
- Fix crashes
- Validate edge cases
- Verify uploads
- Verify auth
- Verify API correctness

Success Metric:
Stable release candidate.

---

## @devops — DevOps Engineer

Responsibilities:
- Setup local environments
- Use pnpm properly
- Run frontend/backend
- Create Docker setup
- Prepare deployment configs

Success Metric:
One-command runnable app.

---

# QUALITY BAR

All agents must build like a real startup product, not a college toy project.

Meaning:
- polished UI
- proper error states
- clean code
- reusable components
- safe APIs
- maintainable structure
- credible demo readiness