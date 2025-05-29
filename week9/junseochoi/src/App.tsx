import { useState } from "react";
import Count from "./components/Count/Count";
import Card from "./components/Card/Card";
import ResetBtn from "./components/ResetBtn/ResetBtn";
import OriginalCardList, { CardType } from "./models/CardList";
import styled from "styled-components";

function App() {
  const [count, setCount] = useState<number>(0);
  const [cardList, setCardList] = useState<CardType[]>([...OriginalCardList]);
  const [flipped, setFlipped] = useState<boolean[]>(
    Array(OriginalCardList.length).fill(false)
  );

  return (
    <>
      <Count count={count}></Count>
      <WrapperDiv>
        <Card
          count={count}
          setCount={setCount}
          cardList={cardList}
          flipped={flipped}
          setFlipped={setFlipped}
        />
      </WrapperDiv>
      <ResetBtn
        cardList={cardList}
        setCardList={setCardList}
        flipped={flipped}
        setFlipped={setFlipped}
        setCount={setCount}
      />
    </>
  );
}

const WrapperDiv = styled.section`
  display: "flex";
  flex-wrap: "wrap";
  gap: "20px";
  padding: "20px";
`;

export default App;
