import { Request, Response } from "express";
import { getConversationHistory } from "../services/history.service";

export async function getHistory(
    req: Request,
    res: Response
) {
    try {

        const sessionId = Array.isArray(req.params.sessionId)
    ? req.params.sessionId[0]
    : req.params.sessionId;

if (!sessionId) {
    return res.status(400).json({
        error: "sessionId is required",
    });
}

const history = await getConversationHistory(sessionId);

        return res.status(200).json(history);

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            error: "Internal server error"
        });

    }
}