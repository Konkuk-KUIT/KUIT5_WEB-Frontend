import React from "react";
import styled from "styled-components";

type Props = {
  type: string;
  value: string;
  onValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const Input = ({ type, value, onValueChange, placeholder = "input something..." }: Props) => {
  return (
    <StyledInput type={type} value={value} placeholder={placeholder} onChange={onValueChange} />
  );
};

const StyledInput = styled.input`
  padding: 8px;
  border-radius: 12px;
  border: 1px solid #eee;
`;

export default Input;
