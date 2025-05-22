import React from "react";
import GoBack from "../components/GoBack";
import OrderContentList from "../models/OrderContentList";
import OrderList from "../components/OrderList";
import * as C from "./Cart.styles";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/store/1");
  };
  return (
    <>
      <GoBack value="주문취소" onClick={handleClick} />
      {OrderContentList.map((item, index) => (
        <OrderList
          key={index}
          StoreName={item.StoreName}
          MenuName={item.MenuName}
          Material={item.Material}
          Price={item.Price}
          Count={item.Count}
        />
      ))}
      <C.sort>
        <C.light>주문금액</C.light>
        <C.normal>10,600원</C.normal>
      </C.sort>
      <C.sort>
        <C.light>배달요금</C.light>
        <C.normal>2,000원</C.normal>
      </C.sort>
      <C.sort>
        <C.normal>총 결제금액</C.normal>
        <C.thick>12,600원</C.thick>
      </C.sort>
      <C.center>
        <C.light>최소 주문금액 13,000원</C.light>
        <Button value="12,600원 결제하기" width="350px" height="56px" />
      </C.center>
    </>
  );
};

export default Cart;
