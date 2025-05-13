import { useState } from "react";
import Count from "./components/Count";
import Card from "./components/Card";
import StartReset from "./components/StartReset";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Count count={count}></Count>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        <Card count={count} setCount={setCount}></Card>
      </section>
      <StartReset></StartReset>
    </>
  );
}

export default App;
