import cors from "cors";
import type { Application, Request, Response } from "express";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { errorHandler } from "./errors/index.ts";

const app: Application = express();

// security
app.use(helmet());
app.use(cors());

// parsing
app.use(express.json());

// logging
app.use(morgan("dev"));

// routes

// 404
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Route not found" });
});

// error handler — last
app.use(errorHandler);

export default app;
