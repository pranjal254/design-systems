import React from "react";
import '../../../css/tre-button/tre-button.css'
interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary' | 'disabled' | 'cta' | 'outline-primary' | 'outline-secondary' | 'outline-disabled';
  size: 'sm' | 'md' | 'lg';
}

const Button = (props: ButtonProps) => {
  return (
    <>
      {props.size ? (
        <button
          className={`tre-btn ${props.variant} ${props.size}`}
          
        >
          {props.label}
        </button>
      ) : (
        <button className={`tre-btn ${props.variant} `}>
          {props.label}
        </button>
      )}
    </>
  );
};

export default Button;
