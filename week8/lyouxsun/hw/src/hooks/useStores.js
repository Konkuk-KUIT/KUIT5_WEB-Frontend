import { useState, useEffect } from "react";

const API_URL = "http://localhost:3001/stores";

export const useStores = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setStores(data);
      } catch (err) {
        console.error("Stores 불러오기 실패:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  const getNextId = () => {
    if (stores.length === 0) return 1;
    return Math.max(...stores.map(store => store.id)) + 1;
  };

  const addStore = async (store) => {
    try {
      const newStore = {
        ...store,
        id: getNextId()
      };

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStore),
      });
      const added = await res.json();
      setStores((prev) => [...prev, added]);
    } catch (err) {
      console.error("가게 추가 실패:", err);
    }
  };

  return {
    stores,
    loading,
    addStore,
  };
};