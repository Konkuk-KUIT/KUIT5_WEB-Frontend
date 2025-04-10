import React from "react";
import "./Home.css";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";
import marketModel from "./models/MarketModel";

const Home = () => {
  const { location, items } = marketModel;
  return (
    <div>
      <Header location={location} />
      <Content items={items} />
      <BottomNav />
    </div>
  );
};

export default Home;
