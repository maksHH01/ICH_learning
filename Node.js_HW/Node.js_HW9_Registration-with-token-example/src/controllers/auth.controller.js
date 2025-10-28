import bcrypt from "bcrypt";

import { register, login, findUser } from "../services/auth.service.js";

import validateBody from "../validation/validateBody.js";

import HttpError from "../utilis/HttpError.js";

import {
  registerSchema,
  loginSchema,
  changePasswordSchema,
} from "../schemas/auth.schemas.js";

export const registerController = async (req, res) => {
  try {
    validateBody(registerSchema, req.body);
    await register(req.body);

    res.status(201).json({
      message: "Register successfully",
    });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const loginController = async (req, res) => {
  validateBody(loginSchema, req.body);
  const result = await login(req.body);

  res.json(result);
};

export const changePasswordController = async (req, res) => {
  try {
    validateBody(changePasswordSchema, req.body);

    const { newPassword } = req.body;
    const user = req.user;

    if (!user) throw HttpError(401, "User not authenticated");

    const hash = await bcrypt.hash(newPassword, 10);

    await user.update({
      password: hash,
      mustChangePassword: false,
    });

    res.json({ message: "Password changed successfully" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const deleteAccountController = async (req, res) => {
  try {
    const user = req.user;
    const { password } = req.body;

    if (!password) throw HttpError(400, "Password is required");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw HttpError(401, "Incorrect password");

    await user.destroy();

    res.status(200).json({ message: "Account deleten successfully" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const changeEmailController = async (req, res) => {
  try {
    const user = req.user;
    const { newEmail, password } = req.body;
    if (!newEmail || !password) {
      throw HttpError(400, "New email and password are required");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw HttpError(401, "Incorrect password");

    const existingUser = await findUser({ email: newEmail });
    if (existingUser) throw HttpError(409, "Email already registrered");

    await user.update({ email: newEmail });

    res.status(200).json({ message: "Email changed successfully" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};
