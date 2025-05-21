import React from "react";
import { HeaderWrapper, Score, Message } from "./Header.styles";
import { useGameStore } from "../GameStore/gameStore";

const Header = () => {
  const score = useGameStore((state) => state.score);
  const matchedIds = useGameStore((state) => state.matchedIds);
  const allMatched = matchedIds.length === 5;

  return (
    <HeaderWrapper>
      <Score>점수: {score} / 5</Score>
      {allMatched && <Message>정답입니다.</Message>}
    </HeaderWrapper>
  );
};

export default Header;
