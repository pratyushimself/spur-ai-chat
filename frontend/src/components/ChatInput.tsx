import { useEffect, useRef, useState } from "react";

type ChatInputProps = {
    onSend: (message: string) => void;
    disabled: boolean;
};

function ChatInput({
    onSend,
    disabled,
}: ChatInputProps) {

    const [message, setMessage] = useState("");

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    function handleSubmit() {

        const text = message.trim();

        if (!text || disabled) return;

        onSend(text);

        setMessage("");

        inputRef.current?.focus();

    }

    return (

        <div className="chat-input">

            <input
                ref={inputRef}
                type="text"
                placeholder="Ask Spur AI anything..."
                value={message}
                disabled={disabled}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSubmit();
                    }
                }}
            />

            <button
                onClick={handleSubmit}
                disabled={disabled || !message.trim()}
            >
                {disabled ? "..." : "Send"}
            </button>

        </div>

    );

}

export default ChatInput;