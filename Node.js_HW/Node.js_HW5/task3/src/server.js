import express from "express";

const startServer = () => {
  const app = express();

  app.put("/", (req, res) => {
    res.status(200).type("text/plain").send("PUT-запрос обработан");
  });

  app.delete("/", (req, res) => {
    res.status(200).type("text/plain").send("Delete-запрос обработан");
  });

  app.all("/", (req, res) => {
    res.status(405).type("text/plain").send("Метод не поддерживается");
  });

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => console.log(`Server running on ${port} port`));
};

export default startServer;
