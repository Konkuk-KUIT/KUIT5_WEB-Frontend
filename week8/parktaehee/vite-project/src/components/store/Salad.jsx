import React from "react";
import style from "./Salad.module.css";
import { useNavigate } from "react-router-dom";

const Salad = ({ name, isBest, price, ingredients }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/store");
  };
  return (
    <div className={style.wrapper} onClick={handleClick}>
      <div className={style.img}></div>
      <div className={style.info}>
        <p className={style.name}>
          {name} <span className={style.best}>{isBest ? "BEST" : ""}</span>
        </p>
        <p className={style.price}>{price.toLocaleString()}</p>
        <p className={style.ingredients}>{ingredients}</p>
      </div>
      <button className={style.shopping}>담기</button>
    </div>
  );
};

export default Salad;
