import React, {useEffect} from 'react'
import Count from "./components/Count"
import ResetBtn from './components/ResetBtn';
import useCardGame from './hooks/useCardGame';
import Card from './components/Card';
import './App.css';

const App = () => {
    const {cards, matchedCount, shuffleCards, handleChoice, choiceOne, choiceTwo, disabled}=useCardGame();
    useEffect(() => {
        shuffleCards();
    }, []);

    return (
    <div>   
        <Count matchedCount={matchedCount}/>
        <div className="card-grid">
            {cards.map(card => (
                <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={
            card === choiceOne || card === choiceTwo || card.matched
            }
            disabled={disabled} />
            ))}
        </div>
        <ResetBtn shuffleCards={shuffleCards}/>
    </div>
  )
}
export default App;