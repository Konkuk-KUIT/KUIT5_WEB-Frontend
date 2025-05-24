import React from "react";
import styles from "./MenuItem.module.scss";
import { menuDataType } from "./MenuList";
import Button from "../common/Button";

type Props = {
  data: menuDataType;
};

const MenuItem = ({ data }: Props) => {
  const { name, price, ingredients, isBest } = data;
  const formattedPrice = price.toLocaleString();
  return (
    <div className={styles.contents}>
      <div className={styles.contents__imageAndData}>
        <div className={styles.contents__imageAndData__imgArea}>
          <div className={styles.contents__imageAndData__imgArea__img}></div>
        </div>
        <div className={styles.contents__dataArea}>
          <div className={styles.emphasized}>
            {name} {isBest && <span className={styles.best}>BEST</span>}
          </div>
          <div>{formattedPrice}원</div>
          <div>
            {ingredients.map((item, index) => {
              if (index !== ingredients.length - 1) {
                item = item + ", ";
              }
              return item;
            })}
          </div>
        </div>
      </div>

      <div className={styles.contents__buttonArea}>
        <Button text="담기" size="small" />
      </div>
    </div>
  );
};

export default MenuItem;
