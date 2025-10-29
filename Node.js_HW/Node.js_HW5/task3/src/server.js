import express from "express";

const startServer = () => {
  const app = express();

  app.put("/", (req, res) => {
    return res.send("PUT-запрос обработан");
  });

  app.delete("/", (req, res) => {
    return res.send("DELETE-запрос обработан");
  });

  app.all("/", (req, res) => {
    return res.status(405).send("Метод не поддерживается");
  });

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => console.log(`Server running on port ${port}`));
};

export default startServer;
