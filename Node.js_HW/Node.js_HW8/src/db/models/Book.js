import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const Book = sequelize.define("Book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Book.sync({ alter: true });

export default Book;
