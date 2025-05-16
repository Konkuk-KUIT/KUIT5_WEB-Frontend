import React from "react";
import MainText from "../../components/home/MainText";
import styles from "./index.module.scss";
import StoresList from "../../components/stores/StoresList";
import TopNav from "../../components/common/TopNav";
import BottomActionBar from "../../components/common/BottomActionBar";

const index = () => {
  return (
    <div className={styles.contents}>
      <TopNav />
      <MainText text="샐러드" style="large" />
      <StoresList />
      <BottomActionBar />
    </div>
  );
};

export default index;
