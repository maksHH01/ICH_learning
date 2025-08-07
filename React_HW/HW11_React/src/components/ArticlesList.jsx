import { Link } from "react-router-dom";

function ArticlesList() {
  const articles = [
    { id: 1, title: "Первая статья" },
    { id: 2, title: "Вторая статья" },
    { id: 3, title: "Третья статья" },
  ];

  return (
    <div>
      <h1>Список статей:</h1>
      <ul>
        {articles.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/article/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticlesList;
