import express from "express";
import cors from "cors";

// import authRouter from "./routers/auth.router.js";
import productsRouter from "./routers/products.router.js";
import magazineRouter from "./routers/magazine.routes.js";
import publisherRouter from "./routers/publisher.router.js";
import articleRouter from "./routers/article.router.js";
import tagRouter from "./routers/tag.router.js";

const startServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  // app.use("/api/auth", authRouter);
  app.use("/api/auth", productsRouter);
  app.use("/api/magazines", magazineRouter);
  app.use("/api/articles", articleRouter);
  app.use("/api/tags", tagRouter);
  app.use("/api/publishers", publisherRouter);

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => console.log(`Server running on ${port} port`));
};

export default startServer;
