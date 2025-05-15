import React, { useState } from 'react'
import styled from "styled-components"



const Carddec = styled.div`
    perspective: 900px;
    height: 150px;
    width: 150px;
    margin: 10px;
`;


const CardInner = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    margin: 10px;
    border: 1px solid #000;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    transform: ${flip => flip.flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

const CardFace = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
`;

const CardFront = styled(CardFace)`
    background-color: #ffdce2;
`;

const CardBack = styled(CardFace)`
    transform: rotateY(180deg);
`;



const Card = ({ src, alt, flipped, onClick }) => {

    return (
        <Carddec>
            <CardInner flipped={flipped} onClick={onClick}>
                <CardFront />
                <CardBack>
                    <img src={src} alt={alt} style={{ width: "150px", height: "150px" }} />
                </CardBack>
            </CardInner>

        </Carddec>
    )
}

export default Card
