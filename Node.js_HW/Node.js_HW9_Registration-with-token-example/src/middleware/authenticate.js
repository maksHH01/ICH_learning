import jwt from "jsonwebtoken";
import HttpError from "../utilis/HttpError.js";
import { findUser } from "../services/auth.service.js";

const { JWT_SECRET } = process.env;

const authenticate = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) return next(HttpError(401, "Authorization header missing"));

  const [bearer, token] = authHeader.split(" ");
  if (bearer !== "Bearer") return next(HttpError(401, "Invalid token type"));

  try {
    const { email } = jwt.verify(token, JWT_SECRET);
    const user = await findUser({ email });
    if (!user) return next(HttpError(401, "User not found"));

    req.user = user;
    next();
  } catch (err) {
    next(HttpError(401, err.message));
  }
};

export default authenticate;
