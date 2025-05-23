import React from "react";
import { StyledButton } from "./ActionButton.styles";

const ActionButton = ({ actiontype, onClick, children }) => {
  return (
    <StyledButton actiontype={actiontype} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default ActionButton;
