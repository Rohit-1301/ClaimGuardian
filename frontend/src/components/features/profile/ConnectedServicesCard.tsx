import { Plug2 } from 'lucide-react';
import { CONNECTED_SERVICES, type ServiceStatus } from '../../../constants/profileMockData';
import styles from './ConnectedServicesCard.module.css';

const STATUS_CONFIG: Record<ServiceStatus, { label: string; dot: string; badge: string }> = {
  connected:   { label: 'Connected',   dot: styles.dotGreen,  badge: styles.badgeGreen  },
  ready:       { label: 'Ready',       dot: styles.dotGreen,  badge: styles.badgeGreen  },
  coming_soon: { label: 'Coming Soon', dot: styles.dotAmber,  badge: styles.badgeAmber  },
  error:       { label: 'Error',       dot: styles.dotRed,    badge: styles.badgeRed    },
};

export default function ConnectedServicesCard() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.headerIcon} aria-hidden="true">
          <Plug2 size={18} />
        </div>
        <div>
          <h3 className={styles.title}>Connected Services</h3>
          <p className={styles.subtitle}>Platform integration status</p>
        </div>
      </div>

      <ul className={styles.list} role="list">
        {CONNECTED_SERVICES.map((service) => {
          const cfg = STATUS_CONFIG[service.status];
          return (
            <li key={service.id} className={styles.item}>
              <div className={styles.itemLeft}>
                <span className={`${styles.dot} ${cfg.dot}`} aria-hidden="true" />
                <div>
                  <p className={styles.itemName}>{service.name}</p>
                  <p className={styles.itemDesc}>{service.description}</p>
                </div>
              </div>
              <span className={`${styles.badge} ${cfg.badge}`}>
                {cfg.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
