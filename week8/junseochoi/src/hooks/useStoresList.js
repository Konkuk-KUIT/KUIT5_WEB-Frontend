import { useEffect, useState } from "react";

const API_URL = "http://localhost:3001/Stores";

export const useStoresList = () => {
  const [storesList, setStoresList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setStoresList(data);
      } catch (err) {
        console.error("데이터 가져오기 실패", err);
      }
    };

    fetchData();
  }, []);

  const addStoresList = async (grade, storeName, rating, delivery) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Grade: grade,
        StoreName: storeName,
        Rating: rating,
        Delivery: delivery,
      }),
    });

    const newStoresList = await res.json();
    setStoresList((prev) => [...prev, newStoresList]);
  };

  const deleteStoresList = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("삭제 실패");

      setStoresList((prev) => prev.filter((store) => store.id !== id));
    } catch (err) {
      console.error("가게 삭제 실패:", err);
      alert("가게 삭제에 실패했습니다.");
    }
  };

  const updateStoresList = async (
    id,
    editGrade,
    editStoreName,
    editRating,
    editDelivery
  ) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          Grade: editGrade,
          StoreName: editStoreName,
          Rating: editRating,
          Delivery: editDelivery,
        }),
      });

      if (!res.ok) throw new Error("수정 실패");

      const newStoresList = await res.json();
      console.log("업데이트된 항목:", newStoresList);
      setStoresList((prev) =>
        prev.map((store) => (store.id === id ? newStoresList : store))
      );
    } catch (err) {
      console.error("가게 수정 실패:", err);
      alert("가게 수정에 실패했습니다.");
    }
  };

  return { storesList, addStoresList, deleteStoresList, updateStoresList };
};
