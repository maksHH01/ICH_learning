import styles from "../categoryCard/style.module.css";

function CategoryCard({ src, alt, text, custom = false }) {
  return (
    <div
      className={
        custom
          ? `${styles.cardsStyles} ${styles.customCard}`
          : styles.cardsStyles
      }
    >
      <img className={styles.iconStyles} src={src} alt={alt} />
      <p className={styles.CardName}>{text}</p>
    </div>
  );
}

export default CategoryCard;
