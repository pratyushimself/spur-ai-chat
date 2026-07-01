import { z } from "zod";

export const chatRequestSchema = z.object({
  sessionId: z
    .string()
    .min(1, "Session ID is required"),

  message: z
    .string()
    .min(1, "Message cannot be empty")
    .max(4000, "Message is too long"),
});

export type ChatRequest = z.infer<typeof chatRequestSchema>;