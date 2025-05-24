import React from "react";
import FoodCategoryBox from "../../components/home/FoodCategoryBox";
import styles from "./index.module.scss";
import MainText from "../../components/home/MainText";
import BottomActionBar from "../../components/common/BottomActionBar";

const Home = () => {
  return (
    <div className={styles.contents}>
      <div className={styles.contents__textArea}>
        <MainText text={"오늘은 무엇을 먹을까요?"} style={"large"} />
        <MainText text={"한남중앙로 40길 (한남 빌리지)(으)로 배달 >"} style={"medium"} />
      </div>
      <FoodCategoryBox />
      <BottomActionBar />
    </div>
  );
};

export default Home;
