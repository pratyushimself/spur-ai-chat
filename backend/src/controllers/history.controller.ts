import { Request, Response } from "express";
import { getConversationHistory } from "../services/history.service";

export async function getHistory(
    req: Request,
    res: Response
) {
    try {

        const { sessionId } = req.params;

        const history = await getConversationHistory(sessionId);

        return res.status(200).json(history);

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            error: "Internal server error"
        });

    }
}