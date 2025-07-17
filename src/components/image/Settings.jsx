import React from "react";
import { InputSettings } from "./InputSettings";
import { Select } from "./Select";
import { Ratio } from "./Ratio";
import { Preset } from "./Preset";

export const Settings = () => {
  return (
    <>
      <h2>Advanced Settings</h2>
      <div className="grid sm:grid-cols-3 sm:gap-10">
        <Select />
        <InputSettings text={"width"} />
        <InputSettings text={"height"} />
        <Preset />
        <Ratio />
      </div>
    </>
  );
};
