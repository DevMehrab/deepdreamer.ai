import React from "react";

export const User = ({ text }) => {
  return (
    <>
      <div className="w-full">
        <p className="w-fit max-w-3/4 bg-gray-900 p-4 rounded ml-auto">
          {text}
        </p>
      </div>
    </>
  );
};
