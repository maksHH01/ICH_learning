import { DataTypes } from "sequelize";
import sequelize from "../db/sequelize.js";

const Product = sequelize.define(
  "Product",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DECIMAL(10, 2), defaultValue: 0 },
    description: { type: DataTypes.TEXT },
  },
  {
    tableName: "products",
    timestamps: false,
  }
);

export default Product;
