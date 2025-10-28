import Category from "../db/models/Category.js";

export const createCategory = async (name) => {
  const category = new Category({ name });
  return category.save();
};

export const getAllCategories = async () => {
  return Category.find();
};
