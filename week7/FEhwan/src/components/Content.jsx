import styled from "styled-components";
import { useState, memo, useEffect } from "react";

// 포켓몬 이미지 불러오기
import kobu from "../assets/kobu.png";
import pairi from "../assets/pairi.png";
import pikachu from "../assets/pikachu.png";
import mrStrange from "../assets/mr.strange.png";
import poorin from "../assets/poorin.png";
import cardBack from "../assets/card-back.png";

const POKEMONS = [kobu, pairi, pikachu, mrStrange, poorin];

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
  const [flippedIdx, setFlippedIdx] = useState([]);
  const [matchedIdx, setMatchedIdx] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateCard = () => {
    return POKEMONS.flatMap((img, idx) => [
      { id: `${idx}-A`, img },
      { id: `${idx}-B`, img },
    ]);
  };

  const shuffleArr = (arr) => {
    const original = [...arr];
    const shuffled = [];
    while (original.length > 0) {
      const rand = Math.floor(Math.random() * original.length);
      shuffled.push(original.splice(rand, 1)[0]);
    }
    return shuffled;
  };

  const [cards, setCards] = useState(() => shuffleArr(generateCard()));

  useEffect(() => {
    setIsLoading(true);
    setCards(shuffleArr(generateCard()));
    setFlippedIdx([]);
    setMatchedIdx([]);
    setCorrect(0);

    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [resetKey]);

  const handleClick = (id) => {
    if (flippedIdx.includes(id) || flippedIdx.length === 2 || isPaused) return;

    const newFlipped = [...flippedIdx, id];
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

  return (
    <ContentDiv>
      {cards.map((card) => (
        <CardWrapper key={card.id} onClick={() => handleClick(card.id)}>
          <CardInner
            flipped={
              (!isLoading && flippedIdx.includes(card.id)) ||
              matchedIdx.includes(card.id)
            }
          >
            <FrontCard>
              <img src={card.img} alt="front" />
            </FrontCard>
            <BackCard>
              <img src={cardBack} alt="back" />
            </BackCard>
          </CardInner>
        </CardWrapper>
      ))}
    </ContentDiv>
  );
}

export default memo(Content);
