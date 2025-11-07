import { useEffect } from 'react';
import styles from './Contact.module.scss';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

export default function Contact() {
  useEffect(() => {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('form-success');
    const errorMessage = document.getElementById('form-error');

    if (!form) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateForm = () => {
      let isValid = true;
      successMessage.textContent = '';
      errorMessage.textContent = '';

      //  doğrudan querySelector ile elementleri al
      const nameInput = form.querySelector('#name');
      const emailInput = form.querySelector('#email');
      const messageInput = form.querySelector('#message');

      const name = nameInput?.value.trim();
      const email = emailInput?.value.trim();
      const message = messageInput?.value.trim();

      // Boş alan kontrolleri
      if (!name) {
        errorMessage.textContent = ' Ad Soyad alanı boş bırakılamaz.';
        isValid = false;
      } else if (!email) {
        errorMessage.textContent = ' E-posta alanı boş bırakılamaz.';
        isValid = false;
      } else if (!emailRegex.test(email)) {
        errorMessage.textContent = ' Geçerli bir e-posta adresi girin. (örnek@mail.com)';
        isValid = false;
      } else if (!message) {
        errorMessage.textContent = ' Mesaj alanı boş bırakılamaz.';
        isValid = false;
      }

      return isValid;
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      if (!validateForm()) return;

      // Yalancı submit 
      successMessage.textContent = ' Mesajınız başarıyla gönderildi! ';
      form.reset();
    };

    form.addEventListener('submit', handleSubmit);

    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-title">
      <div className={styles.container}>
        <h2 id="contact-title" className={styles.title}>İletişim</h2>
        <p className={styles.subtitle}>
          Görüş, öneri veya sorularınız için formu doldurabilirsiniz.
        </p>

        <form id="contact-form" className={styles.form} noValidate>
          <div className={styles.formGroup}>
            <label htmlFor="name">Ad Soyad</label>
            <Input type="text" id="name" name="name" placeholder="Adınızı girin" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">E-posta</label>
            <Input type="email" id="email" name="email" placeholder="ornek@mail.com" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Mesaj</label>
            <textarea
              id="message"
              name="message"
              placeholder="Mesajınızı yazın..."
              className={styles.textarea}
            ></textarea>
          </div>

          <Button type="submit" label="Gönder" variant="primary" />

          <p id="form-error" className={styles.error} aria-live="assertive"></p>
          <p id="form-success" className={styles.success} aria-live="polite"></p>
        </form>
      </div>
    </section>
  );
}
