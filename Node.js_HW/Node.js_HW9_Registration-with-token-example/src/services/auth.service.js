import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../db/models/User.js";

import HttpError from "../utilis/HttpError.js";

const { JWT_SECRET } = process.env;

export const findUser = async (query) => {
  return User.findOne({ where: query });
};

export const register = async (payload) => {
  const { email, password } = payload;

  const existingUser = await findUser({ email });
  if (existingUser) {
    throw HttpError(409, "Email already registered");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  return User.create({ ...payload, password: hashPassword });
};

export const login = async ({ email, password }) => {
  const user = await findUser({ email });

  if (!user) throw HttpError(401, "Email or password invalid");

  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "24h" });
  return {
    token,
    user: {
      email: user.email,
      username: user.username,
    },
  };
};
