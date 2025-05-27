import React from "react";
import { Card } from "../data"; 

interface ResetButtonProps {
  setTenCards: React.Dispatch<React.SetStateAction<Card[]>>;    // useState로 만든 상태의 setter 함수의 정확한 타입을 선언해줌
  shuffleCards: () => Card[];
  reset: () => void;
}


export default function ResetButton({ setTenCards, shuffleCards, reset }: ResetButtonProps) {
  const handleReset = () => {
    reset(); // 먼저 flip/matched 초기화
    setTimeout(() => {
      setTenCards(shuffleCards()); // 2초 후 섞기
    }, 2000);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
