import styles from './Hero.module.scss';
import Button from '../../components/Button/Button';

export default function Hero() {
  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq');
    faqSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Dijital Deneyimi <span>Birlikte</span> Geliştirelim
        </h1>
        <p className={styles.subtitle}>
          Modern web teknolojileriyle oluşturulmuş sade, hızlı ve erişilebilir bir kullanıcı deneyimi.
        </p>
        <div className={styles.actions}>
          <Button label="Hemen Başla" variant="primary" />
          <Button label="Daha Fazla Bilgi" variant="secondary" onClick={scrollToFAQ} />
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src="/images/hero-images.webp"
          alt="Hero görseli"
          className={styles.image}
          loading="lazy"
          width="600"
          height="400"
           
        />
      </div>
    </section>
  );
}
 