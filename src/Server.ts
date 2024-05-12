import express from "express";
import cors from "cors";
import 'dotenv/config';
import 'express-async-errors';
import http from 'http';
import { Server, Socket } from 'socket.io';

import { PORT } from "./config";
import { ApiRouter } from "./router";
import ErrorHandler from "./middlewares/ErrorHandler";
import { MessageController } from "./controllers/chat";

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());
app.use("/api", ApiRouter);
app.use(ErrorHandler);

export const io = new Server(server, {
  cors: { origin: "*" }
});

io.on("connection", (socket: Socket) => {
  socket.join(socket.id);

  socket.on("message", (message: string) => MessageController(socket.id, message));

  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`The API is running on port ${PORT}`);
});
