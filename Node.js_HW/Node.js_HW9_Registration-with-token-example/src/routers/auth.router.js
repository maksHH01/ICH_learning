import { Router } from "express";
import {
  changePasswordController,
  registerController,
  loginController,
  deleteAccountController,
  changeEmailController,
} from "../controllers/auth.controller.js";
import authenticate from "../middleware/authenticate.js";
import mustChangePassword from "../middleware/mustChangePassword.js";
import checkRole from "../middleware/checkRole.js";

const authRouter = Router();

authRouter.post("/register", registerController);

authRouter.post("/login", loginController);

authRouter.get("/admin", authenticate, checkRole("admin"), (req, res) => {
  res.json({ message: "Welcome,admin!" });
});

authRouter.post("/change-password", authenticate, changePasswordController);

authRouter.post("/change-email", authenticate, changeEmailController);

authRouter.get("/protected", authenticate, mustChangePassword, (req, res) => {
  res.json({ message: "You have access" });
});

authRouter.post("/delete-account", authenticate, deleteAccountController);

export default authRouter;
