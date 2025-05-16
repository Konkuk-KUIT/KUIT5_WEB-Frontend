import React from 'react'
import {useState, useEffect} from 'react'

const cardImages=[
    {src:"tiredPotato.svg"},
    {src:"coolPotato.svg"},
    {src:"latePotato.svg"},
    {src:"badPotato.svg"},
    {src:"noisePotato.svg"},
];

const useCardGame = () => {

    //상태 선언
    const [cards, setCards] = useState([]);
    const [matchedCount, setMatchedCount] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

    const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages] 
      .map(card => ({
        ...card,
        id: Math.random(),//key값으로 사용
        matched: false //맞춘 카드인지 아닌지 구분
    }))
    .sort(() => Math.random() - 0.5); 

    setCards(shuffled);//섞은 카드배열
    setMatchedCount(0);//초기화
};

const handleChoice = (card) => {
    if (!disabled) {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }
  };
  
  
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards =>
          prevCards.map(c =>
            c.src === choiceOne.src ? { ...c, matched: true } : c
          )
        );
        setMatchedCount(prev => prev + 1);
        resetTurn();
      } else {
        setTimeout(resetTurn, 3000);
      }
    }
  }, [choiceOne, choiceTwo]);


   const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  return{ 
    cards,
    matchedCount,
    shuffleCards,
    choiceOne,
    choiceTwo,
    disabled,
    handleChoice
  };
};

export default useCardGame;