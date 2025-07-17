import React from "react";
import { Input } from "./Input";
import { Output } from "./Output";

export const Transform = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-16">
        <Input />
        <Output />
      </div>
    </>
  );
};
