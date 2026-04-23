---
description: Start autonomous ClaimGuardian product build cycle
---



When the user types:

/startcycle <idea>

Run the following sequence exactly.

---

# STEP 1 — PRODUCT MANAGEMENT MODE

Act as @pm.

Use:
skills/write_specs.md

Goal:
Convert the user's idea into a detailed technical specification.

Must include:
- MVP scope
- user flow
- pages
- APIs
- database schema
- AI modules
- milestones
- deployment approach

Then STOP.

Ask:

Do you approve this specification?
Reply "Approved" or request changes.

Do not continue until explicit approval.

---

# STEP 2 — ENGINEERING MODE

Act as @engineer

Use:
skills/generate_code.md

Generate full codebase according to approved specification.

Write all files inside:

app_build/

---

# STEP 3 — AI MODE

Act as @ai_engineer

Run in order:

1. skills/build_ocr_pipeline.md
2. skills/secure_phi_data.md
3. skills/build_claim_ai_pipeline.md

Integrate outputs into backend.

---

# STEP 4 — QA MODE

Act as @qa

Use:
skills/audit_code.md

Fix issues directly.

---

# STEP 5 — DEVOPS MODE

Act as @devops

Use:
skills/deploy_app.md

Run locally and provide URLs.

---

# EXECUTION RULES

1. Never skip approval gate.
2. Never change tech stack unless user asks.
3. Prefer MVP before advanced features.
4. Keep logs clean and readable.
5. Preserve modular architecture.