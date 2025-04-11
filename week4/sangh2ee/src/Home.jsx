import React from "react";
import Header from './components/Header'
import Content from './components/Content'
import BottomNav from "./components/BottomNav";
import styles from "./index.css";
import marketModel from './models/MarketModel';

const Home = () => {
    
  return (
    <div>
      <div>
        <Header />
        {marketModel.items.map((item, index) => (
          item.isSold ? (
            <div key={index}></div> 
          ) : (
            <Content key={index} item={item} /> 
          )
        ))}

        <BottomNav />
      </div>
    </div>
  );
};

export default Home;
