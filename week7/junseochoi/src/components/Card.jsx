import React from "react";
import { useState, useEffect } from "react";
import CardList from "../models/CardList";

const Card = ({ count, setCount }) => {
  const [flipped, setFlipped] = useState(Array(CardList.length).fill(false));

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
        <img
          key={index}
          src={flipped[index] ? item.front : item.back}
          alt={item.alt}
          width="120px"
          height="170px"
          onClick={() => handleClick(index)}
          style={{ cursor: "pointer" }}
        />
      ))}
    </>
  );
};

export default Card;
