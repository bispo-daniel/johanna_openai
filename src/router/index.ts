import { Router } from "express";

const router = Router()
  .use("/", (_req, res) => res.status(200).end());

export { router as ApiRouter };