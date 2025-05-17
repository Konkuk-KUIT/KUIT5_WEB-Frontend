import { useEffect, useState } from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  & p {
    text-align: center;
  }
`;

function Header({ correct, resetKey, setResetKey, setIsPaused }) {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (correct === 5) return;
    if (timer <= 0) {
      setIsPaused(true);
      const resetTimedId = setTimeout(() => {
        setTimer(60);
        resetGame();
        setIsPaused(false);
      }, 5000);

      return () => clearTimeout(resetTimedId);
    }

    const timerId = setTimeout(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timer, correct]);

  useEffect(() => {
    setTimer(60);
  }, [resetKey]);

  useEffect(() => {
    if (correct === 5) {
    }
  }, [correct]);

  const resetGame = () => {
    setResetKey((prev) => prev + 1);
  };

  return (
    <HeaderDiv>
      <p style={{ marginBottom: "10px" }}>{`맞힌 개수 ${correct} / 5`}</p>
      <p>{timer > 0 && timer}</p>
      <p>{timer <= 0 && "실패하였습니다. 5초 뒤, 게임이 리셋됩니다."}</p>
      {correct === 5 && <p>정답입니다.</p>}
    </HeaderDiv>
  );
}

export default Header;
