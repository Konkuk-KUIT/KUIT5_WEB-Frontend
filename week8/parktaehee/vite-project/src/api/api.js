const API_URL = "http://localhost:3001";

export const getFoodCategories = async () => {
  const res = await fetch(`${API_URL}/foodCategories`);
  if (!res.ok) throw new Error("불러오기 실패");
  return await res.json();
};

export const getStoreList = async () => {
  const res = await fetch(`${API_URL}/storeList`);
  if (!res.ok) throw new Error("가게 정보 불러오기 실패");
  return await res.json();
};

export const getSaladMenu = async () => {
  const res = await fetch(`${API_URL}/saladMenu`);
  if (!res.ok) throw new Error("샐러드 메뉴 불러오기 실패");
  return await res.json();
};

export const createStore = async (storeData) => {
  const res = await fetch(`${API_URL}/storeList`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(storeData),
  });

  if (!res.ok) throw new Error("가게 추가 실패");
  return await res.json();
};

export const deleteStore = async (id) => {
  const res = await fetch(`${API_URL}/storeList/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("삭제 실패");
};

export const updateStore = async (id, updatedData) => {
  const res = await fetch(`${API_URL}/storeList/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });
  if (!res.ok) throw new Error("수정 실패");
  return await res.json();
};
