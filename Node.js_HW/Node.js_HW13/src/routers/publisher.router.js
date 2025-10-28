import { Router } from "express";
import {
  getPublishersController,
  createPublisherController,
} from "../controllers/publisher.controller.js";

const publisherRouter = Router();

publisherRouter.get("/", getPublishersController);
publisherRouter.post("/", createPublisherController);

export default publisherRouter;
