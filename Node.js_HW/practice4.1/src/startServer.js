import express from "express";
import fs from "node:fs/promises";
import path from "node:path";
import { DateTime } from "luxon";
import { EventEmitter } from "node:events";
import { url } from "node:inspector";

const { PORT, MESSAGE } = process.env;

const emitter = new EventEmitter();

const requestLogPath = path.resolve("requests.log");

emitter.on("requestReceived", ({ method, url }) => {
  console.log(`Запрос получен ${method} ${url}`);
});

function startServer() {
  const app = express();

  app.use(async (req, res) => {
    emitter.emit("requestReceived", { method: req.method, url: req.url });
    const now = DateTime.now();
    const date = now.toFormat("yyyy-MM-dd HH:mm:ss");

    await fs.appendFile(requestLogPath, `${req.method} ${req.url} ${date}\n`);

    res.set({
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=3600",
    });
    res.status(200).send(`<h1>${MESSAGE} ${date}</h1>`);
  });

  const port = Number(PORT) || 3000;
  app.listen(port, () => console.log(`Server running on ${port} port`));
}

export default startServer;
