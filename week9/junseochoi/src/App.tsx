import { useState } from "react";
import Count from "./components/Count/Count";
import Card from "./components/Card/Card";
import ResetBtn from "./components/ResetBtn/ResetBtn";
import OriginalCardList from "./models/CardList";

function App() {
  const [count, setCount] = useState<number>(0);
  const [cardList, setCardList] = useState([...OriginalCardList]);
  const [flipped, setFlipped] = useState(Array(cardList.length).fill(false));

  return (
    <>
      <Count count={count}></Count>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        <Card
          count={count}
          setCount={setCount}
          cardList={cardList}
          flipped={flipped}
          setFlipped={setFlipped}
        />
      </section>
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

export default App;
