import { useContext } from "react";
import LanguageContext, { LanguageProvider } from "../context/LanguageContext";

export default function LanguageChanger() {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <>
      <h1>Hallo, you can change me :D</h1>
      <p>Current language: {language}</p>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ru")}>Русский</button>
    </>
  );
}
