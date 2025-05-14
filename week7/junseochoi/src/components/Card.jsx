import React from "react";
import { useState, useEffect } from "react";
import * as C from "./Card.Styled";

const Card = ({ count, setCount, cardList, flipped, setFlipped }) => {
  const [selected, setSelected] = useState([]);

  // 뒤집혀진 카드들 중 쌍이 맞는 카드가 있는지 확인
  useEffect(() => {
    if (selected.length === 2) {
      const [firstIndex, secondIndex] = selected;
      const firstCard = cardList[firstIndex];
      const secondCard = cardList[secondIndex];

      if (firstCard.front === secondCard.front) {
        setCount((prev) => prev + 1);
        setSelected([]);
      } else {
        const timer = setTimeout(() => {
          const updatedFlipped = [...flipped];
          updatedFlipped[firstIndex] = false;
          updatedFlipped[secondIndex] = false;
          setFlipped(updatedFlipped);
          setSelected([]);
        }, 2000);

        return () => clearTimeout(timer);
      }
    }
  });

  // 쌍이 맞는 카드가 있다면 onClick이 작동하지 않음
  const handleClick = (index) => {
    if (flipped[index]) return; // 앞면에서 뒷면으로 뒤집기 예외처리
    if (selected.length >= 2) return; // 2개 이상 뒤집기 불가

    const updatedFlipped = [...flipped];
    updatedFlipped[index] = !updatedFlipped[index];
    setFlipped(updatedFlipped);
    setSelected([...selected, index]);
  };

  return (
    <>
      {cardList.map((item, index) => (
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
