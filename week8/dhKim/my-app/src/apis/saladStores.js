const API_URL = "http://localhost:4000/saladStores";

export const getSaladStores = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("불러오기 실패!!");
  return res.json();
};