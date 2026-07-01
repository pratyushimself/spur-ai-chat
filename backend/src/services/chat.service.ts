import { MessageRole } from "@prisma/client";

import {
    findConversationBySessionId,
    createConversation,
} from "../repositories/conversation.repository";

import {
    createMessage,
    getConversationMessages,
} from "../repositories/message.repository";

import { generateAIResponse } from "./ai.service";

export async function processChat(
    sessionId: string,
    message: string
) {

    let conversation =
        await findConversationBySessionId(sessionId);

    if (!conversation) {

        conversation =
            await createConversation(sessionId);

    }

    await createMessage(
        conversation.id,
        MessageRole.USER,
        message
    );

    const history =
        await getConversationMessages(conversation.id);

    const assistantReply =
        await generateAIResponse(history);

    await createMessage(
        conversation.id,
        MessageRole.ASSISTANT,
        assistantReply
    );

    const updatedHistory =
        await getConversationMessages(conversation.id);

    return {

        sessionId,

        reply: assistantReply,

        history: updatedHistory.map(message => ({
            role: message.role,
            content: message.content,
        })),

    };

}