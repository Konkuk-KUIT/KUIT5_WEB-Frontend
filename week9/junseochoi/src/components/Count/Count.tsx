import React from "react";
import styled from "styled-components";

interface CountProps {
  count: number;
}

const Count: React.FC<CountProps> = ({ count }) => {
  return (
    <CountDiv>
      <div>맞힌 개수 {count}/5</div>
      <div>{count === 5 ? "정답입니다!!" : ""}</div>
    </CountDiv>
  );
};

const CountDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  flex-direction: column;
`;

export default Count;
