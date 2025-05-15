import styled from "styled-components"

export const CardInner = styled.div`
    perspective: 900px;
    position: relative;
    height: 150px;
    width: 150px;
    margin: 10px;
    border: 1px solid #000;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    transform: ${flip => flip.$flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

const CardFace = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    backface-visibility: hidden;
`;

export const CardFront = styled(CardFace)`
    background-color: #ffdce2;
`;

export const CardBack = styled(CardFace)`
    transform: rotateY(180deg);    
    img{
        height: 150px;
        width: 150px;
    }
`;