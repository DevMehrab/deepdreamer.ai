import React, { useEffect, useState, useContext } from "react";
import { ImgGenContext } from "../../context/context";

export const Select = () => {
  const { setImgData } = useContext(ImgGenContext);
  const [option, setOption] = useState([]);

  useEffect(() => {
    async function getData(params) {
      try {
        const response = await fetch("https://image.pollinations.ai/models");
        const data = await response.json();
        setOption(data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  function handleChange(e) {
    setImgData((prev) => {
      return { ...prev, model: e.target.value };
    });
  }
  return (
    <>
      <div className="flex flex-col my-4 ">
        <div className="text-gray-600 mb-2">Model</div>
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
