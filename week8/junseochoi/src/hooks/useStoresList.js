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

  return { storesList };
};
