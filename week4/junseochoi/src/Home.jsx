import React from "react";
import "./Home.css";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";

const Home = () => {
  return (
    <div>
      <Header />
      <Content />
      <BottomNav />
    </div>
  );
};

export default Home;
