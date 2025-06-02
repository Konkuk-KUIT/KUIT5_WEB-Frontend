import React from "react";
import { StyledButton } from "./ActionButton.styles";

interface ActionButtonProps {
  actiontype?: "add" | "edit" | "delete";
  onClick: () => void;
  children: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  actiontype,
  onClick,
  children,
}) => {
  return (
    <StyledButton actiontype={actiontype} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default ActionButton;
