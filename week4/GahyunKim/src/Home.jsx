import model from "./models/MarketModel";
import React from "react";
import { Header, Content, BottomNav } from "./components/index";

const Home = () => {
  const modelList = model.items.filter((value) => value.isSold === true);
  {
    /* modelList는 filter()로 나온 배열 */
  }
  return (
    <div>
      <Header model={model} />
      <Content modelList={modelList} />
      <BottomNav modelList={modelList} />
    </div>
  );
};

export default Home;
