import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Rectangle = ({ img_src, value }) => {
  const navigate = useNavigate();

  const handleCilck = () => {
    navigate("/store");
  };

  return (
    <StyledRectangle onClick={handleCilck}>
      <StyledImage src={img_src} alt="이미지" />
      <StyledText>{value}</StyledText>
    </StyledRectangle>
  );
};

const StyledRectangle = styled.button`
  border: 0;
  display: flex;
  width: 108px;
  padding: 12px 0px 13px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  background: #fafafb;
`;

const StyledImage = styled.img`
  width: 28px;
  height: 28px;
`;
const StyledText = styled.div`
  color: #333d4b;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default Rectangle;
