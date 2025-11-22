import {
  getBooks,
  getBookById,
  addBook,
  updateBookById,
  deleteBookById,
} from "../services/books.services.js";

import { asyncHandler } from "../utils/asyncHandler.js";

export const getBooksController = asyncHandler(async (req, res) => {
  const result = await getBooks();
  res.json(result);
});

export const getBookByIdController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await getBookById(id);

  if (!result) {
    const error = new Error("Книга не найдена");
    error.status = 404;
    throw error;
  }

  res.json(result);
});

export const addBookController = asyncHandler(async (req, res) => {
  const result = await addBook(req.body);
  res.status(201).json(result);
});

export const updateBooksByIdController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await updateBookById(id, req.body);

  if (!result) {
    const error = new Error("Книга не найдена");
    error.status = 404;
    throw error;
  }

  res.json({ message: "Книга успешно обновлена", book: result });
});

export const deleteBookByIdController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await deleteBookById(id);

  if (!result) {
    const error = new Error("Книга не найдена");
    error.status = 404;
    throw error;
  }

  res.json({ message: "Книга удалена успешно" });
});
