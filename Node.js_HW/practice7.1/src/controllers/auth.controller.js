import { registerUser } from "../services/auth.services.js";

export const registerController = async (req, res) => {
  await registerUser(req.body);
  res.status(201).json({
    message: "Registration Successfully",
  });
};
