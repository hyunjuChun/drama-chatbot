import { useParams } from "react-router-dom";
import { useState } from "react";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";

function Chat() {

    const { id } = useParams();

    const [messages, setMessages] = useState([]);

    const sendMessage = (text) => {
        setMessages([...messages, { role: "user", text }]);
    };

    return (
        <div>
            <h1>{id} 와 대화</h1>

            <div>
                {messages.map((msg, i) => (
                <ChatMessage key={i} role={msg.role} text={msg.text} />
                ))}
            </div>

            <ChatInput onSend={sendMessage} />
        </div>
    );
}

export default Chat;