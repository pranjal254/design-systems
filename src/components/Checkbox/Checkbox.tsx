import React, { useState } from "react";
import "../../../sass/tre-checkbox/tre-checkbox.scss";

interface CheckBoxProps {
  label: string;
  isChecked: boolean;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = (props: CheckBoxProps) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          disabled={props.disabled}
          checked={props.isChecked}
          {...props}
        />
        <span className="span-class">{props.label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
