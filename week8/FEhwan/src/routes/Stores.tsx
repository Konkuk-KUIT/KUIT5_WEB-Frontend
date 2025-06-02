import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import StoreRankingCard from "../components/stores/StoreRankingCard";
import type { storeList } from "../types/types";

// 스타일 정의
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const CategoryHeader = styled.div`
  padding: 26px 24px;
  overflow-y: auto;
`;

const StoreList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;

const AddBar = styled.div`
  display: flex;
  padding: 12px;
  border-top: 1px solid #ddd;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: sticky;
  bottom: 0;
  background-color: #fff;
`;

const Input = styled.input`
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #3182f6;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
`;

const Stores = () => {
  const [stores, setStores] = useState<storeList[]>([]);
  const [newStoreName, setNewStoreName] = useState("");
  const [searchParams] = useSearchParams();
  const categoryName = searchParams.get("category") || "샐러드";

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
        time: "10분~25분",
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
    <Wrapper>
      <CategoryHeader>
        <h2>{categoryName}</h2>
        <StoreList>
          {stores.map((store) => (
            <StoreRankingCard
              key={store.id}
              store={store}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </StoreList>
      </CategoryHeader>

      <AddBar>
        <Input
          placeholder="새 가게 이름 입력"
          value={newStoreName}
          onChange={(e) => setNewStoreName(e.target.value)}
        />
        <Button onClick={handleAddStore}>추가하기</Button>
      </AddBar>
    </Wrapper>
  );
};

export default Stores;
