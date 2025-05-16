import React from "react";
import { saladStores } from "../../models/saladStores";
import StoreItem from "./StoreItem";

export type storeDataType = {
  rank: number | null;
  name: string;
  rating: number;
  reviews: number;
  deliveryTime: string;
  deliveryFee: string;
};

const StoresList = () => {
  return (
    <div>
      {saladStores.map((item, index) => {
        return <StoreItem key={index} data={item} />;
      })}
    </div>
  );
};

export default StoresList;
