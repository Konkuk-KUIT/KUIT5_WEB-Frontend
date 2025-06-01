import React, { useState, useEffect } from "react";
import GoBack from "../components/GoBack";
// OrderContentList 대신 fetch를 사용하므로 임포트 제거
// import OrderContentList from "../models/OrderContentList";
import OrderList from "../components/OrderList";
import * as C from "./Cart.styles";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

interface OrderItem {
  StoreName: string;
  MenuName: string;
  Material: string;
  Price: string;
  Count: number;
}

const Cart = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<OrderItem[]>([]); // 주문 목록 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState<Error | null>(null); // 에러 상태

  useEffect(() => {
    // fetch를 사용하여 주문 목록 가져오기
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:3001/orders");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("주문 목록을 가져오는 데 실패했습니다:", error);
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []); // 컴포넌트가 처음 마운트될 때만 실행

  const handleClick = () => {
    navigate("/store/1");
  };

  // 로딩 중이거나 에러 발생 시 메시지 표시
  if (loading) {
    return <p>주문 목록 로딩 중...</p>;
  }

  if (error) {
    return <p>주문 목록을 불러오는 데 오류가 발생했습니다: {error.message}</p>;
  }

  return (
    <>
      <GoBack value="주문취소" onClick={handleClick} />
      {/* orders 상태를 사용하여 주문 목록 렌더링 */}
      {orders.length === 0 ? (
        <p>주문 목록이 비어있습니다.</p>
      ) : (
        orders.map((item, index) => (
          <OrderList
            key={index}
            StoreName={item.StoreName}
            MenuName={item.MenuName}
            Material={item.Material}
            Price={item.Price}
            Count={item.Count}
          />
        ))
      )}
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
