# Skill: Build ClaimGuardian AI Validation Pipeline

ROLE:
You are a senior AI engineer designing the core intelligence layer.

MISSION:
Transform OCR outputs and user claim data into actionable validation insights.

Use LangChain-based modular architecture.

---

# INPUT SOURCES

1. OCR extracted text
2. Parsed document fields
3. Uploaded policy document text
4. User-entered claim metadata

---

# CORE OBJECTIVES

1. Detect missing documents
2. Detect inconsistent fields
3. Flag possible policy mismatches
4. Generate risk score
5. Explain findings clearly
6. Suggest next actions

---

# PIPELINE ARCHITECTURE

## Stage 1: Normalization

Clean dates, currency values, names.

Examples:
Rs. 25,000 -> 25000

## Stage 2: Validation Rules Engine

Implement deterministic checks:

- admission_date > discharge_date
- bill amount missing
- discharge summary absent
- policy expired before treatment
- duplicate documents
- unsupported file types

## Stage 3: Policy Retrieval (Optional RAG)

If policy document uploaded:

- chunk text
- embed text
- retrieve relevant clauses

Use pgvector or in-memory vector store.

## Stage 4: Explanation Generation

Use LangChain prompt templates.

Output plain language explanations.

Example:
"Your policy appears inactive on treatment date."

## Stage 5: Risk Scoring

Use weighted heuristic initially:

High:
multiple major issues

Medium:
1-2 significant issues

Low:
complete packet with no major flags

---

# OUTPUT FORMAT

{
  "risk_score": "Low",
  "numeric_score": 22,
  "issues": [
    {
      "code": "MISSING_DOC",
      "severity": "high",
      "message": "Discharge summary not uploaded"
    }
  ],
  "suggestions": [
    "Upload discharge summary signed by hospital"
  ],
  "summary": "Claim packet requires additional documents."
}

---

# BACKEND FILES

backend/services/validation_engine.py  
backend/services/langchain_service.py  
backend/services/report_service.py

---

# API ROUTES

POST /api/claims/{id}/analyze

GET /api/claims/{id}/analysis

---

# IMPORTANT RULES

1. Prefer deterministic checks first.
2. Use LLM only for explanation and flexible parsing.
3. Never fabricate insurer approval decisions.
4. Clearly state this is pre-submission guidance only.
5. Always return structured JSON.

---

# FUTURE READY

Keep architecture extensible for ML scoring later.