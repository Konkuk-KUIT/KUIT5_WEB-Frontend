import React from "react";
import Button from "../components/Button";
import { Bottom, OrderText, OrderPrice } from "../styles/OrderBarStyles";

const OrderBar = () => {
  return (
    <Bottom>
      <OrderText>총 주문금액</OrderText>
      <OrderPrice>12,100원</OrderPrice>
      <div style={{ position: "absolute", right: "24px", top: "19px" }}>
        <Button>주문하기</Button>
      </div>
    </Bottom>
  );
};

export default OrderBar;
