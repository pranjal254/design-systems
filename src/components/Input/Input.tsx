import React from "react";
import "../../../sass/tre-input-type/tre-input-type-text.scss";
import "../../../sass/tre-input-type/tre-input-checkbox-radio.scss";
interface InputProps {
  placeholder: string;
  type: "text" | "textarea" | "number" | "checkbox" | "radio";
  variant:
    | "primary"
    | "disabled"
  size: "sm" | "md" | "lg";
  label:string
}

const Input = (props: InputProps) => {
  return (
    <>
    {props.type == 'checkbox' || props.type == 'radio' ?
    (
        <label>
        <input type={props.type} name="optionsRadios" id="optionsRadios1" value="option1"/>
        <span>{props.label}</span>
      </label>
    )
    :(
        <input
        className={props.size}
        type={props.type}
        id={`type-${props.type}`}
        placeholder={props.placeholder}
        required
      />
    )}
      
    </>
  );
};

export default Input;
