import React, { useContext } from "react";
import { TextContext } from "../../context/context";
import { ImSpinner9 } from "react-icons/im";
import ReactMarkdown from "react-markdown";

export const Output = () => {
  const { aiResponse, isLoading } = useContext(TextContext);

  function handleCopy(e) {
    if (aiResponse) {
      navigator.clipboard.writeText(aiResponse);
      e.target.innerHTML = "Copied ✔";
      setTimeout(() => {
        e.target.innerHTML = "Copy";
      }, 3000);
    }
  }
  return (
    <>
      <div className="col-span-2">
        <div className="mb-4 flex justify-between">
          <h1 className="text-gray-500">Your output:</h1>
          <button className="hover:text-fuchsia-700" onClick={handleCopy}>
            Copy{" "}
          </button>
        </div>
        <div className="border min-h-96 rounded mb-4 border-gray-700 p-4 text-gray-400 output">
          {isLoading ? (
            <div className="animate-spin w-min">
              <ImSpinner9 />
            </div>
          ) : (
            <ReactMarkdown>{aiResponse}</ReactMarkdown>
          )}
        </div>
      </div>
    </>
  );
};
