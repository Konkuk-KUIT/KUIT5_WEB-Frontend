import {useState} from 'react'
import CardPair from './CardPair'
import * as S from "./App.styled.tsx"
import useGame from "./hooks/useGame.ts";
import {createCardPair} from "./hooks/useGame.ts";

function App() {
    const cardCount = 10;
    const maxScore = 5;
    const [score, setScore] = useState(0);
    const [numArray, setNumArray] = useState(Array.from({length: cardCount}, (_, i) => i));
    const [leftTime, setLeftTime] = useState(60);
    const {cardArray, setCardArray} = useGame(cardCount)

    const addScore = (): void => {
        if (score < maxScore)
            setScore(score + 1);
        else if (score === maxScore)
            setScore(0);
        else
            setScore(0);
    }

    const getRandomIntInclusive = (min: number, max: number)=> {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // 최댓값도 포함, 최솟값도 포함
    }

    const resetGame = () =>{
        const newArray = [...numArray];
        newArray.sort(() => getRandomIntInclusive(-1, 1))
        setNumArray(newArray);
        setCardArray(createCardPair(cardCount));
        setScore(0);
        setLeftTime(60)
    }

    const handleResetBtn = () => {
        resetGame()
        const intervalId = setInterval(()=>{
            setLeftTime(leftTime=> {
                if(leftTime < 1){
                    clearInterval(intervalId)
                    const wait5s = new Promise(resolve => {
                        setTimeout(resolve, 5000)
                    })
                    wait5s.then(() => {
                        resetGame()
                    }, () => {
                        alert('제한시간 로직 문제 발생')
                    })
                }
                return leftTime - 1 ;
            })
            }, 1000
        )

    }

    return (
        <S.Container>
            <S.NavBar><h3>맞힌 개수 : {score}/{maxScore}</h3></S.NavBar>
            <S.NavBar>{leftTime > 0 ? <h5>남은 시간 : {leftTime}</h5> : "실패하셨습니다. 5초 뒤, 게임이 리셋됩니다."}</S.NavBar>
            {score === maxScore ? <S.Reward><h2>정답입니다!</h2></S.Reward> : null}
            <S.CardGame>
                {
                    numArray.map((num) => {
                        return <CardPair
                            key={num}
                            num={num}
                            cards={cardArray}
                            setCard={setCardArray}
                            addScore={addScore} cardCount={cardCount}/>
                    })
                }
            </S.CardGame>
            <S.NavBar>
                <S.ResetBtn onClick={handleResetBtn}>
                    Start/Rest Cards
                </S.ResetBtn>
            </S.NavBar>
        </S.Container>
    )
}

export default App
