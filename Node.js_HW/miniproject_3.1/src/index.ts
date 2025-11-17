import "dotenv/config";
import startServer from "./server.js";
import connectDatabase from "./db/connectDatabase.js";

const bootstrap = async (): Promise<void> => {
  await connectDatabase();
  startServer();
};
bootstrap();
