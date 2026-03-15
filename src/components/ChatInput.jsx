import { useState } from "react";

function ChatInput({ onSend }) {

    const [text, setText] = useState("");

    const handleSend = () => {
        if (!text) return;
        onSend(text);
        setText("");
    };

    return (
        <div>

            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="메시지 입력"
            />
            <button onClick={handleSend}>전송</button>

        </div>
    );
}

export default ChatInput;