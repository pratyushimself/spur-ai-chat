import {
    findConversationBySessionId,
} from "../repositories/conversation.repository";

import {
    getConversationMessages,
} from "../repositories/message.repository";

export async function getConversationHistory(
    sessionId: string
) {

    const conversation =
        await findConversationBySessionId(sessionId);

    if (!conversation) {
        return [];
    }

    const messages =
        await getConversationMessages(conversation.id);

    return messages.map((message) => ({
        role: message.role,
        content: message.content,
    }));

}