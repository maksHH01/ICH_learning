import Product from "../db/models/Product.js";

export const createProduct = async (name, price, categoryId) => {
  const product = new Product({ name, price, category: categoryId });
  return product.save();
};

export const getAllProducts = async () => {
  return Product.find().populate("category");
};
