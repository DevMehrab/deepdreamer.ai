import React from "react";
import { Image } from "./Image";

export const Result = ({ title, imgArr }) => {
  return (
    <>
      <div className="mb-8">
        <h2 className="mb-4 sm:my-10 text-gray-600 text-2xl">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {imgArr.length === 0 && (
            <i className="text-gray-700">No Images to show . . .</i>
          )}
          {imgArr.map((el, i) => {
            return <Image key={i} src={el} />;
          })}
        </div>
      </div>
    </>
  );
};

// crypto.randomUUid()
