import HttpError from "../utilis/HttpError.js";

const validateBody = (schema, body) => {
  const { error } = schema.safeParse(body);
  if (error) {
    const message = error.issues?.[0]?.message || "Invalid request body";
    throw HttpError(400, message);
  }
  return true;
};

export default validateBody;
