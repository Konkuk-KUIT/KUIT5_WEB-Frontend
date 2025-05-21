// src/App.jsx
import React from "react";
import useGame from "./hooks/useGame";
import Board from "./components/Board";
import Count from "./components/Count";
import ResetBtn from "./components/ResetBtn";

export default function App() {
  const { cards, flipped, matchedIds, moves, flipCard, resetGame } = useGame();

  return (
    <div style={{ padding: 20 }}>
      <h1>카드 매칭 게임</h1>
      <Count moves={moves} maxMatches={cards.length / 2} />
      <Board
        cards={cards}
        flipped={flipped}
        matchedIds={matchedIds}
        flipCard={flipCard}
      />
      <ResetBtn onReset={resetGame} />
    </div>
  );
}
