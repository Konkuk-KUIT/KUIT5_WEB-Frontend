import React from "react";
import styled from "styled-components";
import { CardType } from "../../models/CardList";

interface ResetBtnProps {
  cardList: CardType[];
  setCardList: React.Dispatch<React.SetStateAction<CardType[]>>;
  flipped: boolean[];
  setFlipped: React.Dispatch<React.SetStateAction<boolean[]>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const ResetBtn: React.FC<ResetBtnProps> = ({
  cardList,
  setCardList,
  flipped,
  setFlipped,
  setCount,
}) => {
  const shuffleCards = () => {
    const shuffled = [...cardList].sort(() => Math.random() - 0.5);
    setCardList(shuffled);
    setFlipped(Array(shuffled.length).fill(false));
    setCount(0);
  };

  return (
    <StartStyled>
      <button onClick={shuffleCards} style={{ width: "150px", height: "30px" }}>
        Start/Reset Cards
      </button>
    </StartStyled>
  );
};

const StartStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export default ResetBtn;
