import React from "react";
import style from "./ShoppingBag.module.css";

const ShoppingBag = ({ name, price, ingredients }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.img}></div>
      <div className={style.info}>
        <p className={style.name}>{name}</p>
        <p className={style.ingredients}>{ingredients}</p>
        <p className={style.price}>{price.toLocaleString()}</p>
      </div>
      <p className={style.num}>1개 &gt;</p>
    </div>
  );
};

export default ShoppingBag;
