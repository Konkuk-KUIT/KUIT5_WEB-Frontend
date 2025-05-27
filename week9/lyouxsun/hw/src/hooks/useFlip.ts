import { useState } from "react";
import { Card } from "../data";

const useFlip = (tenCards: Card[]) => {
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [score, setScore] = useState<number>(0);

  const handleCardClick = (id: number) => {
    if (flipped.length === 2 || flipped.includes(id) || matched.includes(id)) {
      return;
    }
    const newFlipped: number[] = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [firstId, secondId] = newFlipped;
      const firstCard = tenCards.find((card) => card.id == firstId) as Card;
      const secondCard = tenCards.find((card) => card.id == secondId) as Card;
      if (firstCard.name === secondCard.name) {
        setMatched((prev) => [...prev, firstId, secondId]);
        setScore((prev) => prev + 1);
        setFlipped([]);
      } else {
        setTimeout(() => {
          setFlipped([]);
        }, 1500);
      }
    }
  };

  const reset = () => {
    setFlipped([]);
    setMatched([]);
    setScore(0);
  };
  return { score, flipped, matched, handleCardClick, reset };
};

export default useFlip;
