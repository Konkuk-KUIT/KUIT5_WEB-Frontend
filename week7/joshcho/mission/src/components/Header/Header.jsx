import React from "react";
import { HeaderWrapper, Score, Message } from "./Header.styles";
import { useGameStore } from "../GameStore/gameStore";

const Header = () => {
  const score = useGameStore((state) => state.score);
  const matchedIds = useGameStore((state) => state.matchedIds);
  const allMatched = matchedIds.length === 5; // 5쌍 전부 맞춘 경우

  return (
    <HeaderWrapper>
      <Score>점수: {score}</Score>
      {allMatched && <Message>정답입니다.</Message>}
    </HeaderWrapper>
  );
};

export default Header;
