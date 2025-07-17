import { GoogleGenAI } from "@google/genai";
import { useContext, useState } from "react";
import { ChatContext } from "../context/context";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyBzN15cAZqE7wGXCL2ZlAGGVYssP4zHNWs",
});

export function useChat() {
  const { history, setHistory, setIsLoading } = useContext(ChatContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function callApi(prompt) {
    try {
      setLoading(true);
      setIsLoading(true);
      const chat = ai.chats.create({
        model: "gemini-2.5-flash",
        history: history,
        config: {
          systemInstruction:
            "You are DeepDreamer AI chat bot created by Mehrab Hossain.",
        },
      });

      const response = await chat.sendMessage({
        message: prompt,
      });

      setData(response.text);
      setHistory((prev) => [
        ...prev,
        { role: "model", parts: [{ text: response.text }] },
      ]);
    } catch (error) {
      setData("Connection disrupted...");
      setHistory((prev) => [
        ...prev,
        { role: "model", parts: [{ text: "Connection disrupted..." }] },
      ]);
    } finally {
      setLoading(false);
      setIsLoading(false);
    }
  }
  return { data, loading, error, callApi };
}
