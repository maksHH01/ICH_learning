import { Router } from "express";

import { getMagazinesController } from "../controllers/magazine.controller.js";

const magazineRouter = Router();

magazineRouter.get("/", getMagazinesController);

export default magazineRouter;
