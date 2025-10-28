import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../db/models/User.js";
import HttpError from "../utilis/HttpError.js";

const { JWT_SECRET } = process.env;

export const findUser = async (query) => {
  return User.findOne({ where: query });
};

export const register = async ({ username, email, password }) => {
  const existingUser = await findUser({ email });
  if (existingUser) throw HttpError(409, "Email already registered");

  const hash = await bcrypt.hash(password, 10);
  const newUser = await User.create({ username, email, password: hash });

  console.log(newUser);

  return newUser;
};

export const login = async ({ email, password }) => {
  const user = await findUser({ email });
  if (!user) throw HttpError(401, "Email or password invalid");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw HttpError(401, "Email or password invalid");

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "24h",
  });

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      username: user.username,
    },
  };
};
