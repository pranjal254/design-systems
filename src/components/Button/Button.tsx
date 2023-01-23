import React from "react";
import "../../../sass/tre-button/tre-button.scss";
interface ButtonProps {
  label: string;
  variant:
    | "primary"
    | "secondary"
    | "disabled"
    | "cta"
    | "outline-primary"
    | "outline-secondary"
    | "outline-disabled";
  size: "sm" | "md" | "lg";
  style?: React.CSSProperties;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <>
      {props.size ? (
        <button
          style={props.style}
          className={`tre-btn ${props.variant} ${props.size}`}
          {...props}
        >
          {props.label}
        </button>
      ) : (
        <button
          className={`tre-btn ${props.variant} `}
          style={props.style}
          {...props}
        >
          {props.label}
        </button>
      )}
    </>
  );
};

export default Button;
