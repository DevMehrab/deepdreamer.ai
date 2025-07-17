import React, { useContext, useState } from "react";
import { ImgGenContext } from "../../context/context";

export const RatioBtn = ({ ratio }) => {
  const { setImgData } = useContext(ImgGenContext);

  function handleClick() {
    switch (ratio) {
      case "3:2":
        setImgData((prev) => {
          return { ...prev, width: 1500, height: 1000 };
        });
        break;
      case "16:9":
        setImgData((prev) => {
          return { ...prev, width: 1920, height: 1080 };
        });
        break;
      case "4:3":
        setImgData((prev) => {
          return { ...prev, width: 1024, height: 768 };
        });
        break;
      case "1:1":
        setImgData((prev) => {
          return { ...prev, width: 1024, height: 1024 };
        });
        break;

      default:
        setImgData((prev) => {
          return { ...prev, width: 1024, height: 1024 };
        });
        break;
    }
  }

  return (
    <>
      <button onClick={handleClick} className="p-2 bg-slate-900 rounded">
        {ratio}
      </button>
    </>
  );
};
