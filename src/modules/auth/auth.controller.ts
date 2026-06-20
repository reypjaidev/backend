import { NextFunction, Response } from "express";
import { TypedRequest } from "../../types/express.js";
import { sendSuccess } from "../../utils/response.ts";
import { authService } from "./auth.service.js";
import { LoginDto, RegisterDto } from "./auth.types.js";

export const authController = {
  // POST /api/auth/register
  async register(
    req: TypedRequest<{}, RegisterDto>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const result = await authService.register(req.body);
      sendSuccess(res, result);
    } catch (err) {
      next(err);
    }
  },

  // POST /api/auth/login
  async login(
    req: TypedRequest<{}, LoginDto>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const result = await authService.login(req.body);
      sendSuccess(res, result);
    } catch (err) {
      next(err);
    }
  },
};
