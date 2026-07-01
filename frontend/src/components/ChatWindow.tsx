import { useEffect, useRef } from "react";

import ChatMessage from "./ChatMessage";

type Message = {
    role: "USER" | "ASSISTANT";
    content: string;
};

type ChatWindowProps = {
    messages: Message[];
};

function ChatWindow({ messages }: ChatWindowProps) {

    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

    return (

        <div className="chat-window">

            {messages.length === 0 ? (

                <div className="empty-chat">

                    <h3>No messages yet</h3>

                    <p>Start chatting with Spur AI.</p>

                </div>

            ) : (

                messages.map((message, index) => (

                    <ChatMessage
                        key={index}
                        role={message.role}
                        content={message.content}
                    />

                ))

            )}

            <div ref={bottomRef} />

        </div>

    );

}

export default ChatWindow;