// src/middleware/errorHandler.ts
import { NextFunction, Request, Response } from "express";
import config from "../config/index.js";
import { AppError } from "../errors/index.js";
import { sendError } from "../utils/response.js";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (err instanceof AppError) {
    sendError(res, err.message, err.statusCode);
    return;
  }

  console.error(err.stack);
  sendError(res, config.isDev ? err.message : "Internal server error", 500);
}
