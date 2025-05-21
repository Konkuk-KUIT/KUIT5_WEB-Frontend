import React from "react";
import styles from "./BotBar.module.scss";

type Props = {
  setNewGame: React.Dispatch<React.SetStateAction<boolean>>;
  setVictory: React.Dispatch<React.SetStateAction<boolean>>;
  setCorrectCount: React.Dispatch<React.SetStateAction<number>>;
};

const BotBar = ({ setNewGame, setCorrectCount, setVictory }: Props) => {
  return (
    <div className={styles.botbar}>
      <button
        className={styles.botbar__button}
        onClick={() => {
          setNewGame(true);
          setCorrectCount(0);
          setVictory(false);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default BotBar;
