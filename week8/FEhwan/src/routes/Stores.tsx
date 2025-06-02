import { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import StoreRankingCard from "../components/stores/StoreRankingCard";
import type { storeList } from "../types/types";

const CategoryHeader = styled.div`
  width: 390px;
  height: 630px;
  overflow-y: auto;
  padding: 26px 24px;
`;

const Stores = () => {
  const [stores, setStores] = useState<storeList[]>([]);
  const [newStoreName, setNewStoreName] = useState("");
  const location = useLocation();
  const categoryName = location.state?.categoryName || "샐러드";

  const fetchStores = async () => {
    const res = await fetch("http://localhost:3001/stores");
    const data = await res.json();
    setStores(data);
  };

  useEffect(() => {
    fetchStores();
  }, []);

  const handleAddStore = async () => {
    if (!newStoreName.trim()) return;
    await fetch("http://localhost:3001/stores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newStoreName,
        rating: 4.5,
        time: "13분~30분",
        deliveryFee: "2,000원",
      }),
    });
    setNewStoreName("");
    fetchStores();
  };

  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:3001/stores/${id}`, {
      method: "DELETE",
    });
    fetchStores();
  };

  const handleEdit = async (id: number, newName: string) => {
    await fetch(`http://localhost:3001/stores/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName }),
    });
    fetchStores();
  };

  return (
    <CategoryHeader>
      <h2>{categoryName}</h2>
      {stores.map((store) => (
        <StoreRankingCard
          key={store.id}
          store={store}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}

      <div style={{ marginTop: "20px" }}>
        <input
          value={newStoreName}
          onChange={(e) => setNewStoreName(e.target.value)}
          placeholder="새 가게 이름 입력"
        />
        <button onClick={handleAddStore}>추가하기</button>
      </div>
    </CategoryHeader>
  );
};

export default Stores;
