import React, { useEffect } from "react";
import { useGameStore } from "./hooks/useGameStore";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import Game from "./components/Game";
import "./App.css";

function App() {
  const countdown = useGameStore((e) => e.countdown);

  useEffect(() => {
    countdown();
  }, []);
  return (
    <>
      <TopBar />
      <Game />
      <BottomBar />
    </>
  );
}

export default App;
