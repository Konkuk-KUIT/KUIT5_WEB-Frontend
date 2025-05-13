import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Search from ".components/Search";
import { KUIT_WEB } from "./data";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Search />
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        {KUIT_WEB.map((member) => {
          <Card name={member.name} age={member.age} />;
        })}
      </section>
    </>
  );
}

export default App;
