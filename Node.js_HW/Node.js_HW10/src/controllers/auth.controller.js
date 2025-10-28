import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../db/models/User.js";
import validateBody from "../validation/validateBody.js";
import HttpError from "../utilis/HttpError.js";

import {
  registerSchema,
  loginSchema,
  changePasswordSchema,
} from "../schemas/auth.schemas.js";

const { JWT_SECRET } = process.env;

export const registerController = async (req, res) => {
  try {
    validateBody(registerSchema, req.body);

    const { username, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({ username, email, password: hash });

    res.status(201).json({
      message: "Register successfully",
      user: { id: user.id, email: user.email },
    });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const loginController = async (req, res) => {
  try {
    validateBody(loginSchema, req.body);

    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) throw HttpError(401, "Invalid email or password");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw HttpError(401, "Invalid email or password");

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      token,
      user: { id: user.id, email: user.email, role: user.role },
    });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const changePasswordController = async (req, res) => {
  try {
    validateBody(changePasswordSchema, req.body);

    const { newPassword } = req.body;
    const user = req.user;
    if (!user) throw HttpError(401, "User not authenticated");

    const hash = await bcrypt.hash(newPassword, 10);
    await user.update({ password: hash, mustChangePassword: false });

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
    res.json({ message: "Account deleted successfully" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const changeEmailController = async (req, res) => {
  try {
    const user = req.user;
    const { newEmail, password } = req.body;
    if (!newEmail || !password)
      throw HttpError(400, "New email and password are required");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw HttpError(401, "Incorrect password");

    const existingUser = await User.findOne({ where: { email: newEmail } });
    if (existingUser) throw HttpError(409, "Email already registered");

    await user.update({ email: newEmail });
    res.json({ message: "Email changed successfully", email: newEmail });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const updateEmailController = async (req, res) => {
  try {
    const user = req.user;
    const { newEmail } = req.body;
    if (!newEmail) throw HttpError(400, "New email is required");

    const existingUser = await User.findOne({ where: { email: newEmail } });
    if (existingUser) throw HttpError(409, "Email already registered");

    await user.update({ email: newEmail });
    res.json({ message: "Email updated successfully", email: newEmail });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const updateRoleController = async (req, res) => {
  try {
    const { userId, newRole } = req.body;
    if (!userId || !newRole)
      throw HttpError(400, "userId and newRole are required");

    const user = await User.findByPk(userId);
    if (!user) throw HttpError(404, "User not found");

    await user.update({ role: newRole });
    res.json({
      message: "User role updated successfully",
      user: { id: user.id, email: user.email, role: user.role },
    });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};
