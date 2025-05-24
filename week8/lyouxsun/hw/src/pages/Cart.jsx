import React from "react";
import GoBack from "../components/GoBack";
import { useOrders } from "../hooks/useOrders";
import OrderList from "../components/OrderList";
import * as C from "./Cart.styles";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { orders, addOrder, clearOrders, loading } = useOrders();

  const handleGoBack = () => {
    clearOrders();
    navigate("/store/1");
  };

  const totalPrice = orders.reduce((acc, item) => {
    const price = parseInt(item.Price.replace(/[^0-9]/g, ""), 10);
    const count = parseInt(item.Count.replace(/[^0-9]/g, ""), 10);
    return acc + price * count;
  }, 0);

  const deliveryFee = 2000;
  const finalPrice = totalPrice + deliveryFee;

  if (loading) return <p>주문 목록 불러오는 중...</p>;

  return (
    <>
      <GoBack value="주문취소" onClick={handleGoBack} />
      {orders.map((item, index) => (
        <OrderList
          key={index}
          StoreName={item.StoreName}
          MenuName={item.MenuName}
          Material={item.Material}
          Price={item.Price}
          Count={item.Count}
          onAddOrder={() => addOrder(item)}
        />
      ))}
      <C.sort>
        <C.light>주문금액</C.light>
        <C.normal>{totalPrice.toLocaleString()}원</C.normal>
      </C.sort>
      <C.sort>
        <C.light>배달요금</C.light>
        <C.normal>{deliveryFee.toLocaleString()}원</C.normal>
      </C.sort>
      <C.sort>
        <C.normal>총 결제금액</C.normal>
        <C.thick>{finalPrice.toLocaleString()}원</C.thick>
      </C.sort>
      <C.center>
        <C.light>최소 주문금액 13,000원</C.light>
        <Button
          value={`${finalPrice.toLocaleString()}원 결제하기`}
          width="350px"
          height="56px"
        />
      </C.center>
    </>
  );
};

export default Cart;
