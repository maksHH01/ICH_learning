import { Router } from "express";

import {
  createProductController,
  getProductByIdController,
  getAllProductsController,
  updateProductController,
  deleteProductController,
} from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.post("/", createProductController);
productsRouter.get("/", getAllProductsController);
productsRouter.get("/:id", getProductByIdController);
productsRouter.put("/:id", updateProductController);
productsRouter.delete("/:id", deleteProductController);

export default productsRouter;
