import React from 'react';

import styled from 'styled-components';

import { BottomContainer,BottomPrice,OrderButton } from './b_banner_style';

const Bottombanner = () => {
  return (
    <BottomContainer>
    <div style={{position:"relative", width:"100%",height:"100%"}}>
        <BottomPrice>
          <StyledPtag1>총 주문금액</StyledPtag1>
          <StyledPtag2
          >12,100원</StyledPtag2>
        </BottomPrice>
      
        <OrderButton>
          {/* 주문하기 버튼이 담김 */}
            주문하기
        </OrderButton>
    </div>
    </BottomContainer>
  );
};

export default Bottombanner;

const StyledPtag1=styled.p`
    font-family: Pretendard;
    font-weight: 400;
    font-size: 15px;
    line-height: 100%;
    letter-spacing: 0px;
    color: #6B7684;
    margin:0;
    
`;

const StyledPtag2=styled.p`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 17px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #4E5968;
  margin: 8px 0 0 0;
`;