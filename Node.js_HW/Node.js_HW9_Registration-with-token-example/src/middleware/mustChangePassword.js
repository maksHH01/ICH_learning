import HttpError from "../utilis/HttpError.js";

const mustChangePassword = (req, res, next) => {
  const user = req.user;

  if (!user) throw HttpError(401, "User not authenticated");

  if (user.mustChangePassword) {
    return res.status(403).json({
      message: "You must change your password before continuing",
      redirectTo: "/change-password",
    });
  }
  next();
};

export default mustChangePassword;
