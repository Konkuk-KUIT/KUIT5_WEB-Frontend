import React from "react";
import { useState } from "react";
import OrderBar from "../components/OrderBar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import {
  Top,
  Back,
  MarketList,
  Market,
  StoreInfo,
  CategoryImg,
  StoreTitle,
  StoreSubTitle,
} from "../styles/StoresStyles";
import { Title } from "../styles/HomeStyles";

const Stores = () => {
  const navigate = useNavigate();
  const { posts, loading, addPost, updatePost, deletePost } = usePosts();


  const initialForm = {
    name: "",
    rank: "",
    rating: "",
    reviewCount: "",
    deliveryTime: "",
    deliveryFee: ""
  };
  const [form, setForm] = useState(initialForm);

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState(initialForm);

  if (loading) return <p>불러오는 중...</p>;

  const handleFormChange = (e, isEdit = false) => {
    const { name, value } = e.target;
    if (isEdit) {
      setEditForm((f) => ({ ...f, [name]: value }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleAdd = () => {
    addPost(form);
    setForm(initialForm);
  };

  const startEdit = (post) => {
    setEditingId(post.id);
    setEditForm({
      name: post.name,
      rank: post.rank,
      rating: post.rating,
      reviewCount: post.reviewCount,
      deliveryTime: post.deliveryTime,
      deliveryFee: post.deliveryFee
    });
  };

  const handleSave = () => {
    updatePost(editingId, editForm);
    setEditingId(null);
  };

  const cancelEdit = () => setEditingId(null);

  const handleDelete = (id) => deletePost(id);



  return (
    <div>
      <Top>
        <Back onClick={() => navigate(-1)}>
          <img src="/images/categories/back.svg" alt="뒤로가기" />
        </Back>
      </Top>
      <Title>샐러드</Title>
      <MarketList>
        {posts.map((post) => (
          <Market key={post.id}>
            {editingId === post.id ? (
            <>
              <input name="name" value={editForm.name} onChange={e => handleFormChange(e, true)} />
              <input name="rank" value={editForm.rank} onChange={e => handleFormChange(e, true)} />
              <input name="rating" value={editForm.rating} onChange={e => handleFormChange(e, true)} />
              <input name="reviewCount" value={editForm.reviewCount} onChange={e => handleFormChange(e, true)} />
              <input name="deliveryTime" value={editForm.deliveryTime} onChange={e => handleFormChange(e, true)} />
              <input name="deliveryFee" value={editForm.deliveryFee} onChange={e => handleFormChange(e, true)} />
              <button onClick={handleSave}>저장</button>
              <button onClick={cancelEdit}>취소</button>
            </>
          ) : (
            <>
            <Link
              key={post.name}
              to={post.path}
              className="post-item"
            >
              <CategoryImg src={post.img} alt={post.name} />
              <StoreInfo>
                {post.rank && <StoreTitle>{post.rank}위</StoreTitle>}

                <StoreTitle>{post.name}</StoreTitle>
                <StoreSubTitle>
                  ⭐ {post.rating} ({post.reviewCount})
                </StoreSubTitle>
                <StoreSubTitle>
                  {post.deliveryTime} · 배달비 {post.deliveryFee}
                </StoreSubTitle>
              </StoreInfo>
            </Link>
            <button onClick={() => startEdit(post)}>수정</button>
            <button onClick={() => handleDelete(post.id)}>삭제</button>
            </>
          )}
          </Market>
        ))}
      </MarketList>


      
      
<div style={{ marginTop: 24 }}>
    <h3>새 가게 추가</h3>
    <input name="name"         value={form.name}        onChange={handleFormChange} placeholder="가게 이름" />
    <input name="rank"         value={form.rank}        onChange={handleFormChange} placeholder="랭크" />
    <input name="rating"       value={form.rating}      onChange={handleFormChange} placeholder="평점" />
    <input name="reviewCount"  value={form.reviewCount} onChange={handleFormChange} placeholder="리뷰개수" />
    <input name="deliveryTime" value={form.deliveryTime} onChange={handleFormChange} placeholder="배달시간" />
    <input name="deliveryFee"  value={form.deliveryFee} onChange={handleFormChange} placeholder="배달비" />
    <button onClick={handleAdd}>추가</button>
    <OrderBar />
    </div>

    </div>
  );
};

export default Stores;
