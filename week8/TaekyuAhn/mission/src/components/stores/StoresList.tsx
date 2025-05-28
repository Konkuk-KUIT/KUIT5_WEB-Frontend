import React from "react";
import { saladStores } from "../../models/saladStores";
import StoreItem from "./StoreItem";
import { useStores } from "../../hooks/useStores";
import styles from "./StoresList.module.scss";

export type storeDataType = {
  id?: string;
  rank: number | undefined;
  name: string;
  rating: number;
  reviews: number;
  deliveryTime: string;
  deliveryFee: string;
};

const StoresList = () => {
  const { stores, loading } = useStores();
  return (
    <div className={styles.contents}>
      {loading
        ? "로딩 중"
        : stores &&
          stores.map((item, index) => {
            return <StoreItem key={index} data={item} />;
          })}
    </div>
  );
};

export default StoresList;
