import React, { useContext, useEffect, useRef } from "react";
import { User } from "./User";
import { Assistant } from "./Assistant";
import { ChatContext } from "../../context/context";

export const Messages = () => {
  const { history, isLoading } = useContext(ChatContext);
  console.log(history);
  const bottomRef = useRef(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);
  return (
    <>
      <div className="overflow-scroll h-full pb-16 text-gray-400">
        <Assistant text={"This is the very beginning if the chat 😊"} />
        {history.map((msg, i) => {
          return msg.role === "user" ? (
            <User key={i} text={msg.parts[0].text} />
          ) : (
            <Assistant key={i} text={msg.parts[0].text} />
          );
        })}
        {isLoading && <Assistant load={true} />}
        <div ref={bottomRef} />
      </div>
    </>
  );
};
