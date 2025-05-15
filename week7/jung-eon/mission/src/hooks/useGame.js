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
    const pairList = [...CardList, ...CardList].map((card, index) => ({
    ...card,
    uniqueId: `${card.id}-${index}`,}));
    setCards(shuffle(pairList));
    setFlipped([]);
    setMatchedIds([]);
    setMoves(0);
  }, []);

useEffect(() => {
    resetGame();
  }, [resetGame]);
 


  const flipCard = useCallback((idx) => {

    if (
      flipped.includes(idx) ||
      matchedIds.includes(cards[idx].id) ||
      flipped.length >= 2
    ) {
      return;
    }

    setFlipped((prev) => [...prev, idx]);
    setMoves((m) => m + 1);
  },[flipped, matchedIds, cards]);



  useEffect(() => {
    if (flipped.length !== 2) return;
    const [first, second] = flipped;

    if (cards[first].id === cards[second].id) {
        setMatchedIds((prev) => [...prev, cards[first].id]);
      setFlipped([]);
    } else {
      const t = setTimeout(() => setFlipped([]), 1000);
      return () => clearTimeout(t);
    }
  }, [flipped, cards]);

  
  return { cards, flipped, matchedIds, moves, flipCard, resetGame };
  };
