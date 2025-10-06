import { getUsers, addUser } from "../services/user.service.js";

export const getUsersController = async (req, res) => {
  const result = await getUsers();
  res.json(result);
};

export const addUserController = async (req, res, next) => {
  console.log("req.body:", req.body);
  try {
    const newUser = await addUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};
