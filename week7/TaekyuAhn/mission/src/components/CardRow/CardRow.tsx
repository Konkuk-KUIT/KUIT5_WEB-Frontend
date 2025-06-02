import React, { useState } from "react";
import styles from "./CardRow.module.scss";
import type { CardType } from "../MainBoard/MainBoard";
import CardItem from "../CardItem/CardItem";

type CardRowProps = {
  cardArray: CardType[];
  cardStateArray: boolean[];
  compareItem: () => boolean;
  idx: number;
};

const CardRow = ({ cardArray, cardStateArray, idx, compareItem }: CardRowProps) => {
  const start = (idx - 1) * 5;
  const end = idx * 5;
  const slicedCardArray = cardArray.slice(start, end);
  const slicedCardStateArray = cardStateArray.slice(start, end);
  return (
    <div className={styles.contents}>
      <div className={styles.contents__row}>
        {slicedCardArray.map((item, index) => (
          <CardItem
            key={item.id}
            name={item.name}
            imgPath={item.imgPath}
            backImgPath={item.backImgPath}
            cardState={slicedCardStateArray[index]}
            index={start + index}
            compareItem={compareItem}
          />
        ))}
      </div>
    </div>
  );
};

export default CardRow;
