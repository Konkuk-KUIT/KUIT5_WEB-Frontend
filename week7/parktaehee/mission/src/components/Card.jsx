import style from "./Card.module.css";
import { useGameStore } from "../hooks/useGameStore";

const Card = ({ card }) => {
  const { id, isFlipped, isMatched, value } = card;
  console.log("이미지 value 확인:", value);
  const flipCard = useGameStore((e) => e.flipCard);

  const handleClick = () => {
    flipCard(id);
  };

  const imageSrc = isFlipped || isMatched ? `/images/img${value}.jpeg` : null;

  return (
    <div className={style.card_container} onClick={handleClick}>
      <div
        className={`${style.card} ${
          isFlipped || isMatched ? style.flipped : ""
        }`}
      >
        <div className={`${style.card_face} ${style.card_front}`}>?</div>
        <div className={`${style.card_face} ${style.card_back}`}>
          {imageSrc && <img src={imageSrc} alt={`card-${value}`} />}
        </div>
      </div>
    </div>
  );
};

export default Card;
