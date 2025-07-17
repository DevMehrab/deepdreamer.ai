import React, { useContext, useState } from "react";
import { aiUseCases } from "../../data";
import { TextContext } from "../../context/context";

export const UseCase = () => {
  const { setData, sendData, setAiResponse } = useContext(TextContext);

  function handleChange(e) {
    console.log(sendData(e.target.value));
    setData(sendData(e.target.value));
    setAiResponse(null);
  }
  return (
    <>
      <div className="mb-10">
        <h2 className="text-gray-600 mb-4">Select Mode</h2>
        <select
          onChange={handleChange}
          className="border p-[10px] border-gray-700 rounded bg-slate-950 outline-none w-full "
        >
          {aiUseCases.map((el, i) => {
            return (
              <option key={i} value={el}>
                {el}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};
