import styles from "../header/styles.module.css";
import mainLogo from "../../assets/icons/logo.svg";

const menuList = ["Главная", "Музыка", "Сообщества", "Друзья"];

function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={mainLogo} alt="meck logo" />
      <ul className={styles.menuList}>
        {menuList.map((item) => {
          return (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

export default Header;
