import OpenAI from "openai";
import { MessageRole } from "@prisma/client";

import SYSTEM_PROMPT from "../prompts/systemPrompt";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

type ChatMessage = {
    role: MessageRole;
    content: string;
};

export async function generateAIResponse(
    history: ChatMessage[]
): Promise<string> {

    // If no API key is configured, return a friendly message.
    if (!process.env.OPENAI_API_KEY) {
        return "OpenAI API key is not configured. Please add your API key to use the AI assistant.";
    }

    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
        {
            role: "system",
            content: SYSTEM_PROMPT,
        },

        ...history.map((message) => ({
            role:
                message.role === MessageRole.USER
                    ? ("user" as const)
                    : ("assistant" as const),
            content: message.content,
        })),
    ];

    try {

        const response = await client.chat.completions.create({

            // Change this model if needed in the future.
            model: "gpt-4.1-mini",

            messages,

            temperature: 0.5,

            max_tokens: 250,

        });

        return (
            response.choices[0].message.content?.trim() ??
            "Sorry, I couldn't generate a response."
        );

    } catch (error: any) {

        console.error("========== OPENAI ERROR ==========");
        console.error(error);

        if (error?.status) {
            console.error("Status:", error.status);
        }

        if (error?.message) {
            console.error("Message:", error.message);
        }

        if (error?.error) {
            console.error("Error Object:", error.error);
        }

        console.error("=================================");

        // Friendly messages for common API failures
        if (error?.status === 401) {
            return "Invalid OpenAI API key. Please check your configuration.";
        }

        if (error?.status === 429) {
            return "AI service is temporarily unavailable because the API quota has been reached. Please try again later.";
        }

        return "Sorry, I'm unable to answer right now. Please try again later.";
    }
}