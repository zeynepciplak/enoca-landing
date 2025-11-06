import styles from './Button.module.scss';

export default function Button({ label, onClick, variant = 'primary', type = 'button' }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} type={type} onClick={onClick}>
      {label}
    </button>
  );
}
