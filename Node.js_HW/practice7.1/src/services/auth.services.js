import User from "../db/models/User.js";
import bcrypt from "bcrypt";

export const registerUser = async (payload) => {
  const { password } = payload;
  const hashedPassword = await bcrypt.hash(password, 10);

  return await User.create(payload);
};
