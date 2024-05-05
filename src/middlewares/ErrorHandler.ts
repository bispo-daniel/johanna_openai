import { NextFunction, Request, Response } from "express";

import { IS_DEV_MODE } from "@/config"
import { HttpError } from "@/types";

const ErrorHandler = (error: HttpError, req: Request, res: Response, next: NextFunction): Response => {
  const errorStatus = error.statusCode || 500;
  const errorMessage = error.message || 'Something went wrong';

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: IS_DEV_MODE ? error.stack : {}
  });
}

export default ErrorHandler;
