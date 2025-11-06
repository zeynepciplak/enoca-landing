import { useState } from 'react';
import styles from './FAQ.module.scss';
import Accordion from '../../components/Accordion/Accordion';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Bu proje hangi teknolojilerle geliştirildi?',
      answer:
        'Proje Vite, React.js ve SCSS kullanılarak geliştirildi. Ayrıca ESLint, Prettier ve CSS değişkenleriyle tema desteği bulunmaktadır.',
    },
    {
      question: 'Proje mobil uyumlu mu?',
      answer:
        'Evet, proje tamamen mobil-öncelikli olarak geliştirildi. 320px - 1440px aralığında tüm cihazlarda sorunsuz çalışır.',
    },
    {
      question: 'Harici bir UI kütüphanesi kullanıldı mı?',
      answer:
        'Hayır, tüm bileşenler (Button, Input, Card, Modal, Accordion) sıfırdan, SCSS Modules yapısıyla geliştirildi.',
    },
    {
      question: 'Form doğrulaması nasıl yapılıyor?',
      answer:
        'İletişim formu yalın JavaScript ile e-posta format kontrolü ve boş alan uyarısı yapacak şekilde tasarlandı.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faq} id="faq" aria-labelledby="faq-title">
      <div className={styles.container}>
        <h2 id="faq-title" className={styles.title}>
          Sıkça Sorulan Sorular
        </h2>
        <p className={styles.subtitle}>
          Proje hakkında en çok merak edilen sorulara aşağıdan ulaşabilirsiniz.
        </p>

        <div className={styles.list} role="list">
          {faqs.map((item, index) => (
            <Accordion
              key={index}
              question={item.question}
              answer={item.answer}
              isActive={activeIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
