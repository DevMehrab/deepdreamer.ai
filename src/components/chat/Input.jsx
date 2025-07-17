import React, { useContext, useRef } from "react";
import { IoSend } from "react-icons/io5";
import { useChat } from "../../hooks/useChat";
import { ChatContext } from "../../context/context";

export const Input = () => {
  const { setHistory } = useContext(ChatContext);

  const ref = useRef();
  const { callApi } = useChat();
  function handleClick() {
    setHistory((prev) => [
      ...prev,
      { role: "user", parts: [{ text: ref.current.value }] },
    ]);

    callApi(`${ref.current.value}`);
    setTimeout(() => {
      ref.current.value = "";
    }, 10);
  }
  return (
    <>
      <div
        className="fixed flex bottom-2 left-1/2 translate-x-[-50%] max-w-[1000px] w-11/12 sm:w-full rounded-4xl border border-gray-600 bg-slate-950
                    "
      >
        <textarea
          ref={ref}
          className="p-6 outline-none rounded h-24 resize-none w-full"
        ></textarea>
        <button
          onClick={handleClick}
          className="absolute bg-fuchsia-700 p-4 rounded-4xl right-2 bottom-2"
        >
          <IoSend />
        </button>
      </div>
    </>
  );
};
