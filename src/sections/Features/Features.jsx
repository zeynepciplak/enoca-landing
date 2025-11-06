import styles from './Features.module.scss';
import Card from '../../components/Card/Card';

export default function Features() {
  const features = [
    {
      title: 'Hızlı ve Modern',
      description:
        'Vite + React mimarisiyle geliştirildi. Asset optimizasyonu ve hızlı HMR ile yüksek performans.',
      image: '/images/feature1.png',
    },
    {
      title: 'Tamamen Responsive',
      description:
        'Mobil-öncelikli grid ve flex yapılarıyla 320–1440px arası tüm boyutlarda tutarlı görünüm.',
      image: '/images/feature2.png',
    },
    {
      title: 'Kolay Özelleştirilebilir',
      description:
        'SCSS değişkenleri, mixin’ler ve component props ile temalandırma ve yeniden kullanım çok kolay.',
      image: '/images/feature3.png',
    },
  ];

  return (
    <section className={styles.features} aria-labelledby="features-title">
      <div className={styles.container}>
        <h2 id="features-title" className={styles.title}>
          Öne Çıkan Özellikler
        </h2>
        <p className={styles.subtitle}>
          Modern mimari, erişilebilirlik ve performans odaklı sade bir UI seti.
        </p>

        <div className={styles.grid} role="list">
          {features.map((item, i) => (
            <div role="listitem" key={i}>
              <Card title={item.title} description={item.description} image={item.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
