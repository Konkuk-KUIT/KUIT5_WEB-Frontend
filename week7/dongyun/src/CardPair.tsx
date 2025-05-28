import type {CardArray} from "./types/card.ts";
import * as S from "./CardPair.styled.tsx"

type CardPairProps = {
    num: number;
    cards: CardArray[]
    addScore: () => void
    setCard: (newCardArray: CardArray[]) => void
    cardCount: number
}

const CardPair = ({num, cards, setCard, addScore, cardCount}: CardPairProps) => {
    const handleCardClick = () =>{
        const openedCardSet = [...cards]
        openedCardSet[num].isOpened = true;
        if (openedCardSet[num].isOpened && openedCardSet[cardCount - 1 - num].isOpened) {
            addScore()
            openedCardSet[num].isCorrect = true;
            openedCardSet[cardCount - 1 - num].isCorrect = true;
        }
        setCard(openedCardSet);
    }

    return (
        <S.CardContainer >
            <S.CardWrapper isflipped={cards[num].isCorrect || cards[num].isOpened}>
                    <S.OpenedCard> <img src={`/card-image/card${num}.svg`} alt="opened"/> </S.OpenedCard>
                        <S.Card onClick={handleCardClick}>
                            {num}
                            {cards[num].isCorrect || (cards[num] && cards[num].isOpened) ? "열렸음!!" : "닫혔음."}
                        </S.Card>
            </S.CardWrapper>
        </S.CardContainer>
    )
}

export default CardPair