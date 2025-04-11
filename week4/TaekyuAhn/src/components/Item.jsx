import React from "react";
import styles from "../index.module.scss";

function Item({ title, location, timeAgo, price, image, comments, likes, isSold }) {
  return (
    <div className={styles.itemBox}>
      <div className={styles.imageArea}>
        <img className={styles.imageArea__image} src={image} alt="" />
      </div>
      <div className={styles.contentArea}>
        <div className={styles.contentArea__info}>
          <div className={styles.contentArea__info__title}>{title}</div>
          <div className={styles.contentArea__info__location}>
            {location} &#183; {timeAgo}
          </div>
          <div className={styles.contentArea__info__price}>{price}</div>
        </div>
        <div className={styles.contentArea__reaction}>
          <div className={styles.rowSet}>
            <img src="./imgs/comments.svg" alt="" />
            <div>{comments}</div>
          </div>
          <div className={styles.rowSet}>
            <img src="./imgs/heart.svg" alt="" />
            <div>{likes}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
