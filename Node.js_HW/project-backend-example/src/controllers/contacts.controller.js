import HttpError from "../utilis/HttpError.js";

import {
  addContact,
  getContacts,
  getContactById,
  updateContactById,
  deleteContactById,
} from "../services/contacts.service.js";

import contactSchema from "../schemas/contacts.schemas.js";

export const getContactController = async (req, res) => {
  const result = await getContacts();
  res.json(result);
};

export const getContactByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await getContactById(id);
  if (!result) throw HttpError(404, `Contact with id=${id} not found`);
  // {
  // const error = new Error(`Contact with id=${id} not found`);
  // error.status = 400;
  // throw error;
  // return res.status(404).json({
  //     message: `Contact with id=${id} not found`,
  //   });
  //   }
  res.json(result);
};

export const addContactController = async (req, res) => {
  const { error } = contactSchema.parse(req.body);
  if (error) {
    const { message } = JSON.parse(error.message)[0];
    throw HttpError(400, message);
  }

  const result = await addContact(req.body);
  res.status(201).json(result);
};

export const updateContactByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await updateContactById(id, req.body);
  if (!result) throw HttpError(404, `Contact with id=${id} not found`);

  res.json(result);
};

export const deleteContactByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await deleteContactById(id);
  if (!result) throw HttpError(404, `Contact with id=${id} not found`);

  res.json(result);
};
