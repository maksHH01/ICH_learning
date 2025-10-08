import { getProducts, addProducts } from "../services/product.service.js";

export const getProductsController = async (req, res) => {
  const result = await getProducts();
  res.json(result);
};

export const addProductsController = async (req, res, next) => {
  console.log("req.body", req.body);
  try {
    const newProduct = await addProducts(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};
