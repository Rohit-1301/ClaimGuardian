import AppRouter from './routes/AppRouter';

/**
 * Root application component.
 * ClerkProvider wraps the entire app in main.tsx.
 * AppRouter handles all routing logic.
 */
export default function App() {
  return <AppRouter />;
}
