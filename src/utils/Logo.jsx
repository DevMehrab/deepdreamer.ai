import React from "react";
import logo from "../assets/logo.png";
export const Logo = () => {
  return (
    <>
      <div className="h-12 ">
        <img className="h-full w-full object-cover" src={logo} alt="" />
      </div>
    </>
  );
};
