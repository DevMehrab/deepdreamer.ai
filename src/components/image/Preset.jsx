import React, { useEffect, useState, useContext } from "react";
import { ImgGenContext } from "../../context/context";
import { imageStyles as option } from "../../data";
export const Preset = () => {
  const { setImgData } = useContext(ImgGenContext);

  function handleChange(e) {
    setImgData((prev) => {
      return { ...prev, imageStyle: e.target.value };
    });
  }
  return (
    <>
      <div className="flex flex-col my-4 ">
        <div className="text-gray-600 mb-2">Image Style</div>
        <select
          onChange={handleChange}
          className="border p-[10px] border-gray-700 rounded bg-slate-950 outline-none"
        >
          {option.map((el, i) => {
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
