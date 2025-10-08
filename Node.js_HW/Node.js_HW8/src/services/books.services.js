import Book from "../db/models/Book.js";

export const getBooks = () => Book.findAll();

export const getBookById = (id) => Book.findByPk(id);

export const addBook = (payload) => Book.create(payload);

export const updateBookById = async (id, payload) => {
  const book = await getBookById(id);
  if (!book) return null;

  await book.update(payload);

  return book;
};

export const deleteBookById = async (id) => {
  const book = await getBookById(id);
  if (!book) return null;

  await book.destroy();
  return book;
};
