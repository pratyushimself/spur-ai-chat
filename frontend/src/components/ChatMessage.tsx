import "./ChatMessage.css";

type Props = {
    role: "USER" | "ASSISTANT";
    content: string;
};

function ChatMessage({ role, content }: Props) {

    const isUser = role === "USER";

    return (

        <div className={`message ${isUser ? "user" : "assistant"}`}>

            {!isUser && (
                <div className="avatar assistant-avatar">
                    🤖
                </div>
            )}

            <div className="message-bubble">
                {content}
            </div>

            {isUser && (
                <div className="avatar user-avatar">
                    👤
                </div>
            )}

        </div>

    );

}

export default ChatMessage;