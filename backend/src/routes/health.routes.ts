import { Router, Request, Response } from "express";

const router = Router();

/**
 * Health Check Route
 *
 * Used to verify that the backend server is running.
 */
router.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

export default router;