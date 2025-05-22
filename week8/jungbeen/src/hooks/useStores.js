import { useEffect, useState } from "react";

const API_URL = "http://localhost:3001/stores";

export const useStores = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setStores(data);
    } catch (e) {
      console.error("가게 정보 호출 실패", e);
    } finally {
      setLoading(false);
    }
  };

  const addStore = async (name, rideTip, paymethod, minOrder) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        rating: 0.0,
        ratingTotal: 0,
        eta: "30분",
        rideTip,
        paymethod,
        minOrder,
      }),
    });

    if (!res.ok) throw new Error("추가 실패");
    const newData = await res.json();
    setStores((prev) => [...prev, newData]);
  };

  const editStore = async (storeId, name, rideTip) => {
    const res = await fetch(`${API_URL}/${storeId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        rideTip,
      }),
    });

    if (!res.ok) throw new Error("수정 실패");

    const newData = await res.json();
    setStores((prev) =>
      prev.map((obj) => (obj.id === storeId ? newData : obj))
    );
  };

  const deleteStore = async (storeId) => {
    const res = await fetch(`${API_URL}/${storeId}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("삭제 실패");

    setStores((prev) => prev.filter((obj) => obj.id !== storeId));
  };

  return { stores, loading, addStore, editStore, deleteStore };
};
