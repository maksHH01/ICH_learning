import express from "express";
import type { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.post("/data", (req: Request, res: Response) => {
  res.json({ received: req.body });
});

app.listen(3000, () => console.log("Server started"));
