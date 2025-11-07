import { useEffect } from 'react';
import styles from './Modal.module.scss';

export default function Modal({ isOpen, onClose, title, children }) {
  // ESC tuşuyla kapatma
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Modal kapalıysa render etme
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()} // içeriğe tıklayınca kapanmasın
      >
        {title && <h2 className={styles.title}>{title}</h2>}
        <div className={styles.content}>{children}</div>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Kapat"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
