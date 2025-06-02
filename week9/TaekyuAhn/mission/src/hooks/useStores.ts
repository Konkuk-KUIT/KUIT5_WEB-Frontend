import { useEffect, useState } from "react";
import { storeDataType } from "../components/stores/StoresList";

const API_URL = "http://localhost:3001/stores";

export const useStores = () => {
  const [stores, setStores] = useState<storeDataType[]>([]);
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

  const addStore = async (storeItem: storeDataType) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(storeItem),
    });

    if (!res.ok) throw new Error("아이템 추가 실패");

    const newStore = await res.json();
    setStores((prev) => [...prev, newStore]);
  };

  const patchStore = async (storeItem: storeDataType) => {
    const res = await fetch(`${API_URL}/${storeItem.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(storeItem),
    });

    if (!res.ok) throw new Error("업데이트 실패");

    const updatedStore = await res.json();
    setStores((prev) => prev.map((item) => (item.id === updatedStore.id ? updatedStore : item)));
  };

  const deleteStore = async (id: string) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error("삭제 실패");
    setStores((prev) => prev.filter((item) => item.id !== id));
  };

  return { stores, loading, addStore, patchStore, deleteStore };
};
