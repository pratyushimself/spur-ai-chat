import express from "express";
import cors from "cors";

import healthRouter from "./routes/health.routes";
import chatRouter from "./routes/chat.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", healthRouter);
app.use("/api/chat", chatRouter);

import { errorHandler } from "./middleware/error.middleware";

app.use(errorHandler);

export default app;