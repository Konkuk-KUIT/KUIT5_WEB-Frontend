import React from "react";    
import { useState, useEffect, useCallback } from "react";
import CardList from "../data";
import { shuffle } from "../utils/shuffle";

export default function useGame() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matchedIds, setMatchedIds] = useState([]);
  const [moves, setMoves] = useState(0);

  const resetGame = useCallback(() => {
    const pairList = CardList.flatMap((c) => [
      { ...c, uniqueId: `${c.id}-a` },
      { ...c, uniqueId: `${c.id}-b` },
    ]);
    setCards(shuffle(pairList));
    setFlipped([]);
    setMatchedIds([]);
    setMoves(0);
  }, []);


  useEffect(() => {
    if (flipped.length < 2) return;
    const [i, j] = flipped;

    if (cards[i].id === cards[j].id) {
        setMatchedIds((prev) => [...prev, cards[i].id]);
      setFlipped([]);
    } else {
      const t = setTimeout(() => setFlipped([]), 1000);
      return () => clearTimeout(t);
    }
  }, [flipped, cards]);

  const flipCard = (idx) => {
    if (
      flipped.includes(idx) ||
      matchedIds.includes(cards[idx].id) ||
      flipped.length >= 2
    ){return;}

    setFlipped((prev) => [...prev, idx]);
    setMoves((m) => m + 1);
  };


  return { cards, flipped, matchedIds, moves, flipCard, resetGame };
}
