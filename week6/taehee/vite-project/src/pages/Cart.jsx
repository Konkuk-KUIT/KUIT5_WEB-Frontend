import React from "react";
import Header from "../components/shared/header";
import style from "./Cart.module.css";
import ShoppingBag from "../components/cart/ShoppingBag";
import { saladMenu } from "../models/stores";
import { storeList } from "../models/stores";
import PayButton from "../components/cart/PayButton";

const Cart = () => {
  const menu = saladMenu[0];
  const store = storeList[0];
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
