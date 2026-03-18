export const sendChatMessage = async (message, characterName, characterDesc) => {
    try {
        // const response = await fetch("http://localhost:3000/api/chat", {
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                message, 
                characterName,
                characterDesc
            }),
        });
        const data = await response.json();
        return data.reply;
    } catch (error) {
        console.error("API Error:", error);
        return "대화 중 오류가 발생했습니다.";
    }
};