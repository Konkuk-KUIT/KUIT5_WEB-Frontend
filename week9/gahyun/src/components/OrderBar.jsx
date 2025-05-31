import React from "react";
import styled from "styled-components";
import Button from "./Button";

const OrderBar = () => {
  const text = "주문하기";

  return (
    <BottomBar>
      <div>
        <BottomText>총 주문금액</BottomText>
        <BottomPrice>12,100원</BottomPrice>
      </div>
      <Button
        text={text}
        // onClick={handleClick}
      />
    </BottomBar>
  );
};

const BottomBar = styled.div`
  display: flex;
  // position: sticky;
  // bottom: 0;
  justify-content: space-between;
  height: 71px;
  border-radius: 16px 16px 0px 0px;
  padding: 19px 25px 19px 25px;
  box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.1);
  background: #fff;
`;

const BottomText = styled.div`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const BottomPrice = styled.div`
  color: #4e5968;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default OrderBar;
