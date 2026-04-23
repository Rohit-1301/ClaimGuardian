# Skill: Build ClaimGuardian Authentication System

ROLE:
You are a security-focused full stack engineer.

MISSION:
Implement secure user authentication.

---

# OPTIONS

Preferred:
Supabase Auth

Alternative:
FastAPI JWT auth

---

# REQUIRED FEATURES

1. Register
2. Login
3. Logout
4. Password reset placeholder
5. Protected dashboard routes
6. Session persistence

---

# FRONTEND PAGES

/login  
/register

---

# BACKEND ROUTES (if custom auth)

POST /api/auth/register  
POST /api/auth/login  
GET /api/auth/me

---

# SECURITY RULES

1. Password hashing
2. Rate limit login
3. JWT expiry
4. No plaintext passwords
5. Error messages not overly revealing

---

# UX RULES

1. Good error messages
2. Loading buttons
3. Redirect after login
4. Remember session