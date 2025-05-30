import React, { useMemo, useState } from 'react'
import styled from "styled-components"
import Card from './Card'
import {BINGO, imageSource} from './constants/CardConstants'


const Main = styled.div`
    display: flex;
    width: 100%;
    margin: 0;
    align-items: center;
    flex-direction: column;
    p {
    text-align: center;
    margin: 10px;
 }
`;

const Top = styled.div`
    width: 100%;
    padding: 10px;
    background-color: powderblue;
    font-size: 16px;
`;


const Bottom = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
    background-color: powderblue;
    align-items: center;
    flex-direction: column;

`;

const Grid = styled.div`
    perspective: 900px;
    width: 900px;
    height: 400px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`;


const App = () => {
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);

    const cardsData = useMemo(() => {
        const dup = [...imageSource, ...imageSource];
        for (let i = 0; i < dup.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [dup[i], dup[j]] = [dup[j], dup[i]];
        }
        return dup;
    }, []);

    const handleCardClick = (index) => {
        if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(index)) return;
        const newFlipped = [...flippedCards, index];
        setFlippedCards(newFlipped);

        if (newFlipped.length === 2) {
            const [first, second] = newFlipped;
            if (cardsData[first] === cardsData[second]) {
                setMatchedCards([...matchedCards, first, second]);
            }
            setTimeout(() => setFlippedCards([]), 1000);
        }
    };


    return (
        <Main>
            <Top>
                <p id='count'>맞힌 개수 : {matchedCards.length / 2}</p>
                {matchedCards.length / 2 === BINGO && (
                    <p id='correct'>정답입니다.</p>
                )}
            </Top>

            <Grid>
                {cardsData.map((src, index) => (
                    <Card key={index} src={src} alt={`img${index}`} flipped={flippedCards.includes(index) || matchedCards.includes(index)}
                        onClick={() => handleCardClick(index)} />
                ))}
            </Grid>

            <Bottom>
                <form>
                    <button type='button' onClick={() => window.location.reload()}>start / reset</button>
                </form>
            </Bottom>
        </Main>
    );
};

export default App
