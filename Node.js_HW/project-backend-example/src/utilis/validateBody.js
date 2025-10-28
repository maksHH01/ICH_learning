import HttpError from "./HttpError.js";

const validateBody = (schema, body) => {
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    const firstError = parsed.error?.errors?.[0];
    const message = firstError?.message || "Invalid input";
    throw HttpError(400, message);
  }

  return true;
};

export default validateBody;
