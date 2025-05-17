import React from "react";
import { saladStores } from "../../models/saladStores";
import StoreItem from "./StoreItem";
import { useStores } from "../../hooks/useStores";

export type storeDataType = {
  rank: number | null;
  name: string;
  rating: number;
  reviews: number;
  deliveryTime: string;
  deliveryFee: string;
};

const StoresList = () => {
  const { stores, loading } = useStores();
  return (
    <div>
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
