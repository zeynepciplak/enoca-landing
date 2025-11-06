import styles from './Pricing.module.scss';
import Button from '../../components/Button/Button';

const plans = [
  {
    name: 'Starter',
    price: '₺0',
    period: '/ay',
    features: ['1 proje', 'Temel bileşenler', 'Topluluk desteği'],
    cta: 'Başla',
    popular: false,
  },
  {
    name: 'Pro',
    price: '₺129',
    period: '/ay',
    features: ['Sınırsız proje', 'Tüm bileşenler', 'Öncelikli destek'],
    cta: 'Satın Al',
    popular: true, // “popüler” rozet
  },
  {
    name: 'Team',
    price: '₺249',
    period: '/ay',
    features: ['Takım çalışma alanı', 'Tema desteği', 'E-posta desteği'],
    cta: 'Satın Al',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className={styles.pricing} aria-labelledby="pricing-title">
      <div className={styles.container}>
        <h2 id="pricing-title" className={styles.title}>Fiyat Kartları</h2>
        <p className={styles.subtitle}>
          İhtiyacına uygun planı seç. Kartlar klavye ile gezinmeye ve ekranda okunabilirliğe uygundur.
        </p>

        <div className={styles.grid} role="list">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`${styles.card} ${p.popular ? styles.popular : ''}`}
              role="listitem"
              aria-label={`${p.name} planı`}
              tabIndex={0} // klavye erişimi
            >
              {p.popular && <span className={styles.badge} aria-label="Popüler plan">Popüler</span>}

              <header className={styles.header}>
                <h3 className={styles.planName}>{p.name}</h3>
                <div className={styles.price} aria-label={`Fiyat ${p.price} ${p.period}`}>
                  <span className={styles.amount}>{p.price}</span>
                  <span className={styles.period}>{p.period}</span>
                </div>
              </header>

              <ul className={styles.features} aria-label="Özellik listesi">
                {p.features.map((f) => (
                  <li key={f} className={styles.featureItem}>
                    <span aria-hidden="true">✓</span> {f}
                  </li>
                ))}
              </ul>

              <div className={styles.actions}>
                <Button label={p.cta} variant={p.popular ? 'primary' : 'secondary'} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
