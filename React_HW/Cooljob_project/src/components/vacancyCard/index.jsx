import styles from "../vacancyCard/style.module.css";

export default function VacancyCard({
  img,
  name,
  title,
  localImg,
  localCity,
  socialLogo,
  socialInfo,
}) {
  return (
    <div className={styles.cardsStyles}>
      <div className={styles.circle}>
        <img src={img} alt="circle" />
        <p className={styles.name}>{name}</p>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.local}>
        <img src={localImg} alt="local logo" />
        <p className={styles.localCity}>{localCity}</p>
      </div>
      <div className={styles.social}>
        <img src={socialLogo} alt="social logo" />
        <p className={styles.socialInfo}>{socialInfo}</p>
      </div>
    </div>
  );
}
