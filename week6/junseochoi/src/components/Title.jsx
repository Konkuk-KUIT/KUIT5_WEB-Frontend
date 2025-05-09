import React from "react";
import styled from "styled-components";

const Title = ({ value }) => {
  return <StyledTitle>{value}</StyledTitle>;
};

const StyledTitle = styled.div`
  color: #191f28;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export default Title;
