import React from 'react';
import FlipCard from './FlipCard';

const Card = ({ flippedCards, matchedCards, onFlip, images }) => {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 200px)",
    gridTemplateRows: "repeat(2, 200px)",
    gap: "10px",
    padding: "20px",
  };

  return (
    <div style={gridStyle}>
      {images.map((img, index) => {
        const isFlipped =
          flippedCards.some((card) => card.index === index) ||
          matchedCards.includes(index);

        return (
          <FlipCard
            key={index}
            image={img}
            index={index}
            flipped={isFlipped}
            onFlip={onFlip}
          />
        );
      })}
    </div>
  );
};

export default Card;
