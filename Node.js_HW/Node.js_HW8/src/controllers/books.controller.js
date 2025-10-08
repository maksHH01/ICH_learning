import {
  getBooks,
  getBookById,
  addBook,
  updateBookById,
  deleteBookById,
} from "../services/books.services.js";

export const getBooksController = async (req, res) => {
  const result = await getBooks();
  res.json(result);
};

export const getBookByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getBookById(id);

    if (!result) {
      return res.status(404).json({ message: "Книга не найдена" });
    }

    res.json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Ошибка при получении книги", error: error.message });
  }
};

export const addBookController = async (req, res) => {
  const result = await addBook(req.body);
  res.status(201).json(result);
};

export const updateBooksByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updateBookById(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Книга не найдена" });
    }

    res.json({ message: "Книга успешно обновлена", book: result });
  } catch (err) {
    console.error("Ошибка при обновлении книги:", err);
    res.status(500).json({ message: "Ошибка сервера", error: err.message });
  }
};

export const deleteBookByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteBookById(id);

    if (!result) {
      return res.status(404).json({ message: "Книга не найдена" });
    }

    res.json({ message: "Книга удалена успешно" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Ошибка при удалении книги", error: error.message });
  }
};
