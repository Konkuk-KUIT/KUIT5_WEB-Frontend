import { useState } from "react";
const useFlip = (tenCards) => {
    const [flipped, setFlipped] = useState([]);
    const [matched, setMatched] = useState([]);
    const [score, setScore] = useState(0);
    const handleCardClick = (id) => {
        if (flipped.length === 2 || flipped.includes(id) || matched.includes(id)) {
            return;
        }
        const newFlipped = [...flipped, id];
        setFlipped(newFlipped);
        if (newFlipped.length === 2) {
            const [firstId, secondId] = newFlipped;
            const firstCard = tenCards.find((card) => card.id == firstId);
            const secondCard = tenCards.find((card) => card.id == secondId);
            if (firstCard.name === secondCard.name) {
                setMatched((prev) => [...prev, firstId, secondId]);
                setScore((prev) => prev + 1);
                setFlipped([]);
            }
            else {
                setTimeout(() => {
                    setFlipped([]);
                }, 1500);
            }
        }
    };
    const reset = () => {
        setFlipped([]);
        setMatched([]);
        setScore(0);
    };
    return { score, flipped, matched, handleCardClick, reset };
};
export default useFlip;
