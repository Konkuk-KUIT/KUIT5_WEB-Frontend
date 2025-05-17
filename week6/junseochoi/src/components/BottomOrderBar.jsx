import React from "react";
import styled from "styled-components";
import Button from "./Button";

const BottomOrderBar = () => {
  return (
    <BottomDiv>
      <div>
        <NavDiv>총 주문금액</NavDiv>
        <CashDiv>12,100원</CashDiv>
      </div>
      <Button value="주문하기" width="84px" height="38px" LinkBtn="/cart" />
    </BottomDiv>
  );
};

const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  position: fixed;
  bottom: 0;
  width: 100%;
  /* box-sizing: border-box; */
  height: 111px;
  flex-shrink: 0;
  border-radius: 16px 16px 0px 0px;
  background: #fff;
  box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.1);
`;

const NavDiv = styled.div`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CashDiv = styled.div`
  color: #4e5968;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default BottomOrderBar;
