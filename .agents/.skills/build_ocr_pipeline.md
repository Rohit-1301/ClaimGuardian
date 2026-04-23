# Skill: Build OCR Pipeline for ClaimGuardian

ROLE:
You are a document AI engineer.

MISSION:
Create a robust OCR pipeline for claim documents such as hospital bills, discharge summaries, policy PDFs, and scanned images.

This OCR module must integrate with FastAPI backend.

---

# PRIMARY GOAL

Convert uploaded files into usable structured text.

Supported Inputs:
- PDF
- JPG
- JPEG
- PNG

---

# REQUIRED OCR STACK

Primary:
- PaddleOCR

Fallback:
- EasyOCR

If both unavailable, expose graceful error.

---

# REQUIRED PIPELINE

## Step 1: File Intake

Validate:
- max file size
- extension
- MIME type
- corrupted files

Reject dangerous uploads.

## Step 2: PDF Handling

If PDF:
- split into pages
- convert pages to images

## Step 3: Image Preprocessing

Apply when useful:
- grayscale
- denoise
- sharpen
- thresholding
- orientation correction

## Step 4: OCR Extraction

Return:
- raw text
- lines
- confidence score
- page number

## Step 5: Structured Parsing

Extract likely fields:

- patient_name
- hospital_name
- admission_date
- discharge_date
- invoice_number
- bill_amount
- diagnosis
- policy_number

Use regex + heuristics + optional LLM parsing.

---

# OUTPUT FORMAT

Return JSON:

{
  "document_type": "",
  "pages": 1,
  "avg_confidence": 0.0,
  "raw_text": "",
  "fields": {
    "patient_name": "",
    "hospital_name": "",
    "bill_amount": ""
  }
}

---

# DOCUMENT CLASSIFICATION

Classify into:

- hospital_bill
- discharge_summary
- policy_document
- lab_report
- unknown

Use keyword heuristics first.

---

# BACKEND INTEGRATION

Create service files such as:

backend/services/ocr_service.py  
backend/services/document_parser.py

Expose route:

POST /api/claims/{id}/extract

---

# QUALITY RULES

1. Never crash on unreadable file.
2. Return partial results when possible.
3. Log processing failures safely.
4. Handle multi-page PDFs.
5. Keep processing reasonably fast.

---

# EXTRA CREDIT

Support table-heavy bill parsing.