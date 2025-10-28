import Product from "../db/models/Products.js";

export const createProduct = (data) => Product.create(data);

export const getAllProducts = () => Product.find();

export const getProductById = (id) => Product.findById(id);

export const updateProduct = (id, data) =>
  Product.findByIdAndUpdate(id, data, { new: true });

export const deleteProduct = (id) => Product.findByIdAndDelete(id);
