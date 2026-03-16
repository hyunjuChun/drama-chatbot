
function ChatMessage({role,text,className}){
    return (
        <div className={`chat ${className}`}>
            <span>{role}</span>
            <div className="txt">
                {text}
            </div>
        </div>
    );
}

export default ChatMessage;