import React from "react";
import styles from "./index.module.scss";
import Item from "./components/Item";
import marketModel from "./models/MarketModel";

const Header = () => {
  const { location } = marketModel;
  return (
    <div className={styles.headerSection}>
      <div className={styles.locationBox}>
        <div className={styles.locationBox__text}>{location}</div>
        <img src="./imgs/down-chevron.svg" alt="" />
      </div>
      <div className={styles.utilBox}>
        <img className={styles.utilBox__icon} src="./imgs/magnifying-glass.svg" alt="" />
        <img className={styles.utilBox__icon} src="./imgs/three-lines.svg" alt="" />
        <img className={styles.utilBox__icon} src="./imgs/bell.svg" alt="" />
      </div>
    </div>
  );
};

const Content = () => {
  const { items } = marketModel;
  return (
    <div className={styles.contentSection}>
      {items.map((item, index) => (item.isSold ? "" : <Item key={index} {...item}></Item>))}
    </div>
  );
};

const BottomNav = () => {
  return (
    <div className={styles.bottomNavSection}>
      <div className={styles.bottomNavSection__element}>
        <img src="./imgs/home.svg" alt="" />
        <div className={styles.bottomNavSection__element__text}>홈</div>
      </div>
      <div className={styles.bottomNavSection__element}>
        <img src="./imgs/news.svg" alt="" />
        <div className={styles.bottomNavSection__element__text}>동네생활</div>
      </div>
      <div className={styles.bottomNavSection__element}>
        <img src="./imgs/location.svg" alt="" />
        <div className={styles.bottomNavSection__element__text}>내 근처</div>
      </div>
      <div className={styles.bottomNavSection__element}>
        <img src="./imgs/chats.svg" alt="" />
        <div className={styles.bottomNavSection__element__text}>채팅</div>
      </div>
      <div className={styles.bottomNavSection__element}>
        <img src="./imgs/person.svg" alt="" />
        <div className={styles.bottomNavSection__element__text}>나의 당근</div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className={styles.contents}>
      <Header></Header>
      <Content></Content>
      <img className={styles.plusButton} src="./imgs/plus-button.svg" alt="" />
      <BottomNav />
    </div>
  );
};

export default Home;
