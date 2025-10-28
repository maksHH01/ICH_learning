import {
  createCategory,
  getAllCategories,
} from "../services/category.service.js";

export const addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Поле 'name' обязательно" });
    }

    const category = await createCategory(name);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
