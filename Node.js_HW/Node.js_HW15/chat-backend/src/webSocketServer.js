import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const webSocketServer = () => {
  const wsServer = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  app.use(express.static("public"));

  wsServer.on("connection", (socket) => {
    console.log(`New user has connected ${socket.id}`);

    socket.on("send_message", (data) => {
      console.log(`Message from ${data.username} : ${data.message}`);

      socket.broadcast.emit("receive_message", data);
    });

    socket.on("disconnect", () => {
      console.log(`User has disconnected: ${socket.id}`);
    });
  });

  const port = Number(process.env.PORT) || 3000;
  server.listen(port, () =>
    console.log("WebSocket server running successfully"),
  );
};

export default webSocketServer;
