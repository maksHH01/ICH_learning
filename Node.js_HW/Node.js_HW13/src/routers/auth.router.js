import { Router } from "express";
import {
  registerController,
  loginController,
  changePasswordController,
  deleteAccountController,
  changeEmailController,
  updateEmailController,
  updateRoleController,
} from "../controllers/auth.controller.js";
import authenticateJWT from "../middleware/authenticateJWT.js";
import authorizeRole from "../middleware/authorizeRole.js";

const authRouter = Router();

authRouter.post("/register", registerController);
authRouter.post("/login", loginController);
authRouter.post("/change-password", authenticateJWT, changePasswordController);
authRouter.post("/change-email", authenticateJWT, changeEmailController);
authRouter.put("/update-email", authenticateJWT, updateEmailController);
authRouter.post("/delete-account", authenticateJWT, deleteAccountController);

authRouter.put(
  "/update-role",
  authenticateJWT,
  authorizeRole("admin"),
  updateRoleController
);

export default authRouter;
