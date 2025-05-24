// 데이터 관리의 책임을 갖는 파일
import { useState, useEffect } from "react";


const API_URL = "http://localhost:3001/posts";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("불러오기 실패", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  });

  const addPost = async (title) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    const newPost = await res.json();
    setPosts((prev) => [...prev, newPost]);
  };

  return { posts, addPost, loading };
};
