import { Request, Response } from "express";
import { z } from "zod";

import { processChat } from "../services/chat.service";

const chatSchema = z.object({
    sessionId: z
        .string()
        .min(1, "Session ID is required")
        .max(100),

    message: z
        .string()
        .trim()
        .min(1, "Message cannot be empty")
        .max(2000, "Message is too long"),
});

export async function sendMessage(
    req: Request,
    res: Response
) {
    try {

        const validation = chatSchema.safeParse(req.body);

        if (!validation.success) {

            return res.status(400).json({
                error: validation.error.issues[0].message,
            });

        }

        const { sessionId, message } = validation.data;

        const result = await processChat(
            sessionId,
            message
        );

        return res.status(200).json(result);

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            error: "Internal server error",
        });

    }
}