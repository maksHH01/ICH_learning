import styles from "../footer/style.module.css";
import logo from "../../assets/icons/Col.svg";
import Socials from "./socials";

import linkedIn from "../../assets/icons/linked.svg";
import gmail from "../../assets/icons/gmail.svg";
import twitter from "../../assets/icons/twitt.svg";
import facebook from "../../assets/icons/fe.svg";

const popularCities = [
  { id: 1, name: "Осака" },
  { id: 2, name: "Коясан" },
  { id: 3, name: "Токио" },
  { id: 4, name: "Хаконэ" },
  { id: 5, name: "Наэба" },
  { id: 6, name: "Томаму" },
  { id: 7, name: "Йокогама" },
  { id: 8, name: "Нагоя" },
  { id: 9, name: "Саппоро" },
  { id: 10, name: "Кобе" },
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <h3 className={styles.title}>Популярные города</h3>
        <ul className={styles.listContainer}>
          {popularCities.map((element) => {
            return (
              <li className={styles.listElement} key={element.id}>
                {element.name}
              </li>
            );
          })}
        </ul>
        <div className={styles.socials}>
          <img src={logo} alt="logo" />
          <div className={styles.socialsIcons}>
            <Socials img={linkedIn} />
            <Socials img={gmail} />
            <Socials img={twitter} />
            <Socials img={facebook} />
          </div>
        </div>
      </div>
    </footer>
  );
}
