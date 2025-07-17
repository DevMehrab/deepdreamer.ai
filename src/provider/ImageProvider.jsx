import React, { useState } from "react";
import { ImageContext } from "../context/context";

export const ImageProvider = ({ children }) => {
  const [downloaded, setDownloaded] = useState([]);
  const [saved, setSaved] = useState([]);
  const [history, setHistory] = useState([]);
  const [current, setCurrent] = useState([]);
  return (
    <>
      <ImageContext.Provider
        value={{
          downloaded,
          saved,
          history,
          current,
          setDownloaded,
          setSaved,
          setHistory,
          setCurrent,
        }}
      >
        {children}
      </ImageContext.Provider>
    </>
  );
};
