import React from "react";
import model from "./models/MarketModel"; // model만 import
import { Header, Content, BottomNav } from "./components/index"; // components/index.js에서 export한 컴포넌트들

const Home = () => {
  return (
    <div>
      <Header model={model} />
      <Content model={model} />
      <BottomNav />
    </div>
  );
};



export default Home;
