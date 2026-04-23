# Skill: Secure PHI / PII Data using Presidio

ROLE:
You are a privacy engineer.

MISSION:
Ensure all sensitive medical and identity data is handled safely.

Use Microsoft Presidio integrated with backend.

---

# DATA TYPES TO DETECT

Mandatory:

- Person names
- Phone numbers
- Emails
- Aadhaar
- PAN
- Address
- Policy IDs
- Member IDs
- Account numbers
- Dates of birth

Optional:
- Hospital registration numbers

---

# CORE WORKFLOW

## Step 1: Detect Sensitive Text

Run Presidio analyzer on OCR text.

## Step 2: Mask / Replace

Examples:

Rahul Sharma -> [PERSON]  
9876543210 -> [PHONE]  
ABCDE1234F -> [PAN]

## Step 3: Safe Logging

Never log raw sensitive values.

## Step 4: LLM Safety

Before sending text to LLM:
- redact sensitive entities if not required

---

# FILE HANDLING RULES

1. Sanitize filenames.
2. Store temporary uploads securely.
3. Auto-delete temp files after analysis.
4. Restrict executable uploads.
5. Limit file size.

---

# BACKEND FILES

backend/services/privacy_service.py

---

# API INTEGRATION

Use privacy checks inside:

upload flow  
OCR flow  
AI prompt flow  
report export flow

---

# OUTPUT FORMAT

{
  "masked_text": "",
  "entities_found": [
    {
      "type": "PHONE",
      "count": 2
    }
  ]
}

---

# COMPLIANCE RULES

1. No PHI in error traces.
2. No PHI in debug logs.
3. Use environment secrets.
4. Principle of least retention.

---

# EXTRA CREDIT

Allow user to delete claim session permanently.