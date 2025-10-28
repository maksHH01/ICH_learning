import HttpError from "../utilis/HttpError.js";

const authorizeRole = (role) => (req, res, next) => {
  if (!req.user) return next(HttpError(401, "User not authenticated"));
  if (req.user.role !== role) return next(HttpError(403, "Access denied"));
  next();
};

export default authorizeRole;
