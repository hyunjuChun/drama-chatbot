import { useParams, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import { chts } from "../data/Characters";
import { sendChatMessage } from "../api/ChatApi";

function Chat() {

    const {id} = useParams();
    const navigate = useNavigate();
    const cht = chts.find((c) => c.id === id);

    const [messages, setMessages] = useState([]);
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async (text) => {
        setMessages((prev) => [...prev, { role: "사용자", text, className: "user" }]);
        const reply = await sendChatMessage(text, cht.name, cht.description);

        setMessages((prev) => [
            ...prev,
            { role: cht.name, text: reply, className: "bot" }
        ]);
    };

    const goBack = () => {
        navigate("/");
    };

    return (

        <div className="wrap">
            <button className="btn-prev" onClick={goBack}>뒤로가기</button>

            <div className="content chat-content">

                <p className="title">{cht?.name}</p>
                <div className="chat-wrap">
                    {messages.map((msg, i) => (
                        <ChatMessage
                            key={i}
                            role={msg.role}
                            text={msg.text}
                            name={cht?.name}
                            className={msg.className}
                        />
                    ))}

                    <div ref={chatEndRef} aria-hidden></div>
                </div>

                <ChatInput onSend={sendMessage} />

            </div>
        </div>
    );
}

export default Chat;