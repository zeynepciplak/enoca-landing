import styles from './Button.module.scss';

export default function Button({
  label,
  onClick,
  variant = 'primary',
  type = 'button',
  ariaLabel, // erişilebilirlik için ek parametre
  disabled = false,
}) {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || label} 
    >
      {label}
    </button>
  );
}
