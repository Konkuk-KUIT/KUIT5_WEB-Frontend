import React from "react";
import styles from "./StoreInfoItem.module.scss";

type Props = {
  label: string;
  value: string;
};

const StoreInfoItem = ({ label, value }: Props) => {
  return (
    <div className={styles.contents}>
      <div className={styles.contents__label}>{label}</div>
      <div className={styles.contents__value}>{value}</div>
    </div>
  );
};

export default StoreInfoItem;
