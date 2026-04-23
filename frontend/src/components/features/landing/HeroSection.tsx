import { Link } from 'react-router-dom';
import { Button } from '../../ui';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      {/* ── Background Orbs ── */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={`${styles.content} container`}>
        {/* ── Left: Copy ── */}
        <div className={styles.copy}>
          <div className={`${styles.badge} animate-fade-in-up`}>
            <span className={styles.badgeDot} />
            AI-Powered Claim Validation • Now in Beta
          </div>

          <h1 id="hero-heading" className={`${styles.headline} animate-fade-in-up`}>
            Stop Claim Denials<br />
            <span className="gradient-text">Before They Happen</span>
          </h1>

          <p className={`${styles.subheadline} animate-fade-in-up`}>
            ClaimGuardian validates health insurance claims with AI before submission —
            catching errors, coding mismatches, and compliance issues in seconds, not days.
          </p>

          {/* ── CTAs ── */}
          <div className={`${styles.ctas} animate-fade-in-up`}>
            <Link to="/signup">
              <Button variant="primary" size="lg">
                Start Free — No Card Required
              </Button>
            </Link>
            <Link to="#how-it-works">
              <Button variant="outline" size="lg">
                See How It Works →
              </Button>
            </Link>
          </div>

          {/* ── Social Proof ── */}
          <div className={`${styles.socialProof} animate-fade-in-up`}>
            <div className={styles.avatarGroup} aria-hidden="true">
              {['#2563EB','#0D9488','#7C3AED','#DB2777'].map((color, i) => (
                <div key={i} className={styles.avatar} style={{ background: color, zIndex: 4 - i }} />
              ))}
            </div>
            <p className={styles.socialText}>
              <strong>500+</strong> billing teams trust ClaimGuardian
            </p>
          </div>
        </div>

        {/* ── Right: Product Preview Card ── */}
        <div className={`${styles.previewWrap} animate-fade-in`} aria-hidden="true">
          <div className={styles.previewCard}>
            {/* Header */}
            <div className={styles.previewHeader}>
              <div className={styles.previewDots}>
                <span style={{ background: '#EF4444' }} />
                <span style={{ background: '#F59E0B' }} />
                <span style={{ background: '#10B981' }} />
              </div>
              <span className={styles.previewTitle}>Claim Validation · CG-2024-0882</span>
            </div>

            {/* Claim Fields */}
            <div className={styles.previewBody}>
              <PreviewRow label="Patient ID"      value="MBR-448821"      ok />
              <PreviewRow label="Provider NPI"    value="1234567890"      ok />
              <PreviewRow label="ICD-10 Code"     value="J18.9 — Pneumonia" ok />
              <PreviewRow label="CPT Code"        value="99285 — ED Visit" warn msg="Modifier missing" />
              <PreviewRow label="Insurance ID"    value="BCBS-IL-0081"    ok />
              <PreviewRow label="Billed Amount"   value="$4,200.00"       ok />

              <div className={styles.previewDivider} />

              {/* Validation Summary */}
              <div className={styles.validationSummary}>
                <div className={styles.summaryRow}>
                  <span className={styles.summaryIcon} style={{ color: '#10B981' }}>✓</span>
                  <span>5 fields validated</span>
                </div>
                <div className={styles.summaryRow}>
                  <span className={styles.summaryIcon} style={{ color: '#F59E0B' }}>⚠</span>
                  <span>1 warning detected</span>
                </div>
              </div>

              <div className={styles.previewSubmitRow}>
                <div className={styles.statusBadge}>
                  <span className={styles.statusDot} />
                  Ready with warnings
                </div>
                <button className={styles.previewBtn}>View Report →</button>
              </div>
            </div>
          </div>

          {/* Floating Stats */}
          <div className={`${styles.floatCard} ${styles.floatCard1} animate-float`}>
            <span className={styles.floatIcon}>⚡</span>
            <div>
              <p className={styles.floatValue}>2.4s</p>
              <p className={styles.floatLabel}>Avg validation time</p>
            </div>
          </div>
          <div className={`${styles.floatCard} ${styles.floatCard2} animate-float`} style={{ animationDelay: '1.5s' }}>
            <span className={styles.floatIcon}>📉</span>
            <div>
              <p className={styles.floatValue}>94%</p>
              <p className={styles.floatLabel}>Denial reduction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Helper sub-component ── */
function PreviewRow({ label, value, ok, warn, msg }: {
  label: string; value: string; ok?: boolean; warn?: boolean; msg?: string;
}) {
  return (
    <div className={styles.previewRow}>
      <span className={styles.previewLabel}>{label}</span>
      <span className={styles.previewValue}>{value}</span>
      {ok   && <span className={styles.check} title="Valid">✓</span>}
      {warn && <span className={styles.warnIcon} title={msg}>⚠</span>}
    </div>
  );
}
