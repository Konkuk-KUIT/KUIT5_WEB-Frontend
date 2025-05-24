import React from "react";
import { foodCategory } from "../../models/stores";
import FoodCategoryCard from "./FoodCategoryCard";
import styles from "./FoodCategoryBox.module.scss";

const FoodCategoryBox = () => {
  return (
    <div className={styles.grid}>
      {foodCategory.map((item, index) => {
        return (
          <FoodCategoryCard key={index} name={item.name} imgLink={item.imgLink}></FoodCategoryCard>
        );
      })}
    </div>
  );
};

export default FoodCategoryBox;
