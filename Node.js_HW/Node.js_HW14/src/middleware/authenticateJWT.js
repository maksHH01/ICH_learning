import jwt from "jsonwebtoken";
import User from "../db/models/User.js";
import HttpError from "../utilis/HttpError.js";

const { JWT_SECRET } = process.env;

const authenticate = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader)
    return res.status(401).json({ message: "Authorization header missing" });

  const [bearer, token] = authHeader.split(" ");
  if (bearer !== "Bearer")
    return res.status(401).json({ message: "Invalid token type" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    if (!user) return res.status(401).json({ message: "User not found" });

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default authenticate;
