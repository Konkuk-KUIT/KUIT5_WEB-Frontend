import { create } from "zustand";
import { cardData } from "../models/Data";

type StoreType = {
  disabled: boolean;
  setDisabled: (bool: boolean) => void;
  clickNum: number;
  addClickNum: () => void;
  resetClickNum: () => void;
  cardStateList: boolean[];
  resetCardState: () => void;
  clickCard: (index: number) => void;
};

const dataLength = cardData.length;

const useStore = create<StoreType>((set) => ({
  disabled: false,
  setDisabled: (bool) => set((state) => ({ disabled: bool })),
  clickNum: 0,
  resetClickNum: () => set((state) => ({ clickNum: 0 })),
  addClickNum: () => set((state) => ({ clickNum: state.clickNum + 1 })),
  cardStateList: new Array(dataLength).fill(false),
  resetCardState: () =>
    set(() => ({
      cardStateList: new Array(dataLength).fill(false),
    })),
  clickCard: (index) =>
    set((state) => {
      const newList = [...state.cardStateList];
      newList[index] = !newList[index];
      return { cardStateList: newList };
    }),
}));

export default useStore;
