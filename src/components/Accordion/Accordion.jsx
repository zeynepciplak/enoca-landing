import { useState } from 'react';
import styles from './Accordion.module.scss';

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.item} ${
            activeIndex === index ? styles.active : ''
          }`}
        >
          <button
            className={styles.header}
            onClick={() => toggleItem(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`panel-${index}`}
            id={`accordion-${index}`}
          >
            <span>{item.question}</span>
            <span className={styles.icon}>
              {activeIndex === index ? '−' : '+'}
            </span>
          </button>
          <div
            id={`panel-${index}`}
            role="region"
            aria-labelledby={`accordion-${index}`}
            className={styles.content}
          >
            {activeIndex === index && <p>{item.answer}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
