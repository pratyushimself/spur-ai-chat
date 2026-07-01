import prisma from "../lib/prisma";
import { MessageRole } from "@prisma/client";

export async function createMessage(
  conversationId: number,
  role: MessageRole,
  content: string
) {
  return prisma.message.create({
    data: {
      conversationId,
      role,
      content,
    },
  });
}

export async function getConversationMessages(conversationId: number) {
  return prisma.message.findMany({
    where: {
      conversationId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
}