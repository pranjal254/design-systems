import React from "react";
import "../../../sass/tre-toggle/tre-toggle.scss";

interface ToggleProps {
  isChecked: boolean;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "sm" | "md" | "lg";
}

const Toggle = (props: ToggleProps) => {
  return (
    <div className={`toggle ${props.disabled ? "disabled" : ""}`}>
      <input
        type="checkbox"
        disabled={props.disabled}
        checked={props.isChecked}
        {...props}
      />
      <label className={props.size ? props.size : "md"}></label>
    </div>
  );
};

export default Toggle;
