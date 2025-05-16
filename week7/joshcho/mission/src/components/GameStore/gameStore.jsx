import { create } from "zustand";

import cardImages from "../Cards/CardImages";

const shuffleCards = () => {
  const duplicated = [...cardImages, ...cardImages];
  return duplicated
    .map((img, index) => ({ id: index, content: img }))
    .sort(() => Math.random() - 0.5);
};

export const useGameStore = create((set, get) => ({
  cards: shuffleCards(),
  flipped: [],
  matchedIds: [],
  score: 0,
  lock: false,

  resetGame: () =>
    set({
      cards: shuffleCards(),
      flipped: [],
      matchedIds: [],
      score: 0,
      lock: false,
    }),

  handleCardClick: (index) => {
    const { lock, flipped, cards, matchedIds, score } = get();
    if (
      lock ||
      flipped.includes(index) ||
      matchedIds.includes(cards[index].content)
    )
      return;

    const newFlipped = [...flipped, index];
    set({ flipped: newFlipped });

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      const firstCard = cards[first];
      const secondCard = cards[second];

      if (firstCard.content === secondCard.content) {
        set({
          matchedIds: [...matchedIds, firstCard.content],
          score: score + 1,
          flipped: [],
        });
      } else {
        set({ lock: true });
        setTimeout(() => {
          set({ flipped: [], lock: false });
        }, 500);
      }
    }
  },
}));
