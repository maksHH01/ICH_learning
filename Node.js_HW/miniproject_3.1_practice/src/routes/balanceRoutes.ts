import { Router } from "express";
import { setBalanceController } from "../controllers/balanceController.js";
import { userFullSchema, transactionSchema } from "../schemas/userSchema.js";

const router = Router();

router.post("/set", setBalanceController);

export default router;
