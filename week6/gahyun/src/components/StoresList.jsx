import React from "react";
import StoresDetail from "./StoresDetail";
import { StoresData } from "../models/stores";

const StoresList = () => {
  return (
    <div>
      {StoresData.map((stores) => (
        <StoresDetail key={stores.name} stores={stores} />
      ))}
    </div>
  );
};

export default StoresList;
