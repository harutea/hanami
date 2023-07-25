import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from 'url';

const hanamiServer = () => {
  const app = express();
  const httpServer = createServer(app);
  const io = new Server(httpServer);
  const port = 3000;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("event-a", () => {
      console.log("event-a occured");
    });

    socket.on("disconnect", () => {
      console.log("a user disconnected");
    });
  });

  console.log("hanami server starts...");

  httpServer.listen(port, () => {
    console.log("listening on *:" + port);
  });
};

hanamiServer();
