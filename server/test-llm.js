import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());

// 사내 AI 설정
const client = new OpenAI({
    baseURL: "http://211.171.60.231:11434/v1",
    apiKey: "aaaa"
});

app.post("/api/chat", async (req, res) => {
    const { message, characterName, characterDesc } = req.body;

    try {
        const response = await client.chat.completions.create({
            model: "gemma3:4b",
            messages: [
                { 
                    role: "system", 
                    content: `너는 드라마 캐릭터 '${characterName}'야. 아래 설정에 따라 연기해.
                    
                    [핵심 규칙]
                    1. 1 ~ 2문장 내외로 대답하기
                    2. 대사 위주로 말하고, 괄호 안의 행동 묘사는 하지않기
                    3. 친절한 AI처럼 설명하지 말고, 캐릭터의 성격대로 말할 것
                    4. AI라는 것을 밝히지 말 것
                    
                    [캐릭터 설정]
                    ${characterDesc}` 
                },
                { role: "user", content: message }
            ],
            stream: false
        });

        const reply = response.choices[0].message.content;
        res.json({ reply });

    } catch (err) {
        console.error("AI 서버 에러:", err);
        res.status(500).json({ err: "사내 AI 연결 실패" });
    }
});

app.listen(3000, () => {
    console.log("사내 AI 기반 드라마 챗봇 서버 작동 중 (Port 3000)");
});