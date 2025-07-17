import React, { useContext, useEffect, useRef } from "react";
import { TextContext } from "../../context/context";
import { useText } from "../../hooks/useText";
import { UseCase } from "./UseCase";

export const Input = () => {
  const ref = useRef();
  const { inputTitle, placeholder, btnText, isLoading } =
    useContext(TextContext);
  const { callApi } = useText();
  function handleClick(e) {
    if (ref.current.value.trim()) {
      callApi(ref.current.value);
    }
    e.target.disabled = true;
    setTimeout(() => {
      e.target.disabled = false;
    }, 4000);
  }
  useEffect(() => {
    ref.current.value = "";
  }, [inputTitle]);
  return (
    <>
      <div className="flex flex-col mb-10">
        <UseCase />
        <h1 className="mb-4 text-gray-500">{inputTitle}</h1>
        <textarea
          ref={ref}
          className="h-52 w-full border rounded mb-4 border-gray-700 resize-none p-4 outline-none text-gray-400"
          placeholder={placeholder}
        ></textarea>
        <button onClick={handleClick} className="bg-fuchsia-700 p-2 rounded ">
          {btnText}
        </button>
      </div>
    </>
  );
};
