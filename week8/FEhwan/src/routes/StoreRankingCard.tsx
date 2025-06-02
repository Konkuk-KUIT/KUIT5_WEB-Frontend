import styled from "styled-components";
import { useState } from "react";
import type { storeList } from "../../types/types";

interface StoreRankingCardProps {
  store: storeList;
  onDelete: (id: number) => void;
  onEdit: (id: number, newName: string) => void;
}

const Wrapper = styled.div`
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const Sub = styled.div`
  font-size: 14px;
  color: gray;
`;

const Buttons = styled.div`
  display: flex;
  gap: 4px;
`;

const EditInput = styled.input`
  margin-top: 4px;
  font-size: 14px;
`;

const StoreRankingCard = ({ store, onDelete, onEdit }: StoreRankingCardProps) => {
  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState(store.name);

  const handleEditConfirm = () => {
    onEdit(store.id, editedName);
    setEditMode(false);
  };

  return (
    <Wrapper>
      <Info>
        <Name>{store.name}</Name>
        <Sub>
          ⭐ {store.rating.toFixed(1)} ({Math.floor(Math.random() * 3000) + 1000})<br />
          {store.time} · 배달비 {store.deliveryFee}
        </Sub>
        {editMode && (
          <div>
            <EditInput
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            <button onClick={handleEditConfirm}>✔</button>
          </div>
        )}
      </Info>
      <Buttons>
        <button onClick={() => onDelete(store.id)}>❌</button>
        <button onClick={() => setEditMode(!editMode)}>✏️</button>
      </Buttons>
    </Wrapper>
  );
};

export default StoreRankingCard;
