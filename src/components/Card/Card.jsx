import styles from './Card.module.scss';

export default function Card({ title, description, image, children, loading = 'lazy' }) {
  return (
    <div className={styles.card}>
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={title || 'card image'} className={styles.image}  loading={loading} 
            />
        </div>
      )}
      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {description && <p className={styles.description}>{description}</p>}
        {children && <div className={styles.actions}>{children}</div>}
      </div>
    </div>
  );
}
