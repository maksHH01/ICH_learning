import HttpError from "../utilis/HttpError.js";

const checkRole = (requiredRole) => (req, res, next) => {
  const user = req.user;
  if (!user) return next(HttpError(401, "User not Authenticated"));

  if (user.role !== requiredRole) {
    return res.status(403).json({ message: "Acces denied" });
  }
  next();
};

export default checkRole;
