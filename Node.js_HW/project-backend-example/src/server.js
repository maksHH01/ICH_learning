import express from "express";
import cors from "cors";

import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";

import usersRouter from "./routers/user.router.js";
import contactsRouter from "./routers/contacts.router.js";
import validationRouter from "./routers/validation.router.js";
import categoriesRouter from "./routers/categories.router.js";

const startServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use("/api/validatuion", validationRouter);
  app.use("/api/contacts", contactsRouter);
  app.use("/api/categories", categoriesRouter);
  app.use("/api/users", usersRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => console.log(`Server running on ${port} port`));
};

export default startServer;
