// Card.styles.jsx
import styled, { css } from "styled-components";

export const CardWrapper = styled.div`
  perspective: 1000px;
  width: 100px;
  height: 140px;
  margin: 10px;
`;

export const CardInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  ${(props) =>
    props.flipped &&
    css`
      transform: rotateY(180deg);
    `}
`;

const CardFace = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;

export const FrontFace = styled(CardFace)`
  background-color: #f8f8f8;
`;

export const BackFace = styled(CardFace)`
  background-color: #4f86f7;
  color: white;
  transform: rotateY(180deg);
`;
