import React from "react";
import styled from "styled-components";

const Count = ({ count }) => {
  return <CountDiv>맞힌 개수 {count}/5</CountDiv>;
};

const CountDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export default Count;
