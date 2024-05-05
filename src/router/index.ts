import { Router } from "express";

import {
  FineTuningRoute
} from "./FineTuningRoute";

const router = Router()
  .use("/fine-tuning", FineTuningRoute);

export { router as ApiRouter };