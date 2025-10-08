import express from "express";
import fs from "node:fs/promises";

const startServer = () => {
  const app = express();

  app.get("/", (req, res, next) => {
    try {
      throw new Error("Test error");
    } catch (error) {
      next(error);
    }
  });

  app.use(async (err, req, res, next) => {
    const logMessage = `${new Date()} ${err.stack}\n`;

    try {
      await fs.appendFile("errors.log", logMessage, "utf-8");
      console.log("Ошибка записана в файл");
    } catch (error) {
      console.error("Не удалось записать ошибку в файл:", error.message);
    }

    res.status(500).type("text/plain").send("Internal Server Error");
  });

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => console.log(`Server running on ${port} port`));
};

export default startServer;
