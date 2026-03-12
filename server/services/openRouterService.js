import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const askAi = async (messages) => {
    try {
        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            throw new Error("Message array is empty or invalid.");
        }
        const response = await axios.post("https://openrouter.ai/api/v1/chat/completions", {
            model: "openai/gpt-4o-mini",
            messages: messages
        }, {
            headers: {
                Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        const content = response?.data?.choices?.[0]?.message?.content;

        if (!content || !content.trim()) {
            throw new Error("No content received from AI.");
        }
        return content.trim();
    } catch (error) {
        console.error("OpenRouter Error:", error.response?.data || error.message);
        throw new Error("OpenRouter API Error.");
    }
}