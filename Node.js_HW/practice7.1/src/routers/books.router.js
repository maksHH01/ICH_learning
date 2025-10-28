import { Router } from "express";

import {
  addBookController,
  getBooksController,
  updateBooksByIdController,
  deleteBookByIdController,
} from "../controllers/books.controller.js";

const booksRouter = Router();

booksRouter.get("/", getBooksController);

booksRouter.post("/", addBookController);

booksRouter.put("/:id", updateBooksByIdController);

booksRouter.delete("/:id", deleteBookByIdController);

export default booksRouter;
