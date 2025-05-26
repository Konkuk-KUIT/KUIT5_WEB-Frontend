import { useEffect, useState } from "react";
import Header from "../components/shared/header";
import style from "./Cart.module.css";
import ShoppingBag from "../components/cart/ShoppingBag";
import PayButton from "../components/cart/PayButton";
import { getStoreList, getSaladMenu } from "../api/api";

const Cart = () => {
  const [menu, setMenu] = useState(null);
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const storeData = await getStoreList();
        const saladData = await getSaladMenu();
        setStore(storeData[0]);
        setMenu(saladData[0]);
      } catch (error) {
        console.error("장바구니 데이터 불러오기 실패:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, []);

  if (loading || !store || !menu) return <p>로딩 중...</p>;

  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.margin}></div>
      <div className={style.info_header}>
        <span className={style.store}>{store.name}</span>
        <span className={style.minmoney}>
          최소금액 미달 <span className={style.caution}>!</span>
        </span>
      </div>
      <ShoppingBag
        name={menu.name}
        price={menu.price}
        ingredients={menu.ingredients}
      />
      <hr className={style.hr} />
      <p className={style.plus}>더 담기 +</p>
      <div className={style.margin}></div>
      <div>
        <p className={style.fee}>
          <span>주문 금액</span>
          <span>{menu.price.toLocaleString()}원</span>
        </p>
        <p className={style.fee}>
          <span>배달요금</span>
          <span>{store.deliveryFee.toLocaleString()}원</span>
        </p>
        <p className={style.total}>
          <span>총 결제금액</span>
          <span>{(store.deliveryFee + menu.price).toLocaleString()}원</span>
        </p>
      </div>
      <PayButton
        minOrder={store.minOrder}
        total={store.deliveryFee + menu.price}
      />
    </div>
  );
};

export default Cart;
