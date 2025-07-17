import React, { useState } from "react";
import { ImgGenContext } from "../context/context";

export const ImgGenProvider = ({ children }) => {
  const [imgData, setImgData] = useState({
    prompt: "A futuristic city with flying cars and neon lights",
    width: 1024,
    height: 1024,
    model: "flux",
    imageStyle: "realistic",
    nologo: true,
  });
  return (
    <>
      <ImgGenContext.Provider value={{ imgData, setImgData }}>
        {children}
      </ImgGenContext.Provider>
    </>
  );
};
