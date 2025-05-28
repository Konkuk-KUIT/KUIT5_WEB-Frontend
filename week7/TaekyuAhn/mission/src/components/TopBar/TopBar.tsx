import React, { useState } from "react";
import styles from "./TopBar.module.scss";

type Props = {
  correctCount: number;
  victory: boolean;
};

const TopBar = ({ correctCount, victory }: Props) => {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbar__rightCount}>맞힌 갯수: {correctCount}</div>
      <div className={styles.topbar__victory}>{victory ? "승리하였습니다!" : ""}</div>
    </div>
  );
};

export default TopBar;
