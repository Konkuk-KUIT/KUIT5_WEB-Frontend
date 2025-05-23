import styled from "styled-components";

export const CardContainer = styled.div`
  display: inline-block;
  width: 120px;
  height: 170px;
  perspective: 1000px;
  margin: 8px;
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) =>
    isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
  cursor: pointer;
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  & img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const CardFront = styled(CardFace)`
  transform: rotateY(180deg);
`;

export const CardBack = styled(CardFace)`
  transform: rotateY(0deg);
`;
