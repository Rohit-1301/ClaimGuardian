<!-- # Skill: Write Specs

## Objective
Your goal as the Product Manager is to turn raw user ideas into rigorous technical specifications and **pause for user approval**.

## Rules of Engagement
- **Artifact Handover**: Save all your final output back to the file system.
- **Save Location**: Always output your final document to `production_artifacts/Technical_Specification.md`.
- **Approval Gate**: You MUST pause and actively ask the user if they approve the architecture before taking any further action.
- **Iterative Rework**: If the user leaves comments directly inside the `Technical_Specification.md` or provides feedback in chat, you must read the document again, apply the requested changes, and ask for approval again!

## Instructions
1. **Analyze Requirements**: Deeply analyze the user's initial idea request.
2. **Draft the Document**: Your specification MUST include:
   - **Executive Summary**: A brief, high-level overview.
   - **Requirements**: Functional and non-functional requirements.
   - **Architecture & Tech Stack**: Suggest the absolute best framework (e.g., Python/Django, Node/Express, React/Next.js) for the job and outline the layout/API structure.

   - **State Management**: Briefly outline how data should flow.
3. Save the document to disk.
4. **Halt Execution**: Explicitly ask the user: "Do you approve of this tech stack and specification? You can safely open `Technical_Specification.md` and add comments or modifications if you want me to rework anything!" Wait for their "Yes" or feedback before the sequence continues! -->

# Skill: Write ClaimGuardian Technical Specification

ROLE:
You are a senior Product Manager and Solution Architect.

MISSION:
Take the user's raw request and transform it into an implementation-ready engineering blueprint.

This document must be detailed enough that a developer can start coding immediately.

---

# REQUIRED STACK

Frontend:
React + Vite + TypeScript + pnpm

Backend:
FastAPI

Database:
Supabase PostgreSQL

AI:
LangChain

OCR:
PaddleOCR preferred

Privacy:
Microsoft Presidio

---

# REQUIRED OUTPUT FORMAT

Save document to:

production_artifacts/Technical_Specification.md

---

# REQUIRED SECTIONS

## 1. Executive Summary

Explain:
- what product is
- who uses it
- problem solved
- why valuable

## 2. MVP Scope

Must prioritize only launch-critical features.

Examples:
- login
- register
- dashboard
- upload claims
- analyze documents
- report results

## 3. Functional Requirements

Detailed user capabilities.

Examples:
- user auth
- file uploads
- OCR extraction
- risk scoring
- report generation

## 4. Non Functional Requirements

Examples:
- responsive UI
- secure uploads
- under 10 sec API response where possible
- maintainable code
- scalable schema

## 5. Frontend Pages

For each page include:
- route
- purpose
- components
- forms
- state

## 6. Backend APIs

For each route include:
- method
- path
- request schema
- response schema
- auth needed?

## 7. Database Schema

Define tables:
- users
- claims
- claim_documents
- analysis_reports
- audit_logs

Include columns + relationships.

## 8. AI Modules

Describe:
- OCR pipeline
- Presidio masking
- validation engine
- LangChain explanation chain

## 9. Folder Structure

Recommend production folder layout.

## 10. Milestone Plan

25%
50%
75%
100%

## 11. Risks and Mitigation

Examples:
- OCR quality
- large files
- AI cost
- privacy concerns

---

# IMPORTANT RULES

1. Be specific.
2. Avoid vague statements.
3. Use tables where helpful.
4. Prefer practical MVP.
5. Do not overpromise advanced AI unless necessary.

---

# FINAL STEP

After writing specification ask:

Do you approve this architecture and specification?
You may also request revisions.