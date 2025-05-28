// Card.jsx
import React from "react";
import { CardWrapper, CardInner, FrontFace, BackFace } from "./Card.styles";

function Card({ content, isFlipped, isMatched, onClick }) {
  return (
    <CardWrapper onClick={onClick}>
      <CardInner flipped={isFlipped || isMatched}>
        <FrontFace>?</FrontFace>
        <BackFace>
          <img src={content} alt="card" width="60" height="60" />
        </BackFace>
      </CardInner>
    </CardWrapper>
  );
}

export default Card;
