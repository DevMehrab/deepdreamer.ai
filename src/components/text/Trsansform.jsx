import React, { useRef } from "react";
import { Input } from "./Input";
import { Output } from "./Output";

export const Transform = () => {
  const ref = useRef()
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-16">
        <Input targetRef={ref}/>
          <div ref={ref}></div>
        <Output targetRef={ref}/>
      </div>
    </>
  );
};
