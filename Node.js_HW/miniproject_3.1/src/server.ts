import express, { Express } from "express";

const startServer = (): void => {
  const app: Express = express();

  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Добро пожаловать в прииложение для отслеживания финансов");
  });

  const port: number = Number(process.env.PORT);
  app.listen(port, () => console.log(`Server is running on port: ${port}`));
};

export default startServer;
