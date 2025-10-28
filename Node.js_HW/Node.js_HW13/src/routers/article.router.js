import { Router } from "express";
import {
  createArticleController,
  getArticlesController,
} from "../controllers/article.controller.js";

const articleRouter = Router();

articleRouter.post("/", createArticleController);
articleRouter.get("/", getArticlesController);

export default articleRouter;
