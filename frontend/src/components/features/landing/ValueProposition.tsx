import styles from './ValueProposition.module.css';

const PROPS = [
  {
    icon:        '🛡️',
    title:       'Reduce Claim Denials',
    description: 'AI catches coding errors, missing modifiers, and payer rule violations before submission — cutting denial rates by up to 94%.',
    color:       'blue',
  },
  {
    icon:        '⚡',
    title:       'Validate in Seconds',
    description: 'What billing teams spend hours reviewing manually, ClaimGuardian processes in under 3 seconds per claim — at any volume.',
    color:       'teal',
  },
  {
    icon:        '✅',
    title:       'Stay Compliant & Audit-Ready',
    description: 'Built-in HIPAA awareness and immutable audit logs keep you ready for payer audits and regulatory reviews at any time.',
    color:       'green',
  },
];

export default function ValueProposition() {
  return (
    <section className={`${styles.section} section`} id="features" aria-labelledby="value-heading">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Why ClaimGuardian</p>
          <h2 id="value-heading" className={styles.title}>
            Built for billing teams<br />that <span className="gradient-text">can't afford denials</span>
          </h2>
          <p className={styles.subtitle}>
            Every denied claim costs your organization an average of $118 to rework.
            ClaimGuardian eliminates the root causes before they reach the payer.
          </p>
        </div>

        <div className={`${styles.grid} stagger-children`}>
          {PROPS.map((prop) => (
            <div key={prop.title} className={`${styles.card} ${styles[prop.color]} animate-fade-in-up`}>
              <div className={styles.iconWrap} aria-hidden="true">
                {prop.icon}
              </div>
              <h3 className={styles.cardTitle}>{prop.title}</h3>
              <p className={styles.cardDesc}>{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
