import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

const API_KEY = process.env.GEMINI_API_KEY?.trim();
const genAI = new GoogleGenerativeAI(API_KEY);

async function listModels() {
    try {
        console.log("🔄 사용 가능한 모델 목록 불러오는 중");
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
        const data = await response.json();

        if (data.models) {
            console.log("✅ 사용할 수 있는 모델 리스트:");
            data.models.forEach(m => {
                if (m.supportedGenerationMethods.includes('generateContent')) {
                    console.log(`- ${m.name.replace('models/', '')}`);
                }
            });
            console.log("\n👉 위 리스트에 있는 이름 중 하나를 선택해서 model: '이름'에 넣으세요.");
        } else {
            console.log("모델 목록을 가져오지 못했습니다. 응답 확인:", data);
        }
    } catch (err) {
        console.error("에러 발생:", err.message);
    }
}

listModels();