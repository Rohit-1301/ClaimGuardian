# Skill: Build ClaimGuardian Dashboard Analytics

ROLE:
You are a frontend analytics engineer.

MISSION:
Build a professional dashboard showing useful metrics to the user.

---

# DASHBOARD GOALS

Provide quick visibility into:

- claims analyzed
- recent activity
- report statuses
- risk trends

---

# REQUIRED WIDGETS

1. Total Claims Submitted
2. Claims Analyzed
3. High Risk Claims Count
4. Medium Risk Count
5. Low Risk Count
6. Recent Reports Table
7. Upload New Claim CTA

---

# OPTIONAL CHARTS

- pie chart by risk level
- bar chart by month
- issue frequency chart

---

# FRONTEND FILES

frontend/src/pages/Dashboard.tsx  
frontend/src/components/dashboard/

---

# UX RULES

1. Show skeleton loaders
2. Show empty states
3. Responsive mobile layout
4. Fast initial load
5. Clean SaaS style

---

# API SOURCES

GET /api/dashboard/summary  
GET /api/reports