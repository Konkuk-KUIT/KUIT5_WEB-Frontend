import React from "react";
import "./Home.css";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";

import marketModel from "./models/MarketModel";


const Home = () => {
  return (
    <div>
      <Header location={marketModel.location} />
      <Content items={marketModel.items} />
      <BottomNav />
    </div>
  );
};

export default Home;
