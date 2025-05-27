import React from "react";
import styles from "./MainText.module.scss";

type Props = {
  text: string;
  style: string;
};

const MainText = ({ text, style }: Props) => {
  return (
    <div className={`${styles.box} ${style === "large" ? styles.large : styles.medium}`}>
      {text}
    </div>
  );
};

export default MainText;
