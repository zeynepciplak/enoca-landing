import styles from './Input.module.scss';

export default function Input({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  id,
  name,
  ...props
}) {
  return (
    <div className={styles.inputGroup}>
      {label && <label htmlFor={id} className={styles.label}>{label}</label>}
      <input
        className={styles.input}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
