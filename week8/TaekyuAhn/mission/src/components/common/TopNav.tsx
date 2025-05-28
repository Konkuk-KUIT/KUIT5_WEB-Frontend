import React from "react";
import styles from "./TopNav.module.scss";
import { useNavigate } from "react-router-dom";

type Props = {
  text?: string;
  clickHandler?: () => void;
};

const TopNav = ({ text, clickHandler }: Props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.navBar}>
      <img
        className={styles.navBar__backArrow}
        src="/imgs/left-chevron.svg"
        alt="왼쪽 화살표 이미지"
        onClick={() => navigate(-1)}
      />
      <div onClick={clickHandler} className={styles.navBar__text}>
        {text}
      </div>
    </div>
  );
};

export default TopNav;
