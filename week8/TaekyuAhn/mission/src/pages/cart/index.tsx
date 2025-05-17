import React from "react";
import styles from "./index.module.scss";
import TopNav from "../../components/common/TopNav";
import OrderList from "../../components/cart/OrderList";
import OrderPriceBox from "../../components/cart/OrderPriceBox";

const index = () => {
  return (
    <div className={styles.contents}>
      <TopNav text={"주문취소"} />
      <OrderList />
      <OrderPriceBox />
    </div>
  );
};

export default index;
