import React from "react";

export default function ResetButton({ setTenCards, shuffleCards, reset }) {
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
