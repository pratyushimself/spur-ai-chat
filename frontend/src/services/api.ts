const API_BASE_URL = "http://localhost:3000/api/chat";

export type Message = {
    role: "USER" | "ASSISTANT";
    content: string;
};

export type ChatResponse = {
    sessionId: string;
    reply: string;
    history: Message[];
};

export async function sendMessage(
    sessionId: string,
    message: string
): Promise<ChatResponse> {

    const response = await fetch(`${API_BASE_URL}/message`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            sessionId,
            message,
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to send message.");
    }

    return response.json();
}

export async function getHistory(
    sessionId: string
): Promise<Message[]> {

    const response = await fetch(
        `${API_BASE_URL}/${sessionId}`
    );

    if (!response.ok) {
        throw new Error("Failed to load history.");
    }

    return response.json();
}