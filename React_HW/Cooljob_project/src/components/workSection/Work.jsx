import styles from "../header/style.module.css";

import disnepIcon from "../../assets/icons/disnep.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import microsoftIcon from "../../assets/icons/microsoft.svg";
import sonyIcon from "../../assets/icons/sony.svg";
import colaIcon from "../../assets/icons/cola.svg";

import WorkCards from "../header/workCards/WorkCards";

import WorkCardsStyle from "../header/workCards/WorkCards.module.css";

function Work() {
  return (
    <div className="container">
      <div className={WorkCardsStyle.work}>
        <h5>Помогаем найти работу:</h5>
        <div className={WorkCardsStyle.workCards}>
          <WorkCards src={disnepIcon} />
          <WorkCards src={facebookIcon} />
          <WorkCards src={microsoftIcon} />
          <WorkCards src={sonyIcon} />
          <WorkCards src={colaIcon} />
        </div>
      </div>
    </div>
  );
}

export default Work;
