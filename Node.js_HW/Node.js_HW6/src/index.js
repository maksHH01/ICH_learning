import "dotenv/config";

import startServer from "./server.js";
import connectDatabase from "./db/connectingDatabase.js";

const bootstrap = async () => {
  try {
    await connectDatabase();
    startServer();
  } catch (error) {
    console.error("Failed to start app due to DB connection error");
    process.exit(1);
  }
};

bootstrap();
