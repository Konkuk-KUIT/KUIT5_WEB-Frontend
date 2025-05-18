import { useEffect, useState } from "react";
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
      } catch (err) {
        console.error("불러오기 실패", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  },[]);

   const addPost = async (newPost) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newPost }),
    });

    const created = await res.json();
    setPosts((prev) => [...prev, created]);
  };

  const updatePost = async (id, updatedData) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    const updatedPost = await res.json();
    setPosts((prev) =>
    prev.map((post) => (post.id === id ? updatedPost : post))
  );

  const deletePost = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  
}; 

  return { posts,loading, addPost,updatePost,deletePost };
};

