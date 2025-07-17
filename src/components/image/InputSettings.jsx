import React, { useContext } from "react";
import { ImgGenContext } from "../../context/context";

export const InputSettings = ({ text }) => {
  const { imgData, setImgData } = useContext(ImgGenContext);
  function handleChange(e) {
    setImgData((prev) => {
      return {
        ...prev,
        [text]: e.target.value,
      };
    });
  }
  return (
    <>
      <div className="flex flex-col my-4">
        <div className="text-gray-600 mb-2">{text}</div>
        <input
          onChange={handleChange}
          className="border p-2 border-gray-700 rounded outline-none"
          value={imgData[text]}
          type="number"
        />
      </div>
    </>
  );
};
