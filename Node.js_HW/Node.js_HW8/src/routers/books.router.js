import { Router } from "express";
import { asyncHandler } from "../middlewares/errorHandler.js";

import {
  addBookController,
  getBooksController,
  updateBooksByIdController,
  deleteBookByIdController,
} from "../controllers/books.controller.js";

const booksRouter = Router();

booksRouter.get("/", asyncHandler(getBooksController));
booksRouter.post("/", asyncHandler(addBookController));
booksRouter.put("/:id", asyncHandler(updateBooksByIdController));
booksRouter.delete("/:id", asyncHandler(deleteBookByIdController));

export default booksRouter;
