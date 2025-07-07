import mainLogo from "../../assets/icons/Cooljob.svg";
import Button from "./button/Button";
import NavList from "./NavList";
import styles from "../header/style.module.css";
import Input from "./FormInputs/Input";
import searchIcon from "../../assets/icons/search.svg";
import localIcon from "../../assets/icons/local.svg";
import buttonStyles from "../header/button/style.module.css";
import backgroundImage from "../../assets/icons/Rec.svg";

function Header() {
  const logoStyles = {
    left: "120px",
  };
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <img src={mainLogo} alt="Main logo" />
            <NavList title={"Поиск работы"} />
            <NavList title={"Поиск стартапов"} />
          </ul>
          <ul>
            <NavList
              style={{
                color: "rgba(0, 0, 0, 0.85)",
                fontSize: "15px",
                fontWeight: "400",
              }}
              title={"Регистрация"}
            />
            <Button children={"Вход"} className={buttonStyles.primary} />
          </ul>
        </nav>
        <div className={styles.formContent}>
          <h1>Один клик и работа в кармане</h1>
          <form>
            <Input src={searchIcon} placeholder={"Должность или компания"} />
            <Input
              src={localIcon}
              logoStyles={logoStyles}
              placeholder={"Город, Страна"}
            />
            <Button className={buttonStyles.secondary} children={"Поиск"} />
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
