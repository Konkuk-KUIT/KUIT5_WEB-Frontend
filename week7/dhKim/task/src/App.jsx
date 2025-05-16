import {React,useState, useEffect} from "react";
import CardsContainer from "./components/CardsContainer";
import Topbanner from "./components/Topbanner";
import Bottombanner from "./components/Bottombanner";
import { Heros } from "./data";

//데이터 이미지의 복제=>총 10개로 만듦
function shuffle(array){
  const copy=[...array,...array];
  return copy
    .sort(()=>Math.random()-0.5);
}


function App() {
  const [cards, setCards]=useState(shuffle(Heros));
  const [firstpick, setFirstpick]=useState(null);
  const [secondpick,setSecondpick]=useState(null);
  const [matchedCards,setMatchedCards]=useState([]);
  const [score,setScore]=useState(0);

  useEffect(()=>{
    if(firstpick&&secondpick){
      const isSameCard= firstpick.card.id===secondpick.card.id;
      const isSameIndex=firstpick.index===secondpick.index;

      if(isSameCard&&!isSameIndex){
        setMatchedCards((prev)=>[...prev,firstpick.index, secondpick.index]);
        setScore((prev)=>prev+1);
      }
    
      setTimeout(() => {
        setFirstpick(null);
        setSecondpick(null);
      }, 1000);
    }
  },[secondpick]);

   const handleCardClick = (card, index) => {
    if (firstpick && secondpick) return;
    if (firstpick && firstpick.index === index) return;
    if (!firstpick) {
      setFirstpick({ card, index });
    } else {
      setSecondpick({ card, index });
    }
  };

  const reset = () => {
    setCards(shuffle(Heros));
    setFirstpick(null);
    setSecondpick(null);
    setMatchedCards([]);
    setScore(0);
  };

  return (
    <>
      <Topbanner count={score} />
      <CardsContainer
        cards={cards}
        firstpick={firstpick}
        secondpick={secondpick}
        matchedCards={matchedCards}
        onCardClick={handleCardClick}
      />
      <Bottombanner reset={reset} />
    </>
  );

}

export default App;
