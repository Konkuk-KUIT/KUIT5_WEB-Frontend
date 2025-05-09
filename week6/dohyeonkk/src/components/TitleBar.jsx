import React from 'react'
import styled from "styled-components"

const ReturnBar = styled.div`
    font-family: "Pretendard";
    font-weight: 700;
    font-size: 26px;
    color: #191f28;
    width: 390px;
    padding-top: 26px;
    padding-left: 24px;
    box-sizing: border-box;
`;


const TitleBar = ({text}) => {
  return (
    <ReturnBar>
      {text}
    </ReturnBar>
  )
}

export default TitleBar
