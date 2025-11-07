import styles from './Input.module.scss';

export default function Input({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  id,
  name,
  error, // ⚠️ ekleme: hata mesajı göstermek için
  required = false,
  ...props
}) {
  const inputId = id || name; // label-for ilişkisinin kopmaması için

  return (
    <div className={styles.inputGroup}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <input
        className={`${styles.input} ${error ? styles.errorInput : ''}`}
        type={type}
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />

      {error && (
        <span
          id={`${inputId}-error`}
          className={styles.errorMessage}
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
}
