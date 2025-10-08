import "dotenv/config";

import connectDatabase from "./db/connectDatabase.js";
import startServer from "./server.js";
import App from "./db/models/App.js";

const bootstrap = async () => {
  await connectDatabase();
  await App.sync();
  await App.create({ name: "Example App", size: 15.2 });
  console.log("Таблица создана и строки добавлены!");
  startServer();
};

bootstrap();
