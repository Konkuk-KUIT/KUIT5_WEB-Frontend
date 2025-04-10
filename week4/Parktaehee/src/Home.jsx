import React from "react";
import "./Home.css";
import marketModel from "./models/MarketModel.js";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";

//marketModel을 한 번 import해서 그 안의 items를 비구조화 할당으로 한 번에 꺼내 사용
const { items } = marketModel;

const Home = () => {
  return (
    <>
      <Header />
      <section className="list-body">
        {items.map((item) =>
          item.isSold ? <Content item={item} key={item.id} /> : null
        )}
      </section>
      <BottomNav />
    </>
  );
};

export default Home;
