import { NextFunction, Response } from "express";
import { TypedRequest } from "../../types/express.js";
import { usersService } from "./users.service.js";
import { UpdateUserDto } from "./users.types.js";

export const usersController = {
  // GET /api/users/me
  async getMe(
    req: TypedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const user = await usersService.getById(req.user!._id.toString());
      res.json(user);
    } catch (err) {
      next(err);
    }
  },

  // PUT /api/users/me
  async updateMe(
    req: TypedRequest<{}, UpdateUserDto>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const user = await usersService.update(req.user!._id.toString(), req.body);
      res.json(user);
    } catch (err) {
      next(err);
    }
  },

  // DELETE /api/users/me
  async deleteMe(
    req: TypedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      await usersService.delete(req.user!._id.toString());
      res.json({ message: "Account deleted" });
    } catch (err) {
      next(err);
    }
  },
};
