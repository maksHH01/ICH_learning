import { DataTypes } from "sequelize";

import sequelize from "../sequelize.js";

const Category = sequelize.define("category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "This category already created",
    },
  },
});

// Category.sync({ force: true });

export default Category;
