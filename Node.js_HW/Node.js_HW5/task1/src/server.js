import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).type("text/plain").send("Unauthorized");
  }

  res.type("text/plain").send("Authorization header received");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
