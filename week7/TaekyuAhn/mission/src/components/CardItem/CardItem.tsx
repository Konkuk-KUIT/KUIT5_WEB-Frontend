import React, { useEffect, useState } from "react";
import styles from "./CardItem.module.scss";
import useStore from "../../stores/countStore";
import { matchingIdx } from "../MainBoard/MainBoard";

type CardProps = {
  name: string;
  imgPath: string;
  backImgPath: string;
  cardState: boolean;
  index: number;
  compareItem: () => boolean;
};

const CardItem = ({ name, imgPath, backImgPath, cardState, index, compareItem }: CardProps) => {
  const clickCard = useStore((state) => state.clickCard);
  const addClickNum = useStore((state) => state.addClickNum);
  const globalDisabled = useStore((state) => state.disabled);
  const setGlobalDisabled = useStore((state) => state.setDisabled);

  const clickHandler = () => {
    if (useStore.getState().disabled) return;
    addClickNum();
    clickCard(index);
    matchingIdx.push(index);

    if (useStore.getState().clickNum === 2) {
      setGlobalDisabled(true);
      compareItem();
      setTimeout(() => {
        setGlobalDisabled(false);
      }, 1000);
    }
  };

  return (
    <div className={styles.contents} onClick={clickHandler}>
      <div className={styles.contents__title}>{cardState ? name : ""}</div>
      <img
        className={`${styles.contents__img} ${globalDisabled ? styles.disabled : ""}`}
        src={cardState ? imgPath : backImgPath}
        alt={name}
      />
    </div>
  );
};

export default CardItem;
