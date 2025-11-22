export const errorHandler = (err, req, res, next) => {
  console.error("Ошибка:", err);

  const status = err.status || 500;

  res.status(status).json({
    message: err.message || "Internal server error",
  });
};
