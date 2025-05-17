import { create } from "zustand";

const shuffleCards = () => {
  const values = Array.from({ length: 5 }, (_, i) => i + 1);
  const pairs = [...values, ...values];
  return pairs.sort(() => Math.random() - 0.5);
};

export const useGameStore = create((set, get) => ({
  cards: shuffleCards().map((value, index) => ({
    id: index,
    value,
    isFlipped: false,
    isMatched: false,
  })),
  flippedCards: [],
  score: 0,
  message: "",
  timeLeft: 60,
  gameOver: false,
  flipCard: (id) => {
    const { cards, flippedCards, score } = get();

    const targetCard = cards.find((c) => c.id === id);
    if (targetCard.isFlipped || targetCard.isMatched) return;

    const newCards = cards.map((card) =>
      card.id === id ? { ...card, isFlipped: true } : card
    );
    const newFlipped = [...flippedCards, id];

    set({ cards: newCards, flippedCards: newFlipped });

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped.map((id) =>
        newCards.find((c) => c.id === id)
      );

      if (first.value === second.value) {
        set({
          cards: newCards.map((card) =>
            card.id === first.id || card.id === second.id
              ? { ...card, isMatched: true }
              : card
          ),
          score: score + 1,
          flippedCards: [],
          message: score + 1 === 5 ? "정답입니다." : "",
        });
      } else {
        setTimeout(() => {
          set({
            cards: newCards.map((card) =>
              card.id === first.id || card.id === second.id
                ? { ...card, isFlipped: false }
                : card
            ),
            flippedCards: [],
          });
        }, 3000);
      }
    }
  },

  resetGame: () => {
    set({
      cards: shuffleCards().map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      })),
      flippedCards: [],
      score: 0,
      message: "",
      timeLeft: 60,
      gameOver: false,
    });
  },

  countdown: () => {
    const timer = setInterval(() => {
      const { timeLeft, score } = get();
      if (timeLeft <= 1) {
        clearInterval(timer);
        if (score < 5) {
          set({
            message: "실패하였습니다. 5초 뒤, 게임이 리셋됩니다.",
            gameOver: true,
          });
          setTimeout(() => get().resetGame(), 5000);
        }
      } else {
        set({ timeLeft: timeLeft - 1 });
      }
    }, 1000);
  },
}));
