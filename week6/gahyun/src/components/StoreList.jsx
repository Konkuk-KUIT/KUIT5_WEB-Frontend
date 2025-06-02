import React from "react";
import StoreDetail from "./StoreDetail";
import { StoreData } from "../models/store";

const StoreList = () => {
  return (
    <div>
      {StoreData.map((store) => (
        <StoreDetail key={store.name} store={store} />
      ))}
    </div>
  );
};

export default StoreList;
