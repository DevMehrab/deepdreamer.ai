import React, { useContext } from "react";
import { RatioBtn } from "./RatioBtn";

export const Ratio = () => {
  return (
    <>
      <div className=" my-4">
        <div className="text-gray-600 mb-2">Ratio</div>
        <div className="grid grid-cols-4 gap-4">
          <RatioBtn ratio={"1:1"} />
          <RatioBtn ratio={"16:9"} />
          <RatioBtn ratio={"4:3"} />
          <RatioBtn ratio={"3:2"} />
        </div>
      </div>
    </>
  );
};
