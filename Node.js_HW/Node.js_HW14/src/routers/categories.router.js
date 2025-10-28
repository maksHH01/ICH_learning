import { Router } from "express";
import {
  addCategory,
  getCategories,
} from "../controllers/category.controller.js";

const router = Router();

router.post("/", addCategory);
router.get("/", getCategories);

export default router;
