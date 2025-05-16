import Card from "./Card";
import styled from "styled-components";
import { useGameStore } from "../GameStore/gameStore";

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 110px);
  justify-content: center;
  gap: 12px;
  padding: 20px;
`;

const CardBoard = () => {
  const { cards, flipped, matchedIds, handleCardClick } = useGameStore();

  return (
    <CardGrid>
      {cards.map((card, index) => (
        <Card
          key={card.id}
          content={card.content}
          isFlipped={flipped.includes(index)}
          isMatched={matchedIds.includes(card.content)}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </CardGrid>
  );
};

export default CardBoard;
