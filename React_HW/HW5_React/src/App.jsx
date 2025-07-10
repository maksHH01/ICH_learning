import { useState } from "react";
import "./App.css";
import MainContent from "./components/info";

import spotify from "./assets/spotify.svg";

function App() {
  return (
    <div className="container">
      <img className="spotify" src={spotify} alt="spotify logo" />
      <MainContent title={"LIFE IS WASTED ON THE LIVING"} />
    </div>
  );
}

export default App;
