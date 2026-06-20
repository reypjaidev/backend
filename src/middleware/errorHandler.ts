import type { NextFunction, Request, Response } from "express";
import config from "../config/index.ts";
import { AppError } from "../errors/index.ts";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  // known operational errors
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      error: err.message,
    });
    return;
  }

  // unknown/programmer errors
  console.error(err.stack);
  res.status(500).json({
    error: "Internal server error",
    ...(config.isDev && { stack: err.stack }), // show stack in dev only
  });
}
