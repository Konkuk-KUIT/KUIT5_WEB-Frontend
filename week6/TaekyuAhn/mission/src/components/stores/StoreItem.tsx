import React from "react";
import { storeDataType } from "./StoresList";
import styles from "./StoreItem.module.scss";
import { Link } from "react-router-dom";

type Props = {
  data: storeDataType;
};

const StoreItem = ({ data }: Props) => {
  const { rank, name, rating, reviews, deliveryTime, deliveryFee } = data;

  return (
    <Link to="/store/1">
      <div className={styles.content}>
        <div className={styles.content__imageArea}>
          <div className={styles.content__imageArea__img}></div>
        </div>
        <div className={styles.content__dataArea}>
          {rank && <div className={styles.bolder}>{rank}위</div>}
          <div className={styles.bolder}>{name}</div>
          <div>
            <img src="/imgs/star.svg" alt="" />
            &nbsp;
            {rating}({reviews})
          </div>
          <div>
            {deliveryTime} &#183;배달비{deliveryFee}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StoreItem;
