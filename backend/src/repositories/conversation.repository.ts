import prisma from "../lib/prisma";

export async function findConversationBySessionId(sessionId: string) {
  return prisma.conversation.findUnique({
    where: {
      sessionId,
    },
  });
}

export async function createConversation(sessionId: string) {
  return prisma.conversation.create({
    data: {
      sessionId,
    },
  });
}