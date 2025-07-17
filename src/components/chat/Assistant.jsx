import React, { useContext } from "react";
import { ChatContext } from "../../context/context";
import ReactMarkdown from "react-markdown";
import Rings from "react-loading-icons/dist/esm/components/rings";

export const Assistant = ({ text, load }) => {
  console.log(text);

  return (
    <>
      <div className="w-full py-4 pb-10">
        <p className="assistant">
          <ReactMarkdown>{text}</ReactMarkdown>
          {load && <Rings />}
        </p>
      </div>
    </>
  );
};
