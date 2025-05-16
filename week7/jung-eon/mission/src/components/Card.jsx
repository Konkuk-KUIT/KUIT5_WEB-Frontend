import React from "react";    
import * as StyledCard from "./Card.Styled";

export default function Card({ card, isFlipped, onClick }) {
  return (
    <StyledCard.CardContainer onClick={onClick}>
      <StyledCard.CardInner isFlipped={isFlipped}>
        <StyledCard.CardFront>
          <img
            src={card.front}
            alt={card.alt}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </StyledCard.CardFront>

        <StyledCard.CardBack>
          <img
            src={card.back}
            alt="back"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </StyledCard.CardBack>
      </StyledCard.CardInner>
    </StyledCard.CardContainer>
  );
}
