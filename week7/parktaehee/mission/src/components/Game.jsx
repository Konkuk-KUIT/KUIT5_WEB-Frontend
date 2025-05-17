import { useGameStore } from "../hooks/useGameStore";
import Card from "./Card";
import style from "./Game.module.css";

const Game = () => {
  const cards = useGameStore((e) => e.cards);
  console.log("카드 리스트:", cards);
  console.log("카드 개수:", cards.length);

  return (
    <div className={style.container}>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Game;
