import React, { useState } from "react";
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
          <Market>
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
          </Market>
        ))}
      </MarketList>
      {loading ? (
    <p>불러오는 중…</p>
  ) : (
    <MarketList>
     {posts.map((post) => (
        <Market key={post.id}>
          <Link to={post.path} className="category-item">
            <CategoryImg src={post.img} alt={post.name} />
            <StoreInfo>
              {post.rank && <StoreTitle>{post.rank}위</StoreTitle>}
              <StoreTitle>{post.name}</StoreTitle>
              <StoreSubtitle>
                ⭐ {post.rating} ({post.reviewCount})
              </StoreSubtitle>
              <StoreSubtitle>
                {post.deliveryTime} · 배달비 {post.deliveryFee}
              </StoreSubtitle>
            </StoreInfo>
          </Link>
        </Market>
      ))}
    </MarketList>
  )}
<div style={{ marginTop: 24 }}>
    <h3>새 가게 추가</h3>
    <input
      value={newName}
      onChange={(e) => setNewName(e.target.value)}
      placeholder="가게 이름"
    />
    <button
      onClick={() => {
        if (!newName.trim()) return;
        addPost({
          name: newName,
          rank: posts.length + 1,
          rating: 0,
          reviewCount: 0,
          deliveryTime: "0분",
          deliveryFee: "0원",
          path: `/store/${posts.length + 1}`,
          img: "/images/categories/Frame.svg",
        });
        setNewName("");
      }}
    >
      추가
    </button>
    <OrderBar />
    </div>

    </div>
  );
};

export default Stores;
