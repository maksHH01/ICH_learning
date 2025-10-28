import { Router } from "express";
import {
  createTagController,
  getTagsController,
} from "../controllers/tag.controller.js";

const tagRouter = Router();

tagRouter.post("/", createTagController);
tagRouter.get("/", getTagsController);

export default tagRouter;
