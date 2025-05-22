import React, { useEffect, useState } from "react";
import MainBoard from "./components/MainBoard/MainBoard";
import TopBar from "./components/TopBar/TopBar";
import BotBar from "./components/BotBar/BotBar";
import { doubledData } from "./utils/dataPreprocessor";
import styles from "./App.module.scss";

const App = () => {
  const [correctCount, setCorrectCount] = useState(0);
  const [victory, setVictory] = useState(false);
  const [newGame, setNewGame] = useState(false);

  useEffect(() => {
    if (correctCount === 5) {
      setVictory(true);

      // setTimeout(() => {
      //   setVictory(false);
      //   setCorrectCount(0);
      //   setNewGame(true);
      // }, 5000);
    }
  }, [correctCount]);

  return (
    <div className={styles.contents}>
      <TopBar correctCount={correctCount} victory={victory} />
      <MainBoard setCorrectCount={setCorrectCount} newGame={newGame} setNewGame={setNewGame} />
      <BotBar setNewGame={setNewGame} setCorrectCount={setCorrectCount} setVictory={setVictory} />
    </div>
  );
};

export default App;
