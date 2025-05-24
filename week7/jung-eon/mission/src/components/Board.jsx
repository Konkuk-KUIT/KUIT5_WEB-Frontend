import React from "react";   
import Card from "./Card";

export default function Board({ cards, flipped, matchedIds, flipCard }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "12px",
      }}
    >
      {cards.map((card, idx) => {
        const isFlipped = flipped.includes(idx) || matchedIds.includes(card.id);
        console.log(`card ${idx} flipped?`, isFlipped);
        return (
          <Card
            key={card.uniqueId}
            card={card}
            isFlipped={isFlipped}
            onClick={() => flipCard(idx)}
          />
        );
      })}
    </div>
  );
}
