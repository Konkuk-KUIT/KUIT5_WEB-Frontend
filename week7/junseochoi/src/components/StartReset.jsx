import React from "react";
import styled from "styled-components";

const StartReset = () => {
  return (
    <StartStyled>
      <button style={{ width: "150px", height: "30px" }}>
        Start/Reset Cards
      </button>
    </StartStyled>
  );
};

const StartStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export default StartReset;
