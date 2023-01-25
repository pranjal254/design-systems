import React from "react";
import Select from "react-select";
import "../../../sass/tre-input-type/tre-input-select.scss";
interface ValueOption {
  readonly value: string;
  readonly label: string;
  readonly color?: string;
}
interface SelectValues {
  value: string;
  label: string;
  color?: string;
}
interface SelectProps {
  isClearable?: true | false;
  isSearchable?: true | false;
  isDisabled?: true | false;
  isMulti?: true | false;
  variant?: "primary" | "default";
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
  placeholder?: string;
  options: readonly ValueOption[];
  onChange: (e:any) => void;
  value: SelectValues[];
}

const TreSelect = (props: SelectProps) => {

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      minHeight: props.size=='sm' ? "28px" : props.size=='lg' ? "38px": "34px" ,
      height: "30px",
      boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided: any, state: any) => ({
      ...provided,
      height: "30px",
      padding: "1px 2px",
  
    }),
    multiValue: (provided: any, state: any) => ({
      ...provided,
      background: props.variant=='primary' ? '#ffebe3': '',
    }),

    input: (provided: any, state: any) => ({
      ...provided,
      margin: "0px",
      
    }),
    indicatorSeparator: (state: any) => ({
      display: "none",
    }),
    indicatorsContainer: (provided: any, state: any) => ({
      ...provided,
      height: "30px",
    }),
  };
  return (
    <Select
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: props.variant=='primary' ? '#ffebe3': '#E6E7E8',
          primary: props.variant=='primary' ? '#FE5000' : '#c6c7c8'
        },
      })}
      styles={customStyles}
      defaultValue={props.options[0].value}
      isDisabled={props.isDisabled || false}
      isClearable={props.isClearable || false}
      isSearchable={props.isSearchable || false}
      isMulti={props.isMulti || false}
      options={props.options}
      placeholder={props.placeholder ? <div>{props.placeholder}</div> : <div>Select...</div>}
      onChange={props.onChange}
    />
  );
};

export default TreSelect;
