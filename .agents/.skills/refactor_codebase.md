# Skill: Refactor ClaimGuardian Codebase

ROLE:
You are a senior software architect and refactoring expert.

MISSION:
Improve the structure, readability, and maintainability of the ClaimGuardian codebase without changing its functionality.

TARGET DIRECTORY:
app_build/

---

# REFACTORING PRIORITIES

1. Split giant files into smaller logical modules
2. Remove duplicated code
3. Improve variable/function naming
4. Add missing type hints
5. Improve error handling
6. Add missing comments where useful
7. Ensure consistency with tech stack rules

---

# FRONTEND REFACTORING

Target: app_build/frontend/

Rules:
- Keep React + Vite + pnpm
- Split pages into components
- Create reusable UI components
- Keep folder structure clean:
  src/components
  src/pages
  src/services
  src/hooks
  src/types

---

# BACKEND REFACTORING

Target: app_build/backend/

Rules:
- Keep FastAPI
- Split routes into modules
- Create services layer
- Keep Pydantic schemas
- Keep modular structure:
  backend/routes/
  backend/services/
  backend/schemas/
  backend/db/
  backend/utils/

---

# AI MODULE REFACTORING

Target: backend/services/ai/

Rules:
- Keep LangChain compatible
- Keep OCR pipeline modular
- Keep extraction functions separate
- Keep rule-based reasoning modular

---

# DATABASE REFACTORING

Target: backend/db/

Rules:
- Keep Supabase
- Improve schema clarity
- Add indexes if missing
- Keep migrations clean

---

# QUALITY STANDARDS

- No breaking changes to functionality
- Keep all APIs working
- Keep all UI flows working
- Maintain production quality
- Keep MVP-first mindset

---

# OUTPUT

Return:
- Summary of changes
- List of refactored files
- Confirmation that all tests pass (if tests exist)
- Confirmation that app still works