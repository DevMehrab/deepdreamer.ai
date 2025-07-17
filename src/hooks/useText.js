import { GoogleGenAI } from "@google/genai";
import { useContext, useState } from "react";
import { TextContext } from "../context/context";

const ai = new GoogleGenAI({
  apiKey: 'AIzaSyBzN15cAZqE7wGXCL2ZlAGGVYssP4zHNWs',
});

export function useText() {
  const { setAiResponse, instruction, setIsLoading } = useContext(TextContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function callApi(prompt) {
    try {
      setLoading(true);
      setIsLoading(true);
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          systemInstruction: instruction,
        },
      });
      console.log(response.text);

      setData(response.text);
      setAiResponse(response.text);
    } catch (error) {
      setData("Connection disrupted...");
      setAiResponse("failed to load");
    } finally {
      setLoading(false);
      setIsLoading(false);
    }
  }
  return { data, loading, error, callApi };
}
