import { useState } from "react";

import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./App.css";

function App() {
  const [correct, setCorrect] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      <Header
        correct={correct}
        setResetKey={setResetKey}
        resetKey={resetKey}
        setIsPaused={setIsPaused}
      />
      <Content
        setCorrect={setCorrect}
        resetKey={resetKey}
        isPaused={isPaused}
      />
      <Footer setResetKey={setResetKey} />
    </>
  );
}

export default App;
