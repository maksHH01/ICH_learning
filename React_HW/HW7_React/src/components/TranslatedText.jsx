import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

export default function TranslatedText() {
  const { language } = useContext(LanguageContext);

  const messages = {
    ru: "это русский текст!",
    en: "this is English text!",
  };
  return <p>{messages[language]}</p>;
}
