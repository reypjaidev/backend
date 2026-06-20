import { Router } from "express";
import { validate } from "../../middleware/validate.js";
import { authController } from "./auth.controller.js";
import { loginSchema, registerSchema } from "./auth.schema.js";

const router = Router();

router.post("/register", validate(registerSchema), authController.register);
router.post("/login", validate(loginSchema), authController.login);

export default router;
