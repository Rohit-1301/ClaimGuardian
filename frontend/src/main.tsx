import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ClerkProvider } from '@clerk/react';
import App from './App';

// Global styles (imported here so they apply app-wide)
import './styles/globals.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error(
    '[ClaimGuardian] Missing VITE_CLERK_PUBLISHABLE_KEY.\n' +
    'Copy .env.example → .env and add your Clerk Publishable Key.\n' +
    'Get it from: https://dashboard.clerk.com → API Keys'
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('[ClaimGuardian] Root element #root not found in index.html');

createRoot(rootElement).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
    >

      <App />
    </ClerkProvider>
  </StrictMode>
);
