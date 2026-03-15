function ChatMessage({ role, text }) {
    return (
        <div>
            <strong>{role}:</strong> {text}
        </div>
    );
}

export default ChatMessage;