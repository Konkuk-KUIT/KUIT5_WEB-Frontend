import React from "react";
import style from "./Store.module.css";
import { useNavigate } from "react-router-dom";
const Store = ({
  name,
  rank,
  rating,
  reviews,
  deliveryTime,
  deliveryFee,
  index,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/store");
  };
  return (
    <div className={style.wrapper} onClick={handleClick}>
      <div className={style.img}></div>
      <div className={style.info}>
        <p className={style.rank}>{rank}위</p>
        <p className={style.name}>
          {name} <span className={style.best}>{index == 0 ? "BEST" : ""}</span>
        </p>
        <p className={style.star}>
          <img src="assets/star.svg"></img>
          {rating} ({reviews.toLocaleString()})
        </p>
        <p className={style.time}>
          {deliveryTime}•배달비 {deliveryFee.toLocaleString()}원
        </p>
      </div>
    </div>
  );
};

export default Store;
