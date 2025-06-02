import { useEffect, useState } from "react";
import type { postType } from "../App";

const API_URL = "http://localhost:3001/posts";

export const usePosts = () => {
  const [posts, setPosts] = useState<postType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error("불러오기 실패", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  });

  const addPost = async (title: string) => {
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
