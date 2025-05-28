import styled from "styled-components";

export const Card = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    background-color: black;
    color: white;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const OpenedCard = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    background-color: #eee;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardContainer = styled.div`
    width: 150px;
    height: 300px;
    color: black;
    perspective: 1000px;
`

export const CardWrapper = styled.div< { isflipped: boolean }>`
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.5s;
    transform-style: preserve-3d;
    transform:${props => props.isflipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`
