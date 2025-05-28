import styled from "styled-components";
import { useState, memo, useEffect } from "react";
import samsung from "../assets/samsung.png";
import doosan from "../assets/doosan.png";
import hanhwa from "../assets/hanhwa.png";
import kiwoom from "../assets/kiwoom.png";
import nc from "../assets/nc.png";
import cardBack from "../assets/card-back.png";

const TEAMNAME = [samsung, doosan, hanhwa, kiwoom, nc];

const ContentDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  width: 500px;
  justify-content: center;
  margin-bottom: 50px;
`;

const CardWrapper = styled.div``;

const CardInner = styled.div`
  position: relative;
  height: 140px;
  border: 1px solid black;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${({ flipped }) => (flipped ? "rotateY(180deg)" : "none")};
`;

const BackCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  & > img {
    width: 100%;
    height: 100%;
  }
`;
const FrontCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  & > img {
    width: 50px;
    height: 50px;
  }
`;

function Content({ setCorrect, resetKey, isPaused }) {
  const [filppedIdx, setFlippedIdx] = useState([]); //현재 선택 카드 idx
  const [matchedIdx, setMatchedIdx] = useState([]); //이미 맞춘 카드
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setCards(shuffleArr(generateCard()));
    setFlippedIdx([]);
    setMatchedIdx([]);
    setCorrect(0);

    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timerId);
  }, [resetKey]);

  //카드 생성
  const generateCard = () => {
    return TEAMNAME.flatMap((team, idx) => [
      { id: `${idx}-A`, img: team },
      { id: `${idx}-B`, img: team },
    ]);
  };

  // 카드 배열 섞기
  const shuffleArr = (arr) => {
    let original = [...arr];
    const arrLen = arr.length;
    const shuffledArr = [];
    let i = arrLen;

    while (i > 0) {
      let rand = Math.floor(Math.random() * i);
      shuffledArr.push(original[rand]);
      original = original.filter((x) => x !== original[rand]);
      i--;
    }
    return shuffledArr;
  };

  const handleClick = (id) => {
    if (filppedIdx.includes(id) || filppedIdx.length === 2 || isPaused) return;

    const newFlipped = [...filppedIdx, id];
    setFlippedIdx(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      const card1 = cards.find((c) => c.id === first);
      const card2 = cards.find((c) => c.id === second);

      if (card1.img === card2.img) {
        setCorrect((prev) => prev + 1);
        setMatchedIdx((prev) => [...prev, first, second]);
        setTimeout(() => setFlippedIdx([]), 1000);
      } else {
        setTimeout(() => setFlippedIdx([]), 500);
      }
    }
  };

  //섞은 카드를 상태로 관리 (읽기전용)
  const [cards, setCards] = useState(() => shuffleArr(generateCard()));

  return (
    <ContentDiv>
      {cards.map((card) => (
        <CardWrapper key={card.id} onClick={() => handleClick(card.id)}>
          <CardInner
            flipped={
              (!isLoading && filppedIdx.includes(card.id)) ||
              matchedIdx.includes(card.id)
            }
          >
            <FrontCard>
              <img src={card.img} alt="cardFront" />
            </FrontCard>
            <BackCard>
              <img src={cardBack} alt="cardBack" />
            </BackCard>
          </CardInner>
        </CardWrapper>
      ))}
    </ContentDiv>
  );
}

export default memo(Content);
