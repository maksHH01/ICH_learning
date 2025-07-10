import styles from "../info/styles.module.css";
import appleLogo from "../../assets/apple.svg";
import googleLogo from "../../assets/google.svg";
import xLogo from "../../assets/x.svg";

export default function MainContent({ title }) {
  return (
    <div className={styles.mainContent}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.sign}>
        <p>Sign in</p>
        <p>with</p>
      </div>
      <div className={styles.socials}>
        <a href="#" target="_blank">
          <img src={appleLogo} alt="Social Logo" />
        </a>
        <a href="#" target="_blank">
          <img src={googleLogo} alt="Social Logo" />
        </a>
        <a href="#" target="_blank">
          <img src={xLogo} alt="Social Logo" />
        </a>
      </div>
    </div>
  );
}
