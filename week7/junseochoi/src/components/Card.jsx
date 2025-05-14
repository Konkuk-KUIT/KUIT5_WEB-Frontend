import React from "react";
import { useState, useEffect } from "react";
import CardList from "../models/CardList";
import * as C from "./Card.Styled";

const Card = ({ count, setCount }) => {
  const [flipped, setFlipped] = useState(Array(CardList.length).fill(false));

  // 뒤집혀진 카드들 중 쌍이 맞는 카드가 있는지 확인인
  useEffect(() => {
    const frontCount = {};

    CardList.forEach((item, idx) => {
      if (flipped[idx]) {
        frontCount[item.front] = (frontCount[item.front] || 0) + 1;
      }
    });

    const countPairs = Object.values(frontCount).filter(
      (cnt) => cnt >= 2
    ).length;

    setCount(countPairs);
  });

  // 쌍이 맞는 카드가 있다면 onClick이 작동하지 않음
  const handleClick = (index) => {
    const currentFront = CardList[index].front;

    const CompareFlipped = CardList.filter(
      (item, idx) => item.front === currentFront && flipped[idx]
    ).length;

    if (CompareFlipped >= 2) return;

    const updatedFlipped = [...flipped];
    updatedFlipped[index] = !updatedFlipped[index];
    setFlipped(updatedFlipped);
  };
  return (
    <>
      {CardList.map((item, index) => (
        <C.CardContainer key={index} onClick={() => handleClick(index)}>
          <C.CardInner isFlipped={flipped[index]}>
            <C.CardFront>
              <img src={item.front} alt={item.alt} />
            </C.CardFront>
            <C.CardBack>
              <img src={item.back} alt={item.alt} />
            </C.CardBack>
          </C.CardInner>
        </C.CardContainer>
      ))}
    </>
  );
};

export default Card;
