import express from "express";
import cors from "cors";
import type { Express } from "express";
import balanceRoutes from "./routes/balanceRoutes.js";

const startServer = (): void => {
  const app: Express = express();

  app.use(cors());
  app.use(express.json());

  app.use("/api/balance", balanceRoutes);

  app.get("/", (req, res) => {
    res.send("Добро пожаловать в приложение для отслеживания финансов!");
  });

  const port: number = Number(process.env.PORT) || 3000;
  app.listen(port, () => console.log(`Server is running on port: ${port}`));
};

export default startServer;
