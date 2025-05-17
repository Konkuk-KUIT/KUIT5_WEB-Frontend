import React from "react";
import { useGameStore } from "../hooks/useGameStore";

const BottomBar = () => {
  const resetGame = useGameStore((e) => e.resetGame);
  return <button onClick={resetGame}>Start/Reset Cards</button>;
};

export default BottomBar;
