import React from "react";
import { saladMenus } from "../../models/saladMenus";
import MenuItem from "./MenuItem";
import styles from "./MenuList.module.scss";

export type menuDataType = {
  name: string;
  price: number;
  ingredients: string[];
  isBest: boolean;
};

const MenuList = () => {
  return (
    <div className={styles.list}>
      <div className={styles.list__head}>샐러드</div>
      <div className={styles.list__body}>
        {saladMenus.map((item, index) => {
          return <MenuItem key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default MenuList;
