const notFoundHandler = (req, res) => {
  res.status(404).json({
    error: "Not Found",
    message: `${req.method} ${req.url} not found`,
  });
};

export default notFoundHandler;
