import styles from './Accordion.module.scss';

export default function Accordion({
  question,
  answer,
  isActive,
  onToggle,
  index,
}) {
  const buttonId = `accordion-${index}`;
  const panelId = `panel-${index}`;

  return (
    <div className={`${styles.item} ${isActive ? styles.active : ''}`}>
      <button
        id={buttonId}
        className={styles.header}
        onClick={onToggle}
        aria-expanded={isActive}
        aria-controls={panelId}
      >
        <span>{question}</span>
        <span className={styles.icon}>{isActive ? '−' : '+'}</span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isActive}
        className={styles.content}
      >
        {isActive && <p>{answer}</p>}
      </div>
    </div>
  );
}
