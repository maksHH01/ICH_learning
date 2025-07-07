// import CategoryCard from "../categoryCard";
import Title from "../categoryCard/title/Title";
import styles from "../main/style.module.css";
import CategoryCard from "../categoryCard/index.jsx";
import Circle from "../../assets/icons/1.svg";
import Car from "../../assets/icons/2.svg";
import Window from "../../assets/icons/3.svg";
import ForkKnife from "../../assets/icons/4.svg";
import Bandage from "../../assets/icons/5.svg";
import Movie from "../../assets/icons/6.svg";
import Message from "../../assets/icons/7.svg";
import Box from "../../assets/icons/8.svg";
import Cart from "../../assets/icons/8.svg";
import Arrow from "../../assets/icons/Vector.svg";
import VacancyCardList from "../vacancyCardList/index.jsx";
import Button from "../header/button/Button.jsx";
import BtnStyles from "../header/button/style.module.css";

const cardInfo = [
  { id: 1, text: "Финансы", url: Circle },
  { id: 2, text: "Грузоперевозки", url: Car },
  { id: 3, text: "Дизайн", url: Window },
  { id: 4, text: "Ресторанный бизнес", url: ForkKnife },
  { id: 5, text: "Медицина", url: Bandage },
  { id: 6, text: "Мультимедиа", url: Movie },
  { id: 7, text: "Служба поддержки", url: Message },
  { id: 8, text: "Мененджмент", url: Box },
  { id: 9, text: "Продажи", url: Cart },
  {
    id: 10,
    text: "Больше категорий",
    url: Arrow,
    custom: true,
  },
];

function Main() {
  return (
    <section className={styles.main}>
      <div className="container">
        <div className={styles.category}>
          <Title title="Работа по категориям" />
          <div className={styles.cards}>
            {cardInfo.map((element) => {
              return (
                <CategoryCard
                  src={element.url}
                  alt="icon"
                  text={element.text}
                  custom={element.custom}
                  key={element.id}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.vacantions}>
          <Title title={"Новые вакансии"} />
          <p className={styles.info}>Найди работу своей мечты прямо сейчас</p>
          <div className={styles.cardsContainer}>
            <VacancyCardList />
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <Button className={BtnStyles.vacantionsBtn}>Все вакансии</Button>
        </div>
      </div>
    </section>
  );
}

export default Main;
