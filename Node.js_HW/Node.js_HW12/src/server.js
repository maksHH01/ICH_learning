import express from "express";
import cors from "cors";

// import authRouter from "./routers/auth.router.js";
import productsRouter from "./routers/products.router.js";

const startServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  // app.use("/api/auth", authRouter);
  app.use("/api/auth", productsRouter);

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => console.log(`Server running on ${port} port`));
};

export default startServer;
