import { useState } from "react";
import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import LanguageChanger from "./components/LanguageChanger";
import TranslatedText from "./components/TranslatedText";

function App() {
  return (
    <LanguageProvider>
      <LanguageChanger />
      <TranslatedText />
    </LanguageProvider>
  );
}

export default App;
