import "./App.css";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import ArticlesList from "./components/ArticlesList";
import Article from "./components/Article";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Главная</Link>
        <br />
        <Link to="/articlelist">Список Артиклей</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articlelist" element={<ArticlesList />}></Route>
        <Route path="/article/:id" element={<Article />}></Route>
      </Routes>
    </>
  );
}

export default App;
