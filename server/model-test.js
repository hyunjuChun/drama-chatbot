import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "AIzaSyBC0-n4uYkXOhox1lJWWZwUmHTP8rZcQEo"; 
const genAI = new GoogleGenerativeAI(API_KEY);

// [진단용] 서버 실행 시 사용 가능한 모델 목록을 터미널에 출력
async function checkModels() {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
        const data = await response.json();
        console.log("=== 사용 가능한 모델 목록 ===");
        if (data.models) {
            data.models.forEach(m => console.log("- " + m.name));
        } else {
            console.log("모델 목록을 가져올 수 없습니다. API 키를 확인하세요:", data);
        }
        console.log("============================");
    } catch (e) {
        console.error("진단 중 오류 발생:", e);
    }
}
checkModels();

app.post("/api/chat", async (req, res) => {
    const { message, character } = req.body;
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(`${character}처럼 말해줘: ${message}`);
        res.json({ reply: result.response.text() });
    } catch (err) {
        console.error("에러 발생:", err.message);
        res.status(500).json({ err: err.message });
    }
});

app.listen(3000, () => console.log("Server running on 3000"));