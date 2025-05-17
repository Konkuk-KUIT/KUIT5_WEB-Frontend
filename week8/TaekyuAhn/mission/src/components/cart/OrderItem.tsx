import React from "react";
import { orderDataType } from "./OrderList";
import styles from "./OrderItem.module.scss";

type Props = {
  data: orderDataType;
};

const OrderItem = ({ data }: Props) => {
  const { name, ingredients, price } = data;
  const formattedPrice = price.toLocaleString();
  return (
    <div className={styles.item}>
      <div className={styles.item__imageAndData}>
        <div className={styles.item__imageAndData__imageArea}>
          <div className={styles.item__imageAndData__imageArea__img}></div>
        </div>
        <div className={styles.item__imageAndData__dataArea}>
          <div className={styles.emphasized}>{name}</div>
          <div>{ingredients}</div>
          <div>{formattedPrice}</div>
        </div>
      </div>

      <div className={styles.item__numberArea}>
        <div style={{ whiteSpace: "nowrap" }}>1개</div>
        <img src="/imgs/right-chevron.svg" alt="오른쪽 화살표 이미지" />
      </div>
    </div>
  );
};

export default OrderItem;
