import styled from "styled-components";

export const CardContainer = styled.div`
  width: 80px;
  height: 100px;
  perspective: 600px;
  cursor: pointer;
`;
export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) =>
    isFlipped ? "rotateY(0deg)" : "rotateY(180deg)"};
`;
const Face = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const CardFront = styled(Face)`
  z-index: 2;
`;

export const CardBack = styled(Face)`
  transform: rotateY(180deg);
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
`;
