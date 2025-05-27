import React from "react";
import FlipCard from "./FlipCard";

function CardContainer({ tenCards, flipped, matched, handleCardClick }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
        maxWidth: "680px",
        margin: "0 auto",
      }}
    >
      {
      tenCards.map((card) => (
        <FlipCard
          key={card.id} 
          card={card}
          isFlipped={flipped.includes(card.id) || matched.includes(card.id)}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </div>
  );
}

export default CardContainer;
