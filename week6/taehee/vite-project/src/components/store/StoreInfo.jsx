import React from "react";
import style from "./StoreInfo.module.css";

const StoreInfo = ({
  name,
  rating,
  reviews,
  deliveryTime,
  minOrder,
  purMethod,
}) => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.store}>{name}</h2>
      <p className={style.rating_container}>
        <img src="/assets/starcolor.svg"></img> {rating}{" "}
        <span className={style.review}>리뷰{reviews.toLocaleString()}</span>
      </p>
      <p className={style.info}>결제방법 {purMethod}</p>
      <p className={style.info}>최소주문 {minOrder.toLocaleString()}원</p>
      <p className={style.info}>배달시간 약{deliveryTime}</p>
      <hr className={style.hr} />
    </div>
  );
};

export default StoreInfo;
