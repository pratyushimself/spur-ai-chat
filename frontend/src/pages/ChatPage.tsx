import { useEffect, useState } from "react";

import "./ChatPage.css";

import ChatInput from "../components/ChatInput";
import ChatWindow from "../components/ChatWindow";

import {
    getHistory,
    sendMessage,
} from "../services/api";

import type { Message } from "../services/api";

function ChatPage() {

    const [sessionId, setSessionId] = useState(
        localStorage.getItem("sessionId") ||
        crypto.randomUUID()
    );

    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        localStorage.setItem("sessionId", sessionId);

        loadConversation();

    }, [sessionId]);

    async function loadConversation() {

        try {

            const history = await getHistory(sessionId);

            setMessages(history);

        } catch (error) {

            console.error(error);

        }

    }

    async function handleSend(message: string) {

        const userMessage: Message = {
            role: "USER",
            content: message,
        };

        setMessages((previous) => [
            ...previous,
            userMessage,
        ]);

        setLoading(true);

        try {

            const response = await sendMessage(
                sessionId,
                message
            );

            setMessages(response.history);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }

    function newChat() {

        const id = crypto.randomUUID();

        localStorage.setItem("sessionId", id);

        setSessionId(id);

        setMessages([]);

    }

    return (

        <div className="chat-page">

            <header className="chat-header">

                <div>

                    <h1>🤖 Spur AI</h1>

                    <p>AI Chat Assistant</p>

                </div>

                <button
                    className="new-chat-btn"
                    onClick={newChat}
                >
                    + New Chat
                </button>

            </header>

            <main className="chat-container">

                <ChatWindow messages={messages} />

                {loading && (

                    <div className="typing">

                        <span></span>
                        <span></span>
                        <span></span>

                    </div>

                )}

                <ChatInput
    onSend={handleSend}
    disabled={loading}
/>

            </main>

        </div>

    );

}

export default ChatPage;