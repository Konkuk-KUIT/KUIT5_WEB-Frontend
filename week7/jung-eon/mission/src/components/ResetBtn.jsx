import React from "react";
import styled from "styled-components";

export default function ResetBtn({ onReset }) {
    return (
    <Wrapper>
      <button onClick={onReset}>다시 시작</button>; 
    </Wrapper>    
    );
};

  
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;

  button {
    width: 150px;
    height: 30px;
    cursor: pointer;
  }
`