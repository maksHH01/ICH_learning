import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/data", (req, res) => {
  res.json({ received: req.body });
});

app.listen(3000, () => console.log("Server started"));
