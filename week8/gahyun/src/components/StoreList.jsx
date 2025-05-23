import React, { useEffect, useState } from "react";
import StoreDetail from "./StoreDetail";
import AddStoreForm from "./AddStoreForm";

const StoreList = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/store")
      .then((res) => res.json())
      .then((data) => {
        console.log("데이터 확인:", data);
        setStores(data);
      })
      .catch((err) => console.error("가게 데이터 불러오기 실패:", err));
  }, []);

  return (
    <div>
      <div>
        {stores.map((store) => (
          <StoreDetail key={store.id} store={store} />
        ))}
      </div>
      <AddStoreForm />
    </div>
  );
};

export default StoreList;
