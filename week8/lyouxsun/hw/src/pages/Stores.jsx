import React, { useState } from "react";
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
    handleEdit,
    handleCancel,
    updateStore,
    deleteStore,
    addStore,
  } = useStores();
  const [showAddForm, setShowAddForm] = useState(false);

  const handleClick = () => {
    navigate("/");
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    addStore(form);
    setShowAddForm(false);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateStore(editingId, form);
    handleCancel();
  };

  if (loading) return <p>가게 목록을 불러오는 중입니다...</p>;

  return (
    <>
      <GoBack onClick={handleClick} />
      <S.Header>
        <Title value="Stores" />
      </S.Header>

      {showAddForm ? (
        <S.EditForm as="form" onSubmit={handleAddSubmit}>
          <S.Input
            type="text"
            name="Grade"
            placeholder="등급 ex: 1위 / 공백 가능"
            value={form.Grade}
            onChange={handleChange}
          />
          <S.Input
            type="text"
            name="StoreName"
            placeholder="가게 이름"
            value={form.StoreName}
            onChange={handleChange}
          />
          <S.Input
            type="text"
            name="Rating"
            placeholder="평점 ex: 4.8"
            value={form.Rating}
            onChange={handleChange}
          />
          <S.Input
            type="text"
            name="Delivery"
            placeholder="배달 정보 ex: 13~30분 ∙ 배달비 2,000원"
            value={form.Delivery}
            onChange={handleChange}
          />
          <S.ButtonGroup>
            <S.Button type="submit">추가하기</S.Button>
            <S.CancelButton type="button" onClick={() => setShowAddForm(false)}>취소</S.CancelButton>
          </S.ButtonGroup>
        </S.EditForm>
      ) : (
        <>
          <S.StoreListWrapper>
            {stores.map((item) => (
              <S.StoreItem key={item.id}>
                <S.StoreContent>
                  <StoreList
                    Grade={item.Grade}
                    StoreName={item.StoreName}
                    Rating={item.Rating}
                    Delivery={item.Delivery}
                    isEditing={editingId === item.id}
                    form={form}
                    onChange={handleChange}
                    onSubmit={(e) => handleEditSubmit(e, item.id)}
                    onCancel={handleCancel}
                  />
                  <S.ButtonGroup>
                  <S.Button onClick={() => { setShowAddForm(false); handleEdit(item); }}>수정</S.Button>                    
                  <S.Button onClick={() => deleteStore(item.id)}>삭제</S.Button>
                  </S.ButtonGroup>
                </S.StoreContent>
              </S.StoreItem>
            ))}
          </S.StoreListWrapper>
          <S.AddButton onClick={() => {
            setShowAddForm(true);
            if (form.Grade !== "" || form.StoreName !== "" || form.Rating !== "" || form.Delivery !== "") {
              handleCancel();
            }
          }}>가게 추가하기</S.AddButton>
        </>
      )}

      <BottomOrderBar />
    </>
  );
};

export default Stores;