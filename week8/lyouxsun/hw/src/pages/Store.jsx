import React from "react";
import * as S from "./Stores.styles";
import BottomOrderBar from "../components/BottomOrderBar";
import Title from "../components/Title";
import StoreList from "../components/StoreList";
import GoBack from "../components/GoBack";
import { useNavigate } from "react-router-dom";
import { useStores } from "../hooks/useStores";

const Stores = () => {
  const navigate = useNavigate();
  const {
    stores,
    loading,
    newStore,
    handleInputChange,
    addStore,
  } = useStores();

  const handleClick = () => {
    navigate("/");
  };

  if (loading) return <p>가게 목록을 불러오는 중입니다...</p>;

  return (
    <>
      <GoBack onClick={handleClick} />
      <S.Header>
        <Title value="샐러드" />
      </S.Header>

      {stores.map((item, index) => (
        <StoreList
          key={index}
          Grade={item.Grade}
          StoreName={item.StoreName}
          Rating={item.Rating}
          Delivery={item.Delivery}
        />
      ))}

      <BottomOrderBar />

      <div style={{ padding: "1rem" }}>
        <input
          type="text"
          name="Grade"
          placeholder="등급 예: 1위 / 공백 가능"
          value={newStore.Grade}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="StoreName"
          placeholder="가게 이름"
          value={newStore.StoreName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="Rating"
          placeholder="평점 예: 4.8 (112)"
          value={newStore.Rating}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="Delivery"
          placeholder="배달 정보 예: 13~30분 ∙ 배달비 2,000원"
          value={newStore.Delivery}
          onChange={handleInputChange}
        />
        <button onClick={addStore}>가게 추가</button>
      </div>
    </>
  );
};

export default Stores;