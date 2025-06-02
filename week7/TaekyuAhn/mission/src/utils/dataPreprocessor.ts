import type { CardType } from "../components/MainBoard/MainBoard";
import { cardData } from "../models/Data";

const data = cardData;

export const doubledData = [
  ...data,
  ...data.map((item) => ({
    ...item,
    id: item.id + data.length,
  })),
];

export const shuffleData = (data: CardType[]) => {
  return data.sort(() => Math.random() - 0.5);
};
