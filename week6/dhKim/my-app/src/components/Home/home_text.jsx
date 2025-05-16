import React from 'react';

import styled from 'styled-components';

const Textcontainer= styled.div`
    width:390px;
    height:93px;
    
    padding-top:25px;
    padding-left:24px;
    box-sizing:border-box;
   
`;


const Hometext = () => {
  return (

    <Textcontainer>
    <p style={{fontSize:"26px",fontFamily:"Pretendard",fontWeight:"700",margin:"0"}}>오늘은 무엇을 먹을까요?</p>
    <p style={{fonstSize:"17px",fontFamily:"Pretendard",fontWeight:"500",marginTop:"7px",color:" #333D4B"}}>
        한남중앙로 40길 (한남 빌리지)(으)로 배달 '{'>'}' </p>
    </Textcontainer>
  );
};

export default Hometext;
