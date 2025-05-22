import * as C from "./Card.Styled";

export default function Card({ card, isFlipped, onClick }) {
  return (
    <C.CardContainer onClick={onClick}>
      <C.CardInner isFlipped={isFlipped}>
        <C.CardFront>
          <img
            src={card.front}
            alt={card.alt}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </C.CardFront>

        <C.CardBack>
          <img
            src={card.back}
            alt="back"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </C.CardBack>
      </C.CardInner>
    </C.CardContainer>
  );
}
