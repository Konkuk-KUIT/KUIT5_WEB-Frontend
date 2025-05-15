import React from "react";
import { FooterWrapper, ResetButton } from "./Footer.styles";
import { useGameStore } from "../GameStore/gameStore";

const Footer = () => {
  const resetGame = useGameStore((state) => state.resetGame);

  return (
    <FooterWrapper>
      <ResetButton onClick={resetGame}>다시 시작</ResetButton>
    </FooterWrapper>
  );
};

export default Footer;
