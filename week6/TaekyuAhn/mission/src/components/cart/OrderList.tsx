import React from "react";
import { orders } from "../../models/orders";
import styles from "./OrderList.module.scss";
import OrderItem from "./OrderItem";
import AddOrderButton from "./AddOrderButton";

export type orderDataType = {
  id: number;
  name: string;
  ingredients: string;
  price: number;
};

const OrderList = () => {
  return (
    <div className={styles.list}>
      <div className={styles.list__headAndBody}>
        <div className={styles.list__headAndBody__head}>
          <div className={styles.list__headAndBody__head__store}>샐로리 한남점</div>
          <div className={styles.list__headAndBody__head__warning}>
            최소금액미달 &nbsp;
            <img src="/imgs/warning.svg" alt="" />
          </div>
        </div>
        <div className={styles.list__headAndBody__body}>
          {orders.map((item, index) => {
            return <OrderItem key={index} data={item} />;
          })}
        </div>
      </div>

      <div className={styles.list__tail}>
        <AddOrderButton />
      </div>
    </div>
  );
};

export default OrderList;
