import React from "react";
import "../../../sass/tre-spinner/tre-spinner.scss";

interface ToggleProps {
  size?: "sm" | "md" | "lg";
  label?: string;
}

const Toggle = (props: ToggleProps) => {
  return (
    <>
      <div className={`spinner ${props.size ? props.size : "md"}`}></div>
      <span>{props.label ? props.label : "Loading..."}</span>
    </>
  );
};

export default Toggle;
