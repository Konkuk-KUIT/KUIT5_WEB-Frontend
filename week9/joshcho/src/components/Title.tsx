import React from "react";
import styled from "styled-components";

interface TitleProps {
  value: string;
}

const Title: React.FC<TitleProps> = ({ value }) => {
  return <StyledTitle>{value}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.div`
  color: #191f28;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
