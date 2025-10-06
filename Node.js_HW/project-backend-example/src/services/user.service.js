import { QueryTypes } from "sequelize";
import sequelize from "../db/sequelize.js";

export const getUsers = async () => {
  const data = await sequelize.query("SELECT * FROM users", {
    type: QueryTypes.SELECT,
  });
  return data;
};

export const addUser = async (user) => {
  if (!user || !user.name || !user.email) {
    throw new Error("Missing name or email in request body");
  }

  const [data] = await sequelize.query(
    "INSERT INTO users (name, email) VALUES (:name, :email) RETURNING *",
    {
      replacements: { name: user.name, email: user.email },
      type: QueryTypes.INSERT,
    },
  );

  return data;
};
