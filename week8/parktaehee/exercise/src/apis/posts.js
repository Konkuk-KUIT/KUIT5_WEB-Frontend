const API_URL = "http://localhost:3001/posts";

export const getPosts = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("불러오기 실패");
  return await res.json();
};

export const createPost = async (title) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  if (!res.ok) throw new Error("추가 실패");
  return await res.json();
};
