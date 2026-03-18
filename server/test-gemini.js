import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.trim() : "";
const genAI = new GoogleGenerativeAI(API_KEY);

const distPath = path.join(__dirname, "../dist");
app.use(express.static(distPath));

app.post("/api/chat", async (req, res) => {
    const { message, characterName, characterDesc } = req.body;

    try {
        const model = genAI.getGenerativeModel({ 
            model: "gemini-1.5-flash",
            systemInstruction: `너는 드라마 캐릭터 '${characterName}'야. 아래 설정에 따라 연기해.
                    
            [핵심 규칙]
            1. 반드시 1~2문장 내외로 아주 짧게 대답하기
            2. 대사 위주로 말하고, 괄호 안의 행동 묘사는 하지않기
            3. 친절한 AI처럼 설명하지 말고, 캐릭터의 성격대로 말할 것
            
            [캐릭터 설정]
            ${characterDesc}`
        });

        const result = await model.generateContent(message);
        const response = await result.response;
        const reply = response.text();

        res.json({ reply });

    } catch (err) {
        res.status(500).json({ err: "Gemini AI 연결 실패" });
    }
});

app.get("/*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});