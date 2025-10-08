import { Router } from "express";

import { getValidationRuluesController } from "../controllers/validation.controller.js";

const validationRouter = Router();
validationRouter.get("/", getValidationRuluesController);

export default validationRouter;
