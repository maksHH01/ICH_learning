import { useParams } from "react-router-dom";

function Article() {
  const { id } = useParams();

  const articles = [
    {
      id: "1",
      title: "Первая статья",
      content: "Это содержимое первой статьи.",
    },
    {
      id: "2",
      title: "Вторая статья",
      content: "Это содержимое второй статьи.",
    },
    {
      id: "3",
      title: "Третья статья",
      content: "Это содержимое третьей статьи.",
    },
  ];

  const article = articles.find((item) => item.id === id);

  if (!article) {
    return <div>Статья не найдена</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
}

export default Article;
