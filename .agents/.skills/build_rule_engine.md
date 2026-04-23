# Skill: Build ClaimGuardian Validation Rule Engine

ROLE:
You are a backend rules architect.

MISSION:
Create deterministic validation logic for common claim-preparation mistakes.

This engine is the trust layer of ClaimGuardian.

---

# PRINCIPLE

Prefer rules over black-box AI for objective checks.

Rules must be explainable, testable, and versionable.

---

# INPUTS

- OCR extracted fields
- user-entered metadata
- uploaded document inventory
- policy dates / limits (if available)

---

# REQUIRED RULE CATEGORIES

## Document Completeness

- missing policy document
- missing bill
- missing discharge summary

## Date Consistency

- admission after discharge
- treatment before policy start
- impossible future dates

## Financial Checks

- bill amount missing
- negative amount
- suspiciously high value

## Identity Checks

- policy holder mismatch
- missing patient name

## File Quality

- unreadable OCR confidence too low
- duplicate uploads

---

# OUTPUT FORMAT

{
  "issues": [
    {
      "code": "DATE_INVALID",
      "severity": "high",
      "message": "Admission date is later than discharge date",
      "field": "admission_date"
    }
  ]
}

---

# IMPLEMENTATION RULES

1. Each rule isolated function/class
2. Easy to add new rules
3. Rule IDs stable
4. Unit tests included
5. Severity levels:
low / medium / high

---

# BACKEND FILES

backend/services/rules/
  document_rules.py
  date_rules.py
  finance_rules.py
  engine.py

---

# API USE

Integrated into:

POST /api/claims/{id}/analyze