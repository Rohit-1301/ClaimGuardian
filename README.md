# 🛡️ ClaimGuardian
### AI-Powered Health Insurance Claim Validation Platform

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite 5 + TypeScript |
| Package Manager | pnpm |
| Authentication | Clerk (`@clerk/react`) |
| Routing | React Router v7 |
| Styling | Vanilla CSS + CSS Modules |
| Database (Phase 2) | Supabase (PostgreSQL) |
| Backend (Phase 3) | FastAPI (Python 3.11, conda env) |

---

## Project Structure

```
Claim Guardian/
├── .agents/              ← Agent workflows and skills
├── frontend/             ← React + Vite + TypeScript app
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── ui/           ← Design system primitives (Button, Card, Badge...)
│   │   │   ├── layout/       ← Navbar, Sidebar, Footer, DashboardLayout
│   │   │   └── features/
│   │   │       ├── landing/  ← HeroSection, ValueProposition, FeatureCards, CTABanner
│   │   │       └── dashboard/ ← WelcomeCard, StatCard, RecentActivity, UploadCTACard
│   │   ├── pages/            ← Route-level page components
│   │   ├── routes/           ← AppRouter, ProtectedRoute
│   │   ├── hooks/            ← Custom React hooks
│   │   ├── lib/              ← Third-party integrations
│   │   ├── utils/            ← Pure utility functions
│   │   ├── constants/        ← App-wide constants
│   │   ├── types/            ← TypeScript type definitions
│   │   └── styles/           ← CSS design tokens, globals, animations
│   ├── .env.example
│   └── package.json
├── docs/
│   └── table.md              ← 📋 Supabase SQL — paste into SQL Editor
├── .gitignore
└── README.md
```

---

## Getting Started

### 1. Clone and install

```bash
cd frontend
pnpm install
```

### 2. Set up environment variables

```bash
cp .env.example .env
# Edit .env and add your Clerk Publishable Key
```

Get your key from: https://dashboard.clerk.com → Your App → API Keys

### 3. Run dev server

```bash
pnpm dev
```

App runs at: **http://localhost:5173**

---

## Pages

| Route | Page | Auth Required |
|---|---|---|
| `/` | Landing Page | No |
| `/login` | Clerk Sign In | No |
| `/signup` | Clerk Sign Up | No |
| `/dashboard` | Dashboard | ✅ Yes |
| `/profile` | Profile + Preferences | ✅ Yes |

---

## Supabase Setup (Phase 2)

See [`docs/table.md`](./docs/table.md) for the complete SQL schema.
Paste it into: **Supabase Dashboard → SQL Editor → New Query → Run**

---

## Backend Setup (Phase 3)

```bash
# Create conda environment with Python 3.11
conda create -n claimguardian python=3.11 -y
conda activate claimguardian

# Install FastAPI dependencies
pip install fastapi uvicorn supabase sqlalchemy python-dotenv
```

---

## Build & Deploy

```bash
# Production build
pnpm build

# Preview production build locally
pnpm preview
```

Deploy frontend to **Vercel** (connect GitHub repo → auto-deploy).
