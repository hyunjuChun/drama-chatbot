

export async function sendChatMessage(message, characterId) {

    const response = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: message,
            character: characterId
        })
    });

    const data = await response.json();

    return data.reply;
}