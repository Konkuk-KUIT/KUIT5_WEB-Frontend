import React from "react";
import styles from "./FoodCategoryCard.module.scss";
import { Link } from "react-router-dom";

type Props = {
  name: string;
  imgLink: string;
};

const FoodCategoryCard = ({ name, imgLink }: Props) => {
  return (
    <Link to="/store">
      <div className={styles.card}>
        <div className={styles.card__icon}>
          <img src={imgLink} alt="음식 아이콘 이미지" />
        </div>
        <div className={styles.card__label}>{name}</div>
      </div>
    </Link>
  );
};

export default FoodCategoryCard;
