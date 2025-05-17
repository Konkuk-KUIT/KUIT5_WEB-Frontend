import { useEffect, useState } from "react";
import { storeDataType } from "../components/stores/StoresList";

const API_URL = "http://localhost:3001/stores";

export const useStores = () => {
  const [stores, setStores] = useState<storeDataType[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setStores(data);
      } catch (err) {
        console.error("불러오기 실패", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  });

  //   const addStore = async (title: string) => {
  //     const res = await fetch(API_URL, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ title }),
  //     });

  //     const newStore = await res.json();
  //   };

  return { stores, loading };
};
