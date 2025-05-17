import React from "react";
import StoreInfoBox from "../../components/store/StoreInfoBox";
import TopNav from "../../components/common/TopNav";
import MenuList from "../../components/store/MenuList";
import styles from "./index.module.scss";
import BottomActionBar from "../../components/common/BottomActionBar";

const index = () => {
  return (
    <div className={styles.contents}>
      <TopNav />
      <StoreInfoBox />
      <MenuList />
      <BottomActionBar />
    </div>
  );
};

export default index;
