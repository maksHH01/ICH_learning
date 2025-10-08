import { DataTypes } from "sequelize";

import sequelize from "../sequelize.js";

const App = sequelize.define(
  "app",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "Apps",
    timestamps: false,
  }
);

App.sync({ alter: true });

export default App;
