import React from "react";
import { StyledInput } from "./Input.styles";

const Input = ({ value, onChange, placeholder, style, ...props }) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
      {...props}
    />
  );
};

export default Input;
