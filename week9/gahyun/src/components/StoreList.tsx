import React, { useEffect, useState } from "react";
import StoreDetail from "./StoreDetail";
import AddStoreForm from "./AddStoreForm";

interface Item {
  id: string;
  img: string;
  rank: string;
  name: string;
  rating: number;
  reviews: number;
  deliveryTime: string;
  deliveryFee: number;
}

const StoreList = () => {
  const [stores, setStores] = useState<Item[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/store")
      .then((res) => res.json())
      .then((data: Item[]) => {
        console.log("데이터 확인:", data);
        setStores(data);
      })
      .catch((err) => console.error("가게 데이터 불러오기 실패: ", err));
  }, []);

  // const [stores, setStores] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3001/store")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("데이터 확인:", data);
  //       setStores(data);
  //     })
  //     .catch((err) => console.error("가게 데이터 불러오기 실패:", err));
  // }, []);

  return (
    <div>
      <div>
        {stores.map((item: Item) => (
          <div key={item.id}>
            <StoreDetail item={item} />
          </div>
        ))}
      </div>
      <AddStoreForm />
    </div>
  );
};

export default StoreList;
