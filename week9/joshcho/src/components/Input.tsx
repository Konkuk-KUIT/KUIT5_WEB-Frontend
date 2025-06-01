import React from "react";
import { StyledInput } from "./Input.styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: React.CSSProperties;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  style,
  ...props
}) => {
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
