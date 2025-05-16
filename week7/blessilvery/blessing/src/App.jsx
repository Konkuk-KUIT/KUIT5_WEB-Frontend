import { useState } from 'react';
import './App.css';
import Answer from './components/Answer';
import Card from './components/Card';

const initialImages = [
  "../assets/cat.jpg", "../assets/cat.jpg",
  "../assets/girl.jpg", "../assets/girl.jpg",
  "../assets/house.jpg", "../assets/house.jpg",
  "../assets/street.jpg", "../assets/street.jpg",
  "../assets/boy.jpg", "../assets/boy.jpg",
];

function shuffleArray(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function App() {
  const [correct, setCorrect] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [images, setImages] = useState(shuffleArray(initialImages));

  const handleFlip = (index, image) => {
    if (
      flippedCards.length === 2 ||
      flippedCards.some((card) => card.index === index) ||
      matchedCards.includes(index)
    ) return;

    const newFlipped = [...flippedCards, { index, image }];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (first.image === second.image && first.index !== second.index) {
        setCorrect((prev) => prev + 1);
        setMatchedCards((prev) => [...prev, first.index, second.index]);
        setFlippedCards([]);
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  const handleReset = () => {
    setCorrect(0);
    setFlippedCards([]);
    setMatchedCards([]);
    setImages(shuffleArray(initialImages));
  };

  return (
    <>
      <Answer correct={correct} />
      <Card
        flippedCards={flippedCards}
        matchedCards={matchedCards}
        onFlip={handleFlip}
        images={images}
      />
      <button onClick={handleReset}>Start / Reset Cards</button>
    </>
  );
}

export default App;
