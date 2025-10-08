import { QueryTypes } from "sequelize";
import sequelize from "../db/sequelize.js";
import Product from "../models/product.js";

export const getProducts = async () => {
  const data = await sequelize.query("SELECT * FROM products", {
    type: QueryTypes.SELECT,
  });
  return data;
};

export const addProducts = async (product) => {
  if (!product || !product.name) {
    throw new Error("Некорректные данные для добавления продукта");
  }

  const [data] = await sequelize.query(
    "INSERT INTO products (name, price, description) VALUES (:name, :price, :description) RETURNING *",
    {
      replacements: {
        name: product.name,
        price: product.price || 0,
        description: product.description || "",
      },
      type: QueryTypes.INSERT,
    }
  );
  return data;
};
