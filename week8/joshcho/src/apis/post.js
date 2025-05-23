const API_URL = "http://localhost:3001/post";

export const getPosts = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("데이터를 불러오는데 실패했습니다.");
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

  if (!res.ok) throw new Error("게시물 추가에 실패했습니다.");
  return await res.json();
};
