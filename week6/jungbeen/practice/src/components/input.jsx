import React from "react";
import styled from "styled-components";

const Input = ({
  value,
  onValueChange,
  placeholder = "input something...",
}) => {
  return (
    <StyledInput
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onValueChange}
    />
  );
};

const StyledInput = styled.input`
  padding: 8px;
  border-radius: 12px;
  border: 1px solid #eee;
`;

export default Input;
