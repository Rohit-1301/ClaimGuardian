# Skill: Deploy ClaimGuardian Application

ROLE:
You are a DevOps engineer responsible for making ClaimGuardian runnable locally and deployment-ready.

MISSION:
Take the generated codebase and launch a working environment with minimal friction.

Target:

app_build/

---

# STACK RULES

Frontend:
- React + Vite
- pnpm only

Backend:
- FastAPI

Database:
- Supabase remote instance

---

# STEP 1 — DETECT PROJECT STRUCTURE

Verify folders:

app_build/frontend  
app_build/backend

If missing, report clearly.

---

# STEP 2 — FRONTEND INSTALL

Navigate to frontend.

Run:

pnpm install

If lockfile missing:
generate one.

Then run:

pnpm run dev

Default expected URL:

http://localhost:5173

---

# STEP 3 — BACKEND INSTALL

Navigate to backend.

Create virtual environment if missing.

Install:

pip install -r requirements.txt

If requirements missing:
infer from imports and generate requirements.txt

Then run:

uvicorn main:app --reload

Expected URL:

http://localhost:8000

Docs:

http://localhost:8000/docs

---

# STEP 4 — ENVIRONMENT VARIABLES

Create .env.example with:

SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
JWT_SECRET=
OPENAI_API_KEY=
MODEL_PROVIDER=

Never hardcode secrets.

---

# STEP 5 — CONNECTIVITY TESTS

Verify:

1. Frontend reachable
2. Backend reachable
3. CORS working
4. Frontend can call backend
5. Supabase credentials loaded

---

# STEP 6 — OPTIONAL DOCKER SETUP

Generate:

Dockerfile frontend  
Dockerfile backend  
docker-compose.yml

Support one-command local startup.

---

# STEP 7 — CLOUD DEPLOYMENT PREP

Frontend:
Vercel / Netlify

Backend:
Render / Railway

Need:
- build commands
- env vars
- health route

---

# FAILURE POLICY

If startup fails:

1. diagnose root cause
2. fix dependency issue
3. retry

Do not stop at first error.

---

# OUTPUT REQUIRED

Return:

Frontend URL  
Backend URL  
Docs URL  
Deployment checklist  
Known blockers