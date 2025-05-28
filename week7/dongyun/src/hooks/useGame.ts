import {useEffect, useState} from "react";
import type {CardArray} from "../types/card.ts";

export const createCardPair = (cardCount: number): CardArray[] => {
    return Array.from({length: cardCount}, (_, i): CardArray => ({
        index: i, isOpened: false, isCorrect: false
    }))
}

const useGame = (cardCount: number) => {
    const [cardArray, setCardArray] = useState(createCardPair(cardCount));

    useEffect(() => {
        const mismatchOpened = cardArray.filter((card) => card.isOpened)
        if (mismatchOpened.length > 1) {
            console.log(mismatchOpened)
            const waitSeconds = new Promise(resolve => {
                setTimeout(resolve, 3000)
            })
            waitSeconds.then(() => {
                const newCardArray = cardArray.map((card) => {
                    if (mismatchOpened.map((misCard) => {
                        return card.index === misCard.index;
                    }))
                        return ({...card, isOpened: false});
                    else
                        return ({...card})
                })
                setCardArray(newCardArray)
                console.log("3초후", cardArray)
            }, () => {
                alert('대기 로직 문제 발생')
            })
        }
    }, [cardArray])

    return {cardArray, setCardArray}
};

export default useGame;

