import React, { useState } from "react";
import { TextContext } from "../context/context";
import { aiUseCasesDataFillup } from "../data";

const data = aiUseCasesDataFillup;
export const TextProvider = ({ children }) => {
  const [{ inputTitle, placeholder, btnText, instruction }, setData] = useState(
    {
      inputTitle: "Story Generator",
      placeholder: "Enter your story idea or theme...",
      btnText: "Generate Story",
      instruction:
        "You are a creative and intelligent story writer. You generate an original, engaging, and imaginative story based on the user's prompt. The story should be written in a friendly, human-readable style with natural flow and coherence. Avoid unnecessary repetition.",
    },
  );

  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState(null);
  const [userData, setUserData] = useState(null);

  function sendData(prop) {
    let uiData;
    data.forEach((el) => {
      if (el.inputTitle === prop) {
        uiData = el;
      }
    });
    return uiData;
  }
  return (
    <>
      <TextContext.Provider
        value={{
          inputTitle,
          placeholder,
          btnText,
          instruction,
          isLoading,
          setIsLoading,
          aiResponse,
          setAiResponse,
          setData,
          sendData,
        }}
      >
        {children}
      </TextContext.Provider>
    </>
  );
};
