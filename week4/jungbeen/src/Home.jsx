import React from "react";

import "./index.css";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";
import marketModel from "./models/MarketModel";

import plus from "./assets/plus.svg";

const Home = () => {
  return (
    <div>
      <Header data={marketModel} />
      <Content data={marketModel} />
      <button className="new-post">
        <img src={plus} alt="plus" />
      </button>
      <BottomNav />
    </div>
  );
};

export default Home;
