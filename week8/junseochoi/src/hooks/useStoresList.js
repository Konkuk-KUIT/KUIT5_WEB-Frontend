import { useEffect, useState } from "react";

const API_URL = "http://localhost:3001/Stores";

export const useStoresList = () => {
  const [storesList, setStoresList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setStoresList(data);
      } catch (err) {
        console.error("데이터 가져오기 실패", err);
      }
    };

    fetchData();
  }, []);

  const addStoresList = async (grade, storeName, rating, delivery) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Grade: grade,
        StoreName: storeName,
        Rating: rating,
        Delivery: delivery,
      }),
    });

    const newStoresList = await res.json();
    setStoresList((prev) => [...prev, newStoresList]);
  };

  return { storesList, addStoresList };
};
