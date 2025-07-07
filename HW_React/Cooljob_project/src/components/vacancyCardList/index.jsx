import styles from "../vacancyCardList/style.module.css";

import Company1 from "../../assets/icons/C1.svg";
import Company2 from "../../assets/icons/C2.svg";
import Company3 from "../../assets/icons/C3.svg";
import Company4 from "../../assets/icons/C4.svg";
import Company5 from "../../assets/icons/C5.svg";
import Company6 from "../../assets/icons/C6.svg";

import SonyIcon from "../../assets/icons/Sony1.svg";
import FacebookIcon from "../../assets/icons/facebook1.svg";
import ColaIcon from "../../assets/icons/Cola1.svg";
import LocationIcon from "../../assets/icons/loc.svg";
import VacancyCard from "../vacancyCard";

const vacancyData = [
  {
    id: 1,
    img: Company1,
    name: "Финансы",
    title: "Менеджер по управлению финансами в крупной компании",
    localImg: LocationIcon,
    localCity: "Осака, Япония",
    socialLogo: SonyIcon,
    socialInfo: "Sony, 3 дня назад",
  },
  {
    id: 2,
    img: Company2,
    name: "Продажи",
    title: "Специалист по продажам",
    localImg: LocationIcon,
    localCity: "Коясан, Япония",
    socialLogo: FacebookIcon,
    socialInfo: "Facebook, 7 дней назад",
  },
  {
    id: 3,
    img: Company3,
    name: "Служба поддержки",
    title: "Оператор колл центра",
    localImg: LocationIcon,
    localCity: "Томаму, Япония",
    socialLogo: ColaIcon,
    socialInfo: "CocaCola, 1 день назад",
  },
  {
    id: 4,
    img: Company4,
    name: "Мультимедиа",
    title: "Системный администратор",
    localImg: LocationIcon,
    localCity: "Токио, Япония",
    socialLogo: SonyIcon,
    socialInfo: "Sony, 3 дня назад",
  },
  {
    id: 5,
    img: Company5,
    name: "Дизайн",
    title: "Дизайнер интерьера в профессиональную студию в центре города",
    localImg: LocationIcon,
    localCity: "Йокогама, Япония",
    socialLogo: FacebookIcon,
    socialInfo: "Facebook, 7 дней назад",
  },
  {
    id: 6,
    img: Company6,
    name: "Грузоперевозки",
    title: "Водитель на дальние дистанции",
    localImg: LocationIcon,
    localCity: "Кобе. Япония",
    socialLogo: ColaIcon,
    socialInfo: "CocaCola, 1 день назад",
  },
];

export default function VacancyCardList() {
  return (
    <>
      {vacancyData.map((element) => (
        <VacancyCard
          key={element.id}
          img={element.img}
          name={element.name}
          title={element.title}
          localImg={element.localImg}
          localCity={element.localCity}
          socialLogo={element.socialLogo}
          socialInfo={element.socialInfo}
        />
      ))}
    </>
  );
}
