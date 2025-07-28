import React from "react";
import CatImage from "./components/CatImage";
import styles from "./App.module.css";

export const BASE_URL = "https://api.thecatapi.com/v1/images/search";

function App() {
  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>Random Cat Images</h1>
      <CatImage />
    </div>
  );
}

export default App;
