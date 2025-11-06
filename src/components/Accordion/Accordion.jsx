import styles from './Accordion.module.scss';

export default function Accordion({ question, answer, isActive, onToggle }) {
  return (
    <div
      className={`${styles.item} ${isActive ? styles.active : ''}`}
    >
      <button
        className={styles.header}
        onClick={onToggle}
        aria-expanded={isActive}
      >
        <span>{question}</span>
        <span className={styles.icon}>{isActive ? '−' : '+'}</span>
      </button>

      <div
        className={styles.content}
        role="region"
        aria-hidden={!isActive}
      >
        {isActive && <p>{answer}</p>}
      </div>
    </div>
  );
}
