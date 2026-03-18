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
    
    console.log(`[Request] Character: ${characterName}, Message: ${message}`);
    console.log("API Key Check:", API_KEY ? API_KEY.substring(0, 5) + "****" : "No Key");

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `너는 드라마 캐릭터 '${characterName}'야. 아래 설정에 따라 연기해.

        [캐릭터 설정]
        ${characterDesc}

        [핵심 규칙]
        1. 반드시 1~2문장 내외로 아주 짧게 대답하기
        2. 대사 위주로 말하고, 괄호 안의 행동 묘사는 하지 않기
        3. 친절한 AI처럼 설명하지 말고, 반드시 캐릭터의 말투로만 대답할 것

        [사용자의 말]
        ${message}`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const reply = response.text();

        console.log("AI Response Success:", reply);
        res.json({ reply });

    } catch (err) {
        console.error("Gemini API Error Details:");
        console.error(err);
        
        res.status(500).json({ 
            err: "Gemini AI 연결 실패",
            detail: err.message 
        });
    }
});

app.get("/*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});