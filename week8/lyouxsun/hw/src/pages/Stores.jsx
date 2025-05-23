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
    form,
    editingId,
    handleChange,
    handleSubmit,
    handleEdit,
    handleCancel,
    deleteStore,
  } = useStores();

  const handleDelete = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      deleteStore(id);
    }
  };

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

      {stores.map((item) => (
        <div key={item.id} style={{ padding: "1rem" }}>
          {editingId === item.id ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <input
                type="text"
                name="Grade"
                placeholder="등급 ex: 1위 / 공백 가능"
                value={form.Grade}
                onChange={handleChange}
              />
              <input
                type="text"
                name="StoreName"
                placeholder="가게 이름"
                value={form.StoreName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="Rating"
                placeholder="평점 ex: 4.8"
                value={form.Rating}
                onChange={handleChange}
              />
              <input
                type="text"
                name="Delivery"
                placeholder="배달 정보 ex: 13~30분 ∙ 배달비 2,000원"
                value={form.Delivery}
                onChange={handleChange}
              />
              <div style={{ display: 'flex', gap: '5px' }}>
                <button onClick={handleSubmit}>수정 완료</button>
                <button onClick={handleCancel}>취소</button>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <StoreList
                Grade={item.Grade}
                StoreName={item.StoreName}
                Rating={item.Rating}
                Delivery={item.Delivery}
              />
              <div style={{ display: 'flex', gap: '5px' }}>
                <button onClick={() => handleEdit(item)}>수정</button>
                <button onClick={() => handleDelete(item.id)}>삭제</button>
              </div>
            </div>
          )}
        </div>
      ))}

      <BottomOrderBar />

      <div style={{ padding: "1rem" }}>
        <input
          type="text"
          name="Grade"
          placeholder="등급 ex: 1위 / 공백 가능"
          value={form.Grade}
          onChange={handleChange}
        />
        <input
          type="text"
          name="StoreName"
          placeholder="가게 이름"
          value={form.StoreName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Rating"
          placeholder="평점 ex: 4.8"
          value={form.Rating}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Delivery"
          placeholder="배달 정보 ex: 13~30분 ∙ 배달비 2,000원"
          value={form.Delivery}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>가게 추가</button>
      </div>
    </>
  );
};

export default Stores;