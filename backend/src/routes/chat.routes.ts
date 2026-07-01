import { Router } from "express";

import { sendMessage } from "../controllers/chat.controller";
import { getHistory } from "../controllers/history.controller";

const router = Router();

router.post("/message", sendMessage);

router.get("/:sessionId", getHistory);

export default router;