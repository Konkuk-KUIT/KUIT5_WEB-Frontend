import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = ({ value, width, height, LinkBtn }) => {
  return (
    <Link to={LinkBtn} style={{ textDecoration: "none" }}>
      <StyledButton $width={width} $height={height}>
        <ButtonText>{value}</ButtonText>
      </StyledButton>
    </Link>
  );
};

const StyledButton = styled.button`
  border: 0;
  display: flex;
  border-radius: 8px;
  background: #3182f6;
  width: ${({ $width }) => $width || "auto"};
  height: ${({ $height }) => $height || "auto"};
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export default Button;
