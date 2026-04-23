import { Navbar, Footer } from '../components/layout';
import { HeroSection, ValueProposition, FeatureCards, CTABanner } from '../components/features/landing';

/**
 * Landing Page — Public marketing page
 * Route: /
 */
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} style={{ paddingTop: 'var(--navbar-height)' }}>
        <HeroSection />
        <ValueProposition />
        <FeatureCards />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
