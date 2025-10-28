import { Router } from "express";

import {
  addContactController,
  getContactsController,
  getContactByIdController,
  updateContactByIdController,
  deleteContactByIdController,
} from "../controllers/contacts.controller.js";

const contactsRouter = Router();

contactsRouter.get("/", getContactsController);

contactsRouter.get("/:id", getContactByIdController);

contactsRouter.post("/", addContactController);

contactsRouter.put("/:id", updateContactByIdController);

contactsRouter.delete("/:id", deleteContactByIdController);

export default contactsRouter;
