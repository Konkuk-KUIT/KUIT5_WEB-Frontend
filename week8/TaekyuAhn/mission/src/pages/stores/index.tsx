import React from "react";
import MainText from "../../components/home/MainText";
import styles from "./index.module.scss";
import StoresList from "../../components/stores/StoresList";
import TopNav from "../../components/common/TopNav";
import StoreAddBar from "../../components/common/StoreAddBar";

const index = () => {
  return (
    <div className={styles.contents}>
      <TopNav />
      <MainText text="샐러드" style="large" />
      <StoresList />
      <StoreAddBar />
    </div>
  );
};

export default index;
