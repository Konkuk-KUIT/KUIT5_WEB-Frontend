import React, { useState } from "react";
import { CARDS } from "./data";
import CardContainer from "./components/CardContainer";
import Score from "./components/Score";
import ResetButton from "./components/ResetButton";
import useFlip from "./hooks/useFlip";


function shuffleCards() {
  return [...CARDS, ...CARDS]
    .map((card, index) => ({ ...card, id: index }))
    .sort(() => Math.random() - 0.5);
}
function App() {
  const [tenCards, setTenCards] = useState(shuffleCards);
  const { score, flipped, matched, handleCardClick, reset } = useFlip(tenCards);

  return (
    <div>
      <Score score={score} />
      <CardContainer
        tenCards={tenCards}
        flipped={flipped}
        matched={matched}
        handleCardClick={handleCardClick}
      />
      <ResetButton setTenCards={setTenCards} shuffleCards={shuffleCards} reset={reset}/>
    </div>
  );
}

export default App;
