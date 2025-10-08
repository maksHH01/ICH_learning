import express from "express";
import "dotenv/config";

import "./products.js";

const { PORT } = process.env;

const app = express();

app.get("/", (request, response) => {
  response.send("<h1>Home Page</h1>");
});

app.get("/contacts", (request, response) => {
  response.send("<h1>Contacts Page</h1>");
});

app.get("/products", (request, response) => {
  response.send(products);
});

app.post("/products", (request, response) => {
  response.status(201).json(products[0]);
});

const port = Number(PORT) || 3000;

app.listen(3000, () => console.log(`Server running on ${port} port`));
