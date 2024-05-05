import { Router } from "express";

import {
  FineTuningController
} from "@/controllers";

const router = Router();
router.post("/", FineTuningController)

export { router as FineTuningRoute }