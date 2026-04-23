import { Link } from 'react-router-dom';
import { Button } from '../components/ui';
import { Navbar } from '../components/layout';
import styles from './NotFoundPage.module.css';

/**
 * 404 Not Found Page
 * Route: *
 */
export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page} style={{ paddingTop: 'var(--navbar-height)' }}>
        <div className={styles.content}>
          <div className={styles.errorCode} aria-hidden="true">404</div>
          <h1 className={styles.title}>Page not found</h1>
          <p className={styles.desc}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className={styles.actions}>
            <Link to="/">
              <Button variant="primary" size="lg">Go Home</Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" size="lg">Dashboard</Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
