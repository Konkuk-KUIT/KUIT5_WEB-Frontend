import React from "react";
import marketModel from "./models/MarketModels";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";

const Home = () => {
  return (
    <div className="screen">
      <Header location={marketModel.location} />
      <Content items={marketModel.items} />
      <BottomNav />
    </div>
  );
};

export default Home;

{
  /*import marketModel을 Home에서 한번만 주고 하위요소인 Header, Content에 적용되도록 했다(props로 전달)*/
}
