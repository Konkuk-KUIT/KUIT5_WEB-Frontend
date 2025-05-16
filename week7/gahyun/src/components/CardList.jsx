import React, { useEffect, useState } from "react";
import cardData from "../models/cardData";
import Card from "./Card";
import "../style/index.css";

const CardList = ({
  cards,
  setCards,
  flippedCard,
  setFlippedCard,
  count,
  setCount,
  total,
}) => {
  const handleFlip = (key) => {
    //2장 뒤집혀있거나 이미 클리된 카드 클릭 안됨.
    if (flippedCard.length === 2 || flippedCard.includes(key)) return;

    //카드 뒤집었을 때 처리
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.key === key ? { ...card, flipped: true } : card
      )
    );

    //현재 뒤집은 카드 2장 추가 및 비교
    setFlippedCard((prev) => [...prev, key]);
  };

  useEffect(() => {
    if (flippedCard.length !== 2) return;

    const [fKey, sKey] = flippedCard;
    const fCard = cards.find((card) => card.key === fKey);
    const sCard = cards.find((card) => card.key === sKey);

    if (!fCard || !sCard) return;

    if (fCard.id !== sCard.id) {
      //두 카드가 다르면 다시 3초뒤에 뒤집음
      const timeout = setTimeout(() => {
        setCards((prev) =>
          prev.map((card) =>
            card.key === fKey || card.key === sKey
              ? { ...card, flipped: false }
              : card
          )
        );
        setFlippedCard([]); //짝 안맞으면 3초뒤 초기화
      }, 1000);

      return () => clearTimeout(timeout);
    } else {
      //같은 카드면 개수++
      if (count < total) {
        setCount((prev) => prev + 1);
      }
      //2장 비교 후 상태 초기화
      setFlippedCard([]);
    }
  }, [flippedCard, cards]);

  return (
    <div className="cardList">
      {cards.map((card) => (
        <div key={card.key}>
          <Card
            image={card.image}
            flipped={card.flipped}
            onClick={() => handleFlip(card.key)}
          />
        </div>
      ))}
    </div>
  );
};

export default CardList;
