import React, { useState } from "react";
import styled from "styled-components";
import BottomBar from "./components/BottomBar";
import TopBar from "./components/TopBar";
import CardList from "./components/CardList";
import cardData from "./models/cardData";

const Home = () => {
  // 맞힌 개수 count 상태
  const [count, setCount] = useState(0);
  /* card 상태 관리(앞/뒤 뒤집힌 상태) */
  const [cards, setCards] = useState(() =>
    [...cardData, ...cardData]
      .map((card, idx) => ({ ...card, key: idx, flipped: false }))
      .sort(() => Math.random() - 0.5)
  );

  /* 현재 뒤집힌 카드(2장) key 저장 배열 */
  const [flippedCard, setFlippedCard] = useState([]);
  // total 개수
  const total = cardData.length;
  const resetGame = () => {
    const shuffled = [...cardData, ...cardData]
      .map((card, idx) => ({ ...card, key: idx, flipped: false }))
      .sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlippedCard([]);
    setCount(0);
  };

  return (
    <Page>
      <TopBar count={count} total={total} />
      <CardList
        cards={cards}
        setCards={setCards}
        flipped={flippedCard}
        setFlippedCard={setFlippedCard}
        count={count}
        setCount={setCount}
        total={total}
      />
      <BottomBar onReset={resetGame} />
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export default Home;
