import React from "react";
import styles from "./OrderPriceItem.module.scss";

type Props = {
  label: string;
  value: number;
  isTotal: boolean;
};

const OrderPriceItem = ({ label, value, isTotal }: Props) => {
  const formattedValue = value.toLocaleString();
  return (
    <div className={`${styles.item} ${isTotal ? styles.emphasized : styles.normal}`}>
      <div className={styles.item__label}>{label}</div>
      <div className={styles.item__value}>{formattedValue}원</div>
    </div>
  );
};

export default OrderPriceItem;
