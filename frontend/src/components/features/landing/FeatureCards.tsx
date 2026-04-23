import styles from './FeatureCards.module.css';

const FEATURES = [
  { icon:'🔍', title:'Smart Error Detection',    desc:'Automatically flags CPT/ICD mismatches, missing modifiers, and invalid code combinations before submission.',          tag:'AI-Powered' },
  { icon:'📋', title:'Compliance Checks',         desc:'Validates against payer-specific rules, CMS guidelines, and HIPAA requirements in real-time.',                          tag:'Rule Engine' },
  { icon:'📊', title:'Instant Reports',           desc:'Generate detailed validation reports with error explanations, suggested fixes, and confidence scores per claim.',         tag:'Reporting'   },
  { icon:'🔗', title:'EHR Integration Ready',     desc:'Designed for seamless integration with major EHR/PM systems via REST API. Drop-in validation layer for existing workflows.', tag:'API-First'   },
];

export default function FeatureCards() {
  return (
    <section className={`${styles.section} section`} id="how-it-works" aria-labelledby="features-heading">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>What We Do</p>
          <h2 id="features-heading" className={styles.title}>
            Everything you need to{' '}
            <span className="gradient-text">validate claims confidently</span>
          </h2>
        </div>

        <div className={`${styles.grid} stagger-children`}>
          {FEATURES.map((f) => (
            <article key={f.title} className={`${styles.card} animate-fade-in-up`}>
              <div className={styles.cardTop}>
                <div className={styles.iconBox} aria-hidden="true">{f.icon}</div>
                <span className={styles.tag}>{f.tag}</span>
              </div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
