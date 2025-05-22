import Card from "./Card";

export default function Board({ cards, flipped, matchedIds, flipCard }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "12px",
      }}
    >
      {cards.map((card, idx) => (
        <Card
          key={card.uniqueId}
          card={card}
          isFlipped={flipped.includes(idx) || matchedIds.includes(card.id)}
          onClick={() => flipCard(idx)}
        />
      ))}
    </div>
  );
}
