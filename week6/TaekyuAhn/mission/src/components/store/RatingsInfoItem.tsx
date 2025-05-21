import React from "react";
import styles from "./RatingsInfoItem.module.scss";

type Props = {
  rating: number;
  reviewNum: number;
};

const RatingsInfoItem = ({ rating, reviewNum }: Props) => {
  const formattedReviewNum = reviewNum.toLocaleString();
  return (
    <div className={styles.contents}>
      <div className={styles.contents__rating}>
        <img src="/imgs/yellow-star.svg" alt="노란 별 아이콘" />
        &nbsp;
        {rating}
      </div>
      <div className={styles.contents__reviewNum}>리뷰 {formattedReviewNum}</div>
    </div>
  );
};

export default RatingsInfoItem;
