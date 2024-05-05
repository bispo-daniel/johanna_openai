import express from "express";
import cors from "cors";
import 'dotenv/config';
import 'express-async-errors';

import { PORT } from "./config";
import { ApiRouter } from "./router";
import ErrorHandler from "./middlewares/ErrorHandler";

const app = express()

app.use(express.json());
app.use(cors());
app.use("/api", ApiRouter);
app.use(ErrorHandler);

app.listen(PORT, () => {
  console.log(`The API is running on port ${PORT}`);
})
