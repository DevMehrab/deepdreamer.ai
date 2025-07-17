import React from "react";

export const Container = ({ children }) => {
  return (
    <div className="w-screen p-4 sm:p-0 max-w-5xl mx-auto text-gray-200">
      {children}
    </div>
  );
};
