import React from "react";
import OrderPriceItem from "./OrderPriceItem";
import styles from "./OrderPriceBox.module.scss";
import Button from "../common/Button";

const priceData = [
  { label: "주문금액", price: 10600, isTotal: false },
  { label: "배달요금", price: 2000, isTotal: false },
  { label: "총 결제금액", price: 12600, isTotal: true },
];

const OrderPriceBox = () => {
  return (
    <div className={styles.box}>
      <div className={styles.box__priceArea}>
        {priceData.map((item, index) => {
          return (
            <OrderPriceItem
              key={index}
              label={item.label}
              value={item.price}
              isTotal={item.isTotal}
            />
          );
        })}
      </div>
      <div className={styles.box__buttonArea}>
        <div className={styles.box__buttonArea__totalPrice}>최소 주문금액 13,000원</div>
        <Button text={"12,600원 결제하기"} size={"large"} />
      </div>
    </div>
  );
};

export default OrderPriceBox;
