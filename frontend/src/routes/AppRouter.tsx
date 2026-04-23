import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

// Pages (lazy-loaded for code-splitting — FAANG best practice)
import { lazy, Suspense } from 'react';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const LandingPage   = lazy(() => import('../pages/LandingPage'));
const LoginPage     = lazy(() => import('../pages/LoginPage'));
const SignupPage     = lazy(() => import('../pages/SignupPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const ProfilePage   = lazy(() => import('../pages/ProfilePage'));
const NotFoundPage  = lazy(() => import('../pages/NotFoundPage'));

function PageLoader() {
  return (
    <div className="full-page-loader">
      <LoadingSpinner size="lg" label="Loading page…" />
    </div>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* ── Public Routes ── */}
          <Route path="/"       element={<LandingPage />}  />
          <Route path="/login"  element={<LoginPage />}    />
          <Route path="/signup" element={<SignupPage />}   />

          {/* ── Protected Routes ── */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          {/* ── 404 Fallback ── */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
