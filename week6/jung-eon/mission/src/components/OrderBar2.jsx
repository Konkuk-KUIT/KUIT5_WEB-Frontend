import React from "react";
import Button2 from "../components/Button2";
import { Bottom2, OrderText2 } from "../styles/OrderBarStyles";

const OrderBar2 = () => {
  return (
    <Bottom2>
      <OrderText2>최소 주문금액 13,000원</OrderText2>
      <Button2>12,600원 결제하기</Button2>
    </Bottom2>
  );
};

export default OrderBar2;
