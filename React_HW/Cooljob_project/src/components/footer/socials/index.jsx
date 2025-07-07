import styles from "../socials/styles.module.css";

export default function Socials({ img }) {
  return (
    <>
      <img className={styles.image} src={img} alt="social icon" />
    </>
  );
}
